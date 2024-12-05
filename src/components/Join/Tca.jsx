import React, { useState } from 'react';
import './Tca.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from '../../pages/Footer/Footer';
import campusImg from "../../assets/images/faq.webp";

const Tca = () => {
          const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Talspo?',
      answer: 'Talspo is a platform designed to help users find talented individuals nearby across various fields.',
    },
    {
      question: 'How does Talspo work?',
      answer: 'Users can create profiles showcasing their skills, and others can search for talents based on location and expertise.',
    },
    {
      question: 'Is Talspo free to use?',
      answer: 'Yes, Talspo offers a free tier for users to connect and explore talents. Additional features may be available for a fee.',
    },
    {
      question: 'Can I update my profile?',
      answer: 'Absolutely! Users can edit their profiles at any time to reflect their current skills and experiences.',
    },
    {
      question: 'How can I get support?',
      answer: 'You can reach out to our support team via the contact page or through the help section in your account.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
// ------------------------------------------------form-------------------------------------------------------------
const [ambassadorType, setAmbassadorType] = useState('');

const handleAmbassadorTypeChange = (e) => {
  setAmbassadorType(e.target.value);
};
// -------------------------------------------------------------------------------------------------------------
  return (
          <>
          <Navbar />
          <div className='Faq-main'>
            <div className="faq-top">
              <div className="fq-left">
                <h4>Talspo Campus <br /> Ambassador</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi voluptatibus cumque sunt quas delectus officia odio possimus, illum repellat!</p>
                <div className="fq-btn">
                  <button>Apply Now</button>
                </div>
              </div>
              <div className="fq-right">
                <img src={campusImg} alt="" />
              </div>
            </div>
    
            <div className="faq-video">
              video
            </div>
    
            <div className="faq-btm">
              <h5>Frequently Asked Questions</h5>
              <div className="questions">
                {faqs.map((faq, index) => (
                  <div className="qees" key={index}>
                    <h6 onClick={() => handleToggle(index)}>
                      {faq.question}
                      <span className={activeIndex === index ? 'arrow open' : 'arrow'}>&#9662;</span>
                    </h6>
                    {activeIndex === index && <p>{faq.answer}</p>}
                  </div>
                ))}
              </div>
            </div>

{/* ------------------------------------------------------------------------------------------------------------- */}
<div className="tca-forms-content">
      <div className="tca-form">
        <div className="formm">
          <h5>Registration Form</h5>
          <span>We Are Happy That You Want To Become Talspo Campus Ambassador</span>
          <p>Please fill out your details in the given below form:</p>

          <form>
            {/* Basic Information */}
            <div className="campus-ipt">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="campus-ipt">
              <label>Middle Name</label>
              <input type="text" placeholder="Middle Name" />
            </div>
            <div className="campus-ipt">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="campus-ipt">
              <label>Email Id</label>
              <input type="text" placeholder="Email Id" />
            </div>

            {/* Country Code and Phone */}
            <div className="campus-ipt">
              <label>Country Code or Phone Number</label>
              <input type="text" placeholder="Country Code or Phone Number" />
            </div>

            {/* Date of Birth */}
            <div className="campus-ipt">
              <label>Date of Birth (Must be 13 years or older)</label>
              <input type="date" />
            </div>

            {/* Gender Selection */}
            <div className="campus-ipt">
              <label>Gender</label>
              <select>
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Campus Ambassador Type */}
            <div className="campus-ipts mt-2">
            <label style={{fontWeight:"600", fontSize:"1.2vmax"}}>Select Campus Ambassador Type:</label>
                            <div className="iptssss">
                <div className='radio'>
              <label  htmlFor="school">School</label>
                <input 
                  type="radio"
                  id="school"
                  name="ambassadorType"
                  value="school"
                  checked={ambassadorType === 'school'}
                  onChange={handleAmbassadorTypeChange}
                />        
              </div>
              <div className='radio'>
              <label htmlFor="university">College</label>
                <input
                  type="radio"
                  id="university"
                  name="ambassadorType"
                  value="university"
                  checked={ambassadorType === 'university'}
                  onChange={handleAmbassadorTypeChange}
                />
              </div>
              <div className='radio'>
              <label htmlFor="company">Company</label>

                <input
                  type="radio"
                  id="company"
                  name="ambassadorType"
                  value="company"
                  checked={ambassadorType === 'company'}
                  onChange={handleAmbassadorTypeChange}
                />
              </div>
              <div className='radio'>
              <label htmlFor="organization">Organization</label>

                <input
                  type="radio"
                  id="organization"
                  name="ambassadorType"
                  value="organization"
                  checked={ambassadorType === 'organization'}
                  onChange={handleAmbassadorTypeChange}
                />
              </div>
                </div>

            </div>

            <div className="conditional-form">
               {/* Conditional Forms */}
               {ambassadorType === 'school' && (
  <div className='school-form'>
    <h6 className='mb-1'>School Specific Form</h6>

    {/* School Name */}
    <div className="campus-ipt">
      <label htmlFor="">School Name</label>
      <input type="text" placeholder='School Name' />
    </div>

    {/* Class Field */}
    <div className="campus-ipt">
      <label htmlFor="">Class (Only Above 8th Class/Grade)</label>
      <input type="text" placeholder='Class/Grade' />
    </div>

    {/* Address Fields */}
    <div className="campus-ipt">
      <label htmlFor="">Address</label>
      <input type="text" placeholder='Street Address' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Country</label>
      <input type="text" placeholder='Country' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">State</label>
      <input type="text" placeholder='State' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">City</label>
      <input type="text" placeholder='City' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Pin Code</label>
      <input type="text" placeholder='Pin Code' />
    </div>
  </div>
)}

{ambassadorType === 'university' && (
  <div className='clg-form'>
    <h6 className='mb-1'>University Specific Form</h6>

    {/* University/College Name */}
    <div className="campus-ipt">
      <label htmlFor="">University/College Name</label>
      <input type="text" placeholder='University/College Name' />
    </div>

    {/* Stream/Area of Study */}
    <div className="campus-ipt">
      <label htmlFor="">Stream/Area of Study</label>
      <input type="text" placeholder='Stream/Area of Study' />
    </div>

    {/* Year Started */}
    <div className="campus-ipt">
      <label htmlFor="">Year Started</label>
      <input type="text" placeholder='Year Started' />
    </div>

    {/* Year Completion */}
    <div className="campus-ipt">
      <label htmlFor="">Year of Completion</label>
      <input type="text" placeholder='Year of Completion' />
    </div>

    {/* Address Fields */}
    <div className="campus-ipt">
      <label htmlFor="">Address</label>
      <input type="text" placeholder='Street Address' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Country</label>
      <input type="text" placeholder='Country' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">State</label>
      <input type="text" placeholder='State' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">City</label>
      <input type="text" placeholder='City' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Pin Code</label>
      <input type="text" placeholder='Pin Code' />
    </div>
  </div>
)}

{ambassadorType === 'company' && (
  <div className='company-form'>
    <h6 className='mb-1'>Company Specific Form</h6>

    {/* Company Name */}
    <div className="campus-ipt">
      <label htmlFor="">Company Name</label>
      <input type="text" placeholder='Company Name' />
    </div>

    {/* Industry Type */}
    <div className="campus-ipt">
      <label htmlFor="">Industry Type</label>
      <input type="text" placeholder='Industry Type' />
    </div>

    {/* You Work As */}
    <div className="campus-ipt">
      <label htmlFor="">You Work As</label>
      <input type="text" placeholder='You Work As' />
    </div>

    {/* Company Size */}
    <div className="campus-ipt">
      <label htmlFor="">Company Size</label>
      <input type="text" placeholder='Company Size' />
    </div>

    {/* Company/Professional Email Id */}
    <div className="campus-ipt">
      <label htmlFor="">Company/Professional Email Id</label>
      <input type="email" placeholder='Company/Professional Email Id' />
    </div>

    {/* Address Fields */}
    <div className="campus-ipt">
      <label htmlFor="">Address</label>
      <input type="text" placeholder='Street Address' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Country</label>
      <input type="text" placeholder='Country' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">State</label>
      <input type="text" placeholder='State' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">City</label>
      <input type="text" placeholder='City' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Pin Code</label>
      <input type="text" placeholder='Pin Code' />
    </div>
  </div>
)}

{ambassadorType === 'organization' && (
  <div className='org-form'>
    <h6 className='mb-1'>Organization Specific Form</h6>

    {/* Organization Name */}
    <div className="campus-ipt">
      <label htmlFor="">Organization Name</label>
      <input type="text" placeholder='Organization Name' />
    </div>

    {/* Organization Type */}
    <div className="campus-ipt">
      <label htmlFor="">Organization Type</label>
      <input type="text" placeholder='Organization Type' />
    </div>

    {/* Organization Size */}
    <div className="campus-ipt">
      <label htmlFor="">Organization Size</label>
      <input type="text" placeholder='Organization Size' />
    </div>

    {/* Organization Email Id */}
    <div className="campus-ipt">
      <label htmlFor="">Organization Email Id</label>
      <input type="email" placeholder='Organization Email Id' />
    </div>

    {/* Address Fields */}
    <div className="campus-ipt">
      <label htmlFor="">Address</label>
      <input type="text" placeholder='Street Address' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Country</label>
      <input type="text" placeholder='Country' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">State</label>
      <input type="text" placeholder='State' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">City</label>
      <input type="text" placeholder='City' />
    </div>

    <div className="campus-ipt">
      <label htmlFor="">Pin Code</label>
      <input type="text" placeholder='Pin Code' />
    </div>
  </div>
)}


            </div>

             <div className="campus-ipt mt-4">
                <label htmlFor="">Why you want to be a part of Talspo Campus Ambassador Program?</label>
                <textarea name="" id=""></textarea>
              </div>

              <div className="campus-ipt">
                <label htmlFor="">Why are you the best fit of this program ? </label>
                <textarea name="" id=""></textarea>
              </div>
                    
              <div className="campus-ipt">
                <label htmlFor="">How many programs have you conducted before and what were the 
                challenges you overcame?</label>
                <textarea name="" id=""></textarea>
              </div>
           

            <button className='submit-form'>Submit Form</button>
             
          </form>
        </div>
      </div>
    </div>
{/* ------------------------------------------------------------------------------------------------------------- */}

          </div>
          <Footer />
        </>
  )
}

export default Tca