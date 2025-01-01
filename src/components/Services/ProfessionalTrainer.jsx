import React from 'react'
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import "./StudentServiceModel.css"

import Footer from "../../pages/Footer/Footer"

import ProfessionalIcon from "/assets/images/ProfessionalIcon.png"
import { useNavigate } from 'react-router-dom'

const ProfessionalTrainer = () => {
  const navigate = useNavigate();

   const howHandler = () => {
    navigate("/how-we-work")
   }

  return (
    <>
    <NavbarContainer />
    <div className='StudentServiceModel'>

<div className="students-learner">
  <h5>Professional + Trainers Model Services Page</h5>
   <div className="student-icon">
    <img src={ProfessionalIcon} alt="" />
   </div>
   <div className="student-btm">
      <b>For Whom?</b>
      <p>This model is for all the professionals (Employee, Business Person/Entrepreneur, Teachers, / 
Professors as well as all types of Freelancers - Full Time/Part Time). Success demands appropriate 
skill sets to compete in this frequently changing competitive world. Developing the required skill sets 
on time can lead to better orientations and fast results. So if you are a continuous learner, willing to
share knowledge or want to engage in both this platform is meant for you.</p>
<p>If you are still looking for better job opportunities (explore new opportunities that is all around you), 
this is the right time to enroll yourself and you should definitely give it a try on this new platform.</p>
      <b>Why to choose us?</b>
      <p>You will be able to Network, Learn New Skill Sets, Teach Skills you are best at, in a very innovative
      way by connecting with people around you, that yet you sometimes are not able to connect with.</p>
      <p>You will be able to Connect with most talented minds around you, whom you daily come across to 
but due to time constraints you are not able to interact to. This platform provides cost and time 
effective mechanisms.</p>
  <p>So, Get engaged by hosting or attending various type of <b style={{fontSize:"1.2vmax"}}>Workshops, Events, and Meetings by 
  Collaborating together</b> and in this way you can bring  <b style={{fontSize:"1.2vmax"}}>Innovative Solutions in Real Time
  Talent Networking.</b></p>


<b>As a learner:</b>
        <p>You can choose the skills you want to learn from our approved list of trainers which 
will help you to simplify, conclude and connect with any trainer with ease. You will be showcased
with the ratings and the genuine reviews of our trainers. This will help you get the best possible 
skilled trainer from our platform.</p>

         <b>As a Teacher: </b> 
        <p>
        YOU can post your skilled areas and can upload your profile on our platform and can directly 
connect to the learner requiring the desired skill set. This will help in ease processing and the both 
(leaner and teacher) will be benefited with less efforts in searching their recipients.
        </p>

      <h3>SO DON’T WAIT, DEVELOP / ENHANCE YOUR SKILL SETS, NETWORK AND BE 
      AT THE TOP – START IT RIGHT NOW</h3>


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

export default ProfessionalTrainer