import { useEffect, useState } from 'react';
import "./AboutUs.css";
import Navbar from "../../pages/Navbar/Navbar";
import AboutTopImg from "../../assets/images/aboutusTop.webp";
import Footer from "../../pages/Footer/Footer";
import { fetchAboutUs } from "../../apiService";
import Loading from '../../pages/loading/Loading'; 

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAboutUsData = async () => {
      try {
        const data = await fetchAboutUs();
        console.log("Fetched About Us Data Response:", data);
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching About Us data:", error);
        setAboutData({ error: true, records: [] });
      } finally {
        setLoading(false); 
      }
    };

    getAboutUsData();
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <>
      <Navbar />
      <div className="AboutUs-container">
        <div className="about-content">
          <div className="about-top">
            <div className="a-left">
              <h6>About Us</h6>
              <p>How Talspo helps users achieve their <br /> goals.</p>
            </div>
            <div className="a-right">
              <img src={AboutTopImg} alt="About Us" />
            </div>
          </div>

          <div className="about-btm">
            {aboutData ? (
              aboutData.records && aboutData.records.length > 0 ? (
                aboutData.records.map((section, index) => (
                  <div className="about-box" key={index}>
                    <h5>{section.title}</h5>
                    <p>{section.description}</p>
                    <div className="about-img">
                      <img src={section.image} alt={section.title} />
                    </div>
                  </div>
                ))
              ) : aboutData.error ? (
                <p>Something went wrong while fetching the data.</p>
              ) : (
                <p>No data available.</p>
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
