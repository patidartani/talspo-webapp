import React from 'react'
import "./StudentServiceModel.css";
import { Row, Col } from "react-bootstrap";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const ProfessionalTrainer = () => {
  return (
    <>
     <Navbar />
    
      <div className="service_con">
<div className='service_box'>

        <h1>Professional Trainer Service Model</h1>
        <Row>
        <Col md={6} sm={12}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt, commodi et dolorem doloribus non? Molestias aperiam laboriosam doloribus, suscipit consectetur pariatur. Nihil, suscipit possimus id odio, eius in  </p>
      </Col>

      <Col md={6} sm={12}>
      <div className="service_img">
        <img src='https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg'/>
      </div>
      </Col>
      </Row>
      </div>
      <div className="service_head">
        <h1>Coming Soon</h1>
      </div>
      </div>
      <Footer />
      </>
  )
}

export default ProfessionalTrainer
