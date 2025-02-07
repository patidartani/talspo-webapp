import "./Footer.css";
import talspoIcon from "/assets/images/logo-icon.png"


const Footer = () => {
  const currentYear = new Date().getFullYear();
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
            <img src={talspoIcon} alt="" />
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
          <small> Talspo Private Limited © {currentYear} (All rights reserved) </small>
          </div>
        <div className="f-three">
          <h6>Developing In India(Bharat),</h6>
          <h6>Providing NEARBY Talent Connectivity Globally</h6>
        </div>

        {/* ---------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Footer;
