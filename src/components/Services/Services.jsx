import './Services.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from "../../pages/Footer/Footer"
import { MdOutlineWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { ImCreditCard } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import FooterTop from '../../pages/Footer/FooterTop';

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

  return (
    <>
      <Navbar />
      <div className="Services-main">
        <div className="Services-page">
          <div className="service-top">
            <h5>Our Services</h5>
            <p>Explore Our Job Portal Services</p>
          </div>

          <div className="service-btm">
            {/* ----------------------------------- */}
            <div className="service" style={{cursor:"pointer"}} onClick={studentHandler}>
              <div className="one">
                <div className="s-left">
                  <div className="icon">
                    <TbWorldSearch className="react-icon" />
                  </div>
                </div>
                <div className="s-right">
                  <h5>Students/Learner Model Services</h5>
                  <p>
                    Our platform provides a powerful job search engine to help you find opportunities that match your skills and interests.
                  </p>
                </div>
              </div>
            </div>
            {/* ----------------------------------- */}
            <div className="service2" style={{cursor:"pointer"}} onClick={trainersHandler} >
              <div className="one">
                <div className="s-left">
                  <div className="icon">
                    <FaGraduationCap className="react-icon" />
                  </div>
                </div>
                <div className="s-right">
                  <h5>Professional/Trainers Model Services</h5>
                  <p>
                    Access a variety of online courses designed to help you build skills and enhance your employability.
                  </p>
                </div>
              </div>
            </div>
            {/* ----------------------------------- */}
            <div className="service" style={{cursor:"pointer"}} onClick={organizeHandler}>
              <div className="one">
                <div className="s-left">
                  <div className="icon">
                    <ImCreditCard className="react-icon" />
                  </div>
                </div>
                <div className="s-right">
                  <h5>Corporate/Organization Model Services</h5>
                  <p>
                    Get professional help with crafting a compelling resume and cover letter to stand out in your job applications.
                  </p>
                </div>
              </div>
            </div>
            {/* ----------------------------------- */}
            <div className="service2" style={{cursor:"pointer"}} onClick={coworkingHandler}>
              <div className="one">
                <div className="s-left">
                  <div className="icon">
                    <MdOutlineWork className="react-icon" />
                  </div>
                </div>
                <div className="s-right">
                  <h5>Co-Working Spaces/Co-works & Co-live & Events Model Services</h5>
                  <p>
                    Join our workshops to hone your interview skills and increase your chances of success in securing a job.
                  </p>
                </div>
              </div>
            </div>
            {/* ----------------------------------- */}
          
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </>
  );
};

export default Services;
