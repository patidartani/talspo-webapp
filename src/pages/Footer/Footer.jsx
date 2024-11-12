import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer-main'>
      <div className="top_add">
       <h6>
        <a href="/">Desclaimer</a> | <a href="/">Anti Spam Policy</a> | <a href="/">Legal Certification</a> | <a href="/">IPR Compilance & Other Compilance</a> | <a href="/">GPR Compilance</a> | <a href="/">EULA</a>
       </h6>
      </div>
    <div className="footer-page">
{/* ---------------------------------------------------------- */}
              <div className="f-one">
                   <div className="logo">
                    <img src="https://talspo.com/img/logo-icon.png" alt="" />
                   </div>
                   <h6> TALSPO <br />EXPLORE.SPOT.CONNECT</h6>

              </div>
              <div className="f-two">
                  <div className="tp">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Terms Of Use</a>
                    <a href="">Cookie Policy</a>
                  </div>
                  <small> Talspo Private Limited © 2024 (All rights reserved)   </small>
              </div>
              <div className="f-three">
                     <h6>Developing In India,</h6>
                     <h6>Providing NEARBY Talent Connectivity Globally</h6>
              </div>


{/* ---------------------------------------------------------- */}
</div>
    <div className="f_btm">
       <h1>Total Visitors: <small>234567</small></h1>
    </div>
</div>
  )
}

export default Footer