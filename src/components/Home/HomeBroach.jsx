import React, { useEffect, useState } from "react";
import "./HomeBroach.css";
import { qrHandler } from "../../apiService";
import { useNavigate } from "react-router-dom";

const HomeBroach = () => {
  const [image1, setImage1] = useState(""); 
  const [image2, setImage2] = useState(""); 
  const [noData, setNoData] = useState(false); 

  const navigate = useNavigate();

  const contactHandler = () => {
    navigate("/contact-us")
  }

  useEffect(() => {
    const homeQrHandler = async () => {
      try {
        const response = await qrHandler(); // Fetch QR data
        const records = response.records || [];
        if (records.length > 0) {
          setImage1(records[0]?.image || "");
          setImage2(records[1]?.image || ""); 
        } else {
          setNoData(true);
        }
      } catch (error) {
        console.error("Error fetching QR data:", error.message);
        setNoData(true); 
      }
    };

    homeQrHandler();
  }, []);

  return (
    <div className="HomeBroach-main">
      <div className="homebroch">
        {noData ? (
          <div className="no-data">
            <p style={{ color: "red", textAlign: "center" }}>No Results Found</p>
          </div>
        ) : (
          <>
            <div className="broch1">
              <h6>Check Our Company Latest E-Brochure</h6>
              <img
                src={image1 || "default-placeholder.jpg"}
                alt="E-Brochure QR Code"
              />
            </div>

            <div className="broch3">
              <h6>Connect with us</h6>
              <button onClick={contactHandler}>CONTACT US</button>
              <img
                src={image2 || "default-placeholder.jpg"}
                alt="Contact QR Code"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeBroach;
