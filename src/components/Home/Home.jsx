import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
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
import gifImg from "../../assets/images/homeslidergif.gif"
import {technologyApi} from "../../apiService"

const Home = () => {
  const navigate = useNavigate();


  // ---------------------techno api --------------------------------------
  const [techStack, setTechStack] = useState([]); 

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await technologyApi(); 
        console.log("Techno api Response:", response.records); 
        setTechStack(response.records); 
      } catch (error) {
        console.error("Error fetching technology stack:", error);
      }
    };

    fetchData();
  }, []);

  // -----------------------------------------------------------

  const joinfree = () => {
    navigate('/signup')
  };
  const learnmore = () => {
    navigate('/about-us')
  };

  const images = [
    'https://static.vecteezy.com/system/resources/thumbnails/001/879/458/small_2x/digital-library-to-get-ideas-inspiration-and-solutions-online-learning-for-students-reading-app-online-books-education-by-blog-illustration-landing-page-card-banner-brochure-flyer-free-vector.jpg',
    gifImg
  ];

  return (
    <div className='Home-main'>
      <div className="Home-page">
        <Navbar />

        {/* ---------------------------------------------------------------------------------- */}
        <div className="Home">
          <div className="left">
            <h6>With Talspo, <br /> Connect with people in real-time to learn skills</h6>
            <p>
              Be a <small>Learner</small>, <small>Teacher</small>, or <small>Both</small>.
              Talspo helps to solve skill mismatch globally in both Online and Offline mode.
            </p>
            <span>DYNAMIC TEXT HERE</span>

            <div className="home-btns">
              <div className="join-free">
                <button onClick={joinfree}>JOIN FOR FREE</button>
              </div>
              <button onClick={learnmore} className="more">LEARN MORE</button>
            </div>
          </div>

          <div className="right">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {/* First Image Slide */}
              <SwiperSlide>
                <div className="swiper-image-container">
                  <img src={images[0]} alt="Slide 1" />
                </div>
              </SwiperSlide>

              {/* Video Slide */}
              <SwiperSlide>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/hMjaZKCh3Nc?autoplay=1&mute=1&loop=1&playlist=hMjaZKCh3Nc"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Talspo Video"
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-image-container">
                  <img src={images[1]} alt="Slide 2" style={{ width: '50%' }} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>


        </div>
        <HomeTwo />
        {/* ---------------------------------------------------------------------------------- */}
        <div className="home-two">
          <h5>Why Choose Talspo?</h5>
          <p>You can explore, spot, connect talented people naerby (Online). </p>
          <div className="home-two-btm">
            <div className="home2-left">
              <img src='https://img.freepik.com/premium-vector/frequently-asked-questions-faq-questions-answers_773186-1025.jpg?semt=ais_hybrid' alt="" />
            </div>
            <div className="home2-right">
              <div className="linee">
                <div className="linee-left">
                  <div className="icon-line">
                    <i className="ri-group-2-fill"></i>
                  </div>
                </div>
                <div className="linee-right">
                  <h6>Experienced Team</h6>
                  <p>Our team comprises industry experts who understand the challenges and demands of today’s job market.</p>
                </div>
              </div>

              <div className="linee">
                <div className="linee-left">
                  <div className="icon-line">
                    <i className="ri-rocket-line"></i>
                  </div>
                </div>
                <div className="linee-right">
                  <h6>Quick Job Matching</h6>
                  <p>Talspo’s advanced algorithms connect job seekers with opportunities that match their skills and aspirations in real-time.</p>
                </div>
              </div>

              <div className="linee">
                <div className="linee-left">
                  <div className="icon-line">
                    <i className="ri-global-line"></i>
                  </div>
                </div>
                <div className="linee-right">
                  <h6>Global Reach</h6>
                  <p>Our platform connects talent and employers from around the world, offering global opportunities for local job seekers.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
        <Whowe />
        {/* ---------------------------------------------------------------------------------- */}
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