import React from 'react'
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import "./StudentServiceModel.css"

import StudentIcon from "../../assets/images/StudentIcon.png"
import { useNavigate } from 'react-router-dom'

const StudentServiceModel = () => {
  const navigate = useNavigate();

   const howHandler = () => {
    navigate("/how-we-work")
   }

  return (
    <>
    <NavbarContainer />
    <div className='StudentServiceModel'>

<div className="students-learner">
  <h5>Students/ Learner Model Services Page</h5>
   <div className="student-icon">
    <img src={StudentIcon} alt="" />
   </div>
   <div className="student-btm">
      <b>For Whom?</b>
      <p>This platform benefits secondary/high school students, under-graduates, graduates and people willing 
      to learn from any other Massive Online Open Courses providers.</p>
      <b>Why to choose us?</b>
      <p>You will be able to Network, Learn New Skill Sets, Teach Skills you are best in teaching (Exchange
& Enhance Your Knowledge at the Same Time) and all these with more Innovative Way of 
Connecting with Everyone NEAR YOU.</p>


<b>As a learner:</b>
        <p>You can choose the skills you want to learn from our approved list of trainers which 
will help you to simplify, conclude and connect with any trainer with ease. You will be showcased
with the ratings and the genuine reviews of our trainers. This will help you get the best possible 
skilled trainer from our platform.</p>

         <b>As a Teacher: </b> 
        <p>
         You can post your skilled areas and can upload your profile on our platform and can directly 
connect to the learner requiring the desired skill set. This will help in ease processing and the both 
(leaner and teacher) will be benefited with less efforts in searching their recipients.
        </p>

      <small>Follow Your Passion, Develop the skills you missed due to some reasons.</small>
      <h3>So, don’t wait, Follow Your Passion and Make Your Dream Come True by Start executing and 
      Stop Thinking!</h3>


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

export default StudentServiceModel