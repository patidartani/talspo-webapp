import { useEffect, useState } from 'react'
import "./DoPartnership.css"
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import { doPartnerhip, submitCareerForm, partnersScaner } from "../../apiService"
import Loading from "../../pages/loading/Loading"
import Swal from "sweetalert2"; // Importing SweetAlert
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import FooterTop from '../../pages/Footer/FooterTop';
import DoPartnershipContent from './DoPartnershipContent'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const DoPatnership = () => {

  // --------------------partnership api-----------------------------------

  const [partners, setPartners] = useState([]);
  const [scannerData, setScannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({});
  console.log("errors")
  const [formLoading, setFormLoading] = useState(false);

  // ------------------drive logic---------------------
  const [isDriveLink, setIsDriveLink] = useState(false); // State to toggle between file input and Google Drive link input
  const [driveLink, setDriveLink] = useState(''); // Store the Google Drive link


  const handleDriveLinkChange = (e) => {
    setDriveLink(e.target.value);
  };

  // ------------------drive logic---------------------

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    company_web_site: "",
    subject: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const partnershipResponse = await doPartnerhip();
        setPartners(partnershipResponse.records);

        const scannerResponse = await partnersScaner();
        setScannerData(scannerResponse.records);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  // -------------------------------partnership form --------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null
    }));
  };


  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});
    setFormLoading(true);
  
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
  
    try {
      const response = await submitCareerForm(data);
  
      if (response && response.error === false) {
        setMessage("Form submitted successfully!");
  
        Swal.fire({
          title: "Success!",
          text: response.message || "Form submitted successfully!", 
          icon: "success",
          confirmButtonText: "OK",
        });
  
        setFormData({
          full_name: "",
          email: "",
          phone_number: "",
          company_name: "",
          company_web_site: "",
          subject: "",
          description: "",
          image: ""
        });
        document.querySelector('input[name="image"]').value = null;
      } else {
        setMessage(response.message || "Something went wrong!");
        // console.log("API Response Error:", response.message);
      }
    } catch (error) {
      console.log("Error Response:", error); 
  
      setErrors(error.error);
      setMessage(error.message || "Submission failed!");
    } finally {
      setFormLoading(false);
    }
  };
  

  const companySectors = [
    "Abortion Policy/Anti-Abortion",
    "Abortion Policy/Pro-Abortion Rights",
    "Accountants",
    "Advertising/Public Relations",
    "Aerospace, Defense Contractors",
    "Agribusiness",
    "Agricultural Services & Products",
    "Agriculture",
    "Air Transport",
    "Air Transport Unions",
    "Airlines",
    "Alcoholic Beverages",
    "Alternative Energy Production & Services",
    "Architectural Services",
    "Attorneys/Law Firms",
    "Auto Dealers",
    "Auto Dealers, Japanese",
    "Auto Manufacturers",
    "Automotive",
    "Banking, Mortgage",
    "Banks, Commercial",
    "Banks, Savings & Loans",
    "Bars & Restaurants",
    "Beer, Wine & Liquor",
    "Books, Magazines & Newspapers",
    "Broadcasters, Radio/TV",
    "Builders/General Contractors",
    "Builders/Residential",
    "Building Materials & Equipment",
    "Building Trade Unions",
    "Business Associations",
    "Business Services",
    "Cable & Satellite TV Production & Distribution",
    "Candidate Committees",
    "Candidate Committees, Democratic",
    "Candidate Committees, Republican",
    "Car Dealers",
    "Car Dealers, Imports",
    // Add more if needed
  ];

  //  --------------------------------------------------------------------------------------

  return (
    <>
      <NavbarContainer />
      <div className='DoPatnership-main'>
        <div className="partner-one">
          <div className="p-left">
            <h5>Do Partnership</h5>
            <h5>With Us</h5>
            <p>We believe in Greate Partnership is a <br /> Driving force for both Partners,that <br /> leads to success.</p>
          </div>
          <div className="p-right">
            <img src="https://img.freepik.com/premium-vector/laptop-vector-illustration-flat-2_764382-61170.jpg?w=740" alt="" />
          </div>
        </div>
        {/* ------------------------ */}
        <div className="partner-two">
          <h6>Our Partners</h6>
          <div className="slider-partner">
            {partners.length === 0 ? (
              <div style={{ color: 'red', textAlign: 'center', margin: '20px 0' }}>
                No partners available at the moment.
              </div>
            ) : (
              <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {partners.map((partner, index) => (
                  <SwiperSlide key={index}>
                    <div className="our-partner">
                      <div className="p-img">
                        <img src={partner.image} alt={`Partner ${partner.title}`} />
                      </div>
                      <h5>{partner.title}</h5>
                      <div className="p-text">
                        <p>{partner.description}</p>
                        <p>
                          To Know More Visit:{" "}
                          <a href={partner.link} target="_blank" rel="noopener noreferrer">
                            {partner.link}
                          </a>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>

        {/* ------------------------ */}
        <div className="partner-three">
          <div className="pt-left">
          {scannerData.length > 0 && (
        <img src={scannerData[0].image} alt="Scanner" />
      )}          </div>
          <div className="pt-right">
            <h4>Talspo</h4>
            <h4>E-Brochure</h4>
            <span>Scan the QR Code to View the Latest Talspo E-Brochure </span>
            <span style={{fontWeight:"600", color:"#4f4f4f"}} className='mt-2' >Talspo E-Brochure Link: </span>
            <span>To View the Latest Talspo E-Brochure:            <a href="https://tinyurl.com/talspo-ebrochure" target="_blank">Click or Tap Here!</a>
            </span>
          </div>
        </div>
        {/* ------------------------ */}
        <div className="partner-four">
          <h5>Want to Partner </h5>
          <h5>With Us? </h5>
          <p>
            Please fill up the form below and if our partnership requirements match,
            we will get in touch with you very soon.
          </p>
          <div className="partner-form">
            <h6>Send Your Partnership Details</h6>
            <form onSubmit={handleSubmit}>
              <div className="p-inp">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name*"
                  value={formData.full_name}
                  onChange={handleChange}
                />
                {errors.full_name && <small className="error-p">{errors.full_name[0]}</small>}
              </div>
              <div className="p-inp">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="error-p">{errors.email[0]}</small>}
              </div>
              <div className="p-inp">
  <PhoneInput
    country={"in"} // Default country set to India
    value={formData.phone_number}
    onChange={(value) => {
      setFormData({
        ...formData,
        phone_number: value
      });
    }}
    placeholder="Phone Number*" // Custom placeholder if needed
    maxLength="10" // This is handled by the library itself for correct number format
    inputClass="phone-input-field" // You can add custom classes for styling
    buttonClass="phone-input-button"
    inputStyle={{
      width: "100%",
      height: "40px",
      paddingLeft: "50px", // Add padding for the placeholder
    }}
  />
  {errors.phone_number && <small className="error-p">{errors.phone_number[0]}</small>}
</div>


              <div className="p-inp">
                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name*"
                  value={formData.company_name}
                  onChange={handleChange}
                />
                {errors.company_name && <small className="error-p">{errors.company_name[0]}</small>}
              </div>

              <div className="p-inp">
                <select id="issueType">
                  <option value="" >
                    Company Sector
                  </option>
                  {companySectors.map((sector, index) => (
                    <option key={index} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-inp">
                <input
                  type="text"
                  name="company_web_site"
                  placeholder="Company Website*"
                  value={formData.company_web_site}
                  onChange={handleChange}
                />
                {errors.company_web_site && <small className="error-p">{errors.company_web_site[0]}</small>}
              </div>
              <div className="p-inp">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <small className="error-p">{errors.subject[0]}</small>}
              </div>
              <div className="p-inp">
                <textarea
                  name="description"
                  placeholder="Message* (Describe your company and why you want to partner with Talspo)"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
                {errors.description && <small className="error-p">{errors.description[0]}</small>}
              </div>
              <div className="p-inp">
                <p>
                  Please attach your company proposal.{' '}
                  <span
                    style={{ color: '#1e90ff', cursor: 'pointer' }}
                    onClick={() => setIsDriveLink(!isDriveLink)}
                  >
                    {isDriveLink
                      ? 'Click here to attach a file instead.'
                      : 'Click here to submit a Cloud Drive link instead.'}
                  </span>
                </p>

                {/* Conditional rendering based on the state */}
                {isDriveLink ? (
                  <div className="p-inp">
                    <input
                      type="text"
                      name="driveLink"
                      value={driveLink}
                      onChange={handleDriveLinkChange}
                      placeholder="Cloud Drive Link*"
                    />
                  </div>
                ) : (
                  <div className="p-inp">
                    <input type="file" name="image" onChange={handleFileChange} />
                    {errors.image && <small className="error-p">{errors.image[0]}</small>}
                  </div>
                )}
              </div>
              <div className="p-inp-end">
                    <h6>
                      Consent <span style={{ color: "red" }}>*</span>:
                    </h6>
                    <label>
                      <input  style={{marginRight:"0.3vmax"}} className="mt-2" type="checkbox" name="consent" required />
                      Agree to be contacted by Talspo via WhatsApp, SMS, or email.
                    </label>  
                  </div>

                  <div className="p-inp-end">
                  <h6>Subscribe:</h6>
          <label>
            <input style={{marginRight:"0.3vmax"}} type="checkbox" name="subscription" />
            Agree to receive the latest news regarding the latest Talspo software services like recruitment, talent acquisition, human resources transformation, latest technologies(artificial intelligence, machine learning, deep learning, blockchain, etc.) services in Human Resources (HR), skill training and development services, events, etc.
          </label>
                  </div>
              <div className="p-btn">
                <button type="submit" disabled={formLoading}>
                  {formLoading ? (
                    <div className="submit-loader"></div>  
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ------------------------ */}

      </div>

      <DoPartnershipContent />
      <FooterTop />
      <Footer />
    </>
  )
}


export default DoPatnership