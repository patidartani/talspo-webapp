import React, { useState, useEffect } from "react";
import "./Whowe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchTalspoSkilledView } from '../../apiService';

import talspoIcon from "../../assets/images/talspoIcon.png"

const Whowe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [sortOption, setSortOption] = useState("");

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


  // ----------------------------form-------------------------------------------
  const [countryCode, setCountryCode] = useState("+91"); // Default to India, change as needed
  const [meetingComfort, setMeetingComfort] = useState({
    yes: false,
    no: false
  });
  const [isJobOptionChecked, setIsJobOptionChecked] = useState(false); // State to track checkbox status
  const [jobDetails, setJobDetails] = useState({
    positionTitle: "",
    jobType: "",
    location: "",
    skillsExperience: "",
    resume: "",
    linkedinProfile: "",
  });

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleMeetingComfortChange = (e) => {
    const { name, checked } = e.target;
    setMeetingComfort((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleJobOptionCheckboxChange = (e) => {
    setIsJobOptionChecked(e.target.checked);
  };

  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="Whowe-main">
      {isModalOpen && (
        <div className="modal-overlay-slide">
          <div className="modal-content">

            <span className="modal-close" >
              <h5>Direct Connect Human Resources Executive</h5>
              <i onClick={closeModal} style={{ cursor: "pointer" }} className="ri-close-line"></i>
            </span>
            <form>
              {/* Row 1: Recruitment Purpose (Checkbox) */}
              <div className="e-ipt-checkbox full">
                <h6>Recruitment Purpose:</h6>
                <label>
                  <input type="checkbox" name="recruitmentPurposeNearby" />
                  For NEARBY (Geo-Location) Skilled Candidates
                </label>
                <label>
                  <input type="checkbox" name="recruitmentPurposeHR" />
                  For My Human Resource (HR)/ Talent Agency
                </label>
              </div>

              <div className="e-ipt-checkbox full">
                <label>
                  <input
                    type="checkbox"
                    name="getJob"
                    onChange={handleJobOptionCheckboxChange}
                  />
                  For Getting Job
                </label>
              </div>

              {/* Conditional Inputs for Job Options */}
              {isJobOptionChecked && (
                <>
                  <div className="e-ipt full">
                    <input
                      type="text"
                      name="positionTitle"
                      placeholder="Job Position Title"
                      value={jobDetails.positionTitle}
                      onChange={handleJobInputChange}
                    />
                  </div>
                  <div className="e-ipt full">
                    <input
                      type="text"
                      name="jobType"
                      placeholder="Job Type"
                      value={jobDetails.jobType}
                      onChange={handleJobInputChange}
                    />
                  </div>
                  <div className="e-ipt full">
                    <input
                      type="text"
                      name="location"
                      placeholder="Preferred Job Location"
                      value={jobDetails.location}
                      onChange={handleJobInputChange}
                    />
                  </div>
                  <div className="e-ipt full">
                    <input
                      type="text"
                      name="skillsExperience"
                      placeholder="Your Skills & Experience"
                      value={jobDetails.skillsExperience}
                      onChange={handleJobInputChange}
                    />
                  </div>
                  <div className="e-ipt full upload-resume">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleJobInputChange}
                    />
                    <label htmlFor="resume">
                      Upload Resume
                    </label>
                  </div>

                  <div className="e-ipt full">
                    <input
                      type="text"
                      name="linkedinProfile"
                      placeholder="Insert LinkedIn Profile Link"
                      value={jobDetails.linkedinProfile}
                      onChange={handleJobInputChange}
                    />
                  </div>
                </>
              )}

              {/* Row 3: Personal Information (Name + Date of Birth) */}
              <div className="e-ipt half">
                <input type="text" placeholder="First Name" name="firstName" />
              </div>
              <div className="e-ipt half">
                <input type="text" placeholder="Middle Name (Optional)" name="middleName" />
              </div>
              <div className="e-ipt half">
                <input type="text" placeholder="Last Name" name="lastName" />
              </div>
              <div className="e-ipt half">
                <input type="date" placeholder="Date of Birth" name="dob" />
              </div>

              {/* Row 4: Contact Information */}
              <div className="e-ipt full">
                <input type="email" placeholder="Email Id" name="email" />
              </div>

              {/* Row 5: WhatsApp Contact Number with Country Code */}
              <div className="e-ipt full">
                <div className="country-code-wrapper">
                  <select
                    name="countryCode"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="country-code-dropdown"
                  >
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+33">+33 (France)</option>
                    {/* Add other country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    placeholder="WhatsApp Contact Number"
                    name="whatsapp"
                    className="whatsapp-input"
                  />
                </div>
              </div>

              <div className="e-ipt full">
                <input type="text" placeholder="Current Location" name="currentLocation" />
              </div>

              <div className="e-ipt-checkbox full">
                <h6 className="mt-2">Are you comfortable using Zoom, G-meet, etc. for initial meetings if you are not able to visit our office?</h6>
                <label>
                  <input
                    className="mt-2"
                    type="checkbox"
                    name="yes"
                    checked={meetingComfort.yes}
                    onChange={handleMeetingComfortChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    className="mt-2"
                    type="checkbox"
                    name="no"
                    checked={meetingComfort.no}
                    onChange={handleMeetingComfortChange}
                  />
                  No
                </label>
              </div>

              <div className="e-ipt-checkbox full">
                <h6>Consent <span style={{ color: 'red' }}>*</span>:</h6>
                <label>
                  <input className="mt-2" type="checkbox" name="consent" required />
                  Agree to be contacted by Talspo via WhatsApp, SMS, Phone, Email, etc.
                </label>
              </div>

              <div className="e-ipt-checkbox full">
                <h6>Subscribe:</h6>
                <label>
                  <input className="mt-2" type="checkbox" name="subscribe" />
                  Agree to receive the latest news regarding Talspo services, such as recruitment, talent acquisition, HR transformation, and technology services (AI, machine learning, blockchain, etc.) in HR, skill training, development, and events.
                </label>
              </div>

              {/* Submit Button */}
              <div className="e-ipt full">
                <button type="submit">Submit</button>
              </div>
            </form>

          </div>
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
