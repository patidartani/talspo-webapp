import { useState, useEffect } from "react";
import { fetchJobPosts, BASE_URL } from "../../apiService";
import "./Opportunity.css";
import NavbarContainer from "../../pages/NavbarCom/NavBarContainer";
import Footer from "../../pages/Footer/Footer";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import iconSearch from "/assets/images/logo-icon.png";
import Loading from "../../pages/loading/Loading";
import { formatDistanceToNow } from "date-fns";
import opt1Img from "/assets/images/opt1.png";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import FooterTop from "../../pages/Footer/FooterTop";

const Opportunity = () => {
  const [filterData, setFilterData] = useState({
    job_title: [],
    key_skills: [],
    durations: [],
    job_types: [],
    experiences: [],
    work_from: [],
    locations: [],
  });

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedJobtype, setSelectedJobtype] = useState("");
  const [selectedWorkEnvironment, setSelectedWorkEnvironment] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedSkills, setSelectedSkills] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobTitleSuggestions, setJobTitleSuggestions] = useState([]);

  const experienceOptions = Array.from({ length: 25 }, (_, i) => `${i + 1} Year`);

  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const viewDetailHandler = (id) => {
    navigate(`/view-detail/${id}`);
  };

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const fetchedJobs = await fetchJobPosts();
        setJobs(fetchedJobs);
        setAllJobs(fetchedJobs);
        setLoading(false);
      } catch (error) {
        console.error("Error loading job posts:", error);
        setLoading(false);
      }
    };

    loadJobs();
    fetchFilters();
  }, []);

  useEffect(() => {
    handleFilterChange();
  }, [
    selectedLocation,
    selectedExperience,
    selectedJobtype,
    selectedWorkEnvironment,
    selectedDuration,
    selectedSkills,
    searchInput,
  ]);

  const fetchFilters = async () => {
    try {
      const response = await fetch(`${BASE_URL}/filterdata`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFilterData(data);
    } catch (error) {
      console.error("Error fetching filter data:", error);
    }
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    if (inputValue.length > 0) {
      const filteredTitles = filterData.job_title.filter(title =>
        title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setJobTitleSuggestions(filteredTitles);
    } else {
      setJobTitleSuggestions([]);
    }
  };

  const handleSuggestionClick = (selectedTitle) => {
    setSearchInput(selectedTitle);
    setJobTitleSuggestions([]);

    const filteredJobs = allJobs.filter(job => {
      return job.title.toLowerCase().includes(selectedTitle.toLowerCase());
    });

    setJobs(filteredJobs);
  };

  const handleFilterChange = () => {
    let filteredJobs = [...allJobs];

    if (selectedLocation) {
      filteredJobs = filteredJobs.filter(job => job.location && job.location === selectedLocation);
    }
    // if (selectedExperience) {
    //   filteredJobs = filteredJobs.filter(job => job.experience && job.experience === selectedExperience);
    // }
    if (selectedExperience) {
      filteredJobs = filteredJobs.filter(job =>
        job.experience && parseInt(job.experience) === parseInt(selectedExperience)
      );
    }

    if (selectedJobtype) {
      filteredJobs = filteredJobs.filter(job => job.job_type && job.job_type === selectedJobtype);
    }
    if (selectedWorkEnvironment) {
      filteredJobs = filteredJobs.filter(job => job.work_from && job.work_from === selectedWorkEnvironment);
    }
    if (selectedDuration) {
      filteredJobs = filteredJobs.filter(job => job.duration && job.duration === selectedDuration);
    }
    if (selectedSkills) {
      filteredJobs = filteredJobs.filter(job => job.key_skills && job.key_skills.includes(selectedSkills));
    }

    if (Array.isArray(filterData.job_title) && filterData.job_title.length > 0) {
      filteredJobs = filteredJobs.filter(job =>
        filterData.job_title.some(title =>
          job.title.trim().toLowerCase().includes(title.trim().toLowerCase())
        )
      );
    }

    if (searchInput.trim()) {
      filteredJobs = filteredJobs.filter(job =>
        job.title.trim().toLowerCase().includes(searchInput.trim().toLowerCase())
      );
    }

    setJobs(filteredJobs);
  };

  // ------------------ Sorting Functionality -------------------
  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject("Error fetching location: " + error.message);
          }
        );
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  };

  const handleLatestJobs = () => {
    const sortedJobs = [...jobs].sort((a, b) => {
      const dateA = new Date(a.updated_at || a.created_at);
      const dateB = new Date(b.updated_at || b.created_at);
      return dateB - dateA;
    });
    setJobs(sortedJobs);
  };

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleSortJobsByLocation = async () => {
    try {
      const { latitude, longitude } = await getUserLocation();

      const sortedJobs = [...jobs].map((job) => {
        const jobLatitude = parseFloat(job.latitude);
        const jobLongitude = parseFloat(job.longitude);

        if (!isNaN(jobLatitude) && !isNaN(jobLongitude)) {
          const distance = haversineDistance(latitude, longitude, jobLatitude, jobLongitude);
          return { ...job, distance };
        } else {
          return { ...job, distance: Infinity };
        }
      }).sort((a, b) => a.distance - b.distance);

      setJobs(sortedJobs);
    } catch (error) {
      console.error("Error fetching location or sorting jobs:", error);
    }
  };

  const pageCount = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const currentJobs = jobs.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePageClick = (data) => setCurrentPage(data.selected);

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedExperience("");
    setSelectedJobtype("");
    setSelectedWorkEnvironment("");
    setSelectedDuration("");
  };

  const clearSorting = () => {
    setSelectedSkills("");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavbarContainer />
      <div className="Opportunity-main">
        <div className="opportunity-page">
          <div className="opportunity1">
            <div className="opt-left">
              <h5>Talspo Jobs</h5>
              <p>
                We&apos;re excited to see your interest in helping Talspo build
                a &quot;Talent Collaboration-Based Marketplace Online
                (Real-Time)&quot;. Our goal is to develop the Talent
                Connectivity NEARBY software application using the latest
                technologies, such as Artificial Intelligence (AI), Machine
                Learning (ML), Deep Learning (DL), and Blockchain.
                <strong>
                  *Our technology is protected by Intellectual Property Rights
                  (IPR), with a Patent Granted.
                </strong>
              </p>
              <p>
                If you believe you possess any of the skills listed below, you
                could play a valuable role in helping us create the &quot;Talent
                Discovery NEARBY (Real-Time)&quot; platform. Our team will get
                back to you as soon as you submit your application for any open
                job positions or vacancies mentioned below.
              </p>
            </div>
            <div className="opt-right">
              <img src={opt1Img} alt="" />
            </div>
          </div>
          <div className="opportunity2">
            <h5>Apply Now!</h5>

            {/* Filter Section */}
            <div className="opt2-btm">
              <div className="filter-main-page">

                <div className="Filter-page">
                  <h6>Filters</h6>
                  <p>Please select from the category below</p>
                  <div className="filter-btm">
                    <div className="location">
                      <h4>Location</h4>
                      <div className="location-search">
                        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                          <option value="" disabled>Select Location</option>
                          {filterData.locations.length > 0 ? (
                            filterData.locations.map((loc, index) => (
                              <option key={index} value={loc}>
                                {loc}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>No Locations Available</option>
                          )}

                        </select>
                      </div>

                    </div>

                    <div className="experience">
                      <h4>Experience</h4>
                      <div className="experience-search">
                        <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
                          <option value="" disabled>Select Experience</option>
                          {experienceOptions.length > 0 ? (
                            experienceOptions.map((exp, index) => (
                              <option key={index} value={exp}>
                                {exp}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>No Experience Available</option>
                          )}
                        </select>
                      </div>
                    </div>


                    <div className="job-type">
                      <h4>Job Type</h4>

                      <div className="job-type-search">
                        <select value={selectedJobtype} onChange={(e) => setSelectedJobtype(e.target.value)}>
                          <option value="" disabled>Select Job Type</option>
                          {filterData.job_types.length > 0 ? (
                            filterData.job_types.map((type, index) => (
                              <option key={index} value={type}>
                                {type}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>No Job Type Available</option>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="work-from-home">
                      <h4>Working Environment</h4>
                      <div className="work-search">
                        <select value={selectedWorkEnvironment} onChange={(e) => setSelectedWorkEnvironment(e.target.value)}>
                          <option value="" disabled>Select Work Environment</option>
                          {filterData.work_from.length > 0 ? (
                            filterData.work_from.map((work, index) => (
                              <option key={index} value={work}>
                                {work}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>No Working Environment Available</option>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="duration">
                      <h4>Maximum Duration</h4>
                      <div className="duration-search">
                        <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
                          <option value="" disabled>Select Duration</option>
                          {filterData.durations.length > 0 ? (
                            filterData.durations.map((dur, index) => (
                              <option key={index} value={dur}>
                                {dur}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>No Duration Available</option>
                          )}
                        </select>
                      </div>

                    </div>

                    <div className="clear-all">
                      <span style={{ color: "blue", cursor: "pointer" }} onClick={clearFilters}>
                        Clear all
                      </span>
                    </div>

                  </div>
                </div>

                <div className="filter-sorting">
                  <h6>Sort Jobs</h6>
                  <p>Sort Jobs based on the options given below</p>
                  <div className="sort-btm">
                    <div className="closest">
                      <h4>Find Jobs closest to your location</h4>
                      <div className="location-btn">
                        <button onClick={handleSortJobsByLocation}>
                          Sort Jobs
                        </button>
                      </div>
                    </div>

                    <div className="latest">
                      <h4>Latest Jobs Available</h4>
                      <div className="latest-btn">
                        <button onClick={handleLatestJobs}>Get Latest jobs</button>
                      </div>
                    </div>

                    <div className="skills">
                      <h4>Skills</h4>
                      <div className="skills-search">
                        <select value={selectedSkills} onChange={(e) => setSelectedSkills(e.target.value)}>
                          <option value="" disabled>Select Skills</option>
                          {filterData.key_skills.map((keyskill, index) => (
                            <option key={index} value={keyskill}>
                              {keyskill}
                            </option>
                          ))}
                        </select>

                      </div>
                    </div>

                    <div className="clear-all-sort">
                      <span style={{ color: "blue", cursor: "pointer" }} onClick={clearSorting}>
                        Clear all
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="jobs-page">
                <div className="job-search">
                  <div className="ipt-job">
                    <input
                      type="text"
                      placeholder="Search Jobs..."
                      value={searchInput}
                      onChange={handleSearchChange}
                    />
                    <img src={iconSearch} alt="Search Icon" />
                  </div>

                  <div className="job-selection-list">
                    {filterData.job_title ? (
                      <div className="suggestions-list">
                        {jobTitleSuggestions.length > 0 &&
                          jobTitleSuggestions.map((title, index) => (
                            <div style={{ paddingLeft: "1.3vmax", paddingTop: "0.3vmax", cursor: "pointer" }} key={index} onClick={() => handleSuggestionClick(title)}>
                              {title}
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                </div>
                {currentJobs.length === 0 ? (
                  <div className="no-jobs-message">
                    <p style={{ color: "red" }}>
                      No jobs available at the moment.
                    </p>
                  </div>
                ) : (
                  currentJobs.map((job, index) => (
                    <div className="job-box" key={index}>
                      <h5>{job.title}</h5>
                      <span>{job.key_skills}</span>
                      <div className="deadline">
                        <div className="d-one">
                          <h4>Location</h4>
                          <h6>{job.location}</h6>
                        </div>
                        <div className="d-one">
                          <h4>Experience</h4>
                          <h6>{job.experience}</h6>
                        </div>
                        <div className="d-one">
                          <h4>Salary</h4>
                          <h6>{job.salary}</h6>
                        </div>
                        <div className="d-one">
                          <h4>Duration</h4>
                          <h6>{job.duration}</h6>
                        </div>
                      </div>
                      <div className="last-items">
                        <div className="i-left">
                          <h3>{job.work_from ? job.work_from : "Null"}</h3>
                          <h3>{job.job_type ? job.job_type : "Null"}</h3>
                        </div>
                        <div className="i-right">
                          <button onClick={() => viewDetailHandler(job.id)}>
                            View Details <i className="ri-arrow-right-line"></i>
                          </button>
                        </div>
                      </div>

                      <div className="job-active">
                        <h6> Active {formatDistanceToNow(new Date(job.updated_at), {
                          addSuffix: true,
                        })} </h6>
                      </div>
                    </div>
                  ))
                )}
                <ReactPaginate
                  previousLabel={<RiArrowLeftSLine />}
                  nextLabel={<RiArrowRightSLine />}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"previous-item"}
                  previousLinkClassName={"previous-link"}
                  nextClassName={"next-item"}
                  nextLinkClassName={"next-link"}
                  disabledClassName={"disabled"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default Opportunity;
