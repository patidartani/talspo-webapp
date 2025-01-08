import React, { useEffect, useState } from 'react';
import './HomeTwo.css';
import { useNavigate } from 'react-router-dom';
import { whoWeTwo } from '../../apiService';

const HomeTwo = () => {
  const navigate = useNavigate();
  const [whoWeData, setWhoWeData] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  const abouMove = () => {
    navigate('/about-us');
  };

  useEffect(() => {
    const whoweHandler = async () => {
      try {
        const response = await whoWeTwo();
        if (response && response.records && response.records.length > 0) {
          setWhoWeData(response.records[0]); // Set the first record
          setError(null); // Clear any previous errors
        } else {
          throw new Error('No data available'); // Handle case when records array is empty
        }
      } catch (error) {
        console.error('API Error:', error.message);
        setError('Failed to load data. Please try again later.'); // Set error message
      }
    };

    whoweHandler();
  }, []);

  // Show loading message while data is being fetched
  if (!whoWeData && !error) {
    return <p>Loading...</p>;
  }

  // Show error message if there is an error
  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  }

  // Render the component when data is successfully fetched
  return (
    <div className="HomeTwo_main">
      <div className="Home-Two">
        <div className="Two_left">
          <img src={whoWeData.image} alt={whoWeData.title} />
        </div>
        <div className="Two_Right">
          <h5>{whoWeData.title}</h5>
          <div dangerouslySetInnerHTML={{ __html: whoWeData?.description }} />
          <div className="kn">
            <button onClick={abouMove}>Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
