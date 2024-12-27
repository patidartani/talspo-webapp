import  { useState, useEffect } from 'react';
import "./Navbar.css";
// import talspoIcon from "../../assets/logo-icon.png";
import talspoIcon from "../../assets/images/logo-icon.png"
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import NavModel from '../NavbarCom/NavModel';
import NavHigh from '../NavbarCom/NavHigh';
import axios from 'axios';


const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  const navigate = useNavigate();
  const homeHandler = () => {
     navigate("/")
  }

  const signUpHandler = () => {
    navigate("/signup")
  }

  // ---------------------search functionality--------------------------------

  const [searchQuery, setSearchQuery] = useState(''); // State for input query
  const [suggestions, setSuggestions] = useState([]); // State for search results

  // Fetch suggestions when the search query changes
  useEffect(() => {
    console.log("Search Query:", searchQuery);

    if (searchQuery.length > 0) {
      axios
        .get(`https://dev.talspo.com/admin/api/home-search?title=${searchQuery}`)
        .then((response) => {
          console.log("API Response:", response.data.data);
          console.log("new Response:", response.data.data.data);


          if (response.data.data && Array.isArray(response.data.data.data)) {
            setSuggestions(response.data.data); // Update suggestions
            console.log("Suggestions:", response.data.data); // Log the suggestions
          }
        })
        .catch((error) => {
          console.error('Error fetching search suggestions:', error);
        });
    } else {
      setSuggestions([]); // Clear suggestions if query is empty
      console.log("No search query. Suggestions cleared.");
    }
  }, [searchQuery]);
  // ---------------------search functionality--------------------------------

  
  return (
    <div className="Navbar-main">

<div className="nav-highlight">
 <NavHigh />
      </div>

      <div className="Navbar-content">
        {/* Logo Section */}
        <div style={{cursor:"pointer"}} className="side-logo"  onClick={homeHandler}>
          <img  src="https://talspo.com/img/logo-beta.png" alt="Talspo Logo" />
        </div>

        <div className="nav-mid-search">
        <div className="search-container">
          <i className="ri-search-line search-icon"></i>
          <input
            type="text"
            placeholder="Search Here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
            className="search-input"
          />
          <img src={talspoIcon} alt="Talspo Icon" className="search-icon-end" />
        </div>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="suggestion-item">
              <h4>{suggestion.title}</h4>
              <p>{suggestion.subtitle}</p>
            </div>
          ))}
        </div>
      )}


        <div className="nav-right">
          <div className="nav-links">
            <Link style={{color:"red"}} to="/talspo-here" className="nav-link">Talspo Here</Link>

            <div className="dropdown">
              <Link to="" className="nav-link">About</Link>
              <div className="dropdown-content">
                <Link to="/about-us">About Us</Link>
                <Link to="/faq">FAQs</Link>
                <Link to="/our-team">Our Team</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/how-we-work">How We Work</Link>
                <Link to="/talspo-search">Talspo Search AI</Link>
                <Link to="/talspo-api">Talspo AI</Link>
                <Link to="/talspo-affiliate">Talspo Affiliate Program</Link>
                <Link to="/talfia">Talfia (*sub-brand of Talspo)</Link>
              </div>
            </div>

            <div className="dropdown">
              <Link to="" className="nav-link">Services</Link>
              <div className="dropdown-content">
                <Link to="/services">Our Services</Link>
                <Link to="/student-service">Students/Learner Model Service</Link>
                <Link to="/professional-service">Professional + Trainers Model Service</Link>
                <Link to="/corporate-service">Corporate + Organizations Model Services</Link>
                <Link to="/co-working">Co-Working Spaces and Events Model Services</Link>
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

          <div className="language-selector">
            <div className="language-dropdown">
              <FaGlobe className="language-icon" />
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="language-select"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
              </select>
            </div>
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
