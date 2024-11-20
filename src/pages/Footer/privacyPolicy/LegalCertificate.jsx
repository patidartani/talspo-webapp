import React from 'react'
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import './LegalCertificate.css';
import { Container } from 'react-bootstrap';

const LegalCertificate = () => {
  return (
    <>
          <Navbar />
          <div className="legal_heading">
        <h1>Legal Certification</h1>
      </div>
          <Container>
          
      <div className='legal_con'>
        <div className="legal_box">
        <h3>Certificate of Incorporation (COI) Certification</h3>
        <button>View Certificate</button>
        </div>
       <div className="legal_certificate">
       <h3>Trandmark Certification</h3>
       <button>View Certificate</button>
       </div>
       <div className='patent_cert'>
       <h3>Patent Certification</h3>
       <button>View Certificate</button>
       </div>
       <div className="other_cert">
       <h3>Other Legal Certification</h3>
       <button className='legal_btn'>View Certificate</button>
       </div>
      </div>
          </Container>
      
      <Footer />
    </>
  )
}

export default LegalCertificate
