import React from 'react'
import "./TalspoHere.css"
import LogoImg from "../../assets/images/talspoIcon.png"
import Navbar from '../../pages/Navbar/Navbar'
import Footer from "../../pages/Footer/Footer"


const TalspoHere = () => {
  return (
<>
<Navbar />
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
<Footer />
</>
  )
}

export default TalspoHere