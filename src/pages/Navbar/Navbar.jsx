import React, { useState } from 'react';
import "./Navbar.css"; // Ensure this path is correct
import mainLogo from "../../assets/images/telspo-logo.png"; // Ensure logo path is correct
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavActive, setIsNavActive] = useState(false);
  const [isAboutDropdownVisible, setIsAboutDropdownVisible] = useState(false);
  const [isJoinDropdownVisible, setIsJoinDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const homeHandler = () => {
    navigate('/');
  };

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleAboutMouseEnter = () => setIsAboutDropdownVisible(true);
  const handleAboutMouseLeave = () => setIsAboutDropdownVisible(false);

  const handleJoinMouseEnter = () => setIsJoinDropdownVisible(true);
  const handleJoinMouseLeave = () => setIsJoinDropdownVisible(false);

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      if (location.pathname === '/signin') {
        navigate('/signup');
      } else {
        navigate('/signin');
      }
    }
  };

  return (
    <div className="Navbar-main">
      <div className="navbar-page">
        <div className="nav-left">
          <div onClick={homeHandler} className="logo">
            <img src={mainLogo} alt="Logo" />
          </div>
        </div>
        <div className="nav-mid">
          <div className="search-container">
            <i className="ri-search-line search-icon"></i>
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>

        <div className="nav-right">
          <div className={`links ${isNavActive ? 'active' : ''}`}>
            <div className="close-icon" onClick={toggleNav}>
              <i className="ri-close-line"></i>
            </div>

            <div className="link-item">
              {/* About Us Section */}
              <div 
                className="about-us"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <Link id='res-hide' to="">About Us</Link>
                {isAboutDropdownVisible && (
                  <div className="about-dropdown">
                    <Link to="/about-us">About Us</Link>
                    <Link to="/faq">FAQs</Link>
                    <Link to="/our-team">Our Team</Link>
                    <Link to="/achievements">Achievements</Link>
                    <Link to="/how-we-work">How We Work</Link>
                  </div>
                )}
                <div className="about-dropdown-responsive">
                  <Link to="/faq">About Us</Link>
                  <Link to="/faq">FAQs</Link>
                  <Link to="/our-team">Our Team</Link>
                  <Link to="/achievements">Achievements</Link>
                  <Link to="/how-we-work">How We Work</Link>
                </div>
              </div>

              <Link to="/services">Services</Link>

              {/* Join Us Section */}
              <div 
                className="join-us"
                onMouseEnter={handleJoinMouseEnter}
                onMouseLeave={handleJoinMouseLeave}
              >
                <Link id='res-hide' to="">Join Us</Link>
                {isJoinDropdownVisible && (
                  <div className="join-dropdown">
                    <Link to="/join">Join Us</Link>
                    <Link to="/jobs">Find Opportunities</Link>
                    <Link to="/partners">Do Partnership</Link>
                  </div>
                )}
                <div className="join-dropdown-responsive">
                  <Link to="/join-us">Join Us</Link>
                  <Link to="/jobs">Find Opportunities</Link>
                  <Link to="/partners">Do Partnership</Link>
                </div>
              </div>

              <Link to="/blog">Blog</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>

            <div className="sign-in-btn">
              <button onClick={handleAuthButtonClick}>
                {isLoggedIn ? 'LOG OUT' : (location.pathname === '/signin' ? 'SIGN UP' : 'SIGN IN')}
              </button>
            </div>
          </div>

          <div className="menu-icon" onClick={toggleNav}>
            <i className={`ri-menu-line ${isNavActive ? 'hide' : ''}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
