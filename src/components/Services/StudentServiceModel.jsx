import React from "react";
import { Row, Col } from "react-bootstrap";
import "./StudentServiceModel.css";
import giff_img from "../../assets/images/giff.gif";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const StudentServiceModel = () => {
  return (
    <>
    <Navbar />
    
    <div className="service_con">
      <div className="service_box">
        <h1>Students/Learner Model Service</h1>
        <Row>
          <Col md={6} sm={12}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              corrupti aut doloribus eius error, provident nemo cumque facilis
              perspiciatis impedit, odit id, excepturi alias quasi repellendus
              aliquam pariatur. Enim
            </p>
          </Col>
          <Col md={6} sm={12}>
            <div className="service_img">
              <img src={giff_img} alt="img" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="service_head">
        <h1>Coming Soon.....</h1>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default StudentServiceModel;
