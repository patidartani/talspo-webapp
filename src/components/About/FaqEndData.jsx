import { useNavigate } from "react-router-dom"
import "./Faq.css"

const FaqEndData = () => {
          const navigate = useNavigate()
          const contactHandler = () => {
                    navigate("/contact-us")
          }
          return (
                    <div className='FaqEndData-main'>
                              <h5>For Job Seekers</h5>
                              <span style={{ fontWeight: "600" }}>1. How do I search for jobs on Talspo?</span>
                              <p>You can search for jobs by entering keywords, job titles, or skills in the search bar.
                                        You can also filter jobs based on location using the geo-location tool.</p>
                              <span style={{ fontWeight: "600" }}>2. Can I save jobs I’m interested in?</span>
                              <p>Yes, you can save job listings by clicking the “Save” button on any job post, which
                                        will add it to your personalized dashboard.</p>
                              <span style={{ fontWeight: "600" }}>3. Does Talspo offer job recommendations?</span>
                              <p>Yes, Talspo’s AI system provides personalized job recommendations based on your
                                        profile, skills, and past applications.</p>
                              <span style={{ fontWeight: "600" }}>4. How do I apply for a job?</span>
                              <p>Once you find a job listing, click “Apply” and follow the steps to submit your resume
                                        and any other required documents through Talspo’s interface.</p>
                              <span style={{ fontWeight: "600" }}>5. Can I track my job applications?</span>
                              <p>Yes, Talspo provides a dashboard where you can view and track the status of your
                                        applications in real-time.</p>

                              <h5 className="mt-5">For Recruiters and Corporates</h5>
                              <span style={{ fontWeight: "600" }}>1. What is the Talspo ATS?</span>
                              <p>Talspo’s ATS (Applicant Tracking System) helps recruiters and corporates manage applications, schedule interviews, and track candidates throughout the hiring process.</p>
                              <span style={{ fontWeight: "600" }}>2. How do I post a job on Talspo?</span>
                              <p>To post a job, log into your recruiter account, click on “Post a Job,” and fill in the required details such as job title, description, and location. You can also use templates to simplify the process.</p>
                              <span style={{ fontWeight: "600" }}>3. Can I target job posts to specific locations?</span>
                              <p>Yes, Talspo offers geo-location-based job posting, allowing you to target specific regions or cities when posting jobs.</p>
                              <span style={{ fontWeight: "600" }}>4. Does Talspo offer resume screening?</span>
                              <p>Yes, Talspo uses AI to screen and rank resumes, helping you find the most qualified candidates faster.</p>
                              <span style={{ fontWeight: "600" }}>5. What features are available in the premium plans for recruiters?</span>
                              <p>Premium plans include advanced applicant tracking, automated resume filtering, job post promotions, and access to detailed analytics on job postings and candidate interactions.</p>

                              <h5 className="mt-5">For Skill Training Institutes</h5>
                              <span style={{ fontWeight: "600" }}>1. How can training institutes use Talspo?</span>
                              <p>Skill training institutes can use Talspo to connect with job seekers who are looking to
                                        upskill and find relevant job opportunities. Institutes can also post training programs
                                        on the platform.</p>
                              <span style={{ fontWeight: "600" }}>2. Can I promote my courses on Talspo?</span>
                              <p>Yes, training institutes can promote their skill development programs to job seekers
                                        and professionals looking for career advancement.</p>

                              <h5 className="mt-5">Account and Support</h5>
                              <span style={{ fontWeight: "600" }}>1. How do I create an account?</span>
                              <p>You can create an account by clicking on the “Sign Up” button and providing your
                                        email, or by signing up through social media accounts.</p>
                              <span style={{ fontWeight: "600" }}>2. How do I reset my password?</span>
                              <p>If you’ve forgotten your password, click on the “Forgot Password” link on the login
                                        page, and you’ll receive an email to reset it.</p>
                              <span style={{ fontWeight: "600" }}>3. How do I contact customer support?</span>
                              <p>You can reach out to customer support via email at support@talspo.com or through
                                        the live chat option on the website.</p>

                              <h6>Problem Not Listed?</h6>
                              <div className="cont-btn-faq">
                                        <button onClick={contactHandler}>Contact Us</button>
                              </div>
                    </div>

          )
}

export default FaqEndData