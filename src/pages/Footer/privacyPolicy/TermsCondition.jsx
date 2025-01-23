import React from "react";
import "../privacyPolicy/TermsCondition.css";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import { fetchTermsCondition } from "../../../apiService"
import { useEffect, useState } from "react";

const TermsCondition = () => {

  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const [termCondition, setTermCondition] = useState(null);

  useEffect(() => {
    const fetchCondition = async () => {
      const data = await fetchTermsCondition();
      if (data) {
        setTermCondition(data);
      }
    };

    fetchCondition();
  }, []);

  return (
    <>
      <NavBarContainer />


      {termCondition ? (
        <div>
          <div className="policy_heading">
            <h2>{termCondition.title}</h2>
          </div>
          <Container>
            <div className="policy_con">

              <p>Last updated: {formattedDate}</p>

              <div
                dangerouslySetInnerHTML={{
                  __html: termCondition.termscondition,
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

export default TermsCondition;
