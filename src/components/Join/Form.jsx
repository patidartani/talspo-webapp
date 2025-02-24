import { useEffect, useState } from "react";
import "./Form.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { submitJobApplication, BASE_URL } from '../../apiService';


import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const location = useLocation();

  const { postId,
    subtitle,
    title,
    question_one,
    question_two,
    question_three,
    question_four,
    question_five,
    question_six,
    question_seven } = location.state || {};
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
    question_one: '',
    question_two: '',
    question_three: '',
    question_four: '',
    question_five: '',
    question_six: '',
    question_seven: '',
    post_id: String(postId),
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "country") {
        const selectedCountry = countries.find(country => country.country === value);
        if (selectedCountry) {
          setSelectedCountryId(selectedCountry.id);
        }
      }

      if (name === "state") {
        const selectedState = states.find(state => state.state === value);
        if (selectedState) {
          setSelectedStateId(selectedState.id);
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await submitJobApplication(formData);
      if (response.error === false && response.message) {
        Swal.fire({
          title: 'Thank you for applying!',
          text: 'We appreciate your interest. We will review your application and get back to you soon. Redirecting in 10 seconds...',
          icon: 'success',
          timer: 10000,
          showConfirmButton: false,
          allowOutsideClick: false,
          didClose: () => {
            window.location.href = "https://dev.talspo.com/opportunities";
          },
          footer: '<a href="https://dev.talspo.com">Go Back to Home</a>'
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
        question_one: '',
        question_two: '',
        question_three: '',
        question_four: '',
        question_five: '',
        question_six: '',
        question_seven: '',
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

  // ---------------------country city state---------------------------------
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState(null);
  const [cities, setCities] = useState([]);

  const [countryError, setCountryError] = useState(null);
  const [stateError, setStateError] = useState(null);  // Error for states
  const [cityError, setCityError] = useState(null);  // Error for cities


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching countries
        const countryResponse = await fetch(`${BASE_URL}/country`);
        const countryData = await countryResponse.json();

        if (!countryData.records || countryData.records.length === 0) {
          setCountries([]);
          setCountryError("No countries found.");
        } else {
          setCountries(countryData.records);
          setCountryError(null);
        }

        // Fetching states if country is selected
        if (selectedCountryId) {
          const stateResponse = await fetch(`${BASE_URL}/state`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country_id: selectedCountryId }),
          });
          const stateData = await stateResponse.json();

          if (!stateData.records || stateData.records.length === 0) {
            setStates([]);
            setStateError("No states found for the selected country.");
          } else {
            setStates(stateData.records);
            setStateError(null);
          }
        }

        // Fetching cities if state is selected
        if (selectedStateId) {
          const cityResponse = await fetch(`${BASE_URL}/city`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state_id: selectedStateId }),
          });
          const cityData = await cityResponse.json();

          if (!cityData.records || cityData.records.length === 0) {
            setCities([]);
            setCityError("No cities found for the selected state.");
          } else {
            setCities(cityData.records);
            setCityError(null);
          }
        }
      } catch (error) {
        // Handling errors
        setCountryError("An error occurred while fetching countries.");
        setStateError("An error occurred while fetching states.");
        setCityError("An error occurred while fetching cities.");
      }
    };

    fetchData();
  }, [selectedCountryId, selectedStateId]);

  // ---------------------country city state---------------------------------

  return (
    <>
      <NavbarContainer />
      <div className="Form_details">
        <div className="form-content">
          <div className="content-left">
            <h5>{title}</h5>
            <p>{subtitle}
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
                        placeholder="Mention Your First Name*"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                      {errors.first_name && <p className="error-form">{errors.first_name[0]}</p>}

                    </div>
                    <div className="error-div">
                      <input
                        type="text"
                        placeholder="Mention Your Middle Name (Optional)"
                        name="middle_name"
                        value={formData.middle_name}
                        onChange={handleChange}
                      />
                      {errors.middle_name && <p className="error-form">{errors.middle_name[0]}</p>}

                    </div>
                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                      <input
                        type="text"
                        placeholder="Mention Your Last Name*"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                      {errors.last_name && <p className="error-form">{errors.last_name[0]}</p>}
                    </div>

                    <div className="error-div">
                      <PhoneInput
                        country={"in"}
                        value={formData.phone_number}
                        onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone_number: value,
                          }))
                        }
                        containerClass="phone-input-container"
                        inputClass="phone-input-field"
                        buttonClass="phone-input-button"
                        inputStyle={{
                          width: "100%",
                          height: "40px",
                          paddingLeft: "50px",
                        }}
                        inputProps={{
                          placeholder: "Mention your WhatsApp contact number",
                        }}
                      />
                      {errors.phone_number && <p className="error-form">{errors.phone_number[0]}</p>}
                    </div>


                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                      <input
                        type="email"
                        placeholder="Mention Your Email ID*"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="error-form">{errors.email[0]}</p>}
                    </div>

                    <div className="error-div">
                      <input
                        type="text"
                        placeholder="Mention Your Address*"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors.address && <p className="error-form">{errors.address[0]}</p>}
                    </div>
                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Mention Your Country*"
                      >
                        <option value="" disabled>Select Your Country*</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country.country}>
                            {country.country}
                          </option>
                        ))}
                      </select>
                      {errors.country && <p className="error-form">{errors.country[0]}</p>}
                      {countryError && !errors.country && <p className="error-form">{countryError}</p>}
                    </div>
                    <div className="error-div">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Mention Your State*"
                      >
                        <option value="" disabled>Select Your State*</option>
                        {states.map((state, index) => (
                          <option key={index} value={state.state}>
                            {state.state}
                          </option>
                        ))}
                      </select>
                      {errors.state && <p className="error-form">{errors.state[0]}</p>}
                      {stateError && !errors.state && <p className="error-form">{stateError}</p>}
                    </div>

                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                      <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="" disabled>Select City*</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.city}>{city.city}</option>
                        ))}
                      </select>
                      {errors.city && <p className="error-form">{errors.city[0]}</p>}
                      {cityError && !errors.city && <p className="error-form">{cityError}</p>} {/* Display city error */}
                    </div>
                    <div className="error-div">
                      <input
                        type="text"
                        placeholder="Mention Your LinkedIn Profile Link*"
                        name="linkdin_profile"
                        value={formData.linkdin_profile}
                        onChange={handleChange}
                      />
                      {errors.linkdin_profile && <p className="error-form">{errors.linkdin_profile[0]}</p>}

                    </div>
                  </div>
                  <div className="form-ipt">
                    <div className="error-div">
                      <input
                        type="text"
                        placeholder="Mention Your Zip Code/ Pin Code*"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleChange}
                      />
                      {errors.zip_code && <p className="error-form">{errors.zip_code[0]}</p>}
                    </div>

                    <div className="error-div">
                      <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                      />
                      <p style={{ fontSize: "0.8vmax" }}> Only .pdf and .docx and .doc files (Kindly upload maximum size for document is up to 10MB)</p>
                      {errors.image && <p className="error-form">{errors.image[0]}</p>}
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
                    {title && typeof title === 'string' && title.toLowerCase().includes("co - founder") && (
                      <>
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
                      </>
                    )}
                  </div>

                  <h6>Complete "Section B" Before Submitting the Form</h6>

                  {/* Dynamic Textareas for Specific Questions */}
                  <div className="section-b">
                    <h4>Answer All The Questions</h4>
                    <div className="text-ipt">
                      <span>Q1. {question_one}</span>
                      <textarea
                        rows="3"
                        name="question_one"
                        value={formData.question_one}
                        onChange={handleChange}
                      />
                      {errors.question_one && <p className="error-form">{errors.question_one[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q2. {question_two}</span>
                      <textarea
                        rows="3"
                        name="question_two"
                        value={formData.question_two}
                        onChange={handleChange}
                      />
                      {errors.question_two && <p className="error-form">{errors.question_two[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q3. {question_three}</span>
                      <textarea
                        rows="3"
                        name="question_three"
                        value={formData.question_three}
                        onChange={handleChange}
                      />
                      {errors.question_three && <p className="error-form">{errors.question_three[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q4. {question_four}</span>
                      <textarea
                        rows="3"
                        name="question_four"
                        value={formData.question_four}
                        onChange={handleChange}
                      />
                      {errors.question_four && <p className="error-form">{errors.question_four[0]}</p>}

                    </div>
                    <div className="text-ipt">
                      <span>Q5. {question_five}</span>
                      <textarea
                        rows="3"
                        name="question_five"
                        value={formData.question_five}
                        onChange={handleChange}
                      />
                      {errors.question_five && <p className="error-form">{errors.question_five[0]}</p>}

                    </div>

                    <div className="text-ipt">
                      <span>Q6. {question_six}</span>
                      <textarea
                        rows="3"
                        name="question_six"
                        value={formData.question_six}
                        onChange={handleChange}
                      />
                      {errors.question_six && <p className="error-form">{errors.question_six[0]}</p>}

                    </div>

                    <div className="text-ipt">
                      <span>Q7. {question_seven}</span>
                      <select
                        name="question_seven"
                        value={formData.question_seven}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {errors.question_seven && <p className="error-form">{errors.question_seven[0]}</p>}
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
