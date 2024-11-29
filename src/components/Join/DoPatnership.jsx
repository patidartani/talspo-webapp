import  {useEffect, useState} from 'react'
import "./DoPartnership.css"
import Navbar from '../../pages/Navbar/Navbar';
import Footer from "../../pages/Footer/Footer"
import QrImg from "../../assets/images/patnerQrr.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { doPartnerhip , submitCareerForm} from "../../apiService"
import Loading from "../../pages/loading/Loading"
import Swal from "sweetalert2"; // Importing SweetAlert


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const DoPatnership = () => {

  // --------------------partnership api-----------------------------------

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage ] = useState ("")
  const [errors, setErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);


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
    const fetchPartnershipData = async () => {
      try {
        const response = await doPartnerhip(); 
        setPartners(response.records)
      } catch (error) {
        console.error("Error fetching partnership data:", error); 
      }finally {
        setLoading(false); 
      }
    };

    fetchPartnershipData();
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
  
    // Clear specific error when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null // Clear error for the specific field
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
      // console.log("Response:", response);
  
      // Check if response.error is false to determine success
      if (response && response.error === false) {
        setMessage("Form submitted successfully!");
  
        Swal.fire({
          title: "Success!",
          text: response.message || "Form submitted successfully!", // Use the success message from the API
          icon: "success",
          confirmButtonText: "OK",
        });
  
        // Reset form data after successful submission
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
      }
    } catch (error) {
      // console.error("Error:", error);
      setErrors(error.response ? error.response.data.errors : error.message || "Submission failed!");
      setMessage(error.message || "Submission failed!");
    } finally {
      setFormLoading(false); // Set loading to false once submission is complete (whether successful or not)
    }
  };
  
  


  //  --------------------------------------------------------------------------------------

  return (
   <>
    <Navbar />
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
                <h5>  {partner.title}</h5>
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
      </div>
    </div>
         {/* ------------------------ */}
              <div className="partner-three">
                    <div className="pt-left">
                             <img src={QrImg} alt="" />   
                    </div>
                    <div className="pt-right">
                              <h4>Talspo</h4>
                              <h4>E-Brochure</h4>
                              <span>Scan the QR Code to download the Talspo's e-Brochure</span>
                              <span> Talspo e-Brochure Link:</span>
                               <a href="">https://talspo.com/talspo_brochure_2019.pdf</a>
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
  <input
    type="tel"
    name="phone_number"
    placeholder="Phone Number*"
    value={formData.phone_number}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
      if (value.length <= 10) {
        setFormData({
          ...formData,
          phone_number: value
        });
      }
    }}
    maxLength="10" // Limits the input to 10 digits
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
          Please attach your company proposal. Click here to submit a Google Drive link instead.
        </p>
      </div>
      <div className="p-inp">
        <input type="file" name='image' onChange={handleFileChange} />
        {errors.image && <small className="error-p">{errors.image[0]}</small>}
      </div>
      <div className="p-btn">
      <button type="submit" disabled={formLoading}>
    {formLoading ? (
      <div className="submit-loader"></div>  // Show loader when the form is loading
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
    <Footer />
   </>
  )
}


export default DoPatnership