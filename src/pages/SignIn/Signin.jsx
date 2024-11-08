// src/components/Signin/Signin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux-toolkit/slices/authSlice'; 
import { LOGIN_URL } from '../../apiService'; 
import "./Signin.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({
      email: '',
      password: '',
      general: '',
    });

    if (!formData.email || !formData.password) {
      setFieldErrors((prev) => ({ ...prev, general: "Please fill in all fields." }));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(LOGIN_URL, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setFieldErrors((prev) => ({ ...prev, general: data.message || "Login failed. Please try again." }));
        return;
      }

      dispatch(setUser(data));

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        confirmButtonText: 'Go to Dashboard',
      }).then(() => {
        navigate('/'); // Redirect to home page or dashboard
      });
    } catch (error) {
      setFieldErrors((prev) => ({ ...prev, general: error.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='Signin-main'>
        <div className="Signin-page">
          <div className="form-signin">
            <h5>Login</h5>
            {fieldErrors.general && <p className="error-message">{fieldErrors.general}</p>} {/* Show general error */}

            <form onSubmit={handleSubmit}>
              <div className="ipt">
                <div className='input-container'>
                  <i className='ri-user-3-fill'></i>
                  <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {fieldErrors.email && <p className="error-message">{fieldErrors.email}</p>} {/* Show email error */}
              </div>

              <div className="ipt">
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

              <div className='remember-forgot-container'>
                <label className='remember-me'>
                  <input type='checkbox' /> Remember me
                </label>
                <a href='/forgot-password' className='forgot-password'>Forgot Password?</a>
              </div>

              <div className='button-container'>
                <button type='submit' className='btn-signup' disabled={isSubmitting}>
                  {isSubmitting ? "Logging In..." : "LOGIN"}
                </button>
              </div>
            </form>

            <div className='signup-prompt'>
              <p>Don't have an account? <a href='/signup' className='signup-link'>Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
