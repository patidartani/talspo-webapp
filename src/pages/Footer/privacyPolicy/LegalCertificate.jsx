import React, { useState } from "react";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Container, Modal, Button, Form } from "react-bootstrap";
import "./LegalCertificate.css";

const LegalCertificate = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // You can add logic here to send the form data to the email addresses.
    setTimeout(() => {
      setShowModal(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="legal_heading">
        <h1>Legal Certification</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolorem?</p>
      </div>
      <Container>
        <div className="legal_con">
          <div className="legal_box">
            <h3>Certificate of Incorporation (COI) Certification</h3>
            <button className="legal_btn" onClick={handleShow}>
              View Certificate
            </button>
          </div>
          <div className="legal_certificate">
            <h3>Trademark Certification</h3>
            <button className="legal_btn" onClick={handleShow}>
              View Certificate
            </button>
          </div>
          <div className="patent_cert">
            <h3>Patent Certification</h3>
            <button className="legal_btn" onClick={handleShow}>
              View Certificate
            </button>
          </div>
          <div className="other_cert">
            <h3>Other Legal Certification</h3>
            <button className="legal_btn" onClick={handleShow}>
              View Certificate
            </button>
          </div>
        </div>
      </Container>
      <Footer />

      {/* Modal for Form */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Legal Certification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!formSubmitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" required />
              </Form.Group>

              <Form.Group controlId="middleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your middle name" />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="contactNumber">
                <Form.Label>WhatsApp Contact Number</Form.Label>
                <Form.Control type="text" placeholder="+91 1234567890" required />
              </Form.Group>

              <Form.Group controlId="reason">
                <Form.Label>Reason for Enquiry</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    id="legalPurpose"
                    label="For Legal Purposes"
                    name="reason"
                    required
                  />
                  <Form.Check
                    type="radio"
                    id="generalEnquiry"
                    label="For General Enquiry"
                    name="reason"
                    required
                  />
                </div>
              </Form.Group>

              <Button style={{backgroundColor:"#003f80", fontWeight:'600'}}  type="submit" className="mt-4">
                Submit
              </Button>
            </Form>
          ) : (
            <p className="text-success">
              Your form has been sent to our legal team for review. We will respond to the email address and contact number provided in the form in 48 hours.
            </p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LegalCertificate;
