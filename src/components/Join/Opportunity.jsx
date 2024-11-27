import { useState, useEffect } from 'react';
import { fetchJobPosts } from '../../apiService';
import "./Opportunity.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import opt1Img from "../../assets/images/opt1.png";
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import iconSearch from "../../assets/images/talspoIcon.png";
import Loading from "../../pages/loading/Loading"

const Opportunity = () => {


  // ----------------------------filters---------------------------------------------------------------

  const [selectedCategories, setSelectedCategories] = useState([]);

 
  const [skills, setSkills] = useState(["React", "JavaScript", "Node.js", "Python"]); 
const [selectedSkills, setSelectedSkills] = useState([]);

const addSkill = (skill) => {
  if (skill && !selectedSkills.includes(skill)) {
    setSelectedSkills([...selectedSkills, skill]);
  }
};

const removeSkill = (skill) => {
  setSelectedSkills(selectedSkills.filter((s) => s !== skill));
};

// ---------------------------------------------------------------------------------------------------------------------

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);  
      const fetchedJobs = await fetchJobPosts();
      console.log('fetchedJobs', fetchedJobs);
      setJobs(fetchedJobs);
      setLoading(false); 
    };
    loadJobs();
  }, []);

  const viewDetailHandler = (id) => {
    navigate(`/view-detail/${id}`);  
  };

  const pageCount = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const currentJobs = jobs.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const handlePageClick = (data) => setCurrentPage(data.selected);

  if (loading) {
    return <Loading />;
  }

  // ---------------------------filter functionality---------------------------------------------------

 
  // --------------------------------------------------------------------------------------------------


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

            {/* Filter Design Only */}
            <div className="opt2-btm">
                
                <div className="filter-main-page">
                <div className="Filter-page">
        <h6>Filters</h6>
      <p>Please select from the category below</p>
      <div className="filter-btm">
      
        <div className="work-from-home">
          <h4>Working Environment</h4>
          <div className="work-search">
            <select defaultValue="Any">
              <option value="Any">Any</option>
            </select>
          </div>
        </div>
        <div className="location">
          <h4>Location</h4>
          <div className="location-search">
            <select defaultValue="">
              <option value="" disabled>
                Select Location
              </option>
            </select>
          </div>
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="experience-search">
            <select defaultValue="">
              <option value="" disabled>
                Select Experience Level
              </option>
            </select>
          </div>
        </div>
        <div className="job-type">
          <h4>Job Type</h4>
          <div className="job-type-search">
            <select defaultValue="">
              <option value="" disabled>
                Select Job Type
              </option>
            </select>
          </div>
        </div>
        <div className="duration">
          <h4>Maximum Duration</h4>
          <div className="duration-search">
            <select defaultValue="">
              <option value="" disabled>
                Select Duration
              </option>
            </select>
          </div>
        </div>
        <div className="clear-all">
          <a href="#" onClick={() => setSelectedCategories([])}>
            Clear all
          </a>
        </div>
      </div> 
              </div>
              {/* ------------------------------------------sorting------------------------------ ------*/}
                   <div className="filter-sorting">
                     <h6>Sort Jobs</h6>
                     <p>Sort Jobs based on the options given below</p>
                     <div className="sort-btm">

                    <div className="closest">
                      <h4>Find Jobs closest to your location</h4>
                        <div className="location-btn">
                          <button>sort jobs</button>
                        </div>
                    </div>

                    <div className="latest">
                      <h4>Latest Jobs Available</h4>
                        <div className="latest-btn">
                          <button>Get Latest jobs</button>
                        </div>
                    </div>

                    <div className="skills">
                      <h4>Skills</h4>
                      <div className="skills-search">
                        <select
                          onChange={(e) => addSkill(e.target.value)}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select Skill
                          </option>
                          {skills.map((skill, index) => (
                            <option key={index} value={skill}>
                              {skill}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="selected-skills">
                        {selectedSkills.map((skill, index) => (
                          <h1 key={index}>
                            {skill}{" "}
                            <i
                              className="ri-close-line"
                              onClick={() => removeSkill(skill)}
                            ></i>
                          </h1>
                        ))}
                      </div>
                    </div>

                    <div className="clear-all-sort">
                      <a href="#">
                        Clear all
                      </a>
                    </div>
                     </div>
                   </div>
              {/* -------------------------------------------------------------------------------------- */}
                </div>


              {/* Job Listings */}
              <div className="jobs-page">
                <div className="job-search">
                  <div className="ipt-job">
                    <input type="text" placeholder="Search Jobs.." />
                    <img src={iconSearch} alt="Search Icon" />
                  </div>
                </div>
                {currentJobs.length === 0 ? (
                  <div className="no-jobs-message">
                    <p style={{color:"red"}}>No jobs available at the moment.</p>
                  </div>
                ) : (
                  currentJobs.map((job, index) => (
                    <div className="job-box" key={index}>
                      <h5>{job.title}</h5>
                      <span>{job.category}</span>
                      <small>Location: {job.location}</small>
                      <div className="deadline">
                        <div className="d-one">
                          <h4>START DATE</h4>
                          <h6>{job.start_date}</h6>
                        </div>
                        <div className="d-one">
                          <h4>Experience</h4>
                          <h6>{job.experience}</h6>
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
                          <h3>{job.work_from}</h3>
                          <h3>{job.job_type}</h3>
                        </div>
                        <div className="i-right">
                          <button onClick={() => viewDetailHandler(job.id)}>View Details</button>
                        </div>
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




