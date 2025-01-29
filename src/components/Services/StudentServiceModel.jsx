import React, { useEffect, useState } from 'react';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer';
import Footer from "../../pages/Footer/Footer";
import FooterTop from "../../pages/Footer/FooterTop";
import "./StudentServiceModel.css";
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceDetail } from "../../apiService";
import Loading from '../../pages/loading/Loading';

const StudentServiceModel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchServiceDetail = async () => {
      try {
        const data = await getServiceDetail(id);
        setServiceDetail(data.records);
      } catch (error) {
        console.error("Error fetching service details:", error.message);
        setErrorMessage("Error fetching details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetail();
  }, [id]);

  const howHandler = () => {
    navigate("/how-it-works?");
  };

  if (loading) {
    return <div><Loading /></div>;
  }

  if (errorMessage) {
    return <div style={{ color: 'red', textAlign: 'center', margin: '20px' }}>{errorMessage}</div>;
  }

  return (
    <>
      <NavbarContainer />
      <div className='StudentServiceModel'>
        <div className="students-learner">
          {/* Title from backend */}
          <h5>{serviceDetail?.title || "Default Title"}</h5>

          {/* Image from backend */}
          <div className="student-icon">
            <img
              src={serviceDetail?.image || "/assets/images/defaultImage.png"} // Fallback image
              alt={serviceDetail?.title || "Student Service"}
            />
          </div>

          <div className="student-btm">
            <p>
              {serviceDetail?.content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: serviceDetail.content }}
                />
              ) : (
                "Default Content"
              )}           </p>
          </div>

          {/* Button text from backend */}
          <div className="how-services">
            <button onClick={howHandler}>
              {serviceDetail?.button}
            </button>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default StudentServiceModel;
