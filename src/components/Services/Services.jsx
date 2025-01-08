import './Services.css';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import FooterTop from '../../pages/Footer/FooterTop';
import { ourServices } from "../../apiService"
import { useState, useEffect } from 'react';
import Loading from "../../pages/loading/Loading" // Import Loading component

const Services = () => {

  const [ourService, setOurService] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await ourServices();
        console.log("Response services:", response.records);

        if (response.records.length === 0) {
          setErrorMessage("No data found for services."); // Set error message if no services are returned
        } else {
          setOurService(response.records); 
        }
      } catch (error) {
        console.error("Error fetching services data:", error.message);
        setErrorMessage("Error fetching data. Please try again later."); // Set general error message on failure
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <NavbarContainer />
      <div className="Services-main">
        <div className="Services-page">
          <div className="service-top">
            <h5>Our Services</h5>
            <p>Explore Our Job Portal Services</p>
          </div>

          {/* Display error message */}
          {errorMessage && (
            <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>
              {errorMessage}
            </div>
          )}

          {/* Display Loading component if data is being fetched */}
          {loading && <Loading />}

          <div className="services-mid">
            <iframe
              src="https://www.youtube.com/embed/0KDVwYZFvt0?autoplay=1&mute=1&loop=1&playlist=0KDVwYZFvt0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          <div className="service-btm">
            {ourService.map((service, index) => (
              <div
                key={service.id}
                className={`service ${index % 2 === 0 ? "" : "service2"}`}
                style={{ cursor: "pointer" }}
                onClick={() => console.log(`Clicked: ${service.title}`)}
              >
                <div className="one">
                  <div className="s-left">
                    <div className="icon">
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                  <div className="s-right">
                    <h5>{service.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: service.description }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h4>Coming Soon.....</h4>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </>
  );
};

export default Services;
