import React from "react";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import { Container } from "react-bootstrap";
import "../privacyPolicy/CookiePolicy.css";
import { fetchCookiePolicy } from "../../../apiService";
import { useEffect, useState } from "react";

const CookiePolicy = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const [cookiepolicy, setCookiePolicy] = useState(null);

  useEffect(() => {
    const fetchCookie = async () => {
      const data = await fetchCookiePolicy();
      if (data) {
        setCookiePolicy(data);
      }
    };

    fetchCookie();
  }, []);

  return (
    <>
      <NavBarContainer />
     

      {cookiepolicy ? (
        <div>
          <div className="policy_heading">
            <h2>{cookiepolicy.title}</h2>
          </div>
          <Container>
            <div className="policy_con">
              <p>Last updated: {formattedDate}</p>

              <div
                dangerouslySetInnerHTML={{
                  __html: cookiepolicy.cookiespolicy,
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

export default CookiePolicy;
