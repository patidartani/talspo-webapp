import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="top_add">
        <h6>
          <a href="/disclaimer"> Disclaimer</a> |
          <a href="/anti-spam-policy"> Anti Spam Policy</a> |
          <a href="/legal-certificate"> Legal Certification</a> |
          <a href="/dmca-policy"> IPR Compilance & Other Compilance</a> |
          <a href="/gdbr-policy"> GPR Compilance</a> |
          <a href="/eula-policy"> EULA</a>
        </h6>
      </div>
      <div className="footer-page">
        {/* ---------------------------------------------------------- */}
        <div className="f-one">
          <div className="logo">
            <img src="https://talspo.com/img/logo-icon.png" alt="" />
          </div>
          <h6>
          
            TALSPO <br />
            EXPLORE.SPOT.CONNECT
          </h6>
        </div>
        <div className="f-two">
          <div className="tp">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/term-condition">Terms & Conditions</a>
            <a href="/term-of-use">Terms Of Use</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
          <small> Talspo Private Limited © 2024 (All rights reserved) </small>
        </div>
        <div className="f-three">
          <h6>Developing In India(Bharat),</h6>
          <h6>Providing NEARBY Talent Connectivity Globally</h6>
        </div>

        {/* ---------------------------------------------------------- */}
      </div>
      <div className="f_btm">
        <h1>
          Total Visitors: <small>234567</small>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
