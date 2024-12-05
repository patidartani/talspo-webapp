import React from 'react'
import "./HowWeWork.css"
import Gif from "../../assets/images/How_We_Work_UC.gif"
import Navbar from "../../pages/Navbar/Navbar"
import Footer from "../../pages/Footer/Footer"
import FooterTop from '../../pages/Footer/FooterTop'


const HowWeWork = () => {
  return (
    <>
    <Navbar />
    <div className='HowWeWork-main'>
{/* ----------------------------- */}
                      <div className="how-tp">
                    <div className="how-left">
                           <h6>How We Work</h6>
                           <p>Get to know about our functionality, we hope you understand better through our content mentioned below</p>
                    </div>  
                    <div className="how-right">
                              <img src={Gif} alt="" />
                    </div>
                      </div>

                      <div className="how-btm">
                      <div className="work-box">
                        <h6>Get To Know More About Our Process & Functionalities</h6>
                        <p>When you <a href="/signup">Register HERE</a> by filling-up basic information of yours, you have to select the preferences type you best fit in and want to use Talspo for what purpose. The three preferences type are: <small>Learn, Teach, or Both.</small></p>
                          <p>After you finish the stage of selecting your preference type you have to select skill based on selected preference that you have chosen previously. We request to select the skill you are really interested in Learning, Teaching or Doing Both. As soon as you finish this stage, you have to fill some important information that we require from your side to help us recognize you and provide you best security service from our side.</p>
                        <p>After you have completed the registration process fully, we request you to complete your profile fully for giving us opportunity to provide you with best profile results of people related your <small>Talspo Search Requirements NAERBY YOU that too in Real-Time (Live Geolocation).</small></p>
                          <p>Just after you have completed your profile fully, Start your Talspo Search with your required skill connection based on your preference type selection.</p>
                       <p>So, what are you waiting for <a href="/signup">SignUp Now</a> and <small>Start Talspoing! Find Talents NEARBY YOU in Real-Time</small></p>
                      </div>  
                      <div className="work-box">
                        <h6>Process Of Talent Connectivity Is HERE</h6>
                        <p>We are connecting Talented/ Skilled People to get connected with the <small>people NEARBY in Real-Time (Live Geolocation)</small>, who really required and have a desire to learn a skill(s) set NEARBY them with the right match and providing connection of teacher that are registered on Talspo.</p>
                        <div className='last-flex'>
                           <h5>Here we will be providing you with three main solution aspects that are:</h5>
                          <div className="span-flex">
                          <span>1.Best Talent/ Skill Connectivity on the basis of your profile analysis and your requirements</span>
                         <span>2.Time Saving – Connect with Talented/ Skilled Individual NEARBY YOU in Real-Time (Live Geolocation)</span>
                         <span>3.Affordable – Learning Skills Set on Talspo made more affordable that too in <small>Physical World By People-to-People Connections</small></span>
                          </div>
                        </div>
                       <p></p>
                      </div>  
                      </div>

 </div>

 <FooterTop />
 <Footer />
    </>
  )
}

export default HowWeWork