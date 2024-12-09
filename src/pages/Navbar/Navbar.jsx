import React, { useState } from 'react';
import "./Navbar.css"; // Ensure this path is correct
import mainLogo from "../../assets/images/NewmainLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import talspoIcon from "../../assets/images/talspoIcon.png"
import { FaGlobe } from "react-icons/fa";

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux-toolkit/slices/authSlice'; // Clear user action

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavActive, setIsNavActive] = useState(false);
  const [isAboutDropdownVisible, setIsAboutDropdownVisible] = useState(false);
  const [isJoinDropdownVisible, setIsJoinDropdownVisible] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);
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

  const handleServicesMouseEnter = () => setIsServicesDropdownVisible(true);
  const handleServicesMouseLeave = () => setIsServicesDropdownVisible(false);

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

  // -------------------------responsive code----------------------------------
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isJoinDropdownOpen, setIsJoinDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleJoinDropdown = () => {
    setIsJoinDropdownOpen(!isJoinDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  // -------------------------responsive code----------------------------------

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
                    <Link to="/faq">FAQs</Link>
                    <Link to="/our-team">Our Team</Link>
                    <Link to="/achievements">Achievements</Link>
                    <Link to="/how-we-work">How We Work</Link>
                    <Link to="/talspo-search">Talspo Search AI</Link>
                    <Link to="/talspo-api">Talspo API</Link>
                    <Link to='/'>Talspo Affiliate Programe</Link>
                    <Link to="/talfia">Talfia</Link>
                  </div>
                )}

                {/* -------------------about responsive--------------------- */}
                <div className="about-dropdown-responsive" style={{ fontSize: '2.5vmax', fontWeight: '500' }}>
                  <div className='hed' onClick={toggleAboutDropdown} style={{ cursor: 'pointer'}}>
                    <Link to="" style={{ marginRight: '0.5rem', textDecoration: 'none'}}>About</Link>
                    {isAboutDropdownOpen ? <FaChevronUp style={{ fontSize: '1em' }} /> : <FaChevronDown style={{ fontSize: '1em' }} />}
                  </div>

                  {isAboutDropdownOpen && (
                    <div className='boox' style={{ marginTop: '0.3rem', marginLeft:"1.5vmax" }}>
                      <Link to="/about-us" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>About Us</Link>
                      <Link to="/faq" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax"  }}>FAQs</Link>
                      <Link to="/our-team" style={{ display: 'block', marginTop: '0.2rem' , fontSize:"1.9vmax" }}>Our Team</Link>
                      <Link to="/achievements" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax"  }}>Achievements</Link>
                      <Link to="/how-we-work" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax"  }}>How We Work</Link>
                      <Link to="/" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax"  }}>Talspo Search AI</Link>
                      <Link to="/" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax"  }}>Talspo API</Link>
                      <Link to="/" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax"  }}>Talspo Affiliate Programe</Link>
                      <Link to="/" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax"  }}>Talfia</Link>


                    </div>
                  )}
                </div>

                {/* -------------------about responsive end--------------------- */}


              </div>

              <div
                className="services"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Link id='res-hide' to=''>Services</Link>
                {isServicesDropdownVisible && (
                  <div className="services-dropdown">
                    <Link to="/services">Services</Link>
                    <Link to="/student-service">Students/Learner Model Services</Link>
                    <Link to="/professional-service">Professional + Trainers Model Services</Link>
                    <Link to="/corporate-service">Corporate + Organization Model Services</Link>
                    <Link to="/co-working">Co-Working Spaces + Co-works & Co-live & Events Model Services</Link>
                  </div>
                )}
                 {/* -----------------------service--responsive--------------- */}
                    
                 <div className="service-dropdown-responsive" style={{ fontSize: '2.5vmax', fontWeight: '500' }}>
        <div onClick={toggleServicesDropdown} style={{ cursor: 'pointer' }}>
          <Link to="" style={{ marginRight: '0.5rem', textDecoration: 'none' }}>Services</Link>
          {isServicesDropdownOpen ? <FaChevronUp style={{ fontSize: '1em' }} /> : <FaChevronDown style={{ fontSize: '1em' }} />}
        </div>

        {isServicesDropdownOpen && (
          <div className='' style={{ marginTop: '0.2rem', marginLeft:"1.5vmax" }}>
            <Link to="/services" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Services</Link>
            <Link to="/student-service" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Students/Learner Model Services</Link>
            <Link to="/professional-service" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Professional + Trainers Model Services</Link>
            <Link to="/corporate-service" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Corporate + Organization Model Services</Link>
            <Link to="/co-working" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Co-Working Spaces + Co-works & Co-live & Events Model Services</Link>
          </div>
        )}
      </div>

                 {/* -----------------------service--responsive--------------- */}
             

              </div>

              {/* Join Us Section */}
              <div
                className="join-us"
                onMouseEnter={handleJoinMouseEnter}
                onMouseLeave={handleJoinMouseLeave}
              >
                <Link id='res-hide' to="">Join</Link>
                {isJoinDropdownVisible && (
                  <div className="join-dropdown">
                    {/* <Link to="/join">Join Us</Link> */}
                    <Link to="/opportunities">Find Opportunities</Link>
                    <Link to="/partners">Do Partnership</Link>
                    <Link to="/tca">
                      Talspo Campus Ambassador</Link>

                  </div>
                )}
                {/* -----------------------joinn responsive------------- */}
                <div className="join-dropdown-responsive" style={{ fontSize: '2.5vmax', fontWeight: '500' }}>
                  <div onClick={toggleJoinDropdown} style={{ cursor: 'pointer' }}>
                    <Link to="" style={{ marginRight: '0.5rem', textDecoration: 'none' }}>Join</Link>
                    {isJoinDropdownOpen ? <FaChevronUp style={{ fontSize: '1em' }} /> : <FaChevronDown style={{ fontSize: '1em' }} />}
                  </div>

                  {isJoinDropdownOpen && (
                    <div style={{ marginTop: '0.2rem', marginLeft:"1.5vmax" }}>
                      {/* <Link to="/join-us" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Join Us</Link> */}
                      <Link to="/opportunities" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Find Opportunities</Link>
                      <Link to="/partners" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>Do Partnership</Link>
                      <Link to="/tca" style={{ display: 'block', marginTop: '0.2rem', fontSize:"1.9vmax" }}>TCA</Link>
                    </div>
                  )}
                </div>
                {/* -----------------------joinn responsive------------- */}

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
