import React, { useState } from 'react';
import "./Navbar.css"; // Ensure this path is correct for your project
import mainLogo from "../../assets/images/telspo-logo.png"; // Ensure this path is correct for your logo
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false); // State to manage nav visibility
  const [isAboutDropdownVisible, setIsAboutDropdownVisible] = useState(false); // State for About dropdown

  const toggleNav = () => {
    setIsNavActive(!isNavActive); // Toggle nav visibility
  };

  const handleMouseEnter = () => {
    setIsAboutDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsAboutDropdownVisible(false);
  };

  return (
    <div className="Navbar-main">
      <div className="navbar-page">
        <div className="nav-left">
          <div className="logo">
            <img src={mainLogo} alt="" />
          </div>
        </div>

        <div className="nav-mid">
          <div className="search-container">
            <i className="ri-search-line search-icon"></i>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>

        <div className="nav-right">
          <div className={`links ${isNavActive ? 'active' : ''}`}>
            <div className="close-icon" onClick={toggleNav}>
              {/* Close icon */}
              <i className="ri-close-line"></i>
            </div>
            <div className="link-item">
              <div 
                className="about-us" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/about-us">About Us</Link>
                {isAboutDropdownVisible && (
                  <div className="about-dropdown">
                    <Link to="/faq">FAQs</Link>
                    <Link to="/our-team">Our Team</Link>
                    <Link to="/achievements">Achievements</Link>
                    <Link to="/how-we-work">How We Work</Link>

                  </div>
                )}
              </div>
              <Link to="/services">Services</Link>
              <Link to="/join-us">Join Us</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
            <div className="sign-in-btn">
              <button>Sign Up</button>
            </div>
          </div>

          <div className="menu-icon" onClick={toggleNav}>
            {/* Menu icon (hamburger icon) */}
            <i className={`ri-menu-line ${isNavActive ? 'hide' : ''}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
