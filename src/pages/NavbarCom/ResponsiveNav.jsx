import React, { useState } from 'react';
import './ResponsiveNav.css';
import talspoIcon from "../../assets/images/logo-icon.png"
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import NavHigh from './NavHigh';
import NavModel from './NavModel';
import { useNavigate } from 'react-router-dom';


const ResponsiveNav = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
     navigate("/")
  }

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
// -----------------------------------------------------------------------
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const closeSearch = () => {
    setIsSearchOpen(false);
  };
// -----------------------------------------------------------------------
  return (
   <>
     <div className="ResponsiveNav-content">
     <div className="nav-highlight">
        <NavHigh />
      </div>
      <div className="responsive">
        <div className="res-logo"  onClick={homeHandler}>
          <img src="https://talspo.com/img/logo-beta.png" alt="" />
        </div>
        <div className="res-btn">
          <button>Sign In</button>
        </div>
        <div className="res-search-icon" onClick={toggleSearch}>
        <i className="ri-search-line"></i>
      </div>
      {/* After Search Click */}
      {isSearchOpen && (
        <div className="after-search-click">
          <div className="after-l">
            <div className="input-containers">
              <input
                type="text"
                placeholder="Search Here..."
                className="search-inputs"
              />
              <img
                src={talspoIcon}
                alt="Talspo Icon"
                className="search-icon-ends"
              />
            </div>
          </div>
          <div className="res-search-cros" onClick={closeSearch}>
            <i className="ri-close-fill"></i>
          </div>
        </div>
      )}
        {/* ---------------------second-search-end------------------- */}
        <div className="res-menu" onClick={toggleSidebar}>
          <FaBars className="res-menu-i" />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`responsive-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="res-side">
          <div className="res-cross-i" onClick={toggleSidebar}>
            <i className="ri-close-large-fill"></i>
          </div>
          <Link style={{color:"red"}}  to="/talspo-here" className="nav-link">
             <span>            Talspo Here             </span>
          </Link>
          {/* About Us with Submenu */}
          <div  className="nav-link submenu">
            <span>About</span>
            <ul className="submenu-list">
              <li>
                                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/achievements">Achievements</Link>
              </li> <li>
                <Link to="/how-we-work">How We Work</Link>
              </li> <li>
                <Link to="/talspo-search">Talspo Search AI</Link>
              </li>
              <li>
                <Link to="/talspo-api">Talspo AI</Link>
              </li><li>
                <Link to="/talspo-affiliate">Talspo Affiliate Program</Link>
              </li><li>
                <Link to="/talfia">Talfia (*sub-brand of Talspo)</Link>
              </li>
            </ul>
          </div>
          {/* Services with Submenu */}
          <div className="nav-link submenu">
            <span>Services</span>
            <ul className="submenu-list">
              <li style={{listStyle:"none"}}>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/student-service">Students/Learner Model Service</Link>
              </li>
              <li>
                <Link to="/professional-service">Professional + Trainers Model Service</Link>
              </li>
              <li>
                <Link to="/corporate-service">Corporate + Organizations Model Services</Link>
              </li> <li>
                <Link to="/co-working">Co-Working Spaces and Events Model Services</Link>
              </li>
            </ul>
          </div>
          {/* Join Us with Submenu */}
          <div className="nav-link submenu">
            <span>Join</span>
            <ul className="submenu-list">
            <li>
                <Link to="/join">Join Us</Link>
              </li>
              <li>
                <Link to="/opportunities">Find Opportunities</Link>
              </li>
              <li>
                <Link to="/partners">Do Partnership</Link>
              </li>
              <li>
               <Link to="/tca">Talspo Campus Ambassador</Link>
              </li>
            </ul>
          </div>
          <Link to="/blog" className="nav-link">
             <span>            Blogs           </span>
          </Link>
          <Link to="/contact-us" className="nav-link">
             <span>       Contact            </span>
          </Link>
        </div>
      </div>
      {/* ---------model-------------- */}
      <div className="model-dropdown">
      <NavModel />
      </div>

    </div>
   </>
  );
};
export default ResponsiveNav;
