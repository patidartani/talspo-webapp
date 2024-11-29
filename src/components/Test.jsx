// import { useState, useEffect } from 'react';
// import { fetchJobPosts } from '../../apiService';
// import "./Opportunity.css";
// import Navbar from "../../pages/Navbar/Navbar";
// import Footer from "../../pages/Footer/Footer";
// import ReactPaginate from 'react-paginate';
// import { useNavigate } from 'react-router-dom';
// import iconSearch from "../../assets/images/talspoIcon.png";
// import Loading from "../../pages/loading/Loading";
// import { formatDistanceToNow } from 'date-fns';
// import opt1Img from "../../assets/images/opt1.png";

// const Opportunity = () => {
//   const [filterData, setFilterData] = useState({
//     location: [],
//     experience: [],
//     title: []
//   });

//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedExperience, setSelectedExperience] = useState("");
//   const [selectedTitle, setSelectedTitle] = useState('');

//   const [loading, setLoading] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
//   const [filteredTitles, setFilteredTitles] = useState([]);
//   const navigate = useNavigate();
//   const ITEMS_PER_PAGE = 5;
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     const loadJobs = async () => {
//       const fetchedJobs = await fetchJobPosts();
//       console.log('fetchedJobs', fetchedJobs);
//       setJobs(fetchedJobs);
//       setLoading(false);
//     };

//     loadJobs();
//     fetchFilters();
//   }, []);

//   const fetchFilters = async (location = "", experience = "", title = "") => {
//     try {
//       setLoading(true);
//       const queryParam = [
//         location ? `location=${encodeURIComponent(location)}` : '',
//         experience ? `experience=${encodeURIComponent(experience)}` : '',
//         title ? `title=${encodeURIComponent(title)}` : '',
//       ]
//       .filter(Boolean)
//       .join('&');

//       const response = await fetch(`https://dev.talspo.com/admin/api/showcase/search?${queryParam}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();

//       // Extract unique filter values
//       const uniqueLocations = [...new Set(data.data.data.map((item) => item.location).filter((loc) => loc !== null))];
//       const uniqueExperience = [...new Set(data.data.data.map((item) => item.experience).filter((exp) => exp !== null))];
//       const uniqueTitle = [...new Set(data.data.data.map((item) => item.title).filter((tit) => tit !== null))];

//       setFilterData((prev) => ({
//         ...prev,
//         location: uniqueLocations,
//         experience: uniqueExperience,
//         title: uniqueTitle
//       }));

//       // Apply filter if location, experience, job_type, work_from, and duration are selected
//       const filteredJobs = data.data.data.filter((job) => {
//         return (
//           (location ? job.location === location : true) &&
//           (experience ? job.experience === experience : true) &&
//           (title ? job.title === title : true)
//         );
//       });

//       setJobs(filteredJobs);
//       console.log('filteredJobs', filteredJobs);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching filter data:", error);
//       setLoading(false);
//     }
//   };

//   const handleLocationChange = (e) => {
//     const location = e.target.value;
//     setSelectedLocation(location);
//     fetchFilters(location, selectedExperience);
//   };

//   const handleExperienceChange = (e) => {
//     const experience = e.target.value;
//     setSelectedExperience(experience);
//     fetchFilters(selectedLocation, experience);
//   };

//   const handleClearAll = async () => {
//     setSelectedLocation("");
//     setSelectedExperience("");
//     setLoading(true);

//     await fetchFilters();
//     const allJobs = await fetchJobPosts();
//     setJobs(allJobs);
//     setLoading(false);
//   };

//   const viewDetailHandler = (id) => {
//     navigate(`/view-detail/${id}`);
//   };

//   const pageCount = Math.ceil(jobs.length / ITEMS_PER_PAGE);
//   const currentJobs = jobs.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

//   const handlePageClick = (data) => setCurrentPage(data.selected);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchInput(value);
  
//     const filtered = filterData.title.filter((title) =>
//       title.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredTitles(filtered);
//   };
  
//   const handleTitleSelect = (title) => {
//     setSearchInput(title); // Set the search input to the selected title
//     setFilteredTitles([]); // Hide the suggestions after selection
//     setSelectedTitle(title); // Set the selected title
//     fetchFilters(selectedLocation, selectedExperience, title); // Apply the filter based on the selected title
//   };
  
//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="Opportunity-main">
//         <div className="opportunity-page">
//           <div className="opportunity2">
//             <h5>Apply Now!</h5>

//             {/* Filter Section */}
//             <div className="opt2-btm">
//               <div className="filter-main-page">
//                 <div className="Filter-page">
//                   <h6>Filters</h6>
//                   <p>Please select from the category below</p>
//                   <div className="filter-btm">

//                     {/* Location Filter */}
//                     <div className="location">
//                       <h4>Location</h4>
//                       <div className="location-search">
//                         <select value={selectedLocation} onChange={handleLocationChange}>
//                           <option value="" disabled>Select Location</option>
//                           {filterData.location.length > 0 ? (
//                             filterData.location.map((loc, index) => (
//                               <option key={index} value={loc}>
//                                 {loc}
//                               </option>
//                             ))
//                           ) : (
//                             <option value="" disabled>No Locations Available</option>
//                           )}
//                         </select>
//                       </div>
//                     </div>

//                     {/* Experience Filter */}
//                     <div className="experience">
//                       <h4>Experience</h4>
//                       <div className="experience-search">
//                         <select value={selectedExperience} onChange={handleExperienceChange}>
//                           <option value="" disabled>Select Experience Level</option>
//                           {filterData.experience.length > 0 ? (
//                             filterData.experience.map((exp, index) => (
//                               <option key={index} value={exp}> 
//                                 {exp}
//                               </option>
//                             ))
//                           ) : (
//                             <option value="" disabled>No Experience Levels Available</option>
//                           )}
//                         </select>
//                       </div>
//                     </div>

//                   {/* Clear All */}
//                     <div className="clear-all">
//                       <a href="#" onClick={handleClearAll}>
//                         Clear all
//                       </a>
//                     </div>
//                   </div>
//                 </div>
             
//               </div>

//               <div className="jobs-page">
//                 <div className="job-search">
//                   <div className="ipt-job">
//                     <input
//                       type="text"
//                       placeholder="Search Jobs..."
//                       value={searchInput}
//                       onChange={handleSearchChange}
//                     />
//                     <img src={iconSearch} alt="Search Icon" />                  
//                   </div>
//                   {searchInput && filteredTitles.length > 0 && (
//                <div className="suggestions-list">
//     {filteredTitles.map((title, index) => (
//       <div
//         key={index}
//         className="suggestion-item"
//         onClick={() => handleTitleSelect(title)} 
//       >
//         {title}
//       </div>
//     ))}
//   </div>
// )}

//                 </div>
//                 {currentJobs.length === 0 ? (
//                   <div className="no-jobs-message">
//                     <p style={{ color: "red" }}>No jobs available at the moment.</p>
//                   </div>
//                 ) : (
//                   currentJobs.map((job, index) => (
//                     <div className="job-box" key={index}>
//                       <h5>{job.title}</h5>
//                       <span>{job.key_skills}</span>
//                       {/* <small>Location: {job.location}</small> */}
//                       <div className="deadline">
//                         <div className="d-one">
//                           <h4>Location</h4>
//                           <h6>{job.location}</h6>
//                         </div>
//                         <div className="d-one">
//                           <h4>Experience</h4>
//                           <h6>{job.experience}</h6>
//                         </div>
//                         <div className="d-one">
//                           <h4>Salary</h4>
//                           <h6>{job.salary}</h6>
//                         </div>
//                         <div className="d-one">
//                           <h4>Duration</h4>
//                           <h6>{job.duration}</h6>
//                         </div>
//                       </div>
//                       <div className="last-items">
//                         <div className="i-left">
//                           <h3>{job.work_from}</h3>
//                           <h3>{job.job_type}</h3>
//                         </div>
//                         <div className="i-right">
//                           <button onClick={() => viewDetailHandler(job.id)}>View Details</button>
//                         </div>
//                       </div>

//                       <div className="job-active">
//                       <h6> Active {formatDistanceToNow(new Date(job.updated_at), { addSuffix: true })}  </h6>    
//                     </div>

//                     </div>
//                   ))
//                 )}
//                 <ReactPaginate
//                   previousLabel={'<'}
//                   nextLabel={'>'}
//                   breakLabel={'...'}
//                   pageCount={pageCount}
//                   onPageChange={handlePageClick}
//                   containerClassName={'pagination'}
//                   activeClassName={'active'}
//                   pageClassName={'page-item'}
//                   pageLinkClassName={'page-link'}
//                   previousClassName={'previous-item'}
//                   previousLinkClassName={'previous-link'}
//                   nextClassName={'next-item'}
//                   nextLinkClassName={'next-link'}
//                   disabledClassName={'disabled'}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Opportunity ;