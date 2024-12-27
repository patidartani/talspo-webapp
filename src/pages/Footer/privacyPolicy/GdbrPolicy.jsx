import React from "react";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/GdbrPolicy.css";
import {fetchGDPRPolicy} from "../../../apiService"
import  { useEffect, useState } from "react";

const GdbrPolicy = () => {

  const [gdbrPolicy, setGdbrPolicy] = useState(null);

  useEffect(() => {
    const fetchGdbr = async () => {
      const data = await fetchGDPRPolicy();
      if (data) {
        setGdbrPolicy(data);
      }
    };

    fetchGdbr();
  }, []);

  return (
    <>
      <NavBarContainer />
      
      {
      gdbrPolicy ? (
  <div>
    <div className="policy_heading">
      <h2>{gdbrPolicy.title}</h2>
    </div>
    <Container>
      <div  className="policy_con">
   
          {/* <p>Last updated: {formattedDate}</p> */}
    
      <div
                dangerouslySetInnerHTML={{
                  __html:gdbrPolicy.description,
                }}
              ></div>
      </div>
    
    </Container>
  </div>
) : (
  <p>Loading...</p>
)}

      <Footer />
    </>
  );
};

export default GdbrPolicy;
