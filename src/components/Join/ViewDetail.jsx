import React from 'react'
import "./ViewDetail.css"
import Navbar from "../../pages/Navbar/Navbar"
import Footer from "../../pages/Footer/Footer"
import { useNavigate } from 'react-router-dom'

const ViewDetail = () => {
         const navigate = useNavigate();

         const FormHandler = () => {
                navigate('/form')
         }

  return (
   <>
   <Navbar />
    <div className='ViewDetail'>
           <div className="detail-page">
                 <div className="view-left">
                     <div className="vl-det">
                         <h5>Front End Developer</h5>
                          <div className="overview">
                              <h6>Overview</h6>
                              <p>We are seeking a passionate and skilled ReactJS Developer to join our team. This role involves building scalable and efficient web applications using cutting-edge technologies. You will collaborate with a dynamic team of developers, designers, and project managers to deliver impactful user experiences.</p>
                          </div>
                          
                          <div className="key-skills">
                              <h6>Key Skills</h6>
                              <span> Html, Css , Java script, React Js, Bootstrap, Redux Toolkit</span>
                          </div>

                          <div className="responsibilities">
                              <h6>Responsibilities</h6>
                                <div className="res">
                                        <span>1.Frontend Development</span>
                                        <p>Develop and maintain dynamic, responsive, and scalable web applications using ReactJS.
                                        Optimize components for maximum performance across a variety of devices and browsers.</p>
                                </div>
                                <div className="res">
                                        <span>2.UI/UX Integration:</span>
                                        <p>Collaborate with designers to ensure seamless integration of UI/UX designs.
                                        Implement pixel-perfect design elements and maintain design consistency.</p>
                                </div>
                                <div className="res">
                                        <span>3.API Integration:</span>
                                        <p>Connect and interact with RESTful APIs or GraphQL for data retrieval and updates.
                                        Ensure secure and efficient communication between the frontend and backend.</p>
                                </div>

                                <div className="res">
                                        <span>4.API Integration:</span>
                                        <p>Connect and interact with RESTful APIs or GraphQL for data retrieval and updates.
                                        Ensure secure and efficient communication between the frontend and backend.</p>
                                </div>
                          </div>

                          <div className="company-detail">
                             <h6>Company Details:</h6>
                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eum incidunt odio laborum, quam eos accusantium at? Incidunt totam sint eligendi, veniam, amet magnam fugit unde error possimus doloribus nostrum?</p>
                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aut quibusdam in provident cum officia dicta, animi veritatis explicabo est.</p>
                          </div>

                         

                     </div>
                </div> 
                <div className="view-right">
                <div className="job_details">
                                <h5>Job Description:</h5>
                              <div className="jb">
                                        <h6>Role</h6>
                                        <p>Software department</p>
                              </div>
                              <div className="jb">
                                        <h6>Location</h6>
                                        <p>Indore</p>
                              </div>
                              <div className="jb">
                                        <h6>Skills</h6>
                                        <p>React js, Redux, Bootstrap, node</p>
                              </div>
                              <div className="job-flex">
                               <div className="jb">
                                        <h6>Duration</h6>
                                        <p>1 Month</p>
                              </div>
                              <div className="jb">
                                        <h6>Experience</h6>
                                        <p>1 year required</p>
                              </div>
                               </div>
                              <div className="jb">
                                        <h6>Job Type</h6>
                                        <p>Full-Time</p>
                              </div>
                              <div className="jb">
                                        <h6>Salary</h6>
                                        <p>50,000-/ per Month</p>
                              </div>
                              
                              <div className="apply-btn">
                                        <button onClick={FormHandler}>Apply Now</button>
                              </div>
                           </div>
                </div> 
           </div>
    </div>
    <Footer />
   </>
  )
}

export default ViewDetail   