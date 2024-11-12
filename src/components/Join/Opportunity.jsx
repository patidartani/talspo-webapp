import { useState, useEffect } from 'react';
import { fetchJobPosts } from '../../apiService';
import "./Opportunity.css";
import Navbar from "../../pages/Navbar/Navbar";
import opt1Img from "../../assets/images/opt1.png";
import ReactPaginate from 'react-paginate';

const Opportunity = () => {
  const ITEMS_PER_PAGE = 5;
  const categories = ['Developer', 'Designer', 'Data Scientist', 'Manager'];
  const durations = ['1 Month', '2 Months', '3 Months', '6 Months', '1 Year'];

  const [jobs, setJobs] = useState([]);
  const [isWorkFromHome, setIsWorkFromHome] = useState(false);
  const [isPartTime, setIsPartTime] = useState(false);
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

  const toggleWorkFromHome = () => setIsWorkFromHome(!isWorkFromHome);
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
    if (isWorkFromHome && job.location !== 'Work From Home') return false;
    if (isPartTime && job.type !== 'Part Time') return false;
    if (selectedDuration && job.duration !== selectedDuration) return false;
    return true;
  };

  const filteredJobs = jobs.filter(applyFilters);
  const pageCount = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const currentJobs = filteredJobs.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const handlePageClick = (data) => setCurrentPage(data.selected);
  const clearAllFilters = () => {
    setIsWorkFromHome(false);
    setIsPartTime(false);
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
              <p>Get a job at Talspo and contribute to building "Next Level Of Talent Networking Platform and Talent Marketplace" of the World!</p>
            </div>
            <div className="opt-right">
              <img src={opt1Img} alt="" />
            </div>
          </div>
          <div className="opportunity2">
            <h5>Apply Now!</h5>
            <div className="opt2-btm">
              {/* Filters */}
              <div className="Filter-page">
                <h6>Filters</h6>
                <p>Please select from the category below</p>
                <div className="filter-btm">
                  <div className="category">
                    <h4>Category</h4>
                    <div className="category-search">
                      <select 
                        onChange={(e) => addCategory(e.target.value)}
                        defaultValue=""
                      >
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

                  <div className="on-off">
                    <div className="toggle-option">
                      <h4>Work from home</h4>
                      <div className={`toggle-switch ${isWorkFromHome ? 'on' : 'off'}`} onClick={toggleWorkFromHome}>
                        <div className="toggle-knob"></div>
                      </div>
                    </div>
                    <div className="toggle-option">
                      <h4>Part-time</h4>
                      <div className={`toggle-switch ${isPartTime ? 'on' : 'off'}`} onClick={togglePartTime}>
                        <div className="toggle-knob"></div>
                      </div>
                    </div>
                  </div>

                  <div className="duration">
                    <h4>Maximum duration</h4>
                    <div className="duration-search">
                      <select 
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        defaultValue=""
                      >
                        <option value="" disabled>Select Duration</option>
                        {durations.map((duration, index) => (
                          <option key={index} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>

                    <div className="clear-all">
                      <a href="#" onClick={clearAllFilters}>Clear all</a>
                    </div>
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
                        <button>Apply Now</button>
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
    </>
  );
};

export default Opportunity;
