import React, { useState, useEffect, useRef } from "react";
import "./Whowe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchTalspoSkilledView } from "../../apiService";
import talspoIcon from "/assets/images/logo-icon.png";
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
  const [showFullMap, setShowFullMap] = useState(false);
  const smallMapRef = useRef(null);
  const fullMapRef = useRef(null);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const toggleMapView = () => setShowFullMap(!showFullMap);

  const apiUrl = "https://srninfotech.com/talspo/admin/api/search-filter";


  // -----------------------------------Currency Conversion api ----------------------------------------------------------

  const [selectedCurrencies, setSelectedCurrencies] = useState({});

  const handleCurrencyChange = (skillId, selectedCurrency) => {
    setSelectedCurrencies(prevState => ({
      ...prevState,
      [skillId]: selectedCurrency
    }));
  };

  const [currencyRates, setCurrencyRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_xz60droFw3MXDi34MEDxoivOeOlY20iDQIXKbJyq&currencies=INR%2CAED%2CEUR%2CUSD%2CSGD%2CGBP&base_currency=INR"
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message); 
          });
        }
        return response.json();
      })
      .then((data) => setCurrencyRates(data?.data || {})) 
      .catch((error) => {
        console.error("API Error:", error.message); 

        if (error.message === "You used all your monthly requests. Please upgrade your plan at https://app.currencyapi.com/subscription") {
          setError("Sorry, we have reached the request limit. Please try again later."); 
        } else {
          setError("Something went wrong. Please try again."); 
        }

        setCurrencyRates({}); // ✅ Empty object to prevent crashes
      });
  }, []);


  // --------------------------------------------------------------------------------------------------------------------
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 2000,
   
    responsive: [
      {
        breakpoint: 1050,
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
      const uniqueSkills = removeDuplicates(skillsData);

      setSkills(uniqueSkills);
      setFilteredSkills(uniqueSkills);

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

      setFilteredSkills(updatedSkills);
    };
    fetchSkills();
  }, []);
  // --------------------------------------geo location----------------------------------------------
    const [selectedNearby, setSelectedNearby] = useState('')

    const handleNearbyChange = (e) => {
      setSelectedNearby(e.target.value);
    };
    
    const getCurrentLocation = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => reject(error)
        );
      });
    };
    
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Radius of the Earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance;
    };
    

  // ---------------------------------------------------------------------------
  const [suggestions, setSuggestions] = useState({ 
          titles: [],
          locations: [],
          sortBy: {
            experience: [],
            actively_looking: [],
            verified: [],
          },
        });
        
        const [selectedSort, setSelectedSort] = useState('');  // Default value is empty string

        const handleSortChange = (e) => {
          const value = e.target.value;
          setSelectedSort(value); // Update selected sort state
          console.log("Selected Value:", value);
          handleSearch(); // Apply search with the updated sort
        };
        
        const fetchSuggestions = async (searchTerm, location, selectedSort) => {
          try {
            const response = await fetch(apiUrl, {
              headers: {
                "Content-Type": "application/json",
              },
            });
        
            if (!response.ok) {
              throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
        
            const data = await response.json();
        
            // Filter titles and locations based on search input
            let filteredTitles = data.titles;
            if (searchTerm) {
              filteredTitles = filteredTitles.filter((title) =>
                title.toLowerCase().includes(searchTerm.toLowerCase())
              );
            }
        
            let filteredLocations = data.locations;
            if (location) {
              filteredLocations = filteredLocations.filter((loc) =>
                loc.toLowerCase().includes(location.toLowerCase())
              );
            }
        
            // Filter sort response based on selected value
            let filteredSortData = selectedSort ? data.sort_by[selectedSort] || [] : [];
                
    
            // Update the suggestions state with filtered data
            setSuggestions({
              titles: filteredTitles,
              locations: filteredLocations,
              sortBy: filteredSortData, // Only selected value's data
            });
          } catch (error) {
            console.error("Error fetching suggestions:", error);
          }
        };
        
        const handleSearchTermChange = (e) => {
          setSearchTerm(e.target.value);
          fetchSuggestions(e.target.value, location);
        };
        
        const handleLocationChange = (e) => {
          setLocation(e.target.value);
          fetchSuggestions(searchTerm, e.target.value);
        };
        
        const handleTitleSelect = (title) => {
          setSearchTerm(title);
          setSuggestions({ titles: [], locations: [] });
        };
        
        const handleLocationSelect = (loc) => {
          setLocation(loc);
          setSuggestions({ titles: [], locations: [] });
        };

        
        const handleSearch = async () => {
          try {
            const { latitude: userLat, longitude: userLon } = await getCurrentLocation();
        
            const skillsWithDistance = skills.map((skill) => {
              const distance = calculateDistance(
                userLat,
                userLon,
                parseFloat(skill.latitude) || 0, // Ensure latitude is a valid number
                parseFloat(skill.longitude) || 0 // Ensure longitude is a valid number
              );
              return { ...skill, distance };
            });
        
            const sortedSkills = skillsWithDistance.sort((a, b) => a.distance - b.distance);
        
            // Ensure searchTerm and location are safe strings
            const safeSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";
            const safeLocation = location ? location.toLowerCase() : "";
        
            // **Fix: Check if skill.title and skill.location exist**
            let filtered = sortedSkills.filter((skill) => {
              const title = skill.title ? skill.title.toLowerCase() : "";
              const loc = skill.location ? skill.location.toLowerCase() : "";
              return title.includes(safeSearchTerm) && loc.includes(safeLocation);
            });
        
            // Apply sorting filters
            if (selectedSort === "actively_looking") {
              filtered = filtered.filter((skill) => skill.actively_looking === "yes");
            } else if (selectedSort === "verified") {
              filtered = filtered.filter((skill) => skill.verified === "true");
            } else if (selectedSort === "experience") {
              filtered = filtered.filter((skill) => skill.experience === "5+ Year");
            }
        
            setFilteredSkills(filtered);
          } catch (error) {
            console.error("Error in handleSearch:", error);
          }
        };
        
        
        
// ---------------------------------------------search functionality end --------------------------------------------------------------------------------------

  const getCoordinates = async (location) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoidGFsc3BvZ3JvdXAiLCJhIjoiY2pxb3ZsZ2V3MWs1ZjQ5cW50cDVmMHB4ciJ9.-7furrxLVkKCZez2khUFqA`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      return data.features[0].geometry.coordinates;
    }
    return [0, 0];
  };

  useEffect(() => {
    if (smallMapRef.current || fullMapRef.current) {
      mapboxgl.accessToken = "pk.eyJ1IjoidGFsc3BvZ3JvdXAiLCJhIjoiY2pxb3ZsZ2V3MWs1ZjQ5cW50cDVmMHB4ciJ9.-7furrxLVkKCZez2khUFqA";

      const map = new mapboxgl.Map({
        container: showFullMap ? fullMapRef.current : smallMapRef.current,
        center: [78.9629, 20.5937],
        zoom: 4,
      });

      map.on("style.load", () => {

        filteredSkills.forEach((skill, index) => {
          if (!skill.longitude || !skill.latitude) {
            skill.longitude = 78.9629;  
            skill.latitude = 20.5937;   
          }
          if (skill.longitude && skill.latitude) {
            const marker = new mapboxgl.Marker({
              element: createSalaryMarker(skill.title),
            })
              .setLngLat([skill.longitude, skill.latitude])
              .setPopup(
                new mapboxgl.Popup({ className: "custom-popup" }).setHTML(`
                  <div>
                    <img src="${skill.image}" alt="Skill Image" style="width: 100%; height: auto;" />
                    <p style="margin-bottom: 8px;"><strong>${skill.title}</strong></p>
                    <p style="margin-bottom: 8px;"><strong>Experience:</strong> ${skill.experience}</p>
                    <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 5px;">
                      <p style="margin-bottom: 8px;"><strong>Salary:</strong> ₹${skill.salary}</p>
                      <p style="margin-bottom: 8px;"><strong>Status:</strong> ${skill.status}</p>
                      <p style="margin-bottom: 8px;"><strong>Location:</strong> ${skill.location}</p>
                    </div>
                  </div>
                `)
              )
              .addTo(map);

            function createSalaryMarker(title) {
              const markerDiv = document.createElement("div");
              markerDiv.className = "salary-marker";
              markerDiv.innerHTML = `<span class="salary-label">${title}</span>`;
              return markerDiv;
            }

            const layerId = `salary-circle-${skill.title}-${index}`;
            if (!map.getLayer(layerId)) {
              map.addLayer({
                id: layerId,
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
                          salary: skill.title,
                        },
                      },
                    ],
                  },
                },
                paint: {
                  "circle-radius": 10,
                  "circle-color": "#FF5733",
                },
              });
            }
          } else {
            console.log("Invalid coordinates for skill:", skill.title);
          }
        });
      });

      return () => map.remove();
    }
  }, [filteredSkills, showFullMap]);
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
        onChange={handleSearchTermChange} // Dynamically fetch suggestions while typing
      />
      <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
      {searchTerm && Array.isArray(suggestions.titles) && (
        <ul className="suggestions-list">
          {suggestions.titles.map((item, index) => (
            <li key={index} onClick={() => handleTitleSelect(item)}>
              {item} {/* Display title suggestions */}
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
        onChange={handleLocationChange} // Dynamically fetch location suggestions while typing
      />
      <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
      {location && Array.isArray(suggestions.locations) && (
        <ul className="suggestions-list">
          {suggestions.locations.map((item, index) => (
            <li key={index} onClick={() => handleLocationSelect(item)}>
              {item} {/* Display location suggestions */}
            </li>
          ))}
        </ul>
      )}
    </div>

    <div className="sort-dropdown">
      <div className="dropdown-wrapper">
      <select onChange={handleNearbyChange} value={selectedNearby}>
  <option value="" disabled>
    Filtered Jobs
  </option>
  <option value="NEARBY">Nearby</option>
</select>
      </div>
    </div>

    <div className="sort-dropdown">
  <div className="dropdown-wrapper">
    <select onChange={handleSortChange} value={selectedSort}>
      <option value="" disabled>
        Sort by
      </option>
      <option value="experience">Experience</option>
      <option value="actively_looking">Actively Looking</option>
      <option value="verified">Verified</option>
    </select>
  </div>
</div>


    <div className="skill-btn">
      <button onClick={handleSearch}>Search</button>
    </div>
          </div>
{/* ------------------responsive--search------------------------------ */}
<div className="search-bar-skill-responsive">
    <div className="skill-ipt">
      <input
        type="text"
        placeholder="Search for Developers, Designers..."
        value={searchTerm}
        onChange={handleSearchTermChange} // Dynamically fetch suggestions while typing
      />
      <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
      {searchTerm && Array.isArray(suggestions.titles) && (
        <ul className="suggestions-list">
          {suggestions.titles.map((item, index) => (
            <li key={index} onClick={() => handleTitleSelect(item)}>
              {item} {/* Display title suggestions */}
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
        onChange={handleLocationChange} // Dynamically fetch location suggestions while typing
      />
      <img src={talspoIcon} alt="Talspo Icon" className="input-icon" />
      {location && Array.isArray(suggestions.locations) && (
        <ul className="suggestions-list">
          {suggestions.locations.map((item, index) => (
            <li key={index} onClick={() => handleLocationSelect(item)}>
              {item} {/* Display location suggestions */}
            </li>
          ))}
        </ul>
      )}
    </div>

    <div className="sort-dropdown">
      <div className="dropdown-wrapper">
      <select onChange={handleNearbyChange} value={selectedNearby}>
  <option value="" disabled>
    Filtered Jobs
  </option>
  <option value="NEARBY">Nearby</option>
</select>
      </div>
    </div>

    <div className="sort-dropdown">
  <div className="dropdown-wrapper">
    <select onChange={handleSortChange} value={selectedSort}>
      <option value="" disabled>
        Sort by
      </option>
      <option value="experience">Experience</option>
      <option value="actively_looking">Actively Looking</option>
      <option value="verified">Verified</option>
    </select>
  </div>
</div>


    <div className="skill-btn">
      <button onClick={handleSearch}>Search</button>
    </div>
          </div>

          {/* -------------------------------------------- */}
          <div className="who-slide">
          <div className="slider-container">
  {filteredSkills.length > 0 ? (
    <Slider {...settings}>
      {filteredSkills.map((skill, index) => {
        let supportedCurrencies = [];

        try {
          supportedCurrencies = JSON.parse(skill.supportedcurrencies);
        } catch (error) {
          if (typeof skill.supportedcurrencies === 'string') {
            supportedCurrencies = skill.supportedcurrencies.split(','); // Split the string into an array
          } else {
            console.error(`Error parsing supported currencies for skill ID ${skill.id}:`, error);
          }
        }

        const selectedCurrency = selectedCurrencies[skill.id] || skill.basecurrency;

        const rate = currencyRates[selectedCurrency] ? currencyRates[selectedCurrency].value : 1;
        const convertedSalary = skill.salary * rate;

        return (
          <div key={`${skill.id}-${index}`}>
            <div className="w-box">
              <img src={skill.image} alt={skill.name} />
              {skill.verified === "true" && (
                <div className="verified-icon">✅</div>
              )}
              <div className="text-panel">
                <h5>{skill.title}</h5>
                <div className="ss">
                  <small>Location: {skill.location}</small>
                  <small>Status: {skill.status}</small>
                </div>
                <div className="ss">
                <span>Experience: {skill.experience}</span>
                <span>JobType:{skill.jobtype}</span>
                </div>
              

                <span>Actively Looking: {skill.actively_looking}</span>

                <div className="hh">
                  <small>
                    Salary: {convertedSalary.toFixed(2)} {selectedCurrency}
                  </small>
                </div>

                <select
  style={{ outline: "none" }}
  className="custom-select mt-1 w-100"
  value={selectedCurrency || ""}
  onChange={(e) => handleCurrencyChange(skill.id, e.target.value)}
>
  {(supportedCurrencies || []).map((currency, idx) => (
    <option key={idx} value={currency}>
      {currency}
    </option>
  ))}
</select>

                <button className="get" onClick={openModal}>
                  Connect
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  ) : (
    <div className="error-message">
      <p>No Results Found</p>
    </div>
  )}

  {error && (
    <div className="error-message">
      {/* <p>{error}</p> */}
    </div>
  )}
</div>


            <div className="home-map">
              <div
                ref={smallMapRef}
                style={{
                  width: "100%",
                  height: "450px",
                  visibility: showFullMap ? "hidden" : "visible",
                  position: "relative",
                }}
              >
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default Whowe;
