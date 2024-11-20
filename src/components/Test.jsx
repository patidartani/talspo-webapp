// useEffect(() => {
//   // You can replace this with API fetch for real data
//   const initialSkills = [
//     {
//       name: "Web Developer",
//       salary: 60000,
//       currency: "USD",
//       description: "Builds and maintains websites. Ensures optimal user experience.",
//       img: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
//       status: "Full-Time",
//       location: "Remote",
//       pinCode: "12345",
//       area: "Downtown",
//       city: "New York",
//       state: "NY",
//       country: "USA"
//     },
//     {
//       name: "Data Scientist",
//       salary: 70000,
//       currency: "USD",
//       description: "Analyzes complex data sets. Provides actionable business insights.",
//       img: 'https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
//       status: "Contract",
//       location: "On-Site",
//       pinCode: "67890",
//       area: "Uptown",
//       city: "Los Angeles",
//       state: "CA",
//       country: "USA"
//     },
//     {
//       name: "9-to-5 Employee",
//       salary: 50000,
//       currency: "USD",
//       description: "Contributes to company goals. Works regular hours in a team environment.",
//       img: 'https://images.unsplash.com/photo-1664575599730-0814817939de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
//       status: "Part-Time",
//       location: "Hybrid",
//       pinCode: "112233",
//       area: "Midtown",
//       city: "Chicago",
//       state: "IL",
//       country: "USA"
//     },
//     {
//       name: "Entrepreneur",
//       salary: 80000,
//       currency: "USD",
//       description: "Starts and manages a business. Takes on various leadership roles.",
//       img: 'https://plus.unsplash.com/premium_photo-1661277816311-28cced31f998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
//       status: "Self-Employed",
//       location: "Variable",
//       pinCode: "33445",
//       area: "Business District",
//       city: "San Francisco",
//       state: "CA",
//       country: "USA"
//     },
//     {
//       name: "Networker",
//       salary: 55000,
//       currency: "USD",
//       description: "Builds relationships in the industry. Enhances career opportunities.",
//       img: 'https://images.unsplash.com/photo-1665686306265-c52ee9054479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fHww',
//       status: "Freelance",
//       location: "Remote",
//       pinCode: "99887",
//       area: "Virtual",
//       city: "Seattle",
//       state: "WA",
//       country: "USA"
//     },
//     {
//       name: "Digital Marketer",
//       salary: 65000,
//       currency: "USD",
//       description: "Promotes products online. Uses analytics for strategic marketing.",
//       img: 'https://media.istockphoto.com/id/2012746933/photo/cyber-security-black-man-and-code-reflection-in-eyewear-hacking-and-software-update-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bJxHjbTcJUx_GqkhBpHfUJuuQ0raaN3dJo1KIP4oaRE=',
//       status: "Part-Time",
//       location: "Hybrid",
//       pinCode: "44556",
//       area: "Tech Hub",
//       city: "Austin",
//       state: "TX",
//       country: "USA"
//     },
//     {
//       name: "Software Engineer",
//       salary: 95000,
//       currency: "USD",
//       description: "Develops applications and software systems for various purposes.",
//       img: 'https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       status: "Full-Time",
//       location: "Remote",
//       pinCode: "77777",
//       area: "Tech Park",
//       city: "Boston",
//       state: "MA",
//       country: "USA"
//     },
//     {
//       name: "Project Manager",
//       salary: 75000,
//       currency: "USD",
//       description: "Manages project timelines, resources, and team dynamics.",
//       img: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       status: "Contract",
//       location: "On-Site",
//       pinCode: "88999",
//       area: "Downtown",
//       city: "San Diego",
//       state: "CA",
//       country: "USA"
//     },
//     {
//       name: "Graphic Designer",
//       salary: 45000,
//       currency: "USD",
//       description: "Designs visual content for digital media and marketing.",
//       img: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       status: "Freelance",
//       location: "Remote",
//       pinCode: "55678",
//       area: "Creative Hub",
//       city: "Denver",
//       state: "CO",
//       country: "USA"
//     },
   
//   ];

//   setSkills(initialSkills);
//   setFilteredSkills(initialSkills); // Initially set to all skills
// }, []);

import React, { useState } from "react";
import Slider from "react-slick";
import talspoIcon from "../assets/images/talspoIcon.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Test.css'

const Test = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showFullMap, setShowFullMap] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = [
    {
      image: "path/to/image1.jpg",
      title: "Frontend Developer",
      description: "Expert in React.js, CSS, and HTML.",
      salary: "50,000 - 70,000",
      status: "Active",
      location: "New York",
      jobtype: "Full-Time",
    },
    {
      image: "path/to/image2.jpg",
      title: "Backend Developer",
      description: "Experienced in Node.js and Databases.",
      salary: "60,000 - 80,000",
      status: "Verified",
      location: "California",
      jobtype: "Part-Time",
    },
    // Add more skill objects here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = () => {
    // Search functionality here
    console.log("Searching for:", searchTerm, location, sortOption);
  };

  const toggleMapView = () => {
    setShowFullMap(!showFullMap);
  };

  const handleSalaryClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="who-page">
      <div className="who-btm">
        <h6>On Demand Skilled Candidates Nearby You</h6>
        <span style={{ marginLeft: "1vmax" }}>
          Find skilled candidates based on your requirements in real-time using geo-location enabled search for quick recruitment and talent acquisition.
        </span>

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
            <select onChange={handleSort} value={sortOption}>
              <option value="" disabled>
                Sort by
              </option>
              <option value="jobType">Experience</option>
              <option value="salary">Trusted/Verified Candidates</option>
              <option value="active">Actively Looking</option>
            </select>
          </div>
          <div className="skill-btn">
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

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
                        <small
                          style={{ cursor: "pointer", color: "blue" }}
                          onClick={() => handleSalaryClick(skill)}
                        >
                          Salary: {skill.salary}
                        </small>
                        <small>Status: {skill.status}</small>
                      </div>
                      <div className="hh">
                        <span>Location: {skill.location}</span>
                        <span>Job Type: {skill.jobtype}</span>
                      </div>
                      <button className="get">Connect</button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="home-map">
            {!showFullMap && (
              <div className="map-arrow-icon">
                <h6 onClick={toggleMapView}>Show Full Map</h6>
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

            {selectedSkill && (
              <div className="selected-skill-details">
                <div className="w-box">
                  <img src={selectedSkill.image} alt={selectedSkill.name} />
                  <div className="text-panel">
                    <h5>{selectedSkill.title}</h5>
                    <p>{selectedSkill.description}</p>
                    <div className="ss">
                      <small>Salary: {selectedSkill.salary}</small>
                      <small>Status: {selectedSkill.status}</small>
                    </div>
                    <div className="hh">
                      <span>Location: {selectedSkill.location}</span>
                      <span>Job Type: {selectedSkill.jobtype}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showFullMap && (
              <div className="map-overlay">
                <div className="map-overlay-content">
                  <span className="map-overlay-close" onClick={toggleMapView}>
                    <i className="ri-close-line"></i>
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
  );
};

export default Test;
