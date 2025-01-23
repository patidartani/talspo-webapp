import React from "react";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/TermOfUse.css";
import { fetchTermOfUse } from "../../../apiService"
import { useEffect, useState } from "react";

const TermOfUse = () => {

  const [termOfUse, setTermOfUse] = useState(null);
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  useEffect(() => {
    const fetchTerms = async () => {
      const data = await fetchTermOfUse();
      if (data) {
        setTermOfUse(data);
      }
    };

    fetchTerms();
  }, []);


  return (
    <>
      <NavBarContainer />

      {termOfUse ? (
        <div>
          <div className="policy_heading">
            <h2>{termOfUse.title}</h2>
          </div>
          <Container>
            <div className="policy_con">

              <p>Last updated: {formattedDate}</p>
              {/* Safely render HTML content */}
              <div

                dangerouslySetInnerHTML={{ __html: termOfUse.terms }}
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

export default TermOfUse;
