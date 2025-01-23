import React, { useEffect, useState } from "react";
import "./Loading.css";
import talspoIcon from "/assets/images/logo-icon.png";
import { loadingData } from "../../apiService";

const Loading = () => {
  const [description, setDescription] = useState(""); // Empty state initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loadingData(); // Fetch the API data
        if (response && response.records && response.records[0]?.description) {
          setDescription(response.records[0].description); // Correctly update state
        }
      } catch (error) {
        console.error("Error fetching loading data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="loading">
      <div className="loading-logo">
        <img src={talspoIcon} alt="Loading..." className="loading-gif" />
      </div>
      <h5>Loading...</h5>
      <div style={{fontWeight:"600"}} dangerouslySetInnerHTML={{ __html: description}} />
    </div>
  );
};

export default Loading;
