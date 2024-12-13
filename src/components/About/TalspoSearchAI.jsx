import React from 'react';
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import { Row, Col } from "react-bootstrap";

const TalspoSearchAI = () => {
  return (
    <>
      <Navbar />
      <div className="service_con">
        <div className="service_box">
          <h1>Talspo Search AI</h1>
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
              <div className="service_video" style={{ position: 'relative', height: '0', paddingBottom: '56.25%' }}>
              <iframe
                  src="https://www.youtube.com/embed/o7QuAauyzP4?autoplay=1&mute=1&loop=1&playlist=o7QuAauyzP4"
                  frameBorder="0"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  allow="autoplay; fullscreen"
                  title="Talspo Search AI Video"
                ></iframe>
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

export default TalspoSearchAI;
