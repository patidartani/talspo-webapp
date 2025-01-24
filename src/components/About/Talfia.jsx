import "./TalspoSearchAI.css"
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import TalfiaLogo from "/assets/images/Talfia.png"
const Talfia = () => {
  return (
    <>
      <NavbarContainer />
      <div className='Talfia-page'>
        <h5>Talfia™ (*sub-brand of Talspo)</h5>
        <div className="talfia-video">
          <iframe
            src="https://www.youtube.com/embed/0bLHeDOJV40"
            width="100%"
            height="315"
            style={{ border: "none" }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <img src={TalfiaLogo} alt="" />

        <div className="talfia">
          <h6>Talfia - Your Talent Finding Intelligent Assistance™</h6>
          <p>We are currently developing this product that will offer the following services:</p>

          <li>Software Design Services</li>
          <li>Computer Software Development Services</li>
          <li>Software Development</li>
          <li>Programming and Implementation</li>
          <li>Software as a Service (SaaS) featuring Artificial Intelligence Software for Software Development</li>
          <li>Software as a Service (SaaS) featuring Machine Learning Software</li>
          <li>Software as a Service (SaaS) featuring Deep Learning and Artificial Neural Networks</li>
          <li>Blockchain as a Service (BaaS)</li>
          <li>Software as a Service (SaaS) featuring Artificial Intelligence (AI) + Machine Learning (ML) + Deep Learning implementation (DL) in all Talspo Model Services</li>
          <small>
        We aim to provide innovative Talent Search solutions with the help of <b>Talfia - Your 
        Talent Finding Intelligent Assistance</b>
        </small>
        </div>

        <h6 style={{fontSize:"2vmax", color:"red", marginTop:"2vmax"}}>Coming Soon...</h6>
        
      </div>
      <Footer />
    </>
  )
}
export default Talfia