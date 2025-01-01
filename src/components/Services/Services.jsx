import './Services.css';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import { MdOutlineWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { ImCreditCard } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import FooterTop from '../../pages/Footer/FooterTop';

import {ourServices} from "../../apiService"
import { useState, useEffect } from 'react';

const Services = () => {
  const navigate = useNavigate();

  const studentHandler = () => {
    navigate('/student-service')
  }
  const coworkingHandler = () => {
    navigate('/co-working')
  }
  const trainersHandler = () => {
    navigate('/professional-service')
  }
  const organizeHandler = () => {
    navigate('/corporate-service')
  }

  const [ourService, setOurService] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await ourServices();
                console.log("Response services:", response.records);
                setOurService(response.records); // Assuming response.records is an array
            } catch (error) {
                console.error("Error fetching services data:", error.message);
            }
        };

        fetchServices();
    }, []);


  return (
    <>
      <NavbarContainer />
      <div className="Services-main">
        <div className="Services-page">
          <div className="service-top">
            <h5>Our Services</h5>
            <p>Explore Our Job Portal Services</p>
          </div>

          <div className="services-mid">
            <iframe
              src="https://www.youtube.com/embed/0KDVwYZFvt0?autoplay=1&mute=1&loop=1&playlist=0KDVwYZFvt0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>

         <div className="service-btm">
            {ourService.map((service, index) => (
                <div
                    key={service.id}
                    className={`service ${index % 2 === 0 ? "" : "service2"}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => console.log(`Clicked: ${service.title}`)}
                >
                    <div className="one">
                        <div className="s-left">
                            <div className="icon">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" }}
                                />
                            </div>
                        </div>
                        <div className="s-right">
                            <h5>{service.title}</h5>
                            <p dangerouslySetInnerHTML={{ __html: service.description }} />                        </div>
                    </div>
                </div>
            ))}
        </div>

          <h4>Coming Soon.....</h4>

        </div>
      </div>
      <FooterTop />
      <Footer />
    </>
  );
};

export default Services;
