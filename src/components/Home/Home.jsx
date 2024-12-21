import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState, useEffect } from 'react';

import "./Home.css"
import Navbar from '../../pages/Navbar/Navbar'
import Whowe from './Whowe'
import Footer from '../../pages/Footer/Footer'
import Free from './Free'
// import LernerTrainer from './LernerTrainer'
import HomeTwo from './HomeTwo';
import HomeBlog from '../Blog/HomeBlog';
import { useNavigate } from 'react-router-dom';
import HomeBroach from './HomeBroach';
import FooterTop from '../../pages/Footer/FooterTop';
import {technologyApi, whyChooseTalspo, homepageContent} from "../../apiService"
import Loading from "../../pages/loading/Loading"

import { useRef } from "react"; 

 import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";

const Home = () => {

  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 

   // ------------------------why choose talspo----------------------
   const [items, setItems] = useState([]); 
   const [activeIndex, setActiveIndex] = useState(0); 
   const [selectedImage, setSelectedImage] = useState(""); 
   const [homeContent, setHomeContent] = useState(null);

   const [currentText, setCurrentText] = useState(""); 
  const [animationClass, setAnimationClass] = useState(""); 
  let index = 0;
 
   useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from "Why Choose Talspo" API
        const whyChooseResponse = await whyChooseTalspo();
        setItems(whyChooseResponse.records);

        if (whyChooseResponse.records.length > 0) {
          setSelectedImage(whyChooseResponse.records[0].image);
        }

        // Fetch data from "Home Content" API
        const homeContentResponse = await homepageContent();
        const { records } = homeContentResponse;
  
        if (records && records.length > 0) {
          const { title, description, text, media } = records[0];
          const dynamicTexts = text.split(",").map((t) => t.trim()); // Parse and split the text
  
          // Parse media string and fix any URL encoding issues
          const parsedMedia = JSON.parse(media).map((url) => url.replace(/\\\//g, '/'));
  
          setHomeContent({
            title,
            description,
            texts: dynamicTexts,
            media: parsedMedia, // Now it's a valid array of URLs
          });
          setCurrentText(dynamicTexts[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 
   const handleClick = (imageUrl, index) => {
     setActiveIndex(index);
     setSelectedImage(imageUrl); 
   };

   useEffect(() => {
  if (homeContent && homeContent.texts) {
    const interval = setInterval(() => {
      setAnimationClass("slide-up");

      setTimeout(() => {
        index = (index + 1) % homeContent.texts.length; // Loop through the texts
        setCurrentText(homeContent.texts[index]); // Update the current text
        setAnimationClass(""); // Reset animation class
      }, 500); // Match animation duration
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }
}, [homeContent]);

  // ---------------------techno api --------------------------------------
  const [techStack, setTechStack] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await technologyApi(); 
        // console.log("Techno api Response:", response.records); 
        setTechStack(response.records); 
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching technology stack:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  const joinfree = () => {
    navigate('/signup')
  };
  const learnmore = () => {
    navigate('/about-us')
  };

  return (
    <div className='Home-main'>
      <div className="Home-page">
        <Navbar />

        <div className="Home">
          <div className="left">
            <h6> {homeContent?.title}</h6>
            <p style={{ fontSize: '1vmax' }}>{homeContent?.description}</p>
            <div className="text-container">
            <span className={`text ${animationClass}`}>{currentText}</span>            </div>
            <div className="home-btns">
              <div className="join-free">
                <button onClick={joinfree}>JOIN FOR FREE</button>
              </div>
              <button onClick={learnmore} className="more">LEARN MORE</button>
            </div>
          </div>

          <div className="right">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              speed={2000} 
            >
           {homeContent && homeContent.media && homeContent.media.length > 0 && homeContent.media.map((mediaLink, index) => (
  <SwiperSlide key={index}>
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        src={mediaLink}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={`Media Slide ${index + 1}`}
      ></iframe>
    </div>
  </SwiperSlide>
))}

              {/* <SwiperSlide>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/egavdrxEd8c?autoplay=1&mute=1&loop=1&playlist=egavdrxEd8c"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Talspo Video 2"
                  ></iframe>
                </div>
              </SwiperSlide> */}
            </Swiper>

            <div className="home-arrows"> 
              <HiArrowSmallLeft
                onClick={() => swiperRef.current.swiper.slidePrev()} // Slide to previous
              />
              <HiArrowSmallRight
                onClick={() => swiperRef.current.swiper.slideNext()} // Slide to next
              />
            </div>
          </div>

        </div>

        <HomeTwo />
        {/* ---------------------------------------------------------------------------------- */}

      <div className="home-two">
      <h5>Why Choose Talspo?</h5>
      <p>You can explore, spot, connect talented people nearby (Online).</p>
      <div className="home-two-btm">
        <div className="home2-left">
          <img src={selectedImage || "defaultImage.jpg"} alt="Selected" />
        </div>
        <div className="home2-right">
          {items.map((item, index) => (
            <div
              key={index}
              className={`linee ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(item.image, index)}
            >
              {/* <div className="linee-left">
                <div className="icon-line">
                  <i className={item.icon}></i>  
                </div>
              </div> */}
              <div className="linee-right">
                <h6>{item.title}</h6>
                <p>{item.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

        {/* ---------------------------------------------------------------------------------- */}
        <Whowe />
        <div className="home-three">
      <h5>Our Advance Technology Stack Includes</h5>
      <div className="h3-tbm">
        <div className="h3-top">
          {techStack.length > 0 ? (
            techStack.map((tech, index) => (
              <div className="line" key={index}>
                <img src={tech.image} alt={`Tech ${tech.id}`} />
              </div>
            ))
          ) : (
            <p>Loading technologies...</p>
          )}
        </div>
      </div>
         </div>
        {/* ---------------------------------------------------------------------------------- */}
        <HomeBlog />
        <HomeBroach />

        <FooterTop />
        <Free />
        <Footer />

      </div>
    </div>
  )
}

export default Home