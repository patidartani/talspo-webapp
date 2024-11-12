import React from 'react'
import "./ApplyNow.css"
import Navbar from "../../pages/Navbar/Navbar"
import Footer from "../../pages/Footer/Footer"

const ApplyNow = () => {
  return (
   <>
   <Navbar />
<div className='ApplyNow'>
 <div className="Apply_page">

          <div className="form_content">
          <form>
      {/* Row 1: Job Information */}
      <div className="e-ipt half">
        <input type="text" placeholder="Job Position Title" name="jobTitle" />
      </div>
      <div className="e-ipt half">
        <input type="text" placeholder="Job Type" name="jobType" />
      </div>

      {/* Row 2: Location & Skills */}
      <div className="e-ipt half">
        <input type="text" placeholder="Preferred Job Location" name="preferredLocation" />
      </div>
      <div className="e-ipt half">
        <input type="text" placeholder="Your Skills & Experience" name="skills" />
      </div>

      {/* Row 3: LinkedIn & Resume */}
      <div className="e-ipt full">
        <input type="url" placeholder="LinkedIn Profile Link" name="linkedin" />
      </div>
      <div className="e-ipt full">
        <input type="file" name="resume" />
      </div>

      {/* Row 4: Personal Information */}
      <div className="e-ipt half">
        <input type="text" placeholder="First Name" name="firstName" />
      </div>
      <div className="e-ipt half">
        <input type="text" placeholder="Last Name" name="lastName" />
      </div>

      {/* Row 5: Contact Information */}
      <div className="e-ipt full">
        <input type="email" placeholder="Email Id" name="email" />
      </div>
      <div className="e-ipt full">
        <input type="tel" placeholder="WhatsApp Contact Number (+Country Code)" name="whatsapp" />
      </div>

      {/* Row 6: Location and Meeting Preference */}
      <div className="e-ipt full">
        <input type="text" placeholder="Current Location" name="currentLocation" />
      </div>
     
      <div className="e-ipt-select full">
  <label>
    Comfortable with online meetings?
    <select name="onlineMeet">
      <option value="">Select an option</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </label>
</div>

<div className="e-ipt-checkbox full">
<h6>Consent:</h6>
        <label>
          <input type="checkbox" name="consent" />
          Agree to be contacted by Talspo via WhatsApp, SMS, Phone, Email, etc.
        </label>
      </div>
      
      {/* Checkbox for Subscribe */}
      <div className="e-ipt-checkbox full">
      <h6>Subscribe:</h6>
        <label>
          <input type="checkbox" name="subscribe" />
          Agree to receive the latest news regarding Talspo services, such as recruitment, talent acquisition, HR transformation, and technology services (AI, machine learning, blockchain, etc.) in HR, skill training, development, and events.
        </label>
      </div>


      <div className="e-ipt full">
        <button>Submit</button>
      </div>
    </form>     
          </div>

</div>
</div>
    {/* <Footer/> */}
   </>
  )
}

export default ApplyNow