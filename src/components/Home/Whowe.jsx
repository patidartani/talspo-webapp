import React, { useState, useEffect } from "react";
import "./Whowe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchTalspoSkilledView } from '../../apiService';
import talspoIcon from "../../assets/images/talspoIcon.png"
import FormHr from "./FormHr";

const Whowe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1150, // Add breakpoint for 1150px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Keep existing 600px breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await fetchTalspoSkilledView();
      setSkills(skillsData);
      setFilteredSkills(skillsData);
    };

    fetchSkills();
  }, []); 

  const [showFullMap, setShowFullMap] = useState(false);

  const toggleMapView = () => {
    setShowFullMap(!showFullMap);
  };

  const handleSearch = () => {
    const results = skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (skill.location.toLowerCase().includes(location.toLowerCase()) ||
        skill.pinCode.includes(location) ||
        skill.area.toLowerCase().includes(location.toLowerCase()) ||
        skill.city.toLowerCase().includes(location.toLowerCase()) ||
        skill.state.toLowerCase().includes(location.toLowerCase()) ||
        skill.country.toLowerCase().includes(location.toLowerCase()))
    );
    setFilteredSkills(results);
  };

  const convertCurrency = (amount, currency) => {
    return `${amount} ${currency}`;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };


  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedSkills = [...filteredSkills];
    if (value === "salary") {
      sortedSkills.sort((a, b) => b.salary - a.salary);
    } else if (value === "status") {
      sortedSkills.sort((a, b) => a.status.localeCompare(b.status));
    }

    setFilteredSkills(sortedSkills);
  };


  return (
    <div className="Whowe-main">
      {isModalOpen && (
        <div className="modal-overlay-slide">
         <FormHr closeModal={closeModal} />
        </div>
      )}

      <div className="who-page">
        <div className="who-btm">
          <h6>On Demand Skilled Candidates Nearby You</h6>
          <span style={{ marginLeft: "1vmax" }}>Find skilled candidates based on your requirements in real-time using geo-location enabled search for quick recruitment and talent acquisition.</span>

          <div className="search-bar-skill">
            <div className="skill-ipt">
              <input
                type="text"
                placeholder="Search for Developers, Designers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
            </div>
            <div className="skill-ipt">
              <input
                type="text"
                placeholder="Search by Location (Pin Code, Area, City, etc.)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
            </div>
            <div className="sort-dropdown">
              <select onChange={(e) => handleSort(e)} value={sortOption}>
                <option value="" disabled>Sort by</option>
                <option value="jobType"> Experience</option>
                <option value="salary">Trusted/Verified Candidates</option>
                <option value="active">Actively Looking</option>
              </select>
            </div>
            <div className="skill-btn">
              <button onClick={handleSearch}>Search</button>
            </div>

          </div>

          {/* -------------responsive-skill--------- */}
          <div className="search-bar-skill-responsive">
            <div className="skill-ipt">
              <input
                type="text"
                placeholder="Search for Developers,Designers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
            </div>
            <div className="skill-ipt">
              <input
                type="text"
                placeholder="Search by Location (Pin Code, Area, City, etc.)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
            </div>
            <div className="sort-dropdown">
              <select onChange={(e) => handleSort(e)} value={sortOption}>
                <option value="">Sort by</option>
                <option value="jobType"> Experience</option>
                <option value="salary">Trusted/Verified Candidates</option>
              </select>
            </div>
            <div className="skill-btn">
              <button onClick={handleSearch}>Search</button>
            </div>

          </div>

          {/* -------------------------------------------- */}
          <div className="who-slide">
            <div className="slider-container">
              <Slider {...settings}>
                {filteredSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="w-box">
                      <img src={skill.image} alt={skill.name} />
                      <div className="text-panel">
                        <h5>{skill.title}</h5>
                        <p>{skill.description}</p>
                        <div className="ss">
                          <small>Salary: {skill.salary}</small>
                          <small>Status: {skill.status}</small>
                        </div>

                        <div className="hh">
                          <span>Location: {skill.location}</span>
                          <span>Job Type : {skill.jobtype}</span>
                        </div>

                        <button className="get" onClick={openModal}>Connect</button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="home-map">
              {!showFullMap && (
                <div className="map-arrow-icon">
                  <h6 onClick={toggleMapView}>
                    Show Full Map</h6>
                </div>
              )}

              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />

              {/* Overlay Full Map View */}
              {showFullMap && (
                <div className="map-overlay">
                  <div className="map-overlay-content">
                    <span className="map-overlay-close" onClick={toggleMapView}>
                      <i className="ri-close-line"></i> {/* Close icon */}
                    </span>
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?..."
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Whowe;
