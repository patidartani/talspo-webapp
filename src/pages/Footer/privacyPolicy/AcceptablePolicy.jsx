import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/AntiSpamPolicy.css";
const AcceptablePolicy = () => {
  return (
    <>
      <Navbar />
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
