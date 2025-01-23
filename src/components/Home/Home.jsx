import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';
import "./Home.css";
import { lazy } from 'react';

import NavbarContainer from '../../pages/NavbarCom/NavBarContainer';
const Whowe = lazy(() => import('./Whowe'));
import Footer from '../../pages/Footer/Footer';
import Free from './Free';
import HomeTwo from './HomeTwo';
import HomeBlog from '../Blog/HomeBlog';
import HomeBroach from './HomeBroach';
import FooterTop from '../../pages/Footer/FooterTop';
import Loading from "../../pages/loading/Loading";
import { technologyApi, whyChooseTalspo, homepageContent } from "../../apiService";

const Home = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [homeContent, setHomeContent] = useState(null);
  const [currentText, setCurrentText] = useState("");
  const [animationClass, setAnimationClass] = useState("");
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [whyChooseResponse, homeContentResponse, techResponse] = await Promise.all([
          whyChooseTalspo(),
          homepageContent(),
          technologyApi()
        ]);

        // "Why Choose Talspo" data
        setItems(whyChooseResponse.records);
        if (whyChooseResponse.records.length > 0) {
          setSelectedImage(whyChooseResponse.records[0].image);
        }

        // Home Content data
        const homeData = homeContentResponse.records[0];
        if (homeData) {
          const dynamicTexts = homeData.text.split(",").map(t => t.trim());
          const parsedMedia = JSON.parse(homeData.media).map(url => url.replace(/\\\//g, '/'));
          setHomeContent({
            ...homeData,
            texts: dynamicTexts,
            media: parsedMedia,
          });
          setCurrentText(dynamicTexts[0]);
        }

        setTechStack(techResponse.records);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (homeContent?.texts?.length) {
      let index = 0;
      const interval = setInterval(() => {
        setAnimationClass("slide-up");
        setTimeout(() => {
          index = (index + 1) % homeContent.texts.length;
          setCurrentText(homeContent.texts[index]);
          setAnimationClass("");
        }, 500);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [homeContent]);

  const handleClick = (imageUrl, index) => {
    setActiveIndex(index);
    setSelectedImage(imageUrl);
  };

  const joinfree = () => navigate('/signup');
  const learnmore = () => navigate('/about-us');

  if (isLoading) return <Loading />;

  return (
    <div className='Home-main'>
      <NavbarContainer />
      <div className="Home-page">
        <div className="Home">
          <div className="left">
            {homeContent ? (
              <>
                <h6>{homeContent.title || "Title not available"}</h6>
                <p style={{ fontSize: '1.1vmax' }}>{homeContent.description || "Description not available"}</p>
                <p style={{ fontSize: '1.1vmax' }}>{homeContent.subtext || "Subtext not available"}</p>
                <div className="text-container">
                  <span className={`text ${animationClass}`}>{currentText || "No animation text available"}</span>
                </div>
                <div className="home-btns">
                  <div className="join-free">
                    <button onClick={joinfree}>JOIN FOR FREE</button>
                  </div>
                  <button onClick={learnmore} className="moree">LEARN MORE</button>
                </div>
              </>
            ) : (
              <p style={{ color: 'red', fontSize: '1.2vmax' }}>No Results Found</p>
            )}
          </div>

          <div className="right">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              autoplay={{ delay: 10000, disableOnInteraction: false }}
              speed={2000}
            >
              {homeContent?.media?.map((mediaLink, index) => (
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
                      loading="lazy"  
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="home-arrows">
              <HiArrowSmallLeft onClick={() => swiperRef.current.swiper.slidePrev()} />
              <HiArrowSmallRight onClick={() => swiperRef.current.swiper.slideNext()} />
            </div>
          </div>
        </div>

        <HomeTwo />
        <div className="home-two">
          <h5>Why Choose Talspo?</h5>
          <p>You can explore, spot, connect talented people nearby (Online).</p>
          <div className="home-two-btm">
            <div className="home2-left">
              <img src={selectedImage || "defaultImage.jpg"} alt="Selected" />
            </div>
            <div className="home2-right">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <div
                    key={index}
                    className={`linee ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleClick(item.image, index)}
                  >
                    <div className="linee-right">
                      <h6>{item.title || "Title not available"}</h6>
                      <p>{item.description.replace(/<\/?[^>]+(>|$)/g, "") || "Description not available"}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>No Results Found</p>
              )}
            </div>
          </div>
        </div>

        <Whowe />
        <div className="home-three">
          <h5>Our Advanced Technology Stack Includes</h5>
          <div className="h3-tbm">
            <div className="h3-top">
              {techStack.length > 0 ? (
                techStack.map((tech, index) => (
                  <div className="line" key={index}>
                    <img src={tech.image} alt={`Tech ${tech.id}`} />
                  </div>
                ))
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>No Results Found</p>
              )}
            </div>
          </div>
        </div>

        <HomeBlog />
        <HomeBroach />
        <FooterTop />
        <Free />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
