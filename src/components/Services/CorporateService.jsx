import React from 'react'
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import "./StudentServiceModel.css"


import corporateIcon from "/assets/images/corporateIcon.png"
import { useNavigate } from 'react-router-dom'

const CorporateService = () => {
  const navigate = useNavigate();

   const howHandler = () => {
    navigate("/how-we-work")
   }

  return (
    <>
    <NavbarContainer />
    <div className='StudentServiceModel'>

<div className="students-learner">
  <h5>Corporate + Organizations Model Services Page</h5>
   <div className="student-icon">
    <img src={corporateIcon} alt="" />
   </div>
   <div className="student-btm">
      <b>For Whom?</b>
      <p>This model for the Corporate & Institutions, who are looking for <b style={{fontSize:"1.2vmax"}}>talented people NEARBY</b> for 
fast recruiting and filling up required positions. So if you are a Corporate or Institutions or Startup
at (any level) that requires <b style={{fontSize:"1.2vmax"}}>Fast NAERBY Recruitment Solution</b> with right talent for the Position 
Showcased, we are here for you.</p>
      <b>Why to choose us?</b>
      <p>You will be able to select wide range of <b style={{fontSize:"1.2vmax"}}>Talented Interested People NEARBY on our
      Application</b> on the basis of the Location required for filling your Corporate & Institution Positions.
If you are a startup that really requires to <b style={{fontSize:"1.2vmax"}}>collaborate with Best Team for solving great 
problems, you are in the right place.</b></p>

<p>We do provide the skilled person required for the showcased position by the Corporate & Institution
on the Basis of <b style={{fontSize:"1.2vmax"}}>Talented Profiles On Talspo>Directly Connect With> Corporate & Institution 
Position Requirements Posted on Talspo.</b></p>

<h3>RECRUITING THE RIGHT TALENT WITH SAVING THE TIME & MONEY IS
EVERY CORPORATE OR INSTITUTION RIGHT.</h3>

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

export default CorporateService