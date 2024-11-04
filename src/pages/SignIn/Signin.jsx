import React from 'react';
import "./Signin.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer"

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className='Signin-main'>
        <div className="Signin-page">
          <div className="form-signin">
            <h5>Sign In</h5>
            <form>
              <div className="ipt">
                <div className='input-container'>
                  <i className='ri-user-3-fill'></i>
                  <input type='text' name='name' placeholder='Email/Phone' />
                </div>
              </div>

              <div className="ipt">
                <div className='input-container'>
                  <i className='ri-lock-fill'></i>
                  <input type='password' name='password' placeholder='Password' />
                </div>
              </div>

              <div className='remember-forgot-container'>
                <label className='remember-me'>
                  <input type='checkbox' /> Remember me
                </label>
                <a href='/forgot-password' className='forgot-password'>Forgot Password?</a>
              </div>

              <div className='button-container'>
                <button type='submit' className='btn-signup'>SIGN IN</button>
                <button type='button' className='btn-linkedin'>
                  <i className="ri-linkedin-box-fill"></i> SIGN IN WITH LINKEDIN
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
