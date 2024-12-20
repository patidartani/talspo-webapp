import React from 'react'
import { Row, Col } from "react-bootstrap";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const TalspoAPI = () => {
  return (
    <>
      <Navbar />
      <div className="service_con">
        <div className="service_box">
          <h1>Talspo API</h1>
          <Row>
            <Col md={6} sm={12}>
              <div className="service_head">
                <h1>Coming Soon.....</h1>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="service_img">
                <img src='https://cdni.iconscout.com/illustration/free/thumb/free-idea-illustration-download-in-svg-png-gif-file-formats--business-creative-innovation-fresh-illustrations-pack-design-development-1768732.png?f=webp' />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default TalspoAPI
