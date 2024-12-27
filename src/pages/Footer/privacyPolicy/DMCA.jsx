import React from "react";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import { fetchDMCAPolicy } from "../../../apiService";
import { useEffect, useState } from "react";

const DmcaPolicy = () => {
  const [dmcaPolicy, setDmcaPolicy] = useState(null);

  useEffect(() => {
    const fetchDmca = async () => {
      const data = await fetchDMCAPolicy();
      if (data) {
        setDmcaPolicy(data);
      }
    };

    fetchDmca();
  }, []);

  return (
    <>
      <NavBarContainer />

      {dmcaPolicy ? (
        <div>
          <div className="policy_heading">
            <h2>{dmcaPolicy.title}</h2>
          </div>
          <Container>
            <div className="policy_con">
              {/* <p>Last updated: {formattedDate}</p> */}

              <div
                dangerouslySetInnerHTML={{
                  __html: dmcaPolicy.description,
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

export default DmcaPolicy;
