import React from 'react'
import { Row, Col } from "react-bootstrap";
import "./StudentServiceModel.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const CoWorking = () => {
  return (
    <>
    <Navbar />
 
    <div className='service_con'>
      <div className="service_box">
        <h1>Co-Working spaces, Co-works, Co-live and Events Model Service </h1>
        <Row>
            <Col md={6} sm={12}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo fugiat eos nesciunt ipsam  ipsum esse minima beatae delectus, aliquam quisquam magni id quo, ipsam quia minus doloremque velit veniam commodi eveniet placeat animi! Fugiat distinctio aspernatur maiores non consequatur, repudiandae molestiae culpa?</p>
            </Col>

            <Col md={6} sm={12}>
            <div className="service_img">
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/outsourcing-company-illustration-download-in-svg-png-gif-file-formats--freelance-job-freelancer-co-working-coworking-space-business-pack-professionals-illustrations-3449598.png?f=webp'/>
        </div>
            </Col>
        </Row>
      </div>

      <div className="service_head">
        <h1>Coming soon</h1>
      </div>
    </div>
    <Footer />
     </>
  )
}

export default CoWorking
