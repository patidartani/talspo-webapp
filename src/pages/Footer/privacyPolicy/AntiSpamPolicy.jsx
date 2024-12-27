import React from "react";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/AntiSpamPolicy.css";
import { fetchAntySpamPolicy } from "../../../apiService";
import { useEffect, useState } from "react";

const AntiSpamPolicy = () => {
  const [antiSpamPolicy, setAntiSpamPolicy] = useState(null);

  useEffect(() => {
    const fetchAntiSpam = async () => {
      const data = await fetchAntySpamPolicy();
      if (data) {
        setAntiSpamPolicy(data);
      }
    };

    fetchAntiSpam();
  }, []);
  return (
    <>
      <NavBarContainer />

      {antiSpamPolicy ? (
        <div>
          <div className="policy_heading">
            <h2>{antiSpamPolicy.title}</h2>
          </div>
          <Container>
            <div className="policy_con">
              {/* <p>Last updated: {formattedDate}</p> */}

              <div
                dangerouslySetInnerHTML={{
                  __html: antiSpamPolicy.description,
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

export default AntiSpamPolicy;
