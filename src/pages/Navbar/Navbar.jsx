import React, { useState } from 'react';
import "./Navbar.css"; // Ensure this path is correct
import mainLogo from "../../assets/images/NewmainLogo.png"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import talspoIcon from "../../assets/images/talspoIcon.png"
import { FaGlobe } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux-toolkit/slices/authSlice'; // Clear user action

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavActive, setIsNavActive] = useState(false);
  const [isAboutDropdownVisible, setIsAboutDropdownVisible] = useState(false);
  const [isJoinDropdownVisible, setIsJoinDropdownVisible] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Access the authentication state from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const homeHandler = () => {
    navigate('/');
  };

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };


  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prevState => !prevState); // Toggle open/close on each click of h6
  };

  const handleAboutMouseEnter = () => setIsAboutDropdownVisible(true);
  const handleAboutMouseLeave = () => setIsAboutDropdownVisible(false);

  const handleJoinMouseEnter = () => setIsJoinDropdownVisible(true);
  const handleJoinMouseLeave = () => setIsJoinDropdownVisible(false);

  const handleAuthButtonClick = () => {
    if (isAuthenticated) {
      dispatch(clearUser());
      navigate('/signin');
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
      <div className="nav-highlight">
        <span>Talspo Patent Technology: <a href="/about-us">Know More</a> </span> <span><a href="/opportunities">We Are Hiring </a></span> <span>Talspo AI - Nearby Skill Discovery Ecosystem: <a href="/about-us">Know More</a></span>
      </div>
      <div className="navbar-page">
        <div className="nav-left">
          <div onClick={homeHandler} className="logo">
            <img src={mainLogo} alt="Logo" />
          </div>
        </div>
        <div className="nav-mid">
          <div className="search-container">
            <i className="ri-search-line search-icon"></i>
            <input type="text" placeholder="Search Here..." className="search-input" />
            <img src={talspoIcon} alt="Talspo Icon" className="search-icon-end" /> {/* Add this line */}
          </div>

        </div>

        <div className="nav-right">
          <div className={`links ${isNavActive ? 'active' : ''}`}>
            <div className="close-icon" onClick={toggleNav}>
              <i className="ri-close-line"></i>
            </div>

            <div className="link-item">
              <Link style={{ color: "red" }} to="/talspo-here">Talspo Here</Link>

              {/* About Us Section */}
              <div
                className="about-us"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <Link id='res-hide' to="">About</Link>
                {isAboutDropdownVisible && (
                  <div className="about-dropdown">
                    <Link to="/about-us">About Us</Link>
                    <Link to="/">FAQs</Link>
                    <Link to="/our-team">Our Team</Link>
                    <Link to="/achievements">Achievements</Link>
                    <Link to="/how-we-work">How We Work</Link>

                  </div>
                )}
                <div className="about-dropdown-responsive">
                  <Link to="/faq">About Us</Link>
                  <Link to="/">FAQs</Link>
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
                <Link id='res-hide' to="">Join</Link>
                {isJoinDropdownVisible && (
                  <div className="join-dropdown">
                    <Link to="/join">Join Us</Link>
                    <Link to="/opportunities">Find Opportunities</Link>
                    <Link to="/partners">Do Partnership</Link>
                    <Link to="/tca"> Campus Ambassador</Link>

                  </div>
                )}
                <div className="join-dropdown-responsive">
                  <Link to="/join-us">Join Us</Link>
                  <Link to="/opportunities">Find Opportunities</Link>
                  <Link to="/partners">Do Partnership</Link>
                  <Link to="/tca">Campus Ambassador</Link>

                </div>
              </div>

              <Link to="/blog">Blog</Link>
              <Link to="/contact-us">Contact</Link>
            </div>

            <div className="sign-in-btn">
              {isAuthenticated ? (
                <div className="profile-container">
                  <span className="profile-name">{user?.name || 'Profile'}</span>
                  <i className="ri-user-3-fill"></i>
                </div>
              ) : (
                <button onClick={handleAuthButtonClick}>
                  {location.pathname === '/signin' ? 'SIGN UP' : 'SIGN IN'}
                </button>
              )}
            </div>

            <div className="language-selector">
              <FaGlobe className="globe-icon" />
              <select id="targetLang">
                <option value="en">Eng</option>
                <option value="es">Spa</option>
                <option value="fr">Hi</option>
              </select>
            </div>



          </div>

          <div className="menu-icon" onClick={toggleNav}>
            <i className={`ri-menu-line ${isNavActive ? 'hide' : ''}`}></i>
          </div>
        </div>



      </div>
      <div className="model-dropdown">
        <h6 onClick={handleToggle} style={{ cursor: "pointer" }}>Model Service</h6>
        {isOpen && (
          <div className="model-text">
            <img src={mainLogo} alt="Logo" />
            <small>
              Jobs Connect: <span style={{ color: "red" }}>Coming Soon...</span>
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
