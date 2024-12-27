import React, { useEffect, useState } from "react";
import "./HomeBroach.css";
import {qrHandler} from "../../apiService"

const HomeBroach = () => {
  const [image1, setImage1] = useState(""); 
  const [image2, setImage2] = useState(""); 

    useEffect(() => {
      const homeQrHandler = async () => {
          try {
              const response = await qrHandler(); 
              // console.log("Full Response:", response);
              const records = response.records || [];
              if (records.length > 0) {
                  setImage1(records[0]?.image);

                  if (records[1]) {
                      setImage2(records[1]?.image); 
                  }
              }
          } catch (error) {
              console.error("Error fetching QR data:", error.message);
          }
      };

      homeQrHandler();
  }, []);

    return (
        <div className="HomeBroach-main">
            <div className="homebroch">
                <div className="broch1">
                    <h6>Check Our Company's Latest E-Brochure</h6>
                    <img src={image1} alt="E-Brochure QR Code" />
                </div>

                <div className="broch3">
                    <h6>Connect with us</h6>
                    <button>CONTACT US</button>
                    <img src={image2} alt="Contact QR Code" />
                </div>
            </div>
        </div>
    );
};

export default HomeBroach;
