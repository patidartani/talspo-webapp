import React from 'react'
import "./DoPartnership.css"
import Navbar from '../../pages/Navbar/Navbar';
import Footer from "../../pages/Footer/Footer"
import QrImg from "../../assets/images/patnerQrr.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const DoPatnership = () => {
  return (
   <>
    <Navbar />
    <div className='DoPatnership-main'>
       <div className="partner-one">
          <div className="p-left">
                  <h5>Do Partnership</h5>
                  <h5>With Us</h5>
                  <p>We believe in Greate Partnership is a <br /> Driving force for both Partners,that <br /> leads to success.</p>
          </div>
          <div className="p-right">
                    <img src="https://img.freepik.com/premium-vector/laptop-vector-illustration-flat-2_764382-61170.jpg?w=740" alt="" />
          </div>
       </div>
         {/* ------------------------ */}
         <div className="partner-two">
        <h6>Our Partners</h6>
        <div className="slider-partner">
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                    <div className="our-partner">
                              <div className="p-img">
                                        <img src="https://talspo.com/img/partners/ziperp.png" alt="" />
                              </div>
                            <h5>About ZipERP</h5>  
                            <div className="p-text">
                               <p>ZipERP is a smart Web based ERP solution primarily designed for Micro and Small enterprises looking for a cost effective solution which can enable them to quickly move away from current manual processes to a fully integrated business solution</p>
                               <p>To Know More Visit: <a href="">http://www.ziperp.net/</a></p>
                              </div> 
                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="our-partner">
                              <div className="p-img">
                                        <img src="https://talspo.com/img/partners/inborn-studio.png" alt="" />
                              </div>
                            <h5>About Inborn Studio</h5>  
                            <div className="p-text">
                               <p>Inborn Studio is a team of thinkers and doers working across brand, design and digital. We turn great ideas into brilliant realities. We're a band of creatives and our clients' biggest champions. We enjoy making companies look better with great design, going above and beyond to please our clients.</p>
                               <p>To Know More Visit: <a href=""> http://www.inbornstudio.com/</a></p>
                              </div> 
                    </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
         {/* ------------------------ */}
              <div className="partner-three">
                    <div className="pt-left">
                             <img src={QrImg} alt="" />   
                    </div>
                    <div className="pt-right">
                              <h4>Talspo</h4>
                              <h4>E-Brochure</h4>
                              <span>Scan the QR Code to download the Talspo's e-Brochure</span>
                              <span> Talspo e-Brochure Link:</span>
                               <a href="">https://talspo.com/talspo_brochure_2019.pdf</a>
                    </div>
              </div>
         {/* ------------------------ */}
         <div className="partner-four">
                 <h5>Want to Partner </h5>
                 <h5>With Us? </h5>
                 <p>Please fill up the form below and if our partnership requirements match, we will get in touch with you very soon.</p>
                    <div className="partner-form">
                               <h6>Send Yore Partnership Details</h6>
                              <form>
                              <div className="p-inp">
                              <input type="text" name='name' placeholder='Full Name*' />
                               </div>  
                               <div className="p-inp">
                              <input type="email" name='email' placeholder='Email*' />
                               </div>  
                                 <div className="p-inp">
                               <input type='text' name='number' placeholder='Phone Number*' />
                               </div>  
                               <div className="p-inp">
                               <input type='text' name='name' placeholder='Company Name*' />
                               </div>  
                               <div className="p-inp">
                               <input type='text' name='name' placeholder='Company Website*' />
                               </div>  
                               <div className="p-inp">
                               <input type='text' name='subject' placeholder='Subject*' />
                               </div>  
                               <div className="p-inp">
                               <textarea name="" placeholder='Message*(Describe in few lines about your company and why you want to partner with Talspo' id=""></textarea>
                               </div>  
                               <div className="p-inp">
                                      <p>Please attach your company proposal. Click here to submit a Google Drive link instead.</p>
                               </div>
                               <div className="p-inp">
                                        <input type="file" />
                               </div>
                               <div className="p-btn">
                                        <button>SUBMIT</button>
                                        </div>  
                            </form>
                    </div>
         </div>

    </div>
    <Footer />
   </>
  )
}


export default DoPatnership