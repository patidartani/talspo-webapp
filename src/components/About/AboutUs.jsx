import { useEffect, useState } from "react";
import "./AboutUs.css";
import Navbar from "../../pages/Navbar/Navbar";
import AboutTopImg from "../../assets/images/aboutusTop.webp";
import Footer from "../../pages/Footer/Footer";
// import { fetchAboutUs } from "../../apiService";
import Loading from "../../pages/loading/Loading";
 import { useNavigate } from "react-router-dom";

 import Slider from "react-slick";
 import TalspoIcon from "../../assets/images/talspoIcon.png"
 import qr from "../../assets/images/yellowqr.png"
 import linkdin from "../../assets/images/linkdin.png"
import productHunt from "../../assets/images/ProductHunt.png"
import YourStory from "../../assets/images/YourStory.png"
import Crunchbase from "../../assets/images/Crunchbase.png"
import F6S from "../../assets/images/F6S.png"
import XIcon from "../../assets/images/XIcon.png"
import YouTube from "../../assets/images/YouTube.png"
import FooterTop from "../../pages/Footer/FooterTop";

const AboutUs = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default slides to show
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    arrows: true,
    responsive: [
        {
            breakpoint: 600, // Screen width <= 600px
            settings: {
                slidesToShow: 1, // Show only one slide
                slidesToScroll: 1,
                centerMode: false, // Optional: Disable center mode for smaller screens
                centerPadding: "0px", // No padding for single slide
            },
        },
    ],
};

  
    const howHandler = () => {
      navigate('/how-we-work')
    }
    const achiveHandler = () => {
      navigate('/achievements')
    }
      const faqHandler = () => {
      navigate('/faq')
    }

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
     const ourTeamHandler = () => {
      navigate('/our-team')
     }

  // const [aboutData, setAboutData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getAboutUsData = async () => {
  //     try {
  //       const data = await fetchAboutUs();
  //       console.log("Fetched About Us Data Response:", data);
  //       setAboutData(data);
  //     } catch (error) {
  //       console.error("Error fetching About Us data:", error);
  //       setAboutData({ error: true, records: [] });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getAboutUsData();
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
    <Navbar />
    <div className="AboutUs-container">
      <div className="about-content">
        <div className="about-top">
          <div className="a-left">
            <h6>About Us</h6>
            <p>
              How Talspo helps users achieve their <br /> goals.
            </p>
          </div>
          <div className="a-right">
            <img src={AboutTopImg} alt="About Us" />
          </div>
        </div>

        <div className="about-btm">
          <div className="tabs-about">
            <button
              className={`about-tab ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              Know Us
            </button>
            <button
              className={`journey-tab ${activeTab === "journey" ? "active" : ""}`}
              onClick={() => setActiveTab("journey")}
            >
              Journey
            </button>
           
            <button
              className={`logo-story-tab ${activeTab === "logo-story" ? "active" : ""}`}
              onClick={() => setActiveTab("logo-story")}
            >
              Logo Story
            </button>
            <button
              className={`ipr-tab ${activeTab === "ipr" ? "active" : ""}`}
              onClick={() => setActiveTab("ipr")}
            >
              (TIPR)
            </button>
            <button
              className={`recognition-tab ${activeTab === "recognition" ? "active" : ""}`}
              onClick={() => setActiveTab("recognition")}
            >
              Recognition
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "about" && (
              <div className="about-tab-content">
                <h6 style={{fontWeight:"600", fontSize:"1.3vmax"}}>Introduction</h6>
                <p>
                  In a world facing a critical talent mismatch, we introduce a revolutionary talent
                  collaboration marketplace that connects individuals seeking to upskill with local
                  trainers and resources. Our AI-driven platform ensures real-time skill development
                  and job matching, fostering a vibrant community of learners and experts. Our goal is
                  to transform the global education landscape, making skill acquisition accessible and
                  effective for all.
                </p>
                <h5>"TALENT AGGREGATOR"</h5>
              </div>
            )}
            {activeTab === "journey" && (
              <div className="journey-tab-content">
                <h6>Our Journey</h6>
                <p>Here’s how Talspo evolved over the years...</p>
              </div>
            )}
            {activeTab === "values" && (
              <div className="values-tab-content">
                <h6>Our Values</h6>
                <p>Integrity, innovation, and inclusivity define us.</p>
              </div>
            )}
            {activeTab === "logo-story" && (
              <div className="logo-story-tab-content">
                <h6>The Logo Story</h6>
                <p>
                  Talspo's logo represents our vision of collaboration and growth, embodying the
                  unity of learners and trainers.
                </p>
              </div>
            )}
            {activeTab === "ipr" && (
              <div className="ipr-tab-content">
                <h6> Talspo Intellectual Property Rights</h6>
                <p>
                  All Talspo trademarks, logos, and intellectual property are protected and reflect
                  our dedication to innovation and creativity.
                </p>
              </div>
            )}
            {activeTab === "recognition" && (
              <div className="recognition-tab-content">
                <h6>Recognition</h6>
                <p>
                  Talspo has been recognized by global institutions for its contributions to bridging
                  the talent gap and empowering individuals with skills that matter. We’re proud of our
                  awards and accolades, which reflect our commitment to innovation and excellence.
                </p>
              </div>
            )}
          </div>
        </div>



               

      </div>



      <div className="extra-content">
            <h5>Company Purpose Section</h5>
            <p>To solve the "Talent mismatch and a huge gap in the talent 
            education marketplace all over the world".</p>

            <small>Creating Talent Collaboration-Based Marketplace Online (Real-Time) to revolutionize 
the education system globally by developing the Talent Connectivity NEARBY
software application(s) in the latest technologies like: Artificial Intelligence (AI), 
Machine Learning (ML), Deep Learning (DL) & Blockchain</small>

           <div className="extra-two">
            <h5>Mission and Vision Section</h5>
             <div className="two-extra">
                 <div className="extraLeft">
                   <h6>Mission:</h6>
                   <small>" To help people get the desired talents NEARBY (Real-Time) and equip every
individual with their desired skill sets for effective talent acquisition in a highly 
competitive market, with more ease and affordability at the same time providing very 
secure, quality and fast Talent(s) Scouting with more Authenticity.</small>
                 </div>
                 <div className="extraRight">
                      <h6>Vision</h6>
                      <small>“REAL-TIME (LIVE) Talent Collaboration Marketplace For Human Resource 
                      Transformation”</small>
                 </div>
             </div>
           </div>

           <h5 className="mt-4">Problem Section</h5>
           <small>In today’s fast-paced world, individuals and organizations grapple with a significant 
talent mismatch, where skills learned often fail to meet market demands. This gap not 
only hinders personal growth but also stifles economic progress. With rapid 
technological advancements, the urgency for effective reskilling and upskilling has 
never been greater, leaving many feeling lost and underprepared for future 
opportunities.</small>
         
              <h4>1. No proper platform through which people can find similar interests/talented 
              people NEARBY, to develop new or existing skill sets.</h4>
              <h4>2. Finding someone NEARBY is not an easy job!</h4>
              <h4>3. Finding a co-founder/ freelancer with the required skill sets/talents NEARBY
              in REAL-TIME, is a difficult task.</h4>
              <h4>4. Finding the desired job is difficult</h4>
              <h4>5. Finding 360-degree Talent or Skill Development NEARBY YOU is very 
              difficult, that too in Real-Time</h4>

           <h5 className="mt-5">Solution Section</h5>
           <small>By leading with our values, we will create a product that brings value and confidence 
           back in people’s lives.</small> <br />
           <small>We are working on 360-degree skill(s) connectivity & networking ONLINE (RealTime) to solve the skill(s) mismatch globally by developing software application(s) 
that incorporate the latest technologies by providing very secure, quality and fast 
Talent(s) or Reskilling, Upskilling and Utilization Development Solutions NEARBY 
(ONLINE) with more Authenticity</small>
   <h4 className="mt-3">1. Explore TALENTS NEARBY and connect with them</h4>
   <h4>2. Connect with people NEAR YOU, to develop your skills You can be a 
   TEACHER as well as a LEARNER</h4>
   <h4>4. Explore new
opportunities. Find the 
desired job.</h4>
<h4>5. Get 360-degree Talent or Skill Development NEARBY YOU, that 
too in Real-Time</h4>

          <h5 className="mt-5">Why Talspo? Section</h5>
            <span>Our innovative platform leverages advanced technologies like Artificial Intelligence 
(AI) and Machine Learning (Deep Learning) including Blockchain to facilitate realtime connections between learners and local trainers, addressing the critical skills gap. 
By providing a geo-location-based marketplace, users can access tailored learning 
experiences that align with market demands. Additionally, our comprehensive 
performance metrics empower individuals to track their progress, ensuring effective 
skill acquisition and enhancing overall employability in a competitive landscape.</span>


                  <div className="know-team-btn mt-5">
                  <button onClick={ourTeamHandler}>Know Team</button>
                  </div>


      </div> 

      <div className="slider-about">
      <div className="slider-container">
      <Slider {...settings}>
        <div onClick={howHandler} className="extra-slide">
           <div className="extra-slide-image">
            <img src={TalspoIcon} alt="" />
           </div>
           <a href="/how-we-work">How We Work?</a>
        </div>
        <div onClick={achiveHandler} className="extra-slide">
           <div className="extra-slide-image">
            <img src={TalspoIcon} alt="" />
           </div>
           <a href="/achievements">Achievements So Far</a>
      </div>
        <div onClick={faqHandler} className="extra-slide">
        <div className="extra-slide-image">
          <img src={TalspoIcon} alt="" />
        </div>
        <a href="/faq">FAQs</a>
        </div>
        
      </Slider>
    </div>
      </div>

      <div className="qr-code-about">
             <img src={qr} alt="" />
             <button>Call to action</button>

             <div className="connected">
              <h6>Stay Connected: 
              <h5><a href="https://in.linkedin.com/company/talspo"><img src={linkdin} alt="linkdin"/></a>|<a href="https://x.com/talspogroup"><img src={XIcon} alt="xIcon"/></a>|<a href="https://www.youtube.com/@TalspoGroup "><img src={YouTube} alt="Youtube" style={{ width: '80px', height: '60px' }}       /  ></a>|<a href="https://www.f6s.com/talspo"><img src={F6S} alt="f6s"/></a>|<a href="https://www.crunchbase.com/organization/talspo-explore-spot-connect"><img src={Crunchbase} alt="crunchbase" style={{ width: '100px', height: '100px' }}  /></a>|<a href=""><img src={productHunt} alt="productHunt"  style={{ width: '80px', height: '60px' }}   /></a>|<a href="https://yourstory.com/companies/talspo"><img src={YourStory} alt="YourStory"  style={{ width: '80px', height: '40px' }} /></a>  </h5>

              </h6>
             </div>
      </div>


    </div>

    <FooterTop />
    <Footer />
  </>
  );
};

export default AboutUs;
