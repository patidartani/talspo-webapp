import {useState, useEffect} from 'react'
import "./ViewDetail.css"
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import { useNavigate } from 'react-router-dom'
import {fetchJobDetail} from "../../apiService"
import { useParams } from 'react-router-dom';
import Loading from "../../pages/loading/Loading"

const ViewDetail = () => {

        const { id } = useParams();
        const navigate = useNavigate();
        const [jobDetail, setJobDetail] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
                const getJobDetail = async () => {
                  try {
                    const data = await fetchJobDetail(id);
                    // console.log('Fetched Job Datail:', data); 

                    if (!data) throw new Error('No job details found.');
                    setJobDetail(data); 
                  } catch (err) {
                    console.error('Error fetching job details:', err); 
                    setError(err); 
                  } finally {
                    setLoading(false);
                  }
                };           
                getJobDetail();
              }, [id]);
              
      
        if (loading) return <Loading />;
        if (error) return <p className="error-message">Failed to load job details: {error.message}</p>;
      
        const FormHandler = () => {
          navigate('/form', { state: { 
             postId: jobDetail.id,
            subtitle: jobDetail.subtitle,
            title: jobDetail.title,
            question_one: jobDetail.question_one,
            question_two: jobDetail.question_two,
            question_three: jobDetail.question_three,
            question_four: jobDetail.question_four,
            question_five: jobDetail.question_five,
            question_six: jobDetail.question_six,

           } });
        };
        
  return (
   <>
   <NavbarContainer />
    <div className='ViewDetail'>
           <div className="detail-page">
                 <div className="view-left">
                     <div className="vl-det">
                         <h5>{jobDetail?.title}</h5>
                          <div className="overview">
                              <h6>Overview</h6>
                              <p>{jobDetail.subtitle}</p>
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
                                        <p>{jobDetail?.category}</p>
                              </div>
                              <div className="jb">
                                        <h6>Location</h6>
                                        <p>{jobDetail?.location}</p>
                              </div>
                              <div className="jb">
                                        <h6>Skills</h6>
                                        <p>{jobDetail?.key_skills}</p>
                              </div>
                              <div className="job-flex">
                               <div className="jb">
                                        <h6>Duration</h6>
                                        <p>1 Month</p>
                              </div>
                              <div className="jb">
                                        <h6>Experience</h6>
                                        <p>{jobDetail?.experience}</p>
                              </div>
                               </div>
                              <div className="jb">
                                        <h6>Job Type</h6>
                                        <p>Full-Time</p>
                              </div>
                              <div className="jb">
                                        <h6>Salary</h6>
                                        <p>{jobDetail?.salary}</p>
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