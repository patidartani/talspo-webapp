import React, { useState } from 'react';
import "./ApplyNow.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const ApplyNow = () => {
  const [countryCode, setCountryCode] = useState("+91"); // Default to India, change as needed
  const [meetingComfort, setMeetingComfort] = useState({
    yes: false,
    no: false
  });
  const [jobOption, setJobOption] = useState(""); // To store selected job option

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleMeetingComfortChange = (e) => {
    const { name, checked } = e.target;
    setMeetingComfort((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleJobOptionChange = (e) => {
    setJobOption(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className='ApplyNow'>
        <div className="Apply_page">
          <div className="form_content">
            <h5>Direct connect human resources executive</h5>
            <form>
              {/* Row 1: Recruitment Purpose (Checkbox) */}
              <div className="e-ipt-checkbox full">
                <h6>Recruitment Purpose:</h6>
                <label>
                  <input type="checkbox" name="recruitmentPurposeNearby" />
                  For NEARBY (Geo-Location) Skilled Candidates
                </label>
                <label>
                  <input type="checkbox" name="recruitmentPurposeHR" />
                  For My Human Resource (HR)/ Talent Agency
                </label>
              </div>

              {/* Row 2: Getting Job (Dropdown for multiple selection) */}
              <div className="e-ipt-select full">
                <label>For Getting Job:</label>
                <select name="jobOptions" value={jobOption} onChange={handleJobOptionChange}>
                  <option value="PositionTitle">Job Position Title</option>
                  <option value="JobType">Job Type</option>
                  <option value="PreferredLocation">Preferred Job Location</option>
                  <option value="SkillsExperience">Your Skills & Experience</option>
                  <option value="UploadResume">Upload Resume</option>
                  <option value="LinkedInProfile">Insert LinkedIn Profile Link</option>
                </select>
              </div>

              {/* Row 3: Personal Information (Name + Date of Birth) */}
              <div className="e-ipt half">
                <input type="text" placeholder="First Name" name="firstName" />
              </div>
              <div className="e-ipt half">
                <input type="text" placeholder="Middle Name (Optional)" name="middleName" />
              </div>
              <div className="e-ipt half">
                <input type="text" placeholder="Last Name" name="lastName" />
              </div>
              <div className="e-ipt half">
                <input type="date" placeholder="Date of Birth" name="dob" />
              </div>

              {/* Row 4: Contact Information */}
              <div className="e-ipt full">
                <input type="email" placeholder="Email Id" name="email" />
              </div>

              {/* Row 5: WhatsApp Contact Number with Country Code */}
              <div className="e-ipt full">
                <div className="country-code-wrapper">
                  <select
                    name="countryCode"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="country-code-dropdown"
                  >
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+33">+33 (France)</option>
                    {/* Add other country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    placeholder="WhatsApp Contact Number"
                    name="whatsapp"
                    className="whatsapp-input"
                  />
                </div>
              </div>

              {/* Row 6: Location Information */}
              <div className="e-ipt full">
                <input type="text" placeholder="Current Location" name="currentLocation" />
              </div>

              {/* Row 7: Meeting Preference (Checkbox) */}
              <div className="e-ipt-checkbox full">
                <h6>Are you comfortable using Zoom, G-meet, etc. for initial meetings if you are not able to visit our office?</h6>
                <label>
                  <input
                    type="checkbox"
                    name="yes"
                    checked={meetingComfort.yes}
                    onChange={handleMeetingComfortChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="no"
                    checked={meetingComfort.no}
                    onChange={handleMeetingComfortChange}
                  />
                  No
                </label>
              </div>

              {/* Row 8: Consent */}
              <div className="e-ipt-checkbox full">
  <h6>Consent <span style={{ color: 'red' }}>*</span>:</h6>
  <label>
    <input type="checkbox" name="consent" required />
    Agree to be contacted by Talspo via WhatsApp, SMS, Phone, Email, etc.
  </label>
</div>

              {/* Row 9: Subscribe */}
              <div className="e-ipt-checkbox full">
                <h6>Subscribe:</h6>
                <label>
                  <input type="checkbox" name="subscribe" />
                  Agree to receive the latest news regarding Talspo services, such as recruitment, talent acquisition, HR transformation, and technology services (AI, machine learning, blockchain, etc.) in HR, skill training, development, and events.
                </label>
              </div>

              {/* Submit Button */}
              <div className="e-ipt full">
                <button type="submit">Submit</button>
              </div>
            </form>     
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyNow;
