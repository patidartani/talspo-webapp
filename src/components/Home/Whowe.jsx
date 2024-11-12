import React, { useState, useEffect } from "react";
import "./Whowe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchTalspoSkilledView } from '../../apiService';

import talspoIcon from "../../assets/images/talspoIcon.png"

const Whowe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [skills, setSkills] = useState([]); // Store skills data
  const [searchTerm, setSearchTerm] = useState(""); // For searching skills
  const [location, setLocation] = useState(""); // For searching location
  const [filteredSkills, setFilteredSkills] = useState([]); // Filtered skills based on search
  const [sortOption, setSortOption] = useState(""); // Sorting based on salary, status, etc.
  const [mapView, setMapView] = useState(false); // Toggle map view for location display

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // You can replace this with API fetch for real data
    const initialSkills = [
      {
        name: "Web Developer",
        salary: 60000,
        currency: "USD",
        description: "Builds and maintains websites. Ensures optimal user experience.",
        img: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
        jobtype: "Full-Time",
        location: "Remote",
        pinCode: "12345",
        area: "Downtown",
        city: "New York",
        state: "NY",
        country: "USA"
      },
      {
        name: "Data Scientist",
        salary: 70000,
        currency: "USD",
        description: "Analyzes complex data sets. Provides actionable business insights.",
        img: 'https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
        jobtype: "Contract",
        location: "On-Site",
        pinCode: "67890",
        area: "Uptown",
        city: "Los Angeles",
        state: "CA",
        country: "USA"
      },
      {
        name: "9-to-5 Employee",
        salary: 50000,
        currency: "USD",
        description: "Contributes to company goals. Works regular hours in a team environment.",
        img: 'https://images.unsplash.com/photo-1664575599730-0814817939de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
        jobtype: "Part-Time",
        location: "Hybrid",
        pinCode: "112233",
        area: "Midtown",
        city: "Chicago",
        state: "IL",
        country: "USA"
      },
      
      {
        name: "Networker",
        salary: 55000,
        currency: "USD",
        description: "Builds relationships in the industry. Enhances career opportunities.",
        img: 'https://images.unsplash.com/photo-1665686306265-c52ee9054479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fHww',
        jobtype: "Freelance",
        location: "Remote",
        pinCode: "99887",
        area: "Virtual",
        city: "Seattle",
        state: "WA",
        country: "USA"
      },
      {
        name: "Digital Marketer",
        salary: 65000,
        currency: "USD",
        description: "Promotes products online. Uses analytics for strategic marketing.",
        img: 'https://media.istockphoto.com/id/2012746933/photo/cyber-security-black-man-and-code-reflection-in-eyewear-hacking-and-software-update-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bJxHjbTcJUx_GqkhBpHfUJuuQ0raaN3dJo1KIP4oaRE=',
        jobtype: "Part-Time",
        location: "Hybrid",
        pinCode: "44556",
        area: "Tech Hub",
        city: "Austin",
        state: "TX",
        country: "USA"
      },
      {
        name: "Software Engineer",
        salary: 95000,
        currency: "USD",
        description: "Develops applications and software systems for various purposes.",
        img: 'https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        jobtype: "Full-Time",
        location: "Remote",
        pinCode: "77777",
        area: "Tech Park",
        city: "Boston",
        state: "MA",
        country: "USA"
      },
      {
        name: "Project Manager",
        salary: 75000,
        currency: "USD",
        description: "Manages project timelines, resources, and team dynamics.",
        img: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        jobtype: "Contract",
        location: "On-Site",
        pinCode: "88999",
        area: "Downtown",
        city: "San Diego",
        state: "CA",
        country: "USA"
      },
      {
        name: "Graphic Designer",
        salary: 45000,
        currency: "USD",
        description: "Designs visual content for digital media and marketing.",
        img: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        jobtype: "Freelance",
        location: "Remote",
        pinCode: "55678",
        area: "Creative Hub",
        city: "Denver",
        state: "CO",
        country: "USA"
      },
     
    ];

    setSkills(initialSkills);
    setFilteredSkills(initialSkills); // Initially set to all skills
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

  const closeModal = () => {
    setIsModalOpen(false);
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
  <div className="modal-content">

    <span className="modal-close" >
    <h5>Contact With HR For More Enquiry</h5>
      <i onClick={closeModal} style={{ cursor: "pointer" }} className="ri-close-line"></i>
    </span>
    <form>
      {/* Row 1: Job Information */}
      <div className="e-ipt half">
        <input type="text" placeholder="Job Position Title" name="jobTitle" />
      </div>
      <div className="e-ipt half">
        <input type="text" placeholder="Job Type" name="jobType" />
      </div>

      {/* Row 2: Location & Skills */}
      <div className="e-ipt half">
        <input type="text" placeholder="Preferred Job Location" name="preferredLocation" />
      </div>
      <div className="e-ipt half">
        <input type="text" placeholder="Your Skills & Experience" name="skills" />
      </div>

      {/* Row 3: LinkedIn & Resume */}
      <div className="e-ipt full">
        <input type="url" placeholder="LinkedIn Profile Link" name="linkedin" />
      </div>
      <div className="e-ipt full">
        <input type="file" name="resume" />
      </div>

      {/* Row 4: Personal Information */}
      <div className="e-ipt half">
        <input type="text" placeholder="First Name" name="firstName" />
      </div>
      <div className="e-ipt half">
        <input type="text" placeholder="Last Name" name="lastName" />
      </div>

      {/* Row 5: Contact Information */}
      <div className="e-ipt full">
        <input type="email" placeholder="Email Id" name="email" />
      </div>
      <div className="e-ipt full">
        <input type="tel" placeholder="WhatsApp Contact Number (+Country Code)" name="whatsapp" />
      </div>

      {/* Row 6: Location and Meeting Preference */}
      <div className="e-ipt full">
        <input type="text" placeholder="Current Location" name="currentLocation" />
      </div>
     
      <div className="e-ipt-select full">
  <label>
    Comfortable with online meetings?
    <select name="onlineMeet">
      <option value="">Select an option</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </label>
</div>

<div className="e-ipt-checkbox full">
<h6>Consent:</h6>
        <label>
          <input type="checkbox" name="consent" />
          Agree to be contacted by Talspo via WhatsApp, SMS, Phone, Email, etc.
        </label>
      </div>
      
      {/* Checkbox for Subscribe */}
      <div className="e-ipt-checkbox full">
      <h6>Subscribe:</h6>
        <label>
          <input type="checkbox" name="subscribe" />
          Agree to receive the latest news regarding Talspo services, such as recruitment, talent acquisition, HR transformation, and technology services (AI, machine learning, blockchain, etc.) in HR, skill training, development, and events.
        </label>
      </div>


      <div className="e-ipt full">
        <button>Submit</button>
      </div>
    </form>
  </div>
    </div>
)}



      <div className="who-page">
        <div className="who-btm">
          <h6>On Demand Skilled Candidates Nearby You</h6>
          <span style={{marginLeft:"1vmax"}}>Find skilled candidates based on your requirements in real-time using geo-location enabled search for quick recruitment and talent acquisition.</span>

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
      <option value="">Sort by</option>
      <option value="jobType"> Experience</option>
      <option value="salary">Trusted/Verified Candidates</option>
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
                      <img src={skill.img} alt={skill.name} />
                      <div className="text-panel">
                        <h5>{skill.name}</h5>
                        <p>{skill.description}</p>
                        <div className="ss">
                          <small>Salary: {convertCurrency(skill.salary, skill.currency)}</small>
                          <small>Job-Type: {skill.jobtype}</small>
                        </div>
                        <span>Location: {skill.location}</span>
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
        <h6  onClick={toggleMapView}>
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
