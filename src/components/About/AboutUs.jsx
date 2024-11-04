import React from 'react';
import "./AboutUs.css";
import Navbar from "../../pages/Navbar/Navbar";
import AboutTopImg from "../../assets/images/aboutusTop.webp";
import Footer from "../../pages/Footer/Footer"

// Array containing data for each about section
const aboutSections = [
  {
    heading: "Heading 1",
    content1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ipsam aliquam, repellendus aspernatur quisquam exercitationem iusto illo ad omnis totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quisquam.",
    imageContent: "image, Gif", // Placeholder for image or gif
    content2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, est deserunt qui voluptas reiciendis asperiores. Aspernatur illo placeat facere iste sit? Incidunt cupiditate doloremque fugiat possimus officiis rem cumque, est non sint corrupti nesciunt unde! Non esse velit, in quae natus quasi quas! Hic earum repellat vitae quae consequuntur, voluptatum sint soluta deserunt magnam. Non ipsum provident modi totam cum ex doloremque esse saepe quae natus minima corrupti praesentium impedit quia ipsa sequi, illo, iusto facilis quis, nemo aliquid? Explicabo."
  },
  {
    heading: "Heading 2",
    content1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ipsam aliquam, repellendus aspernatur quisquam exercitationem iusto illo ad omnis totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quisquam.",
    imageContent: "image, Gif", // Placeholder for image or gif
    content2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, est deserunt qui voluptas reiciendis asperiores. Aspernatur illo placeat facere iste sit? Incidunt cupiditate doloremque fugiat possimus officiis rem cumque, est non sint corrupti nesciunt unde! Non esse velit, in quae natus quasi quas! Hic earum repellat vitae quae consequuntur, voluptatum sint soluta deserunt magnam. Non ipsum provident modi totam cum ex doloremque esse saepe quae natus minima corrupti praesentium impedit quia ipsa sequi, illo, iusto facilis quis, nemo aliquid? Explicabo."
  },
  {
    heading: "Heading 3",
    content1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ipsam aliquam, repellendus aspernatur quisquam exercitationem iusto illo ad omnis totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, quisquam.",
    imageContent: "image, Gif", // Placeholder for image or gif
    content2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, est deserunt qui voluptas reiciendis asperiores. Aspernatur illo placeat facere iste sit? Incidunt cupiditate doloremque fugiat possimus officiis rem cumque, est non sint corrupti nesciunt unde! Non esse velit, in quae natus quasi quas! Hic earum repellat vitae quae consequuntur, voluptatum sint soluta deserunt magnam. Non ipsum provident modi totam cum ex doloremque esse saepe quae natus minima corrupti praesentium impedit quia ipsa sequi, illo, iusto facilis quis, nemo aliquid? Explicabo."
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="AboutUs-container">
        <div className="about-content">

          <div className="about-top">
            <div className="a-left">
              <h6>About Us</h6>
              <p>How Talspo helps users achieve their <br /> goals.</p>
            </div>
            <div className="a-right">
              <img src={AboutTopImg} alt="About Us" />
            </div>
          </div>

          <div className="about-btm">
            {aboutSections.map((section, index) => (
              <div className="about-box" key={index}>
                <h5>{section.heading}</h5>
                <p>{section.content1}</p>
                <div className="about-img">
                  {section.imageContent}
                </div>
                <p>{section.content2}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
