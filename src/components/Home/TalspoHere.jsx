import React from 'react'
import "./TalspoHere.css"
import LogoImg from "/assets/images/talspoIcon.png"
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import { useNavigate } from 'react-router-dom'

const TalspoHere = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate('/')
  }
  return (
    <>
      <NavbarContainer />
      <div className="talspo-p">
      <p  style={{marginTop:"8vmax"}}>Let’s YOU experience the power of our advance technology enabled Talent Discovery Tool, with 
letting you not even registration on our platform, TRUST us and we let you decide to register on our 
platform with your valuable personal data that we do respect it to be protected with data 
protection legal terms <a href="/gdbr-policy">(*read our user data protection compliance, user policy agreement and 
  international reorganization user data protection certification here)</a>.</p>
      </div>
     
      <div className='TalspoHere-main'>
        <div className="Talspo-page">
          {/* ---------------------------- */}
          <div className="talspo-text">
            <h5>TALSPO HERE!</h5>
            <h6> TO FIND TALENTED PEOPLE NEARBY</h6>
            <div className="talspo-search">
              <input type="text" placeholder="Search for Designers, Developers..." className="search-input" />
              <img src={LogoImg} alt="search" className="search" />
            </div>
            <p>or choose one below</p>
            <div className="map4">
              <button><a href="">GRAPHICS<br />DESIGNER</a></button>
              <button><a href="">CONTENT <br /> WRITER</a></button>
              <button><a href="">FRONTEND  <br /> DEVELOPER</a></button>
              <button><a href="">DIGITAL <br /> MARKETER</a></button>

            </div>
          </div>

        </div>
      </div>

      <div className="talspo-here-last">
         <h6>Coming Soon....</h6>
         <button onClick={homeHandler}>
          Go to Home
         </button>
      </div>
      <Footer />
    </>
  )
}

export default TalspoHere