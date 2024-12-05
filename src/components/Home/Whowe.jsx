import React, { useState, useEffect, useRef } from "react";
import "./Whowe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchTalspoSkilledView, fetchSearchSuggestions } from "../../apiService";
import talspoIcon from "../../assets/images/talspoIcon.png";
import FormHr from "./FormHr";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Whowe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [showFullMap, setShowFullMap] = useState(false);
  const smallMapRef = useRef(null);
  const fullMapRef = useRef(null);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const toggleMapView = () => setShowFullMap(!showFullMap);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const removeDuplicates = (skills) => {
    const uniqueSkills = skills.filter(
      (skill, index, self) =>
        index === self.findIndex((s) => s.id === skill.id)
    );
    return uniqueSkills;
  };
  

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await fetchTalspoSkilledView();
      console.log("Skills Before Removing Duplicates:", skillsData);
    
      const uniqueSkills = removeDuplicates(skillsData);
      console.log("Unique Skills:", uniqueSkills);
    
      setSkills(uniqueSkills);
      setFilteredSkills(uniqueSkills);
    
      // Continue processing for coordinates if needed
      const updatedSkills = await Promise.all(
        uniqueSkills.map(async (skill) => {
          const coordinates = await getCoordinates(skill.location);
          return {
            ...skill,
            longitude: coordinates[0],
            latitude: coordinates[1],
          };
        })
      );
    
      console.log("Updated Skills with Coordinates:", updatedSkills);
      setFilteredSkills(updatedSkills);
    };
    

    fetchSkills();
  }, []);

  const getCoordinates = async (location) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoidGFsc3BvZ3JvdXAiLCJhIjoiY2pxb3ZsZ2V3MWs1ZjQ5cW50cDVmMHB4ciJ9.-7furrxLVkKCZez2khUFqA`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      return data.features[0].geometry.coordinates; // [longitude, latitude]
    }
    return [0, 0]; // Fallback coordinates
  };

  useEffect(() => {
    if (smallMapRef.current || fullMapRef.current) {
      mapboxgl.accessToken =
        "pk.eyJ1IjoidGFsc3BvZ3JvdXAiLCJhIjoiY2pxb3ZsZ2V3MWs1ZjQ5cW50cDVmMHB4ciJ9.-7furrxLVkKCZez2khUFqA";

      const map = new mapboxgl.Map({
        container: showFullMap ? fullMapRef.current : smallMapRef.current,
        center: [78.9629, 20.5937], // Default center
        zoom: 4,
      });

      map.on("style.load", () => {
        filteredSkills.forEach((skill) => {
          if (skill.longitude && skill.latitude) {
            const marker = new mapboxgl.Marker({
              element: createSalaryMarker(skill.salary),
            })
              .setLngLat([skill.longitude, skill.latitude])
              .setPopup(
                new mapboxgl.Popup({ className: "custom-popup" }).setHTML(`
                  <div>
                    <img src="${skill.image}" alt="Skill Image" style="width: 100%; height: auto;" />
                    <p style="margin-bottom: 8px;"><strong>${skill.title}</strong></p>
                    <p style="margin-bottom: 8px;"><strong>Description:</strong> ${skill.description}</p>
                    <div  style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 5px;">
                     <p style="margin-bottom: 8px;"><strong>Salary:</strong> ₹${skill.salary}</p>
                    <p style="margin-bottom: 8px;"><strong>Status:</strong> ${skill.status}</p>
                    <p style="margin-bottom: 8px;"><strong>Location:</strong> ${skill.location}</p>
                    </div>
                  </div>
                `)
              )
              .addTo(map);

            function createSalaryMarker(salary) {
              const markerDiv = document.createElement("div");
              markerDiv.className = "salary-marker";
              markerDiv.innerHTML = `<span class="salary-label">${salary}</span>`;
              return markerDiv;
            }

            const circleRadius = skill.salary / 1000;

            map.addLayer({
              id: `salary-circle-${skill.salary}`,
              type: "circle",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "Point",
                        coordinates: [skill.longitude, skill.latitude],
                      },
                      properties: {
                        salary: skill.salary,
                      },
                    },
                  ],
                },
              },
              paint: {
                "circle-radius": circleRadius,
                "circle-opacity": 0.6,
              },
            });
          }
        });
      });

      return () => map.remove();
    }
  }, [filteredSkills, showFullMap]);


  // ---------------------------------------------------------------------------
  const [suggestions, setSuggestions] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null); // Track selected title
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const data = await fetchSearchSuggestions(searchTerm, location);
        console.log("Fetched Suggestions:", data);
        setSuggestions(data.data.data); // Set the correct response data here
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if ((searchTerm && !selectedTitle) || (location && !selectedLocation)) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, location, selectedTitle, selectedLocation]);

  const handleTitleSelect = (selectedTitle) => {
    setSearchTerm(selectedTitle); // Set selected title to searchTerm
    setSelectedTitle(selectedTitle); // Track the selected title
    setSuggestions([]); // Clear suggestions after selection
    console.log("Selected Title:", selectedTitle); 
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation); // Set selected location to location input
    setSelectedLocation(selectedLocation); // Track the selected location
    setSuggestions([]); // Clear suggestions after selection
    console.log("Selected Location:", selectedLocation);
  };

  const handleSearch = async () => {
    try {
      const apiUrl = `https://dev.talspo.com/admin/api/search-filter?title=${encodeURIComponent(selectedTitle || "")}&location=${encodeURIComponent(selectedLocation || "")}`;
      console.log("API URL:", apiUrl);
  
      const response = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          // Add Authorization header if required
          // Authorization: "Bearer <your_token>",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Full API Response:", data);
  
      // Handle paginated data
      const skills = data?.data?.data || [];
      console.log("Fetched Skills:", skills);
  
      if (skills.length === 0) {
        console.log("No results found");
      }
  
      // Apply additional filtering (if required)
      const filteredSkills = skills.filter(skill => {
        return (
          (selectedTitle ? skill.title.includes(selectedTitle) : true) &&
          (selectedLocation ? skill.location.includes(selectedLocation) : true)
        );
      });
  
      console.log("Filtered Skills:", filteredSkills);
      setFilteredSkills(filteredSkills);
    } catch (error) {
      console.error("Error fetching filtered skills:", error);
    }
  };
  

  // ---------------------------------------------------------------------------

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
          <span style={{ marginLeft: "1vmax" }}>
            Find skilled candidates based on your requirements in real-time
            using geo-location enabled search for quick recruitment and talent
            acquisition.
          </span>

 {/* ----------------------------------------------------------------------------------------- */}

          <div className="search-bar-skill">
            <div className="skill-ipt">
              <input
                type="text"
                placeholder="Search for Developers, Designers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
              {searchTerm && !selectedTitle && Array.isArray(suggestions) && (
          <ul className="suggestions-list">
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => handleTitleSelect(item.title)}>
                {item.title} {/* Display title suggestions */}
              </li>
            ))}
          </ul>
        )}
            </div>
            <div className="skill-ipt"> 
              <input
                type="text"
                placeholder="Search by Location (Pin Code, Area, City, etc.)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
              {location && !selectedLocation && Array.isArray(suggestions) && (
          <ul className="suggestions-list">
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => handleLocationSelect(item.location)}>
                {item.location} {/* Display location suggestions */}
              </li>
            ))}
          </ul>
        )}

            </div>
            <div className="sort-dropdown">
              <select >
                <option value="" disabled>
                  Sort by
                </option>
                <option value="jobType"> Experience</option>
                <option value="salary">Trusted/Verified Candidates</option>
                <option value="active">Actively Looking</option>
              </select>
            </div>

            <div className="skill-btn">
            <button onClick={handleSearch}>Search</button>
            </div>
            
          </div>

 {/* ----------------------------------------------------------------------------------------- */}


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
              <select  value={sortOption}>
                <option value="">Sort by</option>
                <option value="jobType"> Experience</option>
                <option value="salary">Trusted/Verified Candidates</option>
              </select>
            </div>
            <div className="skill-btn">
              <button>Search</button>
            </div>
          </div>

          {/* -------------------------------------------- */}
          <div className="who-slide">
          <div className="slider-container">
  <Slider {...settings}>
    {filteredSkills.map((skill, index) => (
      <div key={`${skill.id}-${index}`}>
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
            </div>
            <span>Experience: {skill.experience}</span>
            <button className="get" onClick={openModal}>
              Connect
            </button>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

            <div className="home-map">
              <div
                ref={smallMapRef}
                style={{
                  width: "100%",
                  height: "450px",
                  visibility: showFullMap ? "hidden" : "visible", // Hide small map when full map is visible
                  position: "relative",
                }}
              >
                {/* Button to toggle full map */}
                <div className="toggle-map-icon" onClick={toggleMapView}>
                  {showFullMap ? (
                    <>
                      <FontAwesomeIcon icon={faChevronRight} /> Hide Map
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faChevronLeft} /> Show Full Map
                    </>
                  )}
                </div>
                <div className="toggle-map-icon" onClick={toggleMapView}>
                  {showFullMap ? (
                    <>
                      <FontAwesomeIcon icon={faChevronRight} /> Hide Map
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faChevronLeft} /> Show Full Map
                    </>
                  )}
                </div>
              </div>

              {/* Display the full map when `showFullMap` is true */}
              {showFullMap && (
                <div className="map-overlay">
                  <div className="map-overlay-content">
                    <span className="map-overlay-close" onClick={toggleMapView}>
                      <i className="ri-close-line"></i>
                    </span>
                    <div
                      ref={fullMapRef}
                      style={{
                        width: "100%",
                        height: "600px",
                        position: "relative",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whowe;
