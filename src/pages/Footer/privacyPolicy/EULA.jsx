import React from 'react'
import { Container } from 'react-bootstrap'
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/EULA.css"
import {fetchEULAPolicy} from "../../../apiService"
import  { useEffect, useState } from "react";

const EULA = () => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: '2-digit' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const [eulaPolicy, setEulaPolicy] = useState(null);

  useEffect(() => {
    const fetchEULA = async () => {
      const data = await fetchEULAPolicy();
      if (data) {
        setEulaPolicy(data);
      }
    };

    fetchEULA();
  }, []);

  return (
    <>
      <NavBarContainer />

      {eulaPolicy ? (
  <div>
    <div className="policy_heading">
      <h2>{eulaPolicy.title}</h2>
    </div>
    <Container>
      <div  className="policy_con">
   
          <p>Last updated: {formattedDate}</p>
    
      <div
                dangerouslySetInnerHTML={{
                  __html: eulaPolicy.description,
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
  )
}

export default EULA
