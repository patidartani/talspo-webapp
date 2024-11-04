import { useState } from 'react';
import "./Opportunity.css";
import Navbar from "../../pages/Navbar/Navbar";
import opt1Img from "../../assets/images/opt1.png";
import ReactPaginate from 'react-paginate';

const Opportunity = () => {
  const jobs = [
    { title: 'Full Stack Developer', type: 'Full Time', location: 'Work From Home', startDate: '15 Jun - 15 Sep\'21', duration: '1 Month', salary: '50,000 per month', deadline: '1 Jun\'21' },
    { title: 'Frontend Designer', type: 'Part Time', location: 'Remote', startDate: '01 Jan - 01 Apr\'21', duration: '2 Months', salary: '30,000 per month', deadline: '15 Dec\'20' },
    { title: 'Data Scientist', type: 'Full Time', location: 'On-Site', startDate: '10 Mar - 10 May\'21', duration: '6 Months', salary: '70,000 per month', deadline: '1 Feb\'21' },
    { title: 'Backend Developer', type: 'Contract', location: 'Remote', startDate: '05 Apr - 05 Jul\'21', duration: '3 Months', salary: '60,000 per month', deadline: '20 Mar\'21' },
    { title: 'UI/UX Designer', type: 'Full Time', location: 'Work From Home', startDate: '01 Jun - 01 Aug\'21', duration: '3 Months', salary: '55,000 per month', deadline: '15 May\'21' },
    { title: 'Product Manager', type: 'Part Time', location: 'Hybrid', startDate: '15 Apr - 15 Aug\'21', duration: '4 Months', salary: '80,000 per month', deadline: '30 Mar\'21' },
    { title: 'Marketing Specialist', type: 'Full Time', location: 'Remote', startDate: '01 Jan - 01 Feb\'21', duration: '2 Months', salary: '40,000 per month', deadline: '10 Dec\'20' },
    { title: 'Software Engineer Intern', type: 'Internship', location: 'Remote', startDate: '01 May - 01 Aug\'21', duration: '3 Months', salary: '15,000 per month', deadline: '15 Apr\'21' },
    { title: 'DevOps Engineer', type: 'Full Time', location: 'On-Site', startDate: '20 Jun - 20 Sep\'21', duration: '1 Month', salary: '65,000 per month', deadline: '1 Jun\'21' },
    { title: 'Mobile App Developer', type: 'Contract', location: 'Remote', startDate: '10 Feb - 10 May\'21', duration: '3 Months', salary: '50,000 per month', deadline: '15 Jan\'21' },
    { title: 'SEO Specialist', type: 'Part Time', location: 'Remote', startDate: '01 Mar - 01 Jun\'21', duration: '3 Months', salary: '25,000 per month', deadline: '10 Feb\'21' },
    { title: 'Database Administrator', type: 'Full Time', location: 'On-Site', startDate: '01 May - 01 Sep\'21', duration: '4 Months', salary: '55,000 per month', deadline: '15 Apr\'21' },
    { title: 'Cybersecurity Analyst', type: 'Contract', location: 'Hybrid', startDate: '15 Apr - 15 Oct\'21', duration: '6 Months', salary: '75,000 per month', deadline: '10 Mar\'21' },
    { title: 'Game Developer', type: 'Part Time', location: 'Remote', startDate: '01 Jun - 01 Aug\'21', duration: '2 Months', salary: '40,000 per month', deadline: '20 May\'21' },
    { title: 'Content Writer', type: 'Full Time', location: 'Work From Home', startDate: '15 Jul - 15 Sep\'21', duration: '2 Months', salary: '30,000 per month', deadline: '1 Jun\'21' },
    { title: 'Sales Executive', type: 'Full Time', location: 'On-Site', startDate: '10 Jan - 10 Jun\'21', duration: '5 Months', salary: '45,000 per month', deadline: '1 Dec\'20' },
];



  const ITEMS_PER_PAGE = 5;
  const categories = ['Developer', 'Designer', 'Data Scientist', 'Manager'];
  const durations = ['1 Month', '2 Months', '3 Months', '6 Months', '1 Year']; // Options for durations

  const [isWorkFromHome, setIsWorkFromHome] = useState(false);
  const [isPartTime, setIsPartTime] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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
              {/* Offers jobs */}
              <div className="jobs-page">
                {currentJobs.map((job, index) => (
                  <div className="job-box" key={index}>
                    <h5>{job.title}</h5>
                    <span>{job.type}</span>
                    <small>{job.location}</small>
                    <div className="deadline">
                      <div className="d-one">
                        <h4>START DATE</h4>
                        <h6>{job.startDate}</h6>
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
                        <h3>{job.type}</h3>
                        <h3>Flexible Work Hours</h3>
                      </div>
                      <div className="i-right">
                        <a href="">View Details</a>
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
