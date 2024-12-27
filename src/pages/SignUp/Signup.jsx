import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux-toolkit/slices/authSlice'; 
import { SIGNUP_URL } from '../../apiService';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import Swal from 'sweetalert2'; // Import SweetAlert2
import './Signup.css';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from '../../pages/Footer/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    countryCode: '+1',
    number: '',
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear error when user types
  };

  const handleAgreementChange = () => {
    setIsAgreed((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({
      name: '',
      email: '',
      password: '',
      number: '',
    }); // Reset errors

    if (!isAgreed) {
      setFieldErrors((prev) => ({ ...prev, agreement: "Please agree to the terms and conditions." }));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(SIGNUP_URL, { // Fixed the missing comma
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Set individual errors based on the API response
        const errorMessages = data.status || [];
        errorMessages.forEach((message) => {
          if (message.includes("password")) {
            setFieldErrors((prev) => ({ ...prev, password: message }));
          } else if (message.includes("email")) {
            setFieldErrors((prev) => ({ ...prev, email: message }));
          } else if (message.includes("name")) {
            setFieldErrors((prev) => ({ ...prev, name: message }));
          } else if (message.includes("number")) {
            setFieldErrors((prev) => ({ ...prev, number: message }));
          }
        });
        return;
      }

      // Dispatch action to save user data in Redux store
      dispatch(setUser(data));  // Here, data will be saved to the Redux state

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Sign Up Successful!',
        text: 'You have successfully signed up.',
        confirmButtonText: 'Go to Sign In',
      }).then(() => {
        // Navigate to Sign In page after successful sign up
        navigate('/signin');
      });

    } catch (error) {
      setFieldErrors((prev) => ({ ...prev, general: error.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavbarContainer />

      <div className='Signup-main'>

        <div className='Signup-page'>
        <h3>Coming soon....</h3>
                  
          <div className='form-page'>

            <h5>Sign Up</h5>
            <p>Create your free Talspo account today!</p>

            {fieldErrors.general && <p className="error-message">{fieldErrors.general}</p>} {/* Show general error */}

            <form onSubmit={handleSubmit}>
              <div className='ipt'>
                <div className='input-container'>
                  <i className='ri-user-3-fill'></i>
                  <input
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {fieldErrors.name && <p className="error-message">{fieldErrors.name}</p>} {/* Show name error */}
              </div>

              <div className='ipt'>
                <div className='input-container'>
                  <i className='ri-mail-fill'></i>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {fieldErrors.email && <p className="error-message">{fieldErrors.email}</p>} {/* Show email error */}
              </div>

              <div className='ipt'>
                <div className='input-container'>
                  <i className='ri-lock-fill'></i>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {fieldErrors.password && <p className="error-message">{fieldErrors.password}</p>} {/* Show password error */}
              </div>

              <div className='ipt'>
                <div className='phone-container'>
                  <div className='country-code'>
                    <select name='countryCode' value={formData.countryCode} onChange={handleInputChange}>
                      <option value='+1'>(USA) +1</option>
                      <option value='+91'>(India) +91</option>
                      <option value='+44'>(UK) +44</option>
                      <option value='+81'>(Japan) +81</option>
                      <option value='+61'>(Australia) +61</option>
                    </select>
                  </div>
                  <div className='phone-number'>
                    <i className='ri-phone-fill'></i>
                    <input
                      type='text'
                      name='number'
                      placeholder='Phone Number'
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                {fieldErrors.number && <p className="error-message">{fieldErrors.number}</p>} {/* Show phone number error */}
              </div>

              <div className='ipt'>
                <label className='checkbox-container'>
                  <input
                    type='checkbox'
                    checked={isAgreed}
                    onChange={handleAgreementChange}
                  />
                  <span className='checkmark'></span>
                  I agree to the <a href='/terms'>Terms and Conditions</a> and <a href='/privacy'>Privacy Policy</a>
                </label>
                {fieldErrors.agreement && <p className="error-message">{fieldErrors.agreement}</p>} {/* Show agreement error */}
              </div>

              <div className='button-container'>
                <button type='submit' className='btn-signup' disabled={isSubmitting}>
                  {isSubmitting ? "Signing Up..." : "SIGN UP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
