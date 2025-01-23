import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Select from 'react-select';
import { contactQrApi } from "../../apiService";
import "./Contact.css";
import NavBarContainer from "../../pages/NavbarCom/NavBarContainer";
import Footer from "../../pages/Footer/Footer";
import FooterTop from '../Footer/FooterTop';

const MESSAGE_URL = "https://srninfotech.com/talspo/admin/api/massage-create";
const SITE_KEY = "6LcllLsqAAAAALQLFF51ImmdUT5rklD3CLIzIrgU";

const Contact = () => {
  const handleButtonClick = () => {
    window.open("https://appt.link/meet-with-team-talspo-Daz83LfM", "_blank");
  };

  const [captchaToken, setCaptchaToken] = useState('');

  const options = [
    { value: 'technical', label: 'Technical Issue' },
    { value: 'nonTechnical', label: 'Non-Technical Issue' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    issue: '',
    captchaToken: captchaToken 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure reCAPTCHA is executed and token is available
    if (!captchaToken) {
      if (window.grecaptcha) {
        console.log("Executing reCAPTCHA...");
        try {
          // Ensure that token is generated before form submission
          const token = await window.grecaptcha.execute(SITE_KEY, { action: 'submit' });
          setCaptchaToken(token); // Set the token in state
          console.log("Captcha Token:", token);
  
          // Now submit the form after setting the token
          submitForm(token); // Call a new function to submit the form
        } catch (error) {
          console.error("reCAPTCHA execution failed:", error);
          Swal.fire({
            icon: 'error',
            title: 'Captcha Error',
            text: 'reCAPTCHA failed to load. Please refresh the page.',
          });
          return;
        }
      } else {
        console.error("reCAPTCHA not loaded.");
        Swal.fire({
          icon: 'error',
          title: 'Captcha Error',
          text: 'reCAPTCHA failed to load. Please refresh the page.',
        });
        return;
      }
    } else {
      submitForm(captchaToken); 
    }
  };
  
  const submitForm = async (token) => {
    const formDataWithToken = { ...formData, captchaToken: token }; 
    
    console.log('Form Data to send: ', formDataWithToken);
  
    try {
      const response = await fetch(MESSAGE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataWithToken),
      });
  
      const result = await response.json();
      console.log("API Response:", result);
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: result.message || 'Your message has been sent successfully!',
        });
        setFormData({ name: '', email: '', subject: '', message: '', issue: '' });
        setCaptchaToken("");  // Clear token after submission
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Message Failed',
          text: result.message || 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Please check your internet connection and try again.',
      });
    }
  };
  
  const [contactQr, setContactQr] = useState([]);

  useEffect(() => {
    const contactQrHandler = async () => {
      try {
        const response = await contactQrApi();
        setContactQr(response.records[0]?.image);
      } catch (error) {
        console.error("Error fetching services data:", error.message);
      }
    };

    contactQrHandler();
  }, []);

  return (
    <>
      <NavBarContainer />
      <div className='Contact-main'>
        <div className="contact-page">
          <div className="contact-top">
            <h5>Get in Touch</h5>
            <p>Let’s Build the Future of HR Together!</p>
            <p>Whether you’re ready to take your talent acquisition to the next level, want to
              streamline your HR operations, or need assistance in upskilling your employees, we’re
              here to help. Get in touch with our team to explore how Talspo can
              be the right solution for your organization. Let’s talk about how AI can power your
              HR strategy.</p>
          </div>
          <div className="contact-btm">
            <div className="left-gif">
              <div className="map-box-content">
                <p style={{ color: "#003266", fontSize: "1.2vmax" }}>
                  <i className="ri-map-pin-fill"></i> Ocean Park Township, Indore Bypass Road, near Delhi Public School Indore, Nipania, Indore, Madhya Pradesh 452016
                </p>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.125479534646!2d75.92761057406582!3d22.76072412605141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190fcf557c1f89%3A0x5c803986dedaec6e!2sTalspo%20Private%20Limited%20%7BNEARBY%20Talent%20Discovery%7D!5e0!3m2!1sen!2sin!4v1734076164421!5m2!1sen!2sin"
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
                <h6><i className="ri-mail-fill"></i> Email: contact@talspo.com</h6>
                <h6><i className="ri-map-pin-fill"></i> Address: Ocean Park Township, Indore Bypass Road, near Delhi Public School Indore, Nipania, Indore, Madhya Pradesh 452016 </h6>
                <img src={contactQr} alt="" />
                <button className="schedule-btn" onClick={handleButtonClick}>
                  Schedule Call with Team Talspo
                </button>
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
                    <Select
                      name="issue"
                      options={options}
                      value={options.find(option => option.value === formData.issue)}
                      placeholder="Type of Issue*"
                      onChange={(selectedOption) =>
                        setFormData({ ...formData, issue: selectedOption ? selectedOption.value : '' })
                      }
                      isClearable
                    />
                  </div>
                  <div className="ipt">
                    <input type="text" name="subject" placeholder="Subject*" required value={formData.subject} onChange={handleChange} />
                  </div>
                  <div className="ipt">
                    <textarea name="message" placeholder="Message*" required value={formData.message} onChange={handleChange}></textarea>
                  </div>

                  {/* Removed reCAPTCHA component as it’s not needed for v3 */}

                  <div className="btn-cont">
                    <button type="submit">Send Message</button>
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
