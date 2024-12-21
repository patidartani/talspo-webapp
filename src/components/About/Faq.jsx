import React, { useState, useEffect } from "react";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import "./Faq.css";
import Loading from "../../pages/loading/Loading";
import { faqQuestions } from "../../apiService";
import FooterTop from "../../pages/Footer/FooterTop";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await faqQuestions();
        setFaqs(response.records);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="faq-con">
        <div className="faq_top">
          <h5>Frequently Asked Questions</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, illo!</p>
        </div>

        <div className="faq-box">
          <div className="faq-ques">
            {faqs.map((faq, index) => (
              <div className="faq-h" key={index}>
                <h6 onClick={() => handleToggle(index)}>
                  {faq.title}
                  <span className={activeIndex === index ? "arrow open" : "arrow"}>&#9662;</span>
                </h6>
                {activeIndex === index && (
                  <p><div style={{ fontSize: "1.2vmax" }} dangerouslySetInnerHTML={{ __html: faq.description }} /></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default Faq;
