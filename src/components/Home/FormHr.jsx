import React, { useState } from "react";
import "./Whowe.css";
import { createDirectConnectHR } from "../../apiService";
import Swal from "sweetalert2"; // Importing SweetAlert

const FormHr = ({ closeModal }) => {
  // ------------------ States ---------------------
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [fieldErrors, setFieldErrors] = useState({}); // To store error messages for each field
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
    setMeetingComfort(e.target.value); // Set the value of 'yes' or 'no' based on the radio button clicked
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(jobDetails).forEach((key) => {
      formData.append(key, jobDetails[key]);
    });

    try {
      const response = await createDirectConnectHR(formData);

      if (response.result) {
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Clear form fields after successful submission
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
        setFieldErrors({}); // Clear field errors
        closeModal();
      } else {
        if (response.error) {
          setFieldErrors(response.error); // Store validation errors from the API
        }
        Swal.fire({
          title: "Error!",
          text: response.message || "Form submission failed.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
       setFieldErrors(error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
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
          <label>
            <input type="checkbox" name="recruitmentPurposeNearby" />
            For NEARBY (Geo-Location) Skilled Candidates
          </label>
          <label>
            <input type="checkbox" name="recruitmentPurposeHR" />
            For My Human Resource (HR)/ Talent Agency
          </label>
        </div>

        {/* Job Option Checkbox */}
        <div className="e-ipt-checkbox full">
          <label>
            <input
              type="checkbox"
              name="getJob"
              onChange={handleJobOptionCheckboxChange}
            />
            For Getting Job
          </label>
        </div>

        {/* Conditional Job Details */}
        {isJobOptionChecked && (
          <>
            <div className="e-ipt full">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={jobDetails.first_name}
                onChange={handleJobInputChange}
              />
              {fieldErrors.first_name && (
                <span className="error-text">{fieldErrors.first_name[0]}</span>
              )}
            </div>

            <div className="e-ipt full">
              <input
                type="text"
                name="jobType"
                placeholder="Job Type"
                value={jobDetails.jobType}
                onChange={handleJobInputChange}
              />
              {fieldErrors.jobType && (
                <span className="error-text">{fieldErrors.jobType[0]}</span>
              )}
            </div>
            <div className="e-ipt full">
              <input
                type="text"
                name="location"
                placeholder="Preferred Job Location"
                value={jobDetails.location}
                onChange={handleJobInputChange}
              />
              {fieldErrors.location && (
                <span className="error-text">{fieldErrors.location[0]}</span>
              )}
            </div>
            <div className="e-ipt full">
              <input
                type="text"
                name="skillsExperience"
                placeholder="Your Skills & Experience"
                value={jobDetails.skillsExperience}
                onChange={handleJobInputChange}
              />
              {fieldErrors.skillsExperience && (
                <span className="error-text">
                  {fieldErrors.skillsExperience[0]}
                </span>
              )}
            </div>
            <div className="e-ipt full upload-resume">
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleJobInputChange}
              />
              <label htmlFor="resume">Upload Resume</label>
            </div>
            <div className="e-ipt full">
              <input
                type="text"
                name="linkdin_profile"
                placeholder="Insert LinkedIn Profile Link"
                value={jobDetails.linkdin_profile}
                onChange={handleJobInputChange}
              />
              {fieldErrors.linkdin_profile && (
                <span className="error-text">
                  {fieldErrors.linkdin_profile[0]}
                </span>
              )}
            </div>
          </>
        )}

        {/* Personal Details */}
        <div className="e-ipt full">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={jobDetails.first_name}
            onChange={handleJobInputChange}
          />
          {fieldErrors.first_name && (
            <span className="error-text">{fieldErrors.first_name[0]}</span>
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
            placeholder="Last Name"
            name="last_name"
            value={jobDetails.last_name}
            onChange={handleJobInputChange}
          />
          {fieldErrors.last_name && (
            <span className="error-text">{fieldErrors.last_name[0]}</span>
          )}
        </div>
        <div className="e-ipt half">
          <input
            type="date"
            name="date_of_birth"
            value={jobDetails.date_of_birth}
            onChange={handleJobInputChange}
          />
          {fieldErrors.date_of_birth && (
            <span className="error-text">{fieldErrors.date_of_birth[0]}</span>
          )}
        </div>

        {/* Contact Information */}
        <div className="e-ipt full">
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={jobDetails.email}
            onChange={handleJobInputChange}
          />
          {fieldErrors.email && (
            <span className="error-text">{fieldErrors.email[0]}</span>
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
              placeholder="WhatsApp Contact Number"
              value={jobDetails.phone_number}
              onChange={handleJobInputChange}
            />
            {fieldErrors.phone_number && (
              <span className="error-text">{fieldErrors.phone_number[0]}</span>
            )}
          </div>
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
              checked={meetingComfort === "yes"}
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
              checked={meetingComfort === "no"}
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
            Subscribe to Talspo
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
