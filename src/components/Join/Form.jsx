import React, { useState } from "react";
import "./Form.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { submitJobApplication } from '../../apiService';

const Form = () => {
  const location = useLocation();
  const { postId } = location.state || {};
  const [errors, setErrors] = useState({});


  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    address: '',
    country: '',
    state: '',
    city: '',
    linkdin_profile: '',
    zip_code: '',
    image: '',
    gender: '',
    why_talspo: '',
    why_should_we_hire: '',
    what_are_your_strengths: '',
    what_are_your_career: '',
    Why_do_you_think_good_fit: '',
    post_id: String(postId),
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); 
  
    try {
      const response = await submitJobApplication(formData);
      console.log("Form submitted:", response);
  
      if (response.error === false && response.message) {
        Swal.fire({
          title: 'Success!',
          text: response.message, 
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
  
      setFormData({
        first_name: '',
        middle_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        address: '',
        country: '',
        state: '',
        city: '',
        linkdin_profile: '',
        zip_code: '',
        image: '',
        gender: '',
        why_talspo: '',
        why_should_we_hire: '',
        what_are_your_strengths: '',
        what_are_your_career: '',
        Why_do_you_think_good_fit: '',
        post_id: String(postId),
      });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
  
      if (error.response?.data) {
        const errorData = error.response.data.error;
        setErrors(errorData);
        console.log("Validation errors:", errorData);
      }
    }
  };
  

 
  return (
    <>
      <NavbarContainer />
      <div className="Form_details">
        <div className="form-content">
          <div className="content-left">
            <h5>Welcome</h5>
            <p>We are happy that you want to work as{" "}
              <span>"Co-Founder and Chief Financial Officer (CFO)"</span> for
              Talspo!
            </p>
          </div>
          <div className="content-right">
            <div className="container_data">
              <div className="data_form">
                <h5>Please fill your necessary details for joining our team below</h5>
                <form onSubmit={handleSubmit}>
                  {/* Input Fields */}
                  <div className="form-ipt">
                     <div className="error-div">
                     <input
                      type="text"
                      placeholder="Your Name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                     {errors.first_name && <p className="error-message">{errors.first_name[0]}</p>}

                     </div>
                    <div className="error-div">
                    <input
                      type="text"
                      placeholder="Your Middle Name"
                      name="middle_name"
                      value={formData.middle_name}
                      onChange={handleChange}
                    />
                    {errors.middle_name && <p className="error-message">{errors.middle_name[0]}</p>}

                    </div>
                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                    <input
                      type="text"
                      placeholder="Your Last Name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                    {errors.last_name && <p className="error-message">{errors.last_name[0]}</p>}
                    </div>

                     <div className="error-div">
                     <input
  type="tel"
  name="phone_number"
  placeholder="Your Phone"
  value={formData.phone_number}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone_number: value,
      }));
    }
  }}
  maxLength="10"
/>

                    {errors.phone_number && <p className="error-message">{errors.phone_number[0]}</p>}

                     </div>
                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error-message">{errors.email[0]}</p>}
                    </div>

                  <div className="error-div">
                  <input
                      type="text"
                      placeholder="Your Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {errors.address && <p className="error-message">{errors.address[0]}</p>}
                  </div>
                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                    <input
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                    {errors.country && <p className="error-message">{errors.country[0]}</p>}
                    </div>

                     <div className="error-div">
                     <input
                      type="text"
                      placeholder="Your State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {errors.state && <p className="error-message">{errors.state[0]}</p>}
                     </div>

                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                    <input
                      type="text"
                      placeholder="Your City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <p className="error-message">{errors.city[0]}</p>}
                    </div>

                   <div className="error-div">
                   <input
                      type="text"
                      placeholder="LinkedIn Profile Link"
                      name="linkdin_profile"
                      value={formData.linkdin_profile}
                      onChange={handleChange}
                    />
                    {errors.linkdin_profile && <p className="error-message">{errors.linkdin_profile[0]}</p>}

                  </div>
                   </div>
                  <div className="form-ipt">
                    <div className="error-div">
                    <input
                      type="text"
                      placeholder="Your Zip"
                      name="zip_code"
                      value={formData.zip_code}
                      onChange={handleChange}
                    />
                    {errors.zip_code && <p className="error-message">{errors.zip_code[0]}</p>}
                    </div>

                    <div className="error-div">
                    <input
                      type="file"
                      name="image"
                      onChange={handleChange}
                    />
                    {errors.image && <p className="error-message">{errors.image[0]}</p>}
                    </div>

                  </div>

                  {/* Gender Selection */}
                  <div className="form-ipt gender-selection">
                    <label>Gender:</label>
                    <div className="gender-options">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleChange}
                        /> Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleChange}
                        /> Female
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          checked={formData.gender === 'other'}
                          onChange={handleChange}
                        /> Other
                      </label>
                    </div>
                  </div>

                  <div className="sectionA1">
                    <h5>Co-Founder Interest Selection</h5>
                    <p>
                      We are a bootstrapped startup, and this collaboration will be on Equity Shareholding (*Non-Salaried). Are you still ready to proceed for the interview process?
                    </p>
                    <span>Please select one of the following options:</span>

                    <select name="coFounderInterest" id="coFounderInterest" onChange={handleChange}>
                      <option value="" disabled>Select an Option</option>
                      <option value="yes">Yes, I am interested</option>
                      <option value="no">No, I am not interested</option>
                      <option value="maybe">Maybe, I need more information</option>
                    </select>
                  </div>

                  <h6>Complete "Section B" Before Submitting the Form</h6>

                  {/* Dynamic Textareas for Specific Questions */}
                  <div className="section-b">
                    <h4>Answer All The Questions</h4>
                    <div className="text-ipt">
                      <span>Q1. Why Talspo?</span>
                      <textarea
                        rows="3"
                        name="why_talspo"
                        value={formData.why_talspo}
                        onChange={handleChange}
                      />
                    {errors.why_talspo && <p className="error-message">{errors.why_talspo[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q2. Why should we hire you?</span>
                      <textarea
                        rows="3"
                        name="why_should_we_hire"
                        value={formData.why_should_we_hire}
                        onChange={handleChange}
                      />
                    {errors.why_should_we_hire && <p className="error-message">{errors.why_should_we_hire[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q3. What are your strengths?</span>
                      <textarea
                        rows="3"
                        name="what_are_your_strengths"
                        value={formData.what_are_your_strengths}
                        onChange={handleChange}
                      />
                     {errors.what_are_your_strengths && <p className="error-message">{errors.what_are_your_strengths[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q4. What are your career goals?</span>
                      <textarea
                        rows="3"
                        name="what_are_your_career"
                        value={formData.what_are_your_career}
                        onChange={handleChange}
                      />
                        {errors.what_are_your_career && <p className="error-message">{errors.what_are_your_career[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q5. Why_do_you_think_good_fit?</span>
                      <textarea
                        rows="3"
                        name="Why_do_you_think_good_fit"
                        value={formData.Why_do_you_think_good_fit}
                        onChange={handleChange}
                      />
                      {errors.Why_do_you_think_good_fit && <p className="error-message">{errors.Why_do_you_think_good_fit[0]}</p>}

                    </div>
                   
                  </div>

                  {/* Submit Button */}
                  <div className="submit-btn">
                    <button type="submit">Submit Application</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
