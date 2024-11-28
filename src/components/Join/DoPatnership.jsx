import  {useEffect, useState} from 'react'
import "./DoPartnership.css"
import Navbar from '../../pages/Navbar/Navbar';
import Footer from "../../pages/Footer/Footer"
import QrImg from "../../assets/images/patnerQrr.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { doPartnerhip } from "../../apiService"
import Loading from "../../pages/loading/Loading"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const DoPatnership = () => {

  // --------------------partnership api-----------------------------------

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchPartnershipData = async () => {
      try {
        const response = await doPartnerhip(); 
        console.log("Partnership Data:", response.records); 
        setPartners(response.records)
      } catch (error) {
        console.error("Error fetching partnership data:", error); 
      }finally {
        setLoading(false); 
      }
    };

    fetchPartnershipData();
  }, []);

  if (loading) {
    return <Loading />;
  }

 

   // -------------------------------partnership form --------------------------------------

   

  //  --------------------------------------------------------------------------------------

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
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="our-partner">
                <div className="p-img">
                  <img src={partner.image} alt={`Partner ${partner.title}`} />
                </div>
                <h5>  {partner.title}</h5>
                <div className="p-text">
                  <p>{partner.description}</p>
                  <p>
                    To Know More Visit:{" "}
                    <a href={partner.link} target="_blank" rel="noopener noreferrer">
                      {partner.link}
                    </a>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
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