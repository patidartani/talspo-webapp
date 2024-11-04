import React from 'react'
import "./Home.css"
import Navbar from '../../pages/Navbar/Navbar'
// import SliderHome from '../../components/Home/SliderHome'
import Whowe from './Whowe'
import Footer from '../../pages/Footer/Footer'
// import Whowe from './Whowe'
import client1 from "../../assets/images/client.svg"
import client2 from "../../assets/images/client2.svg"
import client3 from "../../assets/images/client3.svg"
import client4 from "../../assets/images/client4.svg"
import client5 from "../../assets/images/client5.png"
import skill from "../../assets/images/skill.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/autoplay';
import TalspoHere from './TalspoHere'
import Free from './Free'
import LernerTrainer from './LernerTrainer'

const Home = () => {

  const images = [
    'https://cdni.iconscout.com/illustration/premium/thumb/online-job-application-illustration-download-in-svg-png-gif-file-formats--portal-apply-cv-resume-business-people-pack-illustrations-4609375.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlIYiLIbT9KBKocXUKR7CTO1WYC2gIIll1F4VT8GYeIFpBlXlUVhoeun19ZBeDyJgEltQ&usqp=CAU'
  ];

  return (
    <div className='Home-main'>
<div className="Home-page">
          <Navbar />

          {/* <SliderHome /> */}

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
            <button>JOIN FOR FREE</button>
          </div>
          <button className="more">LEARN MORE</button>
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


          {/* Second Image Slide */}
          <SwiperSlide>
            <div className="swiper-image-container">
              <img src={images[0]} alt="Slide 1" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

{/* ---------------------------------------------------------------------------------- */}
             
        <LernerTrainer />     
{/* ---------------------------------------------------------------------------------- */}
      <div className="home-two">
          <h5>Why Choose Talspo?</h5>
          <p>You can explore, spot, connect talented people naerby (Online). </p>
          <div className="home-two-btm">
                     <div className="home2-left">
                                 <img src={skill} alt="" />
                     </div>
                     <div className="home2-right">
                          <small>Upskill, reskill and utilization</small>
                          <span>Upskill</span>
                          <span>Reskill</span>
                          <span>Utilization</span>

                     </div>
          </div>
      </div>
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
    <Whowe />
    <Free />
       <TalspoHere />
   <Footer />
 
</div>
</div>
  )
}

export default Home