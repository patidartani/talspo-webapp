import { useState, useEffect } from 'react';
import { fetchJobPosts } from '../../apiService';
import "./Opportunity.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import opt1Img from "../../assets/images/opt1.png";
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import iconSearch from "../../assets/images/talspoIcon.png"


const Opportunity = () => {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 5;
  const categories = ['Developer', 'Designer', 'Data Scientist', 'Manager'];
  const durations = ['1 Month', '2 Months', '3 Months', '6 Months', '1 Year'];
  const locations = ['New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Remote'];  // Example locations
  const experienceLevels = ['Junior', 'Mid-level', 'Senior'];  // Example experience levels
  const jobTypes = ['Full-time', 'Part-time', 'Contract'];

  const [jobs, setJobs] = useState([]);
  const [selectedWorkFromHome, setSelectedWorkFromHome] = useState('Any');
  const [isPartTime, setIsPartTime] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch job data from API
  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobPosts();
      setJobs(fetchedJobs);
    };
    loadJobs();
  }, []);

  const viewDetailHandler = () => {
    navigate('/view-detail');
  };

  const togglePartTime = () => setIsPartTime(!isPartTime);

  const addCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const removeCategory = (category) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
  };

  const applyFilters = (job) => {
    if (selectedCategories.length > 0 && !selectedCategories.some(cat => job.title.includes(cat))) return false;
    if (selectedWorkFromHome !== 'Any' && job.location !== selectedWorkFromHome) return false;
    if (isPartTime && job.type !== 'Part Time') return false;
    if (selectedLocation && job.location !== selectedLocation) return false;
    if (selectedExperience && job.experience !== selectedExperience) return false;
    if (selectedJobType && job.type !== selectedJobType) return false;
    if (selectedDuration && job.duration !== selectedDuration) return false;
    return true;
  };

  const filteredJobs = jobs.filter(applyFilters);
  const pageCount = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const currentJobs = filteredJobs.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const handlePageClick = (data) => setCurrentPage(data.selected);
  const clearAllFilters = () => {
    setSelectedWorkFromHome('Any');
    setIsPartTime(false);
    setSelectedLocation('');
    setSelectedExperience('');
    setSelectedJobType('');
    setSelectedDuration('');
    setSelectedCategories([]);
  };

  return (
    <>
      <Navbar />
      <div className='Opportunity-main'>
        <div className="opportunity-page">
          <div className="opportunity1">
            <div className="opt-left">
              <h5>Talspo Jobs</h5>
              <p>Get a job at Talspo and contribute to building the "Next Level Of Talent Networking Platform and Talent Marketplace" of the World!</p>
            </div>
            <div className="opt-right">
              <img src={opt1Img} alt="" />
            </div>
          </div>
          <div className="opportunity2">
            <h5>Apply Now!</h5>

            
          <div className="job-search">
  <div className="ipt-job">
    <input type="text" placeholder="Search Jobs.." />
    <img src={iconSearch} alt="Search Icon" />
  </div>
</div>


            <div className="opt2-btm">
              {/* Filters */}
              <div className="Filter-page">
                <h6>Filters</h6>
                <p>Please select from the category below</p>
                <div className="filter-btm">
                  {/* Category Dropdown */}
                  <div className="category">
                    <h4>Category</h4>
                    <div className="category-search">
                      <select onChange={(e) => addCategory(e.target.value)} defaultValue="">
                        <option value="" disabled>Select Category</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div className="selected-categories">
                      {selectedCategories.map((category, index) => (
                        <h1 key={index}>
                          {category} <i className="ri-close-line" onClick={() => removeCategory(category)}></i>
                        </h1>
                      ))}
                    </div>
                  </div>

                  {/* Work from Home Toggle */}
                  <div className="work-from-home">
                    <h4>Work from home</h4>
                      <div className="work-search">
                      <select onChange={(e) => setSelectedWorkFromHome(e.target.value)} value={selectedWorkFromHome}>
                      <option value="Any">Any</option>
                      <option value="Remote">Remote</option>
                      <option value="In-office">In-office</option>
                    </select>
                      </div>
                  </div>

                  {/* Location Filter */}
                  <div className="location">
                    <h4>Location</h4>
                    <div className="location-search">
                      <select onChange={(e) => setSelectedLocation(e.target.value)} defaultValue="">
                        <option value="" disabled>Select Location</option>
                        {locations.map((location, index) => (
                          <option key={index} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Experience Filter */}
                  <div className="experience">
                    <h4>Experience</h4>
                    <div className="experience-search">
                      <select onChange={(e) => setSelectedExperience(e.target.value)} defaultValue="">
                        <option value="" disabled>Select Experience Level</option>
                        {experienceLevels.map((level, index) => (
                          <option key={index} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div className="job-type">
                    <h4>Job Type</h4>
                    <div className="job-type-search">
                      <select onChange={(e) => setSelectedJobType(e.target.value)} defaultValue="">
                        <option value="" disabled>Select Job Type</option>
                        {jobTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Duration Filter */}
                  <div className="duration">
                    <h4>Maximum Duration</h4>
                    <div className="duration-search">
                      <select onChange={(e) => setSelectedDuration(e.target.value)} defaultValue="">
                        <option value="" disabled>Select Duration</option>
                        {durations.map((duration, index) => (
                          <option key={index} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="clear-all">
                    <a href="#" onClick={clearAllFilters}>Clear all</a>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="jobs-page">
                {currentJobs.map((job, index) => (
                  <div className="job-box" key={index}>
                    <h5>{job.title}</h5>
                    <span>{job.subtitle}</span>
                    <small>{job.description}</small>
                    <div className="deadline">
                      <div className="d-one">
                        <h4>START DATE</h4>
                        <h6>{job.start_date}</h6>
                      </div>
                      <div className="d-one">
                        <h4>DURATION</h4>
                        <h6>{job.duration}</h6>
                      </div>
                      <div className="d-one">
                        <h4>SALARY</h4>
                        <h6>{job.salary}</h6>
                      </div>
                      <div className="d-one">
                        <h4>DEADLINE</h4>
                        <h6>{job.deadline}</h6>
                      </div>
                    </div>
                    <div className="last-items">
                      <div className="i-left">
                        <h3>{job.subtitle}</h3>
                        <h3>Flexible Work Hours</h3>
                      </div>
                      <div className="i-right">
                        <button onClick={viewDetailHandler}>View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
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
