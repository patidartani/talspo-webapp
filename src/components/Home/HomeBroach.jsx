import React, { useEffect, useState } from "react";
import "./HomeBroach.css";
import { qrHandler } from "../../apiService";

const HomeBroach = () => {
  const [image1, setImage1] = useState(""); // State for the first image
  const [image2, setImage2] = useState(""); // State for the second image
  const [noData, setNoData] = useState(false); // State to track if no data is found

  useEffect(() => {
    const homeQrHandler = async () => {
      try {
        const response = await qrHandler(); // Fetch QR data
        const records = response.records || [];
        if (records.length > 0) {
          setImage1(records[0]?.image || ""); // Set the first image
          setImage2(records[1]?.image || ""); // Set the second image (if available)
        } else {
          setNoData(true); // Set noData to true if no records are found
        }
      } catch (error) {
        console.error("Error fetching QR data:", error.message);
        setNoData(true); // Set noData to true if there is an error
      }
    };

    homeQrHandler();
  }, []);

  return (
    <div className="HomeBroach-main">
      <div className="homebroch">
        {noData ? (
          // Show "No Results Found" message when no data is available
          <div className="no-data">
            <p style={{ color: "red", textAlign: "center" }}>No Results Found</p>
          </div>
        ) : (
          <>
            <div className="broch1">
              <h6>Check Our Company's Latest E-Brochure</h6>
              <img
                src={image1 || "default-placeholder.jpg"}
                alt="E-Brochure QR Code"
              />
            </div>

            <div className="broch3">
              <h6>Connect with us</h6>
              <button>CONTACT US</button>
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
