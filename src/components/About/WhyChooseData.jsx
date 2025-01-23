import React, { useState, useEffect } from 'react';
import "./WhyChooseData.css";
import { whyChooseTalspoData } from "../../apiService";

const WhyChooseData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    whyChooseTalspoData()
      .then((response) => {
        setData(response.records);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError("Something went wrong. Please try again.");
      });
  }, []);

  return (
    <div className='Why-Choose-Talspo'>
      <h5>Why Choose Talspo</h5>
      {error && <p>{error}</p>}
      <div className="why-tlsp">
        {data ? (
          data.map((item, index) => (
            <div key={index} className="why-tlsp-item">
               <h6>{item.title}</h6>
               <small>{item.points}</small>
          {/* <div dangerouslySetInnerHTML={{ __html: item?.points }} /> */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WhyChooseData;
