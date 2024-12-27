import React from "react";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import { fetchDisclaimerPolicy } from "../../../apiService";
import { useEffect, useState } from "react";

const Disclaimer = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const [disclaimerPolicy, setDisclaimerPolicy] = useState(null);

  useEffect(() => {
    const fetchDisclaimer = async () => {
      const data = await fetchDisclaimerPolicy();
      if (data) {
        setDisclaimerPolicy(data);
      }
    };

    fetchDisclaimer();
  }, []);

  return (
    <>
      <NavBarContainer />

      {disclaimerPolicy ? (
        <div>
          <div className="policy_heading">
            <h2>{disclaimerPolicy.title}</h2>
          </div>
          <Container>
            <div className="policy_con">
              <p>Last updated: {formattedDate}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: disclaimerPolicy.desclaimer,
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

export default Disclaimer;
