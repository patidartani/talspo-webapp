import React from 'react'
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import { Row, Col } from "react-bootstrap";
const Talfia = () => {
  return (
    <>
    <Navbar />
    <div className="service_con">
      <div className="service_box">
        <h1>Talfia(*sub-brand of Talspo</h1>
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
              <img src='https://static.vecteezy.com/system/resources/thumbnails/000/191/927/small/T_13-01.jpg' />
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
  )
}

export default Talfia
