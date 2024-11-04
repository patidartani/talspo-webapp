import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from "../../pages/Footer/Footer"

const Signup = () => {
  const [showReferralInput, setShowReferralInput] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const toggleReferralInput = () => {
    setShowReferralInput((prev) => !prev);
  };
  const handleAgreementChange = () => {
    setIsAgreed((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <div className='Signup-main'>
        <div className='Signup-page'>
          <div className='form-page'>
            <h5>Sign Up</h5>
            <p>Create your free Talspo account today!</p>
            <form>
              <div className='ipt'>
                <div className='input-container'>
                  <i className='ri-user-3-fill'></i>
                  <input type='text' name='name' placeholder='Full Name' />
                </div>
              </div>
              <div className='ipt'>
                <div className='input-container'>
                  <i className='ri-mail-fill'></i>
                  <input type='email' name='email' placeholder='Email' />
                </div>
              </div>
              <div className='ipt'>
                <div className='phone-container'>
                  <div className='country-code'>
                    <select name='countryCode'>
                      <option value='+1'>(USA) +1</option>
                      <option value='+91'>(India) +91</option>
                      <option value='+44'>(UK) +44</option>
                      <option value='+81'>(Japan) +81</option>
                      <option value='+61'>(Australia) +61</option>
                    </select>
                  </div>
                  <div className='phone-number'>
                    <i className='ri-phone-fill'></i>
                    <input type='text' name='number' placeholder='Phone Number' />
                  </div>
                </div>
              </div>

              {/* Gender Selection Section */}
              <div className='ipt'>
                <div className='gender-label'>
                  <i className="ri-group-fill"></i>
                  <span>Gender</span>
                </div>
                <div className="gender-container">
                  <select name='gender'>
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>

              <div className='ipt'>
                <div className='dob-label'>
                  <i className='ri-calendar-2-fill'></i>
                  <span>Date of Birth</span>
                </div>
                <div className='dob-container'>
                  <select name='month'>
                    <option value=''>Month</option>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>
                  <select name='day'>
                    <option value=''>Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select name='year'>
                    <option value=''>Year</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={i} value={2024 - i}>
                        {2024 - i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='ipt'>
                <div className='input-container'>
                  <i className='ri-lock-fill'></i>
                  <input type='password' name='password' placeholder='Password' />
                </div>
              </div>

              <div className='ipt'>
                <div onClick={toggleReferralInput} className='referral-text'>
                  {showReferralInput ? 'Hide Referral Code' : 'Have A Referral Code? Click here!'}
                </div>
                {showReferralInput && (
                  <div className='input-container'>
                    <input type='text' name='referralCode' placeholder='Enter referral code' />
                  </div>
                )}
              </div>

              {/* Terms and Conditions Section */}
              <div className='ipt'>
                <label className='checkbox-container'>
                  <input 
                    type='checkbox' 
                    checked={isAgreed} 
                    onChange={handleAgreementChange} 
                  />
                  <span className='checkmark'></span>
                  I agree to the <a href='/terms'>Terms and Conditions</a> and <a href='/privacy'> Privacy Policy</a>
                </label>
              </div>

              <div className='button-container'>
                <button type='submit' className='btn-signup'>SIGN UP</button>
                <button type='button' className='btn-linkedin'>
                <i className="ri-linkedin-box-fill"></i> SIGN UP WITH LINKEDIN
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
