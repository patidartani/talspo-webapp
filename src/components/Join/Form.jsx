import React from "react";
import "./Form.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const Form = () => {
  const questions = [
    "Why Talspo?",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your career goals?",
    "Why do you think you are a good fit for this role?",
    "Tell us about a challenging situation you have overcome."
  ];

  return (
    <>
      <Navbar />
      <div className="Form_details">
        <div className="form-content">
          {/* Left Section */}
          <div className="content-left">
            <h5>Welcome</h5>
            <p>
              We are happy that you want to work as{" "}
              <span>"Co-Founder and Chief Financial Officer (CFO)"</span> for
              Talspo!
            </p>
          </div>
          {/* Right Section */}
          <div className="content-right">
            <div className="container_data">
              <div className="data_form">
                <h5>Please fill your necessary details for joining our team below</h5>
                <form>
                  {/* Input Fields */}
                  <div className="form-ipt">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Middle Name" />
                  </div>
                  <div className="form-ipt">
                    <input type="text" placeholder="Your Last Name" />
                    <input type="text" placeholder="Your Phone" />
                  </div>
                  <div className="form-ipt">
                    <input type="text" placeholder="Your Email" />
                    <input type="text" placeholder="Your Address" />
                  </div>
                  <div className="form-ipt">
                    <input type="text" placeholder="Country" />
                    <input type="text" placeholder="Your State" />
                  </div>
                  <div className="form-ipt">
                    <input type="text" placeholder="Your City" />
                    <input type="text" placeholder="LinkedIn Profile Link" />
                  </div>
                  <div className="form-ipt">
                    <input type="text" placeholder="Your Zip" />
                    <input type="file" />
                  </div>

                  {/* Gender Selection */}
                  <div className="form-ipt gender-selection">
                    <label>Gender:</label>
                    <div className="gender-options">
                      <label>
                        <input type="radio" name="gender" value="male" /> Male
                      </label>
                      <label>
                        <input type="radio" name="gender" value="female" /> Female
                      </label>
                      <label>
                        <input type="radio" name="gender" value="other" /> Other
                      </label>
                    </div>
                  </div>

                  <div className="sectionA1">
                    <h5>Co-Founder Interest Selection</h5>
                    <p>
                      We are a bootstrapped startup, and this collaboration will be on Equity Shareholding (*Non-Salaried). Are you still ready to proceed for the interview process?
                    </p>
                    <span>Please select one of the following options:</span>

                    {/* Select Dropdown */}
                    <select name="coFounderInterest" id="coFounderInterest">
                      <option value="" disabled>Select an Option</option>  {/* Default option */}
                      <option value="yes">Yes, I am interested</option>
                      <option value="no">No, I am not interested</option>
                      <option value="maybe">Maybe, I need more information</option>
                    </select>
                  </div>


                  <h6>Complete "Section B" Before Submitting the Form</h6>

                  {/* Dynamic Textareas */}
                  <div className="section-b">
                    <h4>Answer All The Questions</h4>
                    {questions.map((question, index) => (
                      <div className="text-ipt" key={index}>
                        <span>{`Q${index + 1}. ${question}`}</span>
                        <textarea rows="3"></textarea>
                      </div>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <div className="submit-btn">
                    <button type="submit">Submit Application</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
