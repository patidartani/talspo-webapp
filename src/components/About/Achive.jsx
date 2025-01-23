import "./Achive.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer";
import FooterTop from "../../pages/Footer/FooterTop";
import { achievement } from "../../apiService"; // Import the API function
import { useEffect, useState } from "react";
import Loading from "../../pages/loading/Loading";

const Achive = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); 

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await achievement(); 
        // console.log('response achievement', response);
        setAchievements(response.records); 
      } catch (error) {
        console.error("Error fetching achievements:", error);
        setErrorMessage("Failed to load achievements. Please try again later."); 
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavbarContainer />
      <div className="Achive-main">
        <div className="Achive-page">
          <div className="achive-top">
            <h5>Our Achievements</h5>
            <p>The Story So far</p>
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}

          <div className="achive-flex">
            {achievements.map((achieve, index) => (
              <div
                key={index}
                className={`achive-btm ${achieve.reverse === "true" ? 'reverse' : ''}`}
              >
                <div className="a-left">
                  <h6>{achieve.title}</h6>
                  {/* <p>{achieve.description}</p> */}
                  <p>{achieve.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                </div>
                <div className="a-right">
                  <img src={achieve.image} alt={achieve.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default Achive;
