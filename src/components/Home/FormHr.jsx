import React, { useState } from "react";
import "./Whowe.css";
import { createDirectConnectHR } from "../../apiService";
import Swal from "sweetalert2"; // Importing SweetAlert

const FormHr = ({ closeModal }) => {
  // ------------------ States ---------------------
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [fieldErrors, setFieldErrors] = useState({}); 
  const [meetingComfort, setMeetingComfort] = useState({
    yes: false,
    no: false,
  });
  const [isJobOptionChecked, setIsJobOptionChecked] = useState(false);

  // Job Details State
  const [jobDetails, setJobDetails] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    phone_number: "",
    job_position_title: "",
    jobtype: "",
    your_skiles_experiance: "",
    image: "",
    linkdin_profile: "",
    preferred_job_location: "",
    location: "",
  });


  // ------------------ Handlers ---------------------

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleMeetingComfortChange = (e) => {
    setMeetingComfort(e.target.value); 
  };

  const handleJobOptionCheckboxChange = (e) => {
    setIsJobOptionChecked(e.target.checked);
  };

  const handleJobInputChange = (e) => {
    const { name, value, files } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // console.log("dob error in console ",fieldErrors.error?.email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when submitting

    const formData = new FormData();
    Object.keys(jobDetails).forEach((key) => {
      formData.append(key, jobDetails[key]);
    });

    try {
      const response = await createDirectConnectHR(formData);

      console.log("API Response:", response);  // Log the full API response

      // Check if the response indicates success
      if (response.error === false) {
        Swal.fire({
          title: "Success!",
          text: response.message || "Form submitted successfully!", // Use the success message from the API
          icon: "success",
          confirmButtonText: "OK",
        });

        setJobDetails({
          first_name: "",
          middle_name: "",
          last_name: "",
          date_of_birth: "",
          email: "",
          phone_number: "",
          job_position_title: "",
          jobtype: "",
          location: "",
          your_skiles_experiance: "",
          image: "",
          linkdin_profile: "",
          preferred_job_location: "",
        });
        setIsJobOptionChecked(false);
        closeModal();
      } else {
        console.log("Error response: ", response.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFieldErrors(error);

    } finally {
      setLoading(false);
    }
  };



  // ------------------ JSX ---------------------
  return (
    <div className="modal-content">
      <span className="modal-close">
        <h5>Direct Connect Human Resources Executive</h5>
        <i
          onClick={closeModal}
          style={{ cursor: "pointer" }}
          className="ri-close-line"
        ></i>
      </span>
      <form onSubmit={handleSubmit}>
        {/* Recruitment Purpose */}
        <div className="e-ipt-checkbox full">
          <h6>Recruitment Purpose:</h6>
          <div className="line-div">
            <input type="checkbox" name="recruitmentPurposeNearby" />
            For NEARBY (Geo-Location) Skilled Candidates
          </div>
          <div className="line-div" >
            <input type="checkbox" name="recruitmentPurposeHR" />
            For My Human Resource (HR)/ Talent Agency
          </div>
        </div>

        {/* Job Option Checkbox */}
        <div className="e-ipt-checkbox full">
          <div className="line-div">
            <input
              type="checkbox"
              name="getJob"
              onChange={handleJobOptionCheckboxChange}
            />
            For Getting Job
          </div>
        </div>

        {/* Conditional Job Details */}
        {isJobOptionChecked && (
          <>
            <div className="e-ipt full">
              <input
                type="text"
                name="job_position_title"
                placeholder="Job Position Title*"
                value={jobDetails.job_position_title}
                onChange={handleJobInputChange}
              />
              {fieldErrors.error?.job_position_title && (
                <span className="error-text">{fieldErrors.error?.job_position_title[0]}</span>
              )}
            </div>
            <div className="e-ipt full">
              <input
                type="text"
                name="jobtype"
                placeholder="Job Type*"
                value={jobDetails.jobtype}
                onChange={handleJobInputChange}
              />
              {fieldErrors.error?.jobtype && (
                <span className="error-text">{fieldErrors.error?.jobtype[0]}</span>
              )}
            </div>
            <div className="e-ipt full">
              <input
                type="text"
                name="preferred_job_location"
                placeholder="Preferred Job location*"
                value={jobDetails.preferred_job_location}
                onChange={handleJobInputChange}
              />
              {fieldErrors.error?.preferred_job_location && (
                <span className="error-text">{fieldErrors.error?.preferred_job_location[0]}</span>
              )}
            </div>
            <div className="e-ipt full">
              <input
                type="text"
                name="your_skiles_experiance"
                placeholder="Your Skills & Experience*"
                value={jobDetails.your_skiles_experiance}
                onChange={handleJobInputChange}
              />
              {fieldErrors.error?.your_skiles_experiance && (
                <span className="error-text">{fieldErrors.error?.your_skiles_experiance[0]}</span>
              )}
            </div>
            <div className="e-ipt full upload-resume">
              <input
                type="file"
                id="resume"
                name="image"
                onChange={handleJobInputChange}
              />
              <label htmlFor="resume">Upload Resume</label>
              {fieldErrors.error?.image && (
                <span className="error-text">{fieldErrors.error?.image[0]}</span>
              )}
            </div>

            <div className="e-ipt full">
              <input
                type="text"
                name="linkdin_profile"
                placeholder="Insert LinkedIn Profile Link*"
                value={jobDetails.linkdin_profile}
                onChange={handleJobInputChange}
              />
              {fieldErrors.error?.linkdin_profile && (
                <span className="error-text">{fieldErrors.error?.linkdin_profile[0]}</span>
              )}
            </div>
          </>
        )}

        {/* Personal Details */}
        <div className="e-ipt half">
          <input
            type="text"
            placeholder="First Name*"
            name="first_name"
            value={jobDetails.first_name}
            onChange={handleJobInputChange}
          />
          {fieldErrors.error?.first_name && (
            <span className="error-text">{fieldErrors.error?.first_name[0]}</span>
          )}
        </div>
        <div className="e-ipt half">
          <input
            type="text"
            placeholder="Middle Name (Optional)"
            name="middle_name"
            value={jobDetails.middle_name}
            onChange={handleJobInputChange}
          />
        </div>
        <div className="e-ipt half">
          <input
            type="text"
            placeholder="Last Name*"
            name="last_name"
            value={jobDetails.last_name}
            onChange={handleJobInputChange}
          />
          {fieldErrors.error?.last_name && (
            <span className="error-text">{fieldErrors.error?.last_name[0]}</span>
          )}
        </div>
        <div className="e-ipt half">
          <input
            type="date"
            name="date_of_birth"
            value={jobDetails.date_of_birth ? new Date(jobDetails.date_of_birth).toISOString().split('T')[0] : ''}
            onChange={handleJobInputChange}
          />
          {fieldErrors.error?.date_of_birth && (
            <span className="error-text">{fieldErrors.error?.date_of_birth[0]}</span>
          )}
        </div>


        {/* Contact Information */}
        <div className="e-ipt full">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={jobDetails.email}
            onChange={handleJobInputChange}
          />
          {fieldErrors.error?.email && (
            <span className="error-text">{fieldErrors.error?.email[0]}</span>
          )}
        </div>
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
            </select>
            <input
              type="tel"
              name="phone_number"
              placeholder="WhatsApp Contact Number*"
              value={jobDetails.phone_number}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                if (value.length <= 10) {
                  handleJobInputChange({
                    target: {
                      name: 'phone_number',
                      value: value
                    }
                  });
                }
              }}
              maxLength="10" // Optional, can be used to ensure no more than 10 digits
            />
            {fieldErrors.phone_number && (
              <span className="error-text">{fieldErrors.phone_number[0]}</span>
            )}

          </div>
        </div>

        <div className="e-ipt full">
          <input
            type="text"
            name="location"
            placeholder="Current Location*"
            value={jobDetails.location}
            onChange={handleJobInputChange}
          />
          {fieldErrors.error?.location && (
            <span className="error-text">{fieldErrors.error?.location[0]}</span>
          )}
        </div>

        {/* Meeting Comfort */}
        <div className="e-ipt-checkbox full">
          <h6>
            Are you comfortable using Zoom, G-meet, etc. for initial meetings if
            you are not able to visit our office?
          </h6>
          <label>
            <input
              className="mt-2"
              type="radio"
              name="meetingComfort"
              value="yes"
              checked={meetingComfort === 'yes'}
              onChange={handleMeetingComfortChange}
            />
            Yes
          </label>
          <label>
            <input
              className="mt-2"
              type="radio"
              name="meetingComfort"
              value="no"
              checked={meetingComfort === 'no'}
              onChange={handleMeetingComfortChange}
            />
            No
          </label>
        </div>
        <div className="e-ipt-checkbox full">
          <h6>
            Consent <span style={{ color: "red" }}>*</span>:
          </h6>
          <label>
            <input className="mt-2" type="checkbox" name="consent" required />
            Agree to be contacted by Talspo via WhatsApp, SMS, or email.
          </label>
        </div>
        <div className="e-ipt-checkbox full">
          <h6>Subscribe:</h6>
          <label>
            <input type="checkbox" name="subscription" />
            Agree to receive the latest news regarding the latest Talspo software services like recruitment, talent acquisition, human resources transformation, latest technologies(artificial intelligence, machine learning, deep learning, blockchain, etc.) services in Human Resources (HR), skill training and development services, events, etc.
          </label>
        </div>

        <div className="submit-btn-container full">
          <button disabled={loading} type="submit" className="form-submit-btn">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormHr;
