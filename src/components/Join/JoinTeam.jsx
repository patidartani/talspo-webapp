import  { useEffect, useState, useRef } from 'react'
import "./JoinTeam.css"
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import linkdin from "/assets/images/linkdin.png"
import iconLogo from "/assets/images/logo-icon.png"

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


import { joinTestimonials } from "../../apiService";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FooterTop from '../../pages/Footer/FooterTop'

const JoinTeam = () => {
   const swiperRef = useRef(null);

   // ---------------------testimonials api--------------------------------------------
   
   const [testimonials, setTestimonials] = useState([]);
   useEffect(() => {
      const testimonialsApi = async () => {
         try {
            const data = await joinTestimonials();
            setTestimonials(data.records || []);
         } catch (error) {
            console.log("error", error.message || error);
         }
      };
      testimonialsApi();
   }, []);

   // --------------------------------------------------------------------------------

   return (
      <>
         <NavbarContainer />
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
                  <p>We are solving the skill gap mismatch challenges in the global talent education market. We envision Talspo as the "Next Level of Talent Networking Platform and Marketplace - That Creates Successful Skill Set Deals NEARBY (Real-Time)". More than just providing NEARBY (*Geo-Location) talent connections, we are committed to saving you time and delivering authentic talent connectivity at affordable prices by using our software services with the integration of advanced technologies.</p>
                  <p>Our work culture is focused on your growth while empowering your personal and professional development, which leads to the positive growth of Talspo Services. We are committed to ensuring that your experience with us is transformative for your career, and your success will largely depend on how you engage with our team by delivering quality work with work-life balance.</p>
               </div>
            </div>
            {/* --------------------------------------- */}
            <div className="join3">
            <h5>Testimonials</h5>
            <div className="join3-slider">
                <div className="left-aro" onClick={() => swiperRef.current?.slidePrev()}>
                    <GoArrowLeft />
                </div>

                {testimonials.length === 0 ? (
                    <div style={{ color: 'red', textAlign: 'center', margin: '20px 0' }}>
                        No testimonials available at the moment.
                    </div>
                ) : (
                  <Swiper
                  slidesPerView="auto"
                  spaceBetween={20}
                  slidesPerGroup={1}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  modules={[Navigation]}
                  navigation={false}
                  loop={true}
                  centeredSlides={false} 
                  breakpoints={{
                      1150: { slidesPerView: 3, slidesPerGroup: 1 },
                      600: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
                      480: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 5 },
                  }}
                  className="mySwiper"
              >
              
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="join3-box">
                                    <img src={testimonial.icon} alt={testimonial.title} />
                                    <p>{testimonial.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                                    <div className="box-text">
                                        <div className="circle">
                                            <img src={testimonial.image} alt={testimonial.title} />
                                        </div>
                                        <div className="text-name">
                                            <span>{testimonial.title}</span>
                                            <h6>{testimonial.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Right Arrow */}
                <div className="right-aro" onClick={() => swiperRef.current?.slideNext()}>
                    <GoArrowRight />
                </div>
            </div>
        </div>
            {/* --------------------------------------- */}
            <div className="join4">
               <small>Want to help us build the Next Level of Talent Networking Platform and Marketplace - That Creates Successful Skill Set Deals NEARBY (Real-Time) of the world?
               </small>
               <small>Do you want to change how people develop their skills by connecting with NEARBY Talented/ Skilled People in Real-Time?</small>
               <small>Do you want to help Companies and Organizations have Faster + Trustable Recruitment, Talent Acquisition and Skill Training solutions?</small>
               <p>Discover your potential by exploring our job openings through the portals listed below and seize the opportunity to become our next Talspoer!</p>
               <div className="join4-bx">
                  <h5>Interested ?</h5>
                  <div className="join4-Btm">
                     <div className="interest">
                        <div className="int-img">
                           <img src={iconLogo} alt="" />
                        </div>
                        <a href="/opportunities">Direct Apply through Talspo</a>
                     </div>
                     <div className="interest">
                        <div className="int-img">
                           <img src="https://www.doola.com/wp-content/uploads/2024/01/F6S-Logo.png" alt="" />
                        </div>
                        <a href="https://www.f6s.com/company/talspo">Apply through F6S</a>
                     </div>
                     <div className="interest">
                        <div className="int-img2">
                           <img src={linkdin} alt="" />
                        </div>
                        <a href="https://www.linkedin.com/company/talspo/">Apply through LinkedIn</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

<FooterTop />
 <Footer />

      </>
   )
}

export default JoinTeam