import React, { useState } from "react";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import { Container, Modal, Button, Form } from "react-bootstrap";
import "./LegalCertificate.css";
import { certificateForm } from "../../../apiService";
import Swal from 'sweetalert2'; 

const LegalCertificate = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "", 
    middle_name: "", 
    last_name: "", 
    email: "",
    phone_number: "", 
    reason_for_enquiry: "", 
  });
  const [errorMessage, setErrorMessage] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    reason_for_enquiry: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error message for the specific field when user starts typing
    setErrorMessage({
      ...errorMessage,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    let errors = {};
    if (!formData.first_name) errors.first_name = "First name is required.";
    if (!formData.last_name) errors.last_name = "Last name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.phone_number) errors.phone_number = "Phone number is required.";
    if (!formData.reason_for_enquiry) errors.reason_for_enquiry = "Reason for enquiry is required.";

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors); // Set errors to show validation messages
      return; // Prevent form submission
    }

    try {
      const response = await certificateForm(formData);
      if (!response.error) { // Check if error is false, indicating success
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: response.message,
          confirmButtonText: 'OK',
        });

        setFormData({
          first_name: "",
          middle_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          reason_for_enquiry: "",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <NavBarContainer />
      <div className="legal_heading">
        <h1>Legal Certification</h1>
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
              {/* First Name */}
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                {errorMessage.first_name && <div style={{ color: "red", fontSize: "12px" }}>{errorMessage.first_name}</div>}
              </Form.Group>

              {/* Middle Name */}
              <Form.Group controlId="middleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  name="middle_name"
                  value={formData.middle_name}
                  onChange={handleChange}
                  placeholder="Enter your middle name"
                />
              </Form.Group>

              {/* Last Name */}
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
                {errorMessage.last_name && <div style={{ color: "red", fontSize: "12px" }}>{errorMessage.last_name}</div>}
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errorMessage.email && <div style={{ color: "red", fontSize: "12px" }}>{errorMessage.email}</div>}
              </Form.Group>

              {/* Contact Number */}
              <Form.Group controlId="contactNumber">
                <Form.Label>WhatsApp Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                />
                {errorMessage.phone_number && <div style={{ color: "red", fontSize: "12px" }}>{errorMessage.phone_number}</div>}
              </Form.Group>

              {/* Reason */}
              <Form.Group controlId="reason">
                <Form.Label>Reason for Enquiry</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    id="legalPurpose"
                    label="For Legal Purposes"
                    name="reason_for_enquiry"
                    value="legalPurpose"
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="radio"
                    id="generalEnquiry"
                    label="For General Enquiry"
                    name="reason_for_enquiry"
                    value="generalEnquiry"
                    onChange={handleChange}
                  />
                </div>
                {errorMessage.reason_for_enquiry && <div style={{ color: "red", fontSize: "12px" }}>{errorMessage.reason_for_enquiry}</div>}
              </Form.Group>

              <div className="">
              <Form.Label clas> Consent <span style={{ color: "red" }}>*</span>:</Form.Label>
                    <label>
                      <input  style={{marginRight:"0.3vmax"}} className="mt-2" type="checkbox" name="consent" required />
                      Agree to be contacted by Talspo via WhatsApp, SMS, or email.
                    </label>  
                  </div>

                  <div className="">
                  <Form.Label>Subscribe:</Form.Label>
          <label>
            <input style={{marginRight:"0.3vmax"}} type="checkbox" name="subscription" />
            Agree to receive the latest news regarding the latest Talspo software services like recruitment, talent acquisition, human resources transformation, latest technologies(artificial intelligence, machine learning, deep learning, blockchain, etc.) services in Human Resources (HR), skill training and development services, events, etc.
          </label>
                  </div>


              <Button style={{ backgroundColor: "#003f80", fontWeight: "600" }} type="submit" className="mt-4">
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
