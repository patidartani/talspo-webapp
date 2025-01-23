
import { useState, useEffect } from 'react';
import { fetchJobPosts } from '../../apiService';
import "./Opportunity.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer";
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import iconSearch from "/assets/images/talspoIcon.png";
import Loading from "../../pages/loading/Loading";
import { formatDistanceToNow } from 'date-fns';
import opt1Img from "/assets/images/opt1.png";
import { getDistance } from "geolib";

const Opportunity = () => {
  const [filterData, setFilterData] = useState({
    location: [],
    experience: [],
    job_type: [],
    work_from: [],
    duration: [],
    key_skills: [],
    title: []
  });

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedJobtype, setSelectedJobtype] = useState('');
  const [selectedWorkEnvironment, setSelectedWorkEnvironment] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const [selectedTitle, setSelectedTitle] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredTitles, setFilteredTitles] = useState([]);

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobPosts();
      setJobs(fetchedJobs);
      setLoading(false);
    };

    loadJobs();
    fetchFilters();
  }, []);


  //   --------------------------------------sorting functionality----------------------------------------------------------
  const [selectedSkills, setSelectedSkills] = useState([]);

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

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in kilometers
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
      // Get user's current location
      const { latitude, longitude } = await getUserLocation();

      // Sort jobs by distance from user's location
      const sortedJobs = [...jobs].map((job) => {
        const jobLatitude = parseFloat(job.latitude);
        const jobLongitude = parseFloat(job.longitude);

        if (!isNaN(jobLatitude) && !isNaN(jobLongitude)) {
          const distance = haversineDistance(latitude, longitude, jobLatitude, jobLongitude);
          return { ...job, distance };
        } else {
          return { ...job, distance: Infinity };
        }
      }).sort((a, b) => a.distance - b.distance); // Sort jobs based on the distance

      setJobs(sortedJobs); // Update the job list with sorted jobs
    } catch (error) {
      console.error("Error fetching location or sorting jobs:", error);
    }
  };


  // ------------------------------------------------------------------------------------------------------------------------

  const fetchFilters = async (location = "", experience = "", job_type = "", work_from = "", duration = "", key_skills = "", title = "") => {
    try {
      // setLoading(true);
      const queryParam = [
        location ? `location=${encodeURIComponent(location)}` : '',
        experience ? `experience=${encodeURIComponent(experience)}` : '',
        job_type ? `job_type=${encodeURIComponent(job_type)}` : '',
        work_from ? `work_from=${encodeURIComponent(work_from)}` : '',
        duration ? `duration=${encodeURIComponent(duration)}` : '',
        key_skills ? `key_skills=${encodeURIComponent(key_skills)}` : '',
        title ? `title=${encodeURIComponent(title)}` : '',
      ]
        .filter(Boolean)
        .join('&');

      const response = await fetch(`https://srninfotech.com/talspo/admin/api/showcase/search?${queryParam}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Extract unique filter values
      const uniqueLocations = [...new Set(data.data.data.map((item) => item.location).filter((loc) => loc !== null))];
      const uniqueExperience = [...new Set(data.data.data.map((item) => item.experience).filter((exp) => exp !== null))];
      const uniqueJobTypes = [...new Set(data.data.data.map((item) => item.job_type).filter((type) => type !== null))];
      const uniqueWorkFrom = [...new Set(data.data.data.map((item) => item.work_from).filter((work) => work !== null))];
      const uniqueDuration = [...new Set(data.data.data.map((item) => item.duration).filter((dur) => dur !== null))];
      const uniqueKeySkills = [...new Set(data.data.data.map((item) => item.key_skills).flat().filter((skill) => skill !== null))];

      const uniqueTitle = [...new Set(data.data.data.map((item) => item.title).filter((tit) => tit !== null))];

      setFilterData((prev) => ({
        ...prev,
        location: uniqueLocations,
        experience: uniqueExperience,
        job_type: uniqueJobTypes,
        work_from: uniqueWorkFrom,
        duration: uniqueDuration,
        key_skills: uniqueKeySkills,
        title: uniqueTitle
      }));

      // Apply filter if location, experience, job_type, work_from, and duration are selected
      const filteredJobs = data.data.data.filter((job) => {
        return (
          (location ? job.location === location : true) &&
          (experience ? job.experience === experience : true) &&
          (job_type ? job.job_type === job_type : true) &&
          (work_from ? job.work_from === work_from : true) &&
          (duration ? job.duration === duration : true) &&
          (key_skills ? job.key_skills?.includes(key_skills) : true) &&
          (title ? job.title.toLowerCase().trim() === title.toLowerCase().trim() : true)
        );
      });

      setJobs(filteredJobs);
      // console.log("Filtering by title:", title);
      // console.log("Jobs after title filter:", filteredJobs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching filter data:", error);
      // setLoading(false);
    }
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    fetchFilters(location, selectedExperience, selectedJobtype, selectedWorkEnvironment, selectedDuration);
  };

  const handleExperienceChange = (e) => {
    const experience = e.target.value;
    setSelectedExperience(experience);
    fetchFilters(selectedLocation, experience, selectedJobtype, selectedWorkEnvironment, selectedDuration);
  };

  const handleJobtypeChange = (e) => {
    const job_type = e.target.value;
    setSelectedJobtype(job_type);
    fetchFilters(selectedLocation, selectedExperience, job_type, selectedWorkEnvironment, selectedDuration);
  };

  const handleWorkEnvironmentChange = (e) => {
    const work_from = e.target.value;
    setSelectedWorkEnvironment(work_from);
    fetchFilters(selectedLocation, selectedExperience, selectedJobtype, work_from, selectedDuration);
  };

  const handleDurationChange = (e) => {
    const duration = e.target.value;
    setSelectedDuration(duration);
    fetchFilters(selectedLocation, selectedExperience, selectedJobtype, selectedWorkEnvironment, duration);
  };

  const handleSkillChange = (e) => {
    const key_skills = e.target.value;
    fetchFilters(
      selectedLocation,
      selectedExperience,
      selectedJobtype,
      selectedWorkEnvironment,
      selectedDuration,
      key_skills
    );
  };

  const handleClearAll = async () => {
    setSelectedLocation("");
    setSelectedExperience("");
    setSelectedJobtype("");
    setSelectedWorkEnvironment("");
    setSelectedDuration("");
    setLoading(true);

    await fetchFilters();
    const allJobs = await fetchJobPosts();
    setJobs(allJobs);
    setLoading(false);
  };

  const clearAllSorts = async () => {
    await fetchFilters();
    const allJobs = await fetchJobPosts();
    setJobs(allJobs);
  }

  const handleLatestJobs = () => {
    const sortedJobs = [...jobs].sort((a, b) => {
      const dateA = new Date(a.updated_at || a.created_at);
      const dateB = new Date(b.updated_at || b.created_at);
      return dateB - dateA;
    });
    setJobs(sortedJobs);
  };


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filtered = filterData.title.filter((title) =>
      title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("Filtered Titles:", filtered);
    setFilteredTitles(filtered);
  };

  const handleTitleSelect = (title) => {
    setSearchInput(title);
    setFilteredTitles([]);
    setSelectedTitle(title);
    fetchFilters(
      selectedLocation,
      selectedExperience,
      selectedJobtype,
      selectedWorkEnvironment,
      selectedDuration,
      selectedSkills,
      title
    );


  };

  const viewDetailHandler = (id) => {
    navigate(`/view-detail/${id}`);
  };

  const pageCount = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const currentJobs = jobs.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const handlePageClick = (data) => setCurrentPage(data.selected);

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
                We&apos;re excited to see your interest in helping Talspo build a &quot;Talent Collaboration-Based Marketplace Online (Real-Time)&quot;.
                Our goal is to develop the Talent Connectivity NEARBY software application using the latest technologies, such as Artificial
                Intelligence (AI), Machine Learning (ML), Deep Learning (DL), and Blockchain.
                <strong>*Our technology is protected by Intellectual Property Rights (IPR), with a Patent Granted.</strong>
              </p>
              <p>
                If you believe you possess any of the skills listed below, you could play a valuable role in helping us create
                the &quot;Talent Discovery NEARBY (Real-Time)&quot; platform. Our team will get back to you as soon as you submit your
                application for any open job positions or vacancies mentioned below.
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

                    {/* Location Filter */}
                    <div className="location">
                      <h4>Location</h4>
                      <div className="location-search">
                        <select value={selectedLocation} onChange={handleLocationChange}>
                          <option value="" disabled>Select Location</option>
                          {filterData.location.length > 0 ? (
                            filterData.location.map((loc, index) => (
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

                    {/* Experience Filter */}
                    <div className="experience">
                      <h4>Experience</h4>
                      <div className="experience-search">
                        <select value={selectedExperience} onChange={handleExperienceChange}>
                          <option value="" disabled>Select Experience Level</option>
                          {filterData.experience.length > 0 ? (
                            filterData.experience.map((exp, index) => (
                              <option key={index} value={exp}>
                                {exp}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>No Experience Levels Available</option>
                          )}
                        </select>
                      </div>
                    </div>

                    {/* Job Type */}
                    <div className="job-type">
                      <h4>Job Type</h4>
                      <div className="job-type-search">
                        <select value={selectedJobtype} onChange={handleJobtypeChange}>
                          <option value="" disabled>Select Job Type</option>
                          {filterData.job_type.length > 0 ? (
                            filterData.job_type.map((type, index) => (
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
                        <select value={selectedWorkEnvironment} onChange={handleWorkEnvironmentChange}>
                          <option value="" disabled>Select Work Environment</option>
                          {filterData.work_from.length > 0 ? (
                            filterData.work_from.map((work, index) => (
                              <option key={index} value={work}>{work}</option>
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
                        <select value={selectedDuration} onChange={handleDurationChange} >
                          <option value="" disabled>Select Duration</option>
                          {filterData.duration.length > 0 ? (
                            filterData.duration.map((dur, index) => (
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

                    {/* Clear All */}
                    <div className="clear-all">
                      <a href="#" onClick={handleClearAll}>
                        Clear all
                      </a>
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
                        <button onClick={handleSortJobsByLocation}>Sort Jobs</button>
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
                        <select value={selectedSkills} onChange={handleSkillChange} >
                          <option value="" disabled>
                            Select Skill
                          </option>
                          {Array.isArray(filterData.key_skills) && filterData.key_skills.length > 0 ? (
                            filterData.key_skills.map((skill, index) => (
                              <option key={index} value={skill}>
                                {skill}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>
                              No key skills Available
                            </option>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="clear-all-sort">
                      <a href="#" onClick={clearAllSorts}>
                        Clear all
                      </a>
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
                    {searchInput && filteredTitles.length > 0 && (
                      <div className="suggestions-list">
                        {filteredTitles.map((title, index) => (
                          <div
                            key={index}
                            className="suggestion-item"
                            onClick={() => handleTitleSelect(title)}
                          >
                            {title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
                {currentJobs.length === 0 ? (
                  <div className="no-jobs-message">
                    <p style={{ color: "red" }}>No jobs available at the moment.</p>
                  </div>
                ) : (
                  currentJobs.map((job, index) => (
                    <div className="job-box" key={index}>
                      <h5>{job.title}</h5>
                      <span>{job.key_skills}</span>
                      {/* <small>Location: {job.location}</small> */}
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
                          <h3>{job.work_from}</h3>
                          <h3>{job.job_type}</h3>
                        </div>
                        <div className="i-right">
                          <button onClick={() => viewDetailHandler(job.id)}>View Details <i className="ri-arrow-right-line"></i></button>
                        </div>
                      </div>

                      <div className="job-active">
                        <h6> Active {formatDistanceToNow(new Date(job.updated_at), { addSuffix: true })}  </h6>
                      </div>

                    </div>
                  ))
                )}
                <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  breakLabel={'...'}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}
                  previousClassName={'previous-item'}
                  previousLinkClassName={'previous-link'}
                  nextClassName={'next-item'}
                  nextLinkClassName={'next-link'}
                  disabledClassName={'disabled'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Opportunity;

