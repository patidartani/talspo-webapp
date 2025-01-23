import React from "react";
import "../privacyPolicy/PrivacyPolicy.css";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import { fetchPrivacyPolicy } from "../../../apiService";
import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      const data = await fetchPrivacyPolicy();
      if (data) {
        setPolicy(data);
      }
    };

    fetchPolicy();
  }, []);
  return (
    <>
      <NavBarContainer />

      {policy ? (
        <div>
          <div className="policy_heading">
            <h2>{policy.title}</h2>
          </div>
          <Container>
            <div className="policy_con">

              <p>Last updated: {formattedDate}</p>
              {/* Safely render HTML content */}
              <div

                dangerouslySetInnerHTML={{ __html: policy.description }}
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

export default PrivacyPolicy;
