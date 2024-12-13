import React, { useState } from 'react';
import Swal from 'sweetalert2';
import scaner from "../../assets/images/yellowqr.png"

import "./Contact.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import FooterTop from '../Footer/FooterTop';

const MESSAGE_URL = "https://dev.talspo.com/admin/api/massage-create";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'All Fields Required',
        text: 'Please fill in all required fields.',
      });
      return;
    }
  
    try {
      // Adjust formData to use the correct field names
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        massage: formData.message, 
      };
  
      // console.log("Data being sent:", dataToSend);
  
      const response = await fetch(MESSAGE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
  
      const result = await response.json();
      console.log(" Contact Response:", result);
  
      // Use result.status instead of result.result to check for success
      if (response.ok && result.status) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: result.message || 'Message sent successfully!',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send',
          text: result.message || 'Error sending your message.',
        });
        console.error("API Error:", result.error || "No error message provided.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Send',
        text: 'Please try again later.',
      });
    }
  };
  
  
  return (
    <>
      <Navbar />
      <div className='Contact-main'>
        <div className="contact-page">
          <div className="contact-top">
            <h5>Get in Touch</h5>
            <p>Need help? Want to give your feedback? Feel free to reach out to us.</p>
          </div>
          <div className="contact-btm">
            <div className="left-gif">
            <div className="map-box-content">
  {/* Address */}
  <p
    style={{
      color: "#003266",
      fontSize: "1.2vmax",
    }}
  >
    <i className="ri-map-pin-fill"></i> Ocean Park Township, Indore Bypass Road, near Delhi Public School Indore, Nipania, Indore, Madhya Pradesh 452016
  </p>

  {/* Map */}
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.125479534646!2d75.92761057406582!3d22.76072412605141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190fcf557c1f89%3A0x5c803986dedaec6e!2sTalspo%20Private%20Limited%20%7BNEARBY%20Talent%20Discovery%7D!5e0!3m2!1sen!2sin!4v1734076164421!5m2!1sen!2sin "
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

            </div>


            
            <div className="form-container">
              <div className="form-side">
               <h5>Contact Us</h5>
               <h6>Find our contact details and get in touch with our team for any assistance or inquiries.</h6>
               <h6><i className="ri-mail-fill"></i> Email: example@gmail.com</h6>
               <h6><i className="ri-map-pin-fill"></i> Address:  Ocean Park Township, Indore Bypass Road, near Delhi Public School Indore, Nipania, Indore, Madhya Pradesh 452016 </h6>
               <img src={scaner} alt="" />
              </div>
            <div className="form-page">
              <h5>Send Us A Message</h5>
              <p>Please contact us for any assistance by filling up the form below. We will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className="ipt">
                  <input type="text" name="name" placeholder="Full Name*" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="ipt">
                  <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="ipt">
      <select id="issueType" >
        <option value="" disabled>Type Of Issue</option>
        <option value="technical">Technical Issue</option>
        <option value="nonTechnical">Non-Technical Issue</option>
      </select>
                </div>
                <div className="ipt">
                  <input type="text" name="subject" placeholder="Subject*" required value={formData.subject} onChange={handleChange} />
                </div>
                <div className="ipt">
                  <textarea name="message" placeholder="Message*" required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="btn-cont">
                  <button type="submit">SEND MESSAGE</button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default Contact;
