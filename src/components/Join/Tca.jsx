import { useState, useEffect, useRef } from 'react';
import './Tca.css';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from '../../pages/Footer/Footer';
import campusImg from "/assets/images/faq.webp";
import axios from 'axios';
import Swal from 'sweetalert2';
import { campusFaq , BASE_URL} from "../../apiService"
import FooterTop from "../../pages/Footer/FooterTop"
import TcaContent from './TcaContent';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Tca = () => {

  // ----------------------------------------------faq campus-----------------------------------------------
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await campusFaq();
        if (response && response.records && Array.isArray(response.records)) {
          setFaqs(response.records);
        } else {
          console.error('Invalid data format:', response);
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // ------------------------------------------------form-------------------------------------------------------------
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    dob: '',
    gender: '',
    select_campus: '',
    school_name: '',
    class: '',
    address: '',
    country: '',
    state: '',
    city: '',
    pin_code: '',
    college_name: '',
    stream_area_of_study: '',
    year_started: '',
    year_completion: '',
    company_name: '',
    industry_type: '',
    company_email: '',
    you_work_as: '',
    company_size: '',
    organization_name: '',
    organization_type: '',
    organization_size: '',
    organization_email: '',
    answer_one: '',
    answer_two: '',
    answer_three: '',
    consent :''
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? (checked ? "true" : "false") : value,
    }));


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

  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://srninfotech.com/talspo/admin/api/registration-create-form',
        formData
      );
      setFormData({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        dob: '',
        gender: '',
        select_campus: '',
        school_name: '',
        class: '',
        address: '',
        country: '',
        state: '',
        city: '',
        pin_code: '',
        college_name: '',
        stream_area_of_study: '',
        year_started: '',
        year_completion: '',
        company_name: '',
        industry_type: '',
        company_email: '',
        you_work_as: '',
        company_size: '',
        organization_name: '',
        organization_type: '',
        organization_size: '',
        organization_email: '',
        answer_one: '',
        answer_two: '',
        answer_three: '',
        consent :''
      });

      Swal.fire({
        title: 'Success!',
        text: 'Form submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.error('Error submitting form:', error.response.data);
      const apiErrors = error.response.data.errors || {};
      setErrors(apiErrors);
    }
  };

  const tcaFormsContentRef = useRef(null);
  const handleApplyNowClick = () => {
    tcaFormsContentRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // -------------------------------------------country state city api--------------------------------------------
 const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState(null);
  const [cities, setCities] = useState([]);

  const [countryError, setCountryError] = useState(null);
  const [stateError, setStateError] = useState(null);  
  const [cityError, setCityError] = useState(null);  


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching countries
        const countryResponse = await fetch(`${BASE_URL}/country`);
        const countryData = await countryResponse.json();
        console.log("countryData", countryData.records)
  
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
  

  // -------------------------------------------------------------------------------------------------------------
  return (
    <>
      <NavbarContainer />
      <div className='Faq-main'>
        <div className="faq-top">
          <div className="fq-left">
            <h4>Talspo Campus <br /> Ambassador</h4>
            <p>We are thrilled that you want to join the Talspo Campus Ambassador (TCA) program, which connects individuals with valuable experiential professional outcomes.</p>
            <div className="fq-btn">
              <button onClick={handleApplyNowClick}>Apply Now</button>
            </div>
          </div>
          <div className="fq-right">
            <img src={campusImg} alt="" />
          </div>
        </div>

        <div className="faq-video">
          <iframe
            src="https://www.youtube.com/embed/EwvHiZD0No8?autoplay=1&mute=1&loop=1&playlist=EwvHiZD0No8"

            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>

          <TcaContent />
        <div className="faq-btm">
          <h5>FAQs for Talspo Campus Ambassador Program</h5>
          <div className="questions">
            {Array.isArray(faqs) && faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <div className="qees" key={faq.id}>
                  <h6 onClick={() => handleToggle(index)}>
                    {faq.title}
                    <span className={activeIndex === index ? 'arrow open' : 'arrow'}>&#9662;</span>
                  </h6>
                  {activeIndex === index && <p>{faq.description}</p>}
                </div>
              ))
            ) : (
              <p>No FAQs available.</p>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------- */}
        <div className="tca-forms-content" id="tca-forms-content" ref={tcaFormsContentRef}>
          <div className="tca-form">
            <div className="formm">
              <h5>Registration Form</h5>
              <span>We Are Happy That You Want To Become Talspo Campus Ambassador</span>
              <p>Please fill out your details in the given below form:</p>

              <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <div className="campus-ipt">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  {errors.first_name && <p style={{ color: "red" }}>{errors.first_name[0]}</p>}

                </div>
                <div className="campus-ipt">
                  <label>Middle Name</label>
                  <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleChange}
                    placeholder="Middle Name"
                  />
                  {errors.middle_name && <p style={{ color: "red" }}>{errors.middle_name[0]}</p>}

                </div>
                <div className="campus-ipt">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  {errors.last_name && <p style={{ color: "red" }}>{errors.last_name[0]}</p>}

                </div>
                <div className="campus-ipt">
                  <label>Email Id</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Id"
                  />
                  {errors.email && <p style={{ color: "red" }}>{errors.email[0]}</p>}

                </div>

                <div className="campus-ipt">
                  <label>Phone Number</label>
                  <PhoneInput
                    country={"in"} 
                    value={formData.phone_number}
                    onChange={(phone) => {
                      setFormData({
                        ...formData,
                        phone_number: phone,
                      });
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      paddingLeft: "50px",
                    }}
                    inputProps={{
                      name: "phone_number",
                      required: true,
                    }}
                    disableDropdown={false}
                  />
                  {errors.phone_number && <p style={{ color: "red" }}>{errors.phone_number[0]}</p>}
                </div>

                <div className="campus-ipt">
                        <label>Date of Birth (Must be 13 years or older)</label>
                        <input 
                          type="text" 
                          name="dob" 
                          value={formData.dob} 
                          onChange={handleChange} 
                          placeholder="DD/MM/YYYY"
                        />
                        {errors.dob && <p style={{ color: "red" }}>{errors.dob[0]}</p>}
                      </div>
                <div className="campus-ipt">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p style={{ color: "red" }}>{errors.gender[0]}</p>}
                </div>

                <div className="campus-ipt">
                  <label>Campus Type</label>
                  <select
                    name="select_campus"
                    value={formData.select_campus}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Campus Type
                    </option>
                    <option value="School">School</option>
                    <option value="University/College">University/College</option>
                    <option value="Company">Company</option>
                    <option value="Organization">Organization</option>
                  </select>
                  {errors.select_campus && <p style={{ color: "red" }}>{errors.select_campus[0]}</p>}

                </div>

                <div className="conditional-form">
                  {formData.select_campus === 'School' && (
                    <div className='school-form'>
                      <h6 className='mb-1'>School Specific Form</h6>

                      <div className="campus-ipt">
                        <label htmlFor="">School Name</label>
                        <input
                          type="text"
                          name="school_name"
                          value={formData.school_name}
                          placeholder="School Name"
                          onChange={handleChange}
                        />
                        {errors.school_name && <p style={{ color: "red" }}>{errors.school_name[0]}</p>}

                      </div>

                      {/* Class Field */}
                      <div className="campus-ipt">
                        <label htmlFor="">Class (Only Above 8th Class/Grade)</label>
                        <input
                          type="text"
                          name="class"
                          value={formData.class}
                          placeholder="Class/Grade"
                          onChange={handleChange}
                        />
                        {errors.class && <p style={{ color: "red" }}>{errors.class[0]}</p>}
                      </div>

                      {/* Address Fields */}
                      <div className="campus-ipt">
                        <label htmlFor="">Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Street Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        {errors.address && <p style={{ color: "red" }}>{errors.address[0]}</p>}

                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Country</label>
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
                        {errors.country && <p style={{ color: "red" }}>{errors.country[0]}</p>}
                        {countryError && !errors.country && <p className="error-form">{countryError}</p>} 
                     
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">State</label>
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
                        {errors.state && <p style={{ color: "red" }}>{errors.state[0]}</p>}
                        {stateError && !errors.state && <p className="error-form">{stateError}</p>} 
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">City</label>
                        <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="" disabled>Select City*</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.city}>{city.city}</option>
                        ))}
                      </select>
                        {errors.city && <p style={{ color: "red" }}>{errors.city[0]}</p>}
                        {cityError && !errors.city && <p className="error-form">{cityError}</p>} 
                      
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Pin Code</label>
                        <input
                          type="text"
                          name="pin_code"
                          placeholder="Pin Code"
                          value={formData.pin_code}
                          onChange={(e) => {
                            const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
                            setFormData({ ...formData, pin_code: numericValue });
                          }}
                        />
                        {errors.pin_code && <p style={{ color: "red" }}>{errors.pin_code[0]}</p>}
                      </div>

                    </div>
                  )}

                  {formData.select_campus === 'University/College' && (
                    <div className='clg-form'>
                      <h6 className='mb-1'>University Specific Form</h6>

                      <div className="campus-ipt">
                        <label htmlFor="">University/College Name</label>
                        <input
                          type="text"
                          name="college_name"
                          value={formData.college_name}
                          placeholder="University/College Name"
                          onChange={handleChange}
                        />
                        {errors.college_name && <p style={{ color: "red" }}>{errors.college_name[0]}</p>}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Stream/Area of Study</label>
                        <input
                          type="text"
                          name="stream_area_of_study"
                          value={formData.stream_area_of_study}
                          placeholder="Stream/Area of Study"
                          onChange={handleChange}
                        />
                        {errors.stream_area_of_study && <p style={{ color: "red" }}>{errors.stream_area_of_study[0]}</p>}

                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Year Started</label>
                        <input
                          type="text"
                          name="year_started"
                          value={formData.year_started}
                          placeholder="Year Started"
                          onChange={handleChange}
                        />
                        {errors.year_started && <p style={{ color: "red" }}>{errors.year_started[0]}</p>}

                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Year of Completion</label>
                        <input
                          type="text"
                          name="year_completion"
                          value={formData.year_completion}
                          placeholder="Year of Completion"
                          onChange={handleChange}
                        />
                        {errors.year_completion && <p style={{ color: "red" }}>{errors.year_completion[0]}</p>}

                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Street Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        {errors.address && <p style={{ color: "red" }}>{errors.address[0]}</p>}

                      </div>

                      <div className="campus-ipt">
                      <label htmlFor="">Country</label>
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
                        {errors.country && <p style={{ color: "red" }}>{errors.country[0]}</p>}
                        {countryError && !errors.country && <p className="error-form">{countryError}</p>} {/* Display country error */}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">State</label>
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
                        {errors.state && <p style={{ color: "red" }}>{errors.state[0]}</p>}
                        {stateError && !errors.state && <p className="error-form">{stateError}</p>} {/* Display state error */}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">City</label>
                        <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="" disabled>Select City*</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.city}>{city.city}</option>
                        ))}
                      </select>
                        {errors.city && <p style={{ color: "red" }}>{errors.city[0]}</p>}
                        {cityError && !errors.city && <p className="error-form">{cityError}</p>} {/* Display city error */}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Pin Code</label>
                        <input
                          type="text"
                          name="pin_code"
                          placeholder="Pin Code"
                          value={formData.pin_code}
                          onChange={(e) => {
                            const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
                            setFormData({ ...formData, pin_code: numericValue }); 
                          }}
                        />
                        {errors.pin_code && <p style={{ color: "red" }}>{errors.pin_code[0]}</p>}
                      </div>

                    </div>
                  )}

                  {formData.select_campus === 'Company' && (
                    <div className='company-form'>
                      <h6 className='mb-1'>Company Specific Form</h6>

                      {/* Company Name */}
                      <div className="campus-ipt">
                        <label htmlFor="">Company Name</label>
                        <input type="text" placeholder='Company Name' name='company_name' value={formData.company_name} onChange={handleChange} />
                        {errors.company_name && <p style={{ color: "red" }}>{errors.company_name[0]}</p>}

                      </div>

                      {/* Industry Type */}
                      <div className="campus-ipt">
                        <label htmlFor="">Industry Type</label>
                        <input type="text" placeholder='Industry Type' name='industry_type' value={formData.industry_type} onChange={handleChange} />
                        {errors.industry_type && <p style={{ color: "red" }}>{errors.industry_type[0]}</p>}

                      </div>

                      {/* You Work As */}
                      <div className="campus-ipt">
                        <label htmlFor="">You Work As</label>
                        <input type="text" placeholder='You Work As' name='you_work_as' value={formData.you_work_as} onChange={handleChange} />
                        {errors.you_work_as && <p style={{ color: "red" }}>{errors.you_work_as[0]}</p>}

                      </div>

                      {/* Company Size */}
                      <div className="campus-ipt">
                        <label htmlFor="">Company Size</label>
                        <input type="text" placeholder='Company Size' name='company_size' value={formData.company_size} onChange={handleChange} />
                        {errors.company_size && <p style={{ color: "red" }}>{errors.company_size[0]}</p>}

                      </div>

                      {/* Company/Professional Email Id */}
                      <div className="campus-ipt">
                        <label htmlFor="">Company/Professional Email Id</label>
                        <input type="email" placeholder='Company/Professional Email Id' name='company_email' value={formData.company_email} onChange={handleChange} />
                        {errors.company_email && <p style={{ color: "red" }}>{errors.company_email[0]}</p>}

                      </div>

                      {/* Address Fields */}
                      <div className="campus-ipt">
                        <label htmlFor="">Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Street Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        {errors.address && <p style={{ color: "red" }}>{errors.address[0]}</p>}

                      </div>

                      <div className="campus-ipt">
                      <label htmlFor="">Country</label>
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
                        {errors.country && <p style={{ color: "red" }}>{errors.country[0]}</p>}
                        {countryError && !errors.country && <p className="error-form">{countryError}</p>} {/* Display country error */}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">State</label>
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
                        {errors.state && <p style={{ color: "red" }}>{errors.state[0]}</p>}
                        {stateError && !errors.state && <p className="error-form">{stateError}</p>} {/* Display state error */}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">City</label>
                        <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="" disabled>Select City*</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.city}>{city.city}</option>
                        ))}
                      </select>
                        {errors.city && <p style={{ color: "red" }}>{errors.city[0]}</p>}
                        {cityError && !errors.city && <p className="error-form">{cityError}</p>} {/* Display city error */}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Pin Code</label>
                        <input
                          type="text"
                          name="pin_code"
                          placeholder="Pin Code"
                          value={formData.pin_code}
                          onChange={(e) => {
                            const numericValue = e.target.value.replace(/[^0-9]/g, '');
                            setFormData({ ...formData, pin_code: numericValue }); // Update state with numeric value
                          }}
                        />
                        {errors.pin_code && <p style={{ color: "red" }}>{errors.pin_code[0]}</p>}
                      </div>

                    </div>
                  )}

                  {formData.select_campus === 'Organization' && (
                    <div className='org-form'>
                      <h6 className='mb-1'>Organization Specific Form</h6>

                      {/* Organization Name */}
                      <div className="campus-ipt">
                        <label htmlFor="">Organization Name</label>
                        <input type="text" placeholder='Organization Name' name='organization_name' value={formData.organization_name} onChange={handleChange} />
                        {errors.organization_name && <p style={{ color: "red" }}>{errors.organization_name[0]}</p>}

                      </div>

                      {/* Organization Type */}
                      <div className="campus-ipt">
                        <label htmlFor="">Organization Type</label>
                        <input type="text" placeholder='Organization Type' name='organization_type' value={formData.organization_type} onChange={handleChange} />
                        {errors.organization_type && <p style={{ color: "red" }}>{errors.organization_type[0]}</p>}

                      </div>

                      {/* Organization Size */}
                      <div className="campus-ipt">
                        <label htmlFor="">Organization Size</label>
                        <input type="text" placeholder='Organization Size' name='organization_size' value={formData.organization_size} onChange={handleChange} />
                        {errors.organization_size && <p style={{ color: "red" }}>{errors.organization_size[0]}</p>}

                      </div>

                      {/* Organization Email Id */}
                      <div className="campus-ipt">
                        <label htmlFor="">Organization Email Id</label>
                        <input type="email" placeholder='Organization Email Id' name='organization_email' value={formData.organization_email} onChange={handleChange} />
                        {errors.organization_email && <p style={{ color: "red" }}>{errors.organization_email[0]}</p>}

                      </div>

                      {/* Address Fields */}
                      <div className="campus-ipt">
                        <label htmlFor="">Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Street Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        {errors.address && <p style={{ color: "red" }}>{errors.address[0]}</p>}

                      </div>

                      <div className="campus-ipt">
                      <label htmlFor="">Country</label>
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
                        {errors.country && <p style={{ color: "red" }}>{errors.country[0]}</p>}
                        {countryError && !errors.country && <p className="error-form">{countryError}</p>} {/* Display country error */}

                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">State</label>
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
                        {errors.state && <p style={{ color: "red" }}>{errors.state[0]}</p>}
                        {stateError && !errors.state && <p className="error-form">{stateError}</p>} {/* Display state error */}

                      </div>

                      <div className="campus-ipt">
                      <label htmlFor="">City</label>
                        <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="" disabled>Select City*</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.city}>{city.city}</option>
                        ))}
                      </select>
                        {errors.city && <p style={{ color: "red" }}>{errors.city[0]}</p>}
                        {cityError && !errors.city && <p className="error-form">{cityError}</p>} {/* Display city error */}
                      </div>

                      <div className="campus-ipt">
                        <label htmlFor="">Pin Code</label>
                        <input
                          type="text"
                          name="pin_code"
                          placeholder="Pin Code"
                          value={formData.pin_code}
                          onChange={(e) => {
                            const numericValue = e.target.value.replace(/[^0-9]/g, ''); // Only allow numeric input
                            setFormData({ ...formData, pin_code: numericValue }); // Update the state with the numeric value
                          }}
                        />
                        {errors.pin_code && <p style={{ color: "red" }}>{errors.pin_code[0]}</p>}
                      </div>

                    </div>
                  )}
                </div>

                <div className="campus-ipt mt-4">
                  <label htmlFor="">Why do you want to be a part of the Talspo Campus Ambassador Program?</label>
                  <textarea
                    name="answer_one" // Match the name with the key in formData
                    id=""
                    value={formData.answer_one} // Bind to formData
                    onChange={handleChange} // Update formData on change
                  ></textarea>
                  {errors.answer_one && <p style={{ color: "red" }}>{errors.answer_one[0]}</p>}

                </div>

                <div className="campus-ipt">
                  <label htmlFor="">Why are you the best fit for this program?</label>
                  <textarea
                    name="answer_two" // Match the name with the key in formData
                    id=""
                    value={formData.answer_two} // Bind to formData
                    onChange={handleChange} // Update formData on change
                  ></textarea>
                  {errors.answer_two && <p style={{ color: "red" }}>{errors.answer_two[0]}</p>}

                </div>

                <div className="campus-ipt">
                  <label htmlFor="">How many programs have you conducted before, and what challenges did you overcome?</label>
                  <textarea
                    name="answer_three" // Match the name with the key in formData
                    id=""
                    value={formData.answer_three} // Bind to formData
                    onChange={handleChange} // Update formData on change
                  ></textarea>
                  {errors.answer_three && <p style={{ color: "red" }}>{errors.answer_three[0]}</p>}

                </div>


                              <div className="campus-ipt-end">
                              <h6>
                                Consent <span style={{ color: 'red' }}>*</span>:
                              </h6>
                              <label>
                                <input
                                  style={{ marginRight: '0.3vmax' }}
                                  className="mt-2"
                                  type="checkbox"
                                  name="consent"
                                  checked={formData.consent === "true"}
                                  onChange={handleChange}
                                />
                                Agree to be contacted by Talspo via WhatsApp, SMS, or email.
                              </label>
                              {errors.consent && <p style={{ color: 'red' }}>{errors.consent}</p>}
                            </div>
                                <div className="campus-ipt-end">
                                <h6>Subscribe:</h6>
                                    <label>
                                      <input style={{marginRight:"0.3vmax"}} type="checkbox" name="subscription" />
                                      Agree to receive the latest news regarding the latest Talspo software services like recruitment, talent acquisition, human resources transformation, latest technologies(artificial intelligence, machine learning, deep learning, blockchain, etc.) services in Human Resources (HR), skill training and development services, events, etc.
                                    </label>
                                </div>
                <button className='submit-form'>Submit Form</button>

              </form>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------- */}

      </div>

      <FooterTop />
      <Footer />
    </>
  )
}

export default Tca