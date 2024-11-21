import React, { useState } from 'react';
import Swal from 'sweetalert2';

import "./Contact.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

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
            <h5>Contact Us</h5>
            <p>Need help? Want to give your feedback? Feel free to reach out to us.</p>
          </div>
          <div className="contact-btm">
            <div className="left-gif">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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
      <Footer />
    </>
  );
};

export default Contact;
