import React from "react";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/AntiSpamPolicy.css";
const AcceptablePolicy = () => {
  return (
    <>
      <NavBarContainer />
      <div className="anti-spam-policy">
        <h1>Anti-Spam Policy for Talspo Private Limited</h1>
      </div>
      <Container>
        <div className="anti-spam-con"></div>
      </Container>
      <Footer />
    </>
  );
};

export default AcceptablePolicy;
