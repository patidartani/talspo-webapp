import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchTalspoSkilledView } from "../apiService";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Test.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Test = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [location, setLocation] = useState("");
  const [showFullMap, setShowFullMap] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null); // State to track selected skill
  const smallMapRef = useRef(null);
  const fullMapRef = useRef(null);

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

  const toggleMapView = () => {
    setShowFullMap(!showFullMap);
  };

  const getCoordinates = async (location) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoidGFsc3BvZ3JvdXAiLCJhIjoiY2pxb3ZsZ2V3MWs1ZjQ5cW50cDVmMHB4ciJ9.-7furrxLVkKCZez2khUFqA`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      return data.features[0].geometry.coordinates; // [longitude, latitude]
    }
    return [0, 0]; // Fallback coordinates if not found
  };

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await fetchTalspoSkilledView();
      setSkills(skillsData);
      setFilteredSkills(skillsData);

      // For each skill, fetch the coordinates based on the location
      const updatedSkills = await Promise.all(
        skillsData.map(async (skill) => {
          const coordinates = await getCoordinates(skill.location);
          return {
            ...skill,
            longitude: coordinates[0],
            latitude: coordinates[1],
          };
        })
      );

      setFilteredSkills(updatedSkills);
    };

    fetchSkills();
  }, []);

  // Initialize Mapbox map
  useEffect(() => {
    if (smallMapRef.current || fullMapRef.current) {
      mapboxgl.accessToken =
        "pk.eyJ1IjoidGFsc3BvZ3JvdXAiLCJhIjoiY2pxb3ZsZ2V3MWs1ZjQ5cW50cDVmMHB4ciJ9.-7furrxLVkKCZez2khUFqA";

      const map = new mapboxgl.Map({
        container: showFullMap ? fullMapRef.current : smallMapRef.current,
        center: [78.9629, 20.5937], // Default center
        zoom: 4,
      });

      // Wait for the style to load before adding layers
      map.on("style.load", () => {
        // Add markers and salary circles for each skill
        filteredSkills.forEach((skill) => {
          if (skill.longitude && skill.latitude) {
            // Construct the full image URL
            const imageUrl = skill.image.startsWith("http")
              ? skill.image
              : `https://dev.talspo.com/admin/public/storage/${skill.image}`;

            const marker = new mapboxgl.Marker({
              element: createSalaryMarker(skill.salary), // Custom marker element
            })
              .setLngLat([skill.longitude, skill.latitude])
              .setPopup(
                new mapboxgl.Popup({ className: "custom-popup" }).setHTML(`
                    <div>
                      <img src="${imageUrl}" alt="Skill Image" style="width: 100%; height: auto;" />
                      <p style="margin-bottom: 8px;"><strong>${skill.title}</strong></p>
                      <p><strong>Description:</strong> ${skill.description}</p>
                      <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 5px;">
                        <p style="margin-bottom: 8px;"><strong>Salary:</strong> ₹${skill.salary}</p>
                        <p style="margin-bottom: 8px;"><strong>Status:</strong> ${skill.status}</p>
                        <p style="margin-bottom: 8px;"><strong>Location:</strong> ${skill.location}</p>
                      </div>
                    </div>
                  `)
              )
              .addTo(map);

            // Function to create a custom marker with the salary symbol
            function createSalaryMarker(salary) {
              const markerDiv = document.createElement("div");
              markerDiv.className = "salary-marker"; // Custom class to style the marker

              // Add a label showing the salary
              markerDiv.innerHTML = `<span class="salary-label">${salary}</span>`;

              return markerDiv;
            }

            marker.getElement().addEventListener("click", () => {
              setSelectedSkill(skill);
            });
          }
        });
      });

      return () => map.remove();
    }
  }, [filteredSkills, showFullMap]);

  return (
    <div className="Whowe-main">
      <div className="who-page">
        <div className="who-btm">
          <div className="search-bar-skill">
            <div className="skill-ipt">
              <input
                type="text"
                placeholder="Search by Location (Pin Code, Area, City, etc.)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
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
                          <small>Salary: {skill.salary}</small>
                          <br />
                          <small>Status: {skill.status}</small>
                          <br />
                          <small>Location: {skill.location}</small>
                        </div>
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
        </div><div className="toggle-map-icon" onClick={toggleMapView}>
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

export default Test;
