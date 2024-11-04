import React, { useState } from 'react';
import './Faq.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from '../../pages/Footer/Footer';
import campusImg from "../../assets/images/faq.webp";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Talspo?',
      answer: 'Talspo is a platform designed to help users find talented individuals nearby across various fields.',
    },
    {
      question: 'How does Talspo work?',
      answer: 'Users can create profiles showcasing their skills, and others can search for talents based on location and expertise.',
    },
    {
      question: 'Is Talspo free to use?',
      answer: 'Yes, Talspo offers a free tier for users to connect and explore talents. Additional features may be available for a fee.',
    },
    {
      question: 'Can I update my profile?',
      answer: 'Absolutely! Users can edit their profiles at any time to reflect their current skills and experiences.',
    },
    {
      question: 'How can I get support?',
      answer: 'You can reach out to our support team via the contact page or through the help section in your account.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className='Faq-main'>
        <div className="faq-top">
          <div className="fq-left">
            <h4>Talspo Campus <br /> Ambassador</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi voluptatibus cumque sunt quas delectus officia odio possimus, illum repellat!</p>
            <div className="fq-btn">
              <button>Apply Now</button>
            </div>
          </div>
          <div className="fq-right">
            <img src={campusImg} alt="" />
          </div>
        </div>

        <div className="faq-video">
          video
        </div>

        <div className="faq-btm">
          <h5>Frequently Asked Questions</h5>
          <div className="questions">
            {faqs.map((faq, index) => (
              <div className="qees" key={index}>
                <h6 onClick={() => handleToggle(index)}>
                  {faq.question}
                  <span className={activeIndex === index ? 'arrow open' : 'arrow'}>&#9662;</span>
                </h6>
                {activeIndex === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
