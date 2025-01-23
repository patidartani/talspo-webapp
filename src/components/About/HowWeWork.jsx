import React, { useEffect, useState } from 'react';
import "./HowWeWork.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer';
import Footer from "../../pages/Footer/Footer";
import { howWork } from "../../apiService";
import FooterTop from '../../pages/Footer/FooterTop';

const HowWeWork = () => {
  const [howWeWorkData, setHowWeWorkData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchHowWeWork = async () => {
      try {
        const response = await howWork();
        // console.log('How work response', response.records);
        setHowWeWorkData(response.records);
      } catch (error) {
        console.log('error', error);
        setErrorMessage('Failed to load data. Please try again later.'); 
      }
    };
    fetchHowWeWork();
  }, []);

  return (
    <>
      <NavbarContainer />
      <div className='HowWeWork-main'>
        {/* Error message display */}
        {errorMessage && (
          <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>
            {errorMessage}
          </div>
        )}

        <div className="how-tp">
          <div className="how-left">
            <h6>{howWeWorkData && howWeWorkData[0] && howWeWorkData[0].title}</h6>
            <p>{howWeWorkData && howWeWorkData[0] && howWeWorkData[0].cantante}</p>
          </div>
          <div className="how-right">
            {howWeWorkData && howWeWorkData.length > 0 && (
              <img src={howWeWorkData[0].image} alt={howWeWorkData[0].title} />
            )}
          </div>
        </div>

        <div className="media">
  {howWeWorkData && howWeWorkData[0] && howWeWorkData[0].media && (
    (() => {
      // Parse the media string (array) and extract the video URL
      const mediaUrl = JSON.parse(howWeWorkData[0].media)[0]; // Get the first item in the array
      const videoId = mediaUrl.split('v=')[1]; // Extract video ID from the URL

      return (
        <iframe 
          width="100%" 
          height="400" 
          src={`https://www.youtube.com/embed/${videoId}`} 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      );
    })()
  )}
</div>




        <div className="how-btm">
          <div className="work-box">
            <p dangerouslySetInnerHTML={{ __html: howWeWorkData && howWeWorkData[0]?.description }} />
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default HowWeWork;
