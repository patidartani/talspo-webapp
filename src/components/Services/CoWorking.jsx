import React from 'react'
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import "./StudentServiceModel.css"

import coworkingImg from "../../assets/images/co-workingIcon.png"
import { useNavigate } from 'react-router-dom'

const CoWorking = () => {
  const navigate = useNavigate();

   const howHandler = () => {
    navigate("/how-we-work")
   }

  return (
    <>
    <NavbarContainer />
    <div className='StudentServiceModel'>

<div className="students-learner">
  <h5>Co-Working Spaces + Co-work & Co-live and Events Model Services Page</h5>
   <div className="student-icon">
    <img src={coworkingImg} alt="" />
   </div>
   <div className="student-btm">
      <b>For Whom?</b>
      <p><b style={{fontSize:"1.1vmax"}}>CoWorking Spaces (Co-work&Co-live):</b> Freelancers (Part Time & Full Time), Employees (Part
Time or Full Time) or Entrepreneurs. If you are looking for Collaborating with great minds and 
Build Innovative Stuff with the right Working Environment that is right fit for you, you are in the 
right place.</p>

<p><b style={{fontSize:"1.1vmax"}}>Events:</b> Networking Enthusiastic & Knowledge Seeker. If you are really struggling to find the best
fit events or workshops NEARBY related your Skill sets that you really want to enhance to the next
level and also you want to meet new people that are of your interested field, you are in the right 
place.</p>



      <b>Why to choose us?</b>
      <p> <b style={{fontSize:"1.1vmax"}}>CoWorking Spaces (Co-work&Co-live):</b> We are the <b style={{fontSize:"1.1vmax"}}> “CoWorking Space” Aggregator 
      Platform.</b> We provide you the best fit according to your profile and at affordable price
 <b style={{fontSize:"1.1vmax"}}>CoWorking Spaces (Talspo Partnered) with NEARBY available CoWorking Space.</b></p>

       <p><b style={{fontSize:"1.1vmax"}}>Events:</b>  We believe in overall development and gaining more practical experiences that really helps 
one’s skill sets to enhance to the next level. That’s why we provide you with the <b style={{fontSize:"1.1vmax"}}>NEARBY Events 
& Workshops (Talspo Partnered)</b> that are really best fit for you. As we analyze your profile and 
showcase you with vast number of events and workshops NEARBY you, so that it can be acting as
a <b style={{fontSize:"1.1vmax"}}>“Catalyst”</b> in developing your Skill Sets. Also you will be able to Network with Interested People 
in your field.</p>


      <h3>NETWORKING GROWS INDIVIDUAL’S NET WORTH AND INCREASES ONE’S 
KNOWLEDGE. WORKING IN POSITIVE ENVIRONMENT THAT IS RIGHT FIT FOR
ONE’S PERSONLALITY & THAT INCREASES THE LEVEL OF WORK OUTCOMES 
BY MULTIPLE TIMES.</h3>

    </div>

    <div className="how-services">
      <button onClick={howHandler}>How It Works?</button>
    </div>
 
  
</div>

</div>
<Footer />
    </>
  )
}

export default CoWorking