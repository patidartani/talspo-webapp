import React from 'react'
import "./JoinTeam.css"
import Navbar from "../../pages/Navbar/Navbar"
import Footer from "../../pages/Footer/Footer"
import arojoin3 from "../../assets/images/aronew.png"
// import linkedin from "../../assets/images/download.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const JoinTeam = () => {
  return (
    <>
    <Navbar />
        <div className='JoinTeam-main'>
          <div className="join1">
                    <div className="join1-left">
                          <h5>Join the Team</h5>
                          <span>Great Problems are solved by </span> <span> collaborating with talented minds</span>
                    </div> 
                   
          </div>
          {/* --------------------------------------- */}
                 <div className="join2">
                   <div className="join2-text">
                         <h5>Why Join Talspo?</h5>
                         <p>We are solving the skill gap and skill mismatch problem of the current talent education market all over the world. As our tagline is "Next Level Of Talent Networking Platform & Talent Marketplace", we are more than just providing NEARBY talent connections to save time and get talent connectivity at affordable prices.</p>
                          <p>The work culture you will be provided with will not only result in the growth of Talspo but also contribute immensely towards your own personal and career growth. The rest depends on your experience working with us.</p>
                   </div>
                 </div>
          {/* --------------------------------------- */}
      <div className="join3">
        <h5>Testimonials</h5>
        <div className="join3-slider">
        <Swiper
  slidesPerView={3} // Default view for larger screens
  spaceBetween={20}
  navigation={false}
  modules={[Navigation]}
  className="mySwiper"
 
>
            <SwiperSlide>
              <div className="join3-box">
                 <img src={arojoin3} alt="" />
                 <p>It was a nice experience working with TALSPO. Nice innovative idea and a great platform for different talents. Learned lot of things and had a great fun.</p>
                  <div className="box-text">
                         <div className="circle">
                         <img src="https://talspo.com/img/team/srinibas.jpg" alt="" />
                         </div>
                      <div className="text-name">
                         <span>Saurabh Singh</span>
                         <h6>Product Manager</h6>
                      </div>
                  </div>                 
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="join3-box">
                 <img src={arojoin3} alt="" />
                 <p>I had a great time working as an intern with the Talspo core team. It was a very educative experience and nice to work as a team.</p>
                  <div className="box-text">
                         <div className="circle">
                         <img src="https://talspo.com/img/team/abhijit.jpg" alt="" />
                         </div>
                      <div className="text-name">
                         <span>Abhijit Parida</span>
                         <h6>Product Manager</h6>
                      </div>
                  </div>                 
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="join3-box">
                 <img src={arojoin3} alt="" />
                 <p>It was a nice experience working with TALSPO. Nice innovative idea and a great platform for different talents. Learned lot of things and had a great fun.</p>
                  <div className="box-text">
                         <div className="circle">
                         <img src="https://talspo.com/img/team/srinibas.jpg" alt="" />
                         </div>
                      <div className="text-name">
                         <span>Saurabh Singh</span>
                         <h6>Product Manager</h6>
                      </div>
                  </div>                 
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="join3-box">
                 <img src={arojoin3} alt="" />
                 <p>It was a nice experience working with TALSPO. Nice innovative idea and a great platform for different talents. Learned lot of things and had a great fun.</p>
                  <div className="box-text">
                         <div className="circle">
                         <img src="https://talspo.com/img/team/srinibas.jpg" alt="" />
                         </div>
                      <div className="text-name">
                         <span>Saurabh Singh</span>
                         <h6>Product Manager</h6>
                      </div>
                  </div>                 
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
          {/* --------------------------------------- */}
             <div className="join4">
                   <small>Want to help us build the next level of talent networking & talent marketplace of the world?</small> 
                 <small> Do you want to change the way people develop their skills by connecting with NEARBY talents?</small>
                   <p>Then check our open positions to be the next "Talspoer"!</p>
                   <div className="join4-bx">
                             <h5>Interested ?</h5>
                             <div className="join4-Btm">
                                  <div className="interest">
                                     <div className="int-img">
                                     <img src="https://talspo.com/img/logo-icon.png" alt="" />
                                     </div>
                                     <a href="">Direct Apply through Talspo F6s</a>
                                  </div>
                                  <div className="interest">
                                     <div className="int-img">
                                     <img src="https://talspo.com/img/brands/f6s.png" alt="" />
                                     </div>
                                     <a href="">Apply through F6S</a>
                                  </div><div className="interest">
                                     <div className="int-img2">
                                     <img src={linkedin} alt="" />
                                     </div>
                                     <a href="">Apply through LinkedIn</a>
                                  </div>
                             </div>
                   </div>
             </div>


    </div>

    <Footer />

  </>
  )
}

export default JoinTeam