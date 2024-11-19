import React from 'react'
import { Row, Col } from "react-bootstrap";
import "./StudentServiceModel.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const CorporateService = () => {
  return (
    <>
     <Navbar />
     
    <div className="service_con">
      <div className="service_box">
        <h1>Corporate Organization Model Services</h1>
        <Row>
            <Col md={6} sm={12}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nulla delectus enim quas debitis autem est itaque rerum, a tempore laboriosam, cupiditate minus soluta similique mollitia quidem in voluptates ullam commodi culpa. Possimus minima cumque nemo quaerat!</p>
            </Col>

            <Col md={6} sm={12}>
            <div  className="service_img">
            <img src='https://img.freepik.com/premium-vector/work-home-remote-work-illustration-design_100562-935.jpg?w=360'/>
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

export default CorporateService
