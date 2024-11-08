import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import "./Home.css"
import Navbar from '../../pages/Navbar/Navbar'
import Whowe from './Whowe'
import Footer from '../../pages/Footer/Footer'
// import Whowe from './Whowe'
import client1 from "../../assets/images/client.svg"
import client2 from "../../assets/images/client2.svg"
import client3 from "../../assets/images/client3.svg"
import client4 from "../../assets/images/client4.svg"
import client5 from "../../assets/images/client5.png"
import skill from "../../assets/images/skill.png"
import Free from './Free'
import LernerTrainer from './LernerTrainer'
import HomeTwo from './HomeTwo';
import HomeBlog from '../Blog/HomeBlog';
import { useNavigate } from 'react-router-dom';
import HomeBroach from './HomeBroach';

const Home = () => {
     const navigate = useNavigate();

  const joinfree = () => {
    navigate('/signup')
  };
  const learnmore = () => {
    navigate('/about-us')
  };

  const images = [
    'https://mintbook.com/blog/wp-content/uploads/2019/09/Top-10-Secrets-to-Improve-Learning-Skills-min.png',
    'https://static.vecteezy.com/system/resources/thumbnails/001/879/458/small_2x/digital-library-to-get-ideas-inspiration-and-solutions-online-learning-for-students-reading-app-online-books-education-by-blog-illustration-landing-page-card-banner-brochure-flyer-free-vector.jpg'
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
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
>
  <SwiperSlide>
    <div className="swiper-image-container">
      <img src={images[0]} alt="Slide 1" />
    </div>
  </SwiperSlide>

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
      <img src={images[1]} alt="Slide 2" />
    </div>
  </SwiperSlide>
</Swiper>

      </div>
    </div>        
        {/* <LernerTrainer />      */}
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

{/* ----------On Demand Skill Showcase Panel (Including Currency Conversion API): */}
    <Whowe />
{/* ---------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------- */}
<div className="home-three">
  <h5>Learn more about our partners</h5>
  <div className="h3-tbm">
    <div className="h3-top">
      <div className="line"><img src={client1} alt="Client 1" /></div>
      <div className="line"><img src={client2} alt="Client 2" /></div>
      <div className="line"><img src={client3} alt="Client 3" /></div>
      <div className="line"><img src={client4} alt="Client 4" /></div>
      <div className="line"><img src={client5} alt="Client 5" /></div>
      <div className="line"><img src={client1} alt="Client 1" /></div>
      
      <div className="line"><img src={client2} alt="Client 2" /></div>
      <div className="line"><img src={client3} alt="Client 3" /></div>
      <div className="line"><img src={client4} alt="Client 4" /></div>
      <div className="line"><img src={client5} alt="Client 5" /></div>
    </div>
  </div>
</div>
{/* ---------------------------------------------------------------------------------- */}
       <HomeBlog />
       <HomeBroach />
    <Free />
       {/* <TalspoHere /> */}
   <Footer />
 
</div>
</div>
  )
}

export default Home