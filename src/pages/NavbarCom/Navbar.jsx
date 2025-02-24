import { useState, useEffect } from 'react';
import "./Navbar.css";
import mainLogo from "/assets/images/NewMainLogo.png"
import talspoIcon from "/assets/images/logo-icon.png"
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavModel from '../NavbarCom/NavModel';
import NavHigh from '../NavbarCom/NavHigh';
import axios from 'axios';
import { BASE_URL } from '../../apiService';

const Navbar = () => {
  
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/")
  }

  const signUpHandler = () => {
    navigate("/signup")
  }

  // ---------------------search functionality--------------------------------

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); 

  useEffect(() => {

    if (searchQuery.length > 0) {
      axios
      .get(`${BASE_URL}/home-search?title=${searchQuery}`)
        .then((response) => {

          if (response.data.data && Array.isArray(response.data.data.data)) {
            setSuggestions(response.data.data.data); 

          }
        })
        .catch((error) => {
          console.error('Error fetching search suggestions:', error);
        });
    } else {
      setSuggestions([]);
      console.log("No search query. Suggestions cleared.");
    }
  }, [searchQuery]);

  const handleSuggestionClick = (id) => {
    navigate(`/view-detail/${id}`);
  };
  // ---------------------search functionality--------------------------------

  return (
    <div className="Navbar-main">

      <div className="nav-highlight">
        <NavHigh />
      </div>

      <div className="Navbar-content">
        {/* Logo Section */}
        <div style={{ cursor: "pointer" }} className="side-logo" onClick={homeHandler}>
          <img src={mainLogo} alt="Talspo Logo" />
        </div>

        <div className="nav-mid-search">
          <div className="search-container" style={{ position: "relative" }}>
            <i className="ri-search-line search-icon"></i>
            <input
              type="text"
              placeholder="Search Here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <img src={talspoIcon} alt="Talspo Icon" className="search-icon-end" />

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="suggestions-container">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion.id)}
                  >
                    <h6>{suggestion.title}</h6>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <Link style={{ color: "red" }} to="/talspo-here" className="nav-link">Talspo Here</Link>

            <div className="dropdown">
              <Link to="" className="nav-link">About</Link>
              <div className="dropdown-content">
                <Link to="/about-us">About Us</Link>
                <Link to="/faq">FAQs</Link>
                <Link to="/our-team">Our Team</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/how-it-works?">How It Works?</Link>
                <Link to="/talspo-search">Talspo Search AI</Link>
                <Link to="/talspo-api">Talspo API</Link>
                <Link to="/talspo-affiliate">Talspo Affiliate Program</Link>           
                <Link to="/talfia">Talfia (*sub-brand of Talspo)</Link>
              </div>
            </div>

            <div className="dropdown">
              <Link to="" className="nav-link">Services</Link>
              <div className="dropdown-content">
                <Link to="/services">Our Services</Link>
                <Link to="/service-detail/1">Students + Learner Model Service</Link>
                <Link to="/service-detail/2">Professional + Trainers Model Service</Link>
                <Link to="/service-detail/3">Corporate + Organizations Model Services</Link>
                <Link to="/service-detail/4">Co-Working Spaces and Events Model Services</Link>
              </div>
            </div>

            <div className="dropdown">
              <Link to="" className="nav-link">Join</Link>
              <div className="dropdown-content">
                <Link to="/join">Join Us</Link>
                <Link to="/opportunities">Find Opportunities</Link>
                <Link to="/partners">Do Partnership</Link>
                <Link to="/tca">Talspo Campus Ambassador</Link>
              </div>
            </div>

            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact-us" className="nav-link">Contact</Link>
          </div>

          
          <div className="nav-btns">
            <button onClick={signUpHandler} className="sign-in-btn-nav">Sign Up</button>
          </div>
        </div>
      </div>

      <div className="model-dropdown">
        <NavModel />
      </div>
    </div>
  );
};

export default Navbar;
