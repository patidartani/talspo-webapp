import React, { useEffect, useState } from 'react'
import "./HomeTwo.css"
import { useNavigate } from 'react-router-dom'
import { whoWeTwo } from "../../apiService"

const HomeTwo = () => {
  const navigate = useNavigate();
  const [whoWeData, setWhoWeData] = useState(null);

  const abouMove = () => {
    navigate('/about-us')
  }

  useEffect(() => {
    const whoweHandler = async () => {
      try {
        const response = await whoWeTwo();
        // console.log('response', response.records[0]);
        setWhoWeData(response.records[0]); // Set the first record
      } catch (error) {
        console.error(error);
      }
    };

    whoweHandler();
  }, []);

  // Conditional rendering to avoid errors when data is not available yet
  if (!whoWeData) {
    return <p>Loading...</p>; // Show loading message until data is available
  }

  return (
    <div className='HomeTwo_main'>
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
}

export default HomeTwo;
