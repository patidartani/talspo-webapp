import { useEffect, useState } from "react";
import "./AboutUs.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import AboutTopImg from "/assets/images/aboutusTop.webp";
import Footer from "../../pages/Footer/Footer";
 import { useNavigate } from "react-router-dom";

 import { HiOutlineArrowSmallRight , HiOutlineArrowSmallLeft} from "react-icons/hi2";



 import Slider from "react-slick";
 import TalspoIcon from "/assets/images/talspoIcon.png"
 import qr from "/assets/images/yellowqr.png"
 import linkdin from "/assets/images/linkdin.png"
import productHunt from "/assets/images/ProductHunt.png"
import YourStory from "/assets/images/YourStory.png"
import Crunchbase from "/assets/images/Crunchbase.png"
import F6S from "/assets/images/F6S.png"
import XIcon from "/assets/images/XIcon.png"
import YouTube from "/assets/images/YouTube.png"
import FooterTop from "../../pages/Footer/FooterTop";

import { getPatentData, getKnowUsData, getJourneyTalspoData, getLogoStoryData, getRecognitionData } from '../../apiService';
import WhyChooseData from "./WhyChooseData";

const AboutUs = () => {

  // -----------------------------------------------------------------------

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
        {
            breakpoint: 1024, // Screen width <= 1024px (for tablets or smaller screens)
            settings: {
                slidesToShow: 2, // Show two slides
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: "10px", // Slight padding for better visual appeal
            },
        },
        {
            breakpoint: 1200, // Screen width <= 1200px (for large screens)
            settings: {
                slidesToShow: 1, // Show one slide
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: "0px",
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

// -----------------------------all-apis-------------------------------------------
const [patentData, setPatentData] = useState([]);
  const [knowUsData, setKnowUsData] = useState([]);
  const [logoStoryData, setLogoStoryData] = useState([]);
  const [recognitionData, setRecognitionData] = useState([]);

  const [journeyData, setJourneyData] = useState([]);
  const [activeYear, setActiveYear] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTabsData = async () => {
      try {
        const patentResponse = await getPatentData();
        setPatentData(patentResponse.data.records);

        const knowUsResponse = await getKnowUsData();
        setKnowUsData(knowUsResponse.data.records);

        const logoStoryResponse = await getLogoStoryData();
        setLogoStoryData(logoStoryResponse.data.records);

        const recognitionResponse = await getRecognitionData();
        setRecognitionData(recognitionResponse.data.records);

        const journeyResponse = await getJourneyTalspoData(); 
        const data = journeyResponse.data.records;
        setJourneyData(data);
        setActiveYear(data[0]?.year);

       

      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchTabsData();  // Calling the function to fetch data on component mount
  }, []); 


  const years = journeyData.map((record) => record.year);

  // Get the data for the active year
  const activeRecord = journeyData.find((record) => record.year === activeYear);

  // Calculate the position of the scroll indicator dynamically
  const getIndicatorPosition = () => {
    const yearIndex = years.indexOf(activeYear);
    const gap = 300 / years.length; // Adjust based on the total height of the scroll line
    return yearIndex * gap;
  };


//  ----------------------------------------------------------------------------------
  return (
    <>
    <NavbarContainer />
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
            {/* <img src={AboutTopImg} alt="About Us" /> */}
            <iframe src="https://www.youtube.com/embed/hMjaZKCh3Nc?autoplay=1&mute=1&loop=1&playlist=hMjaZKCh3Nc" frameborder="0"></iframe>
          </div>
        </div>


{/* -------------------------------------------------------------------------------------------------- */}             

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
             Patent (IPR)
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
            <h6 style={{ fontWeight: "600", fontSize: "1.3vmax" }}>
              {knowUsData.length > 0 && knowUsData[0].title}
            </h6>
            <p>{knowUsData.length > 0 && knowUsData[0].description}</p>
            {/* <h5>"TALENT AGGREGATOR"</h5> */}
          </div>
        )}
            {activeTab === "journey" && (
     <div className="journey-tab-content">
     <h5>Our Journey</h5>
     {error && <p className="error-message">{error}</p>}

     <div className="journey-data">
       {/* Scroll Line */}
       <div className="scroll-line">
         <div
           className="scroll-indicator"
           style={{ top: `${getIndicatorPosition()}px` }}
         ></div>
       </div>

       {/* Journey Left */}
       <div className="journey-left">
         {years.map((year) => (
           <h6
             key={year}
             className={activeYear === year ? "active-year" : ""}
             onClick={() => setActiveYear(year)}
           >
             {year}
           </h6>
         ))}
       </div>

       {/* Journey Right */}
       <div className="journey-right">
         {activeRecord && (
           <div className="journey-scroll">
             <div className="j-one">
               <h5>{activeRecord.title}</h5>
               <p>{activeRecord.description}</p>
               <img src={activeRecord.image} alt={activeRecord.year} />
             </div>
           </div>
         )}
       </div>
     </div>
   </div>
    )}
            
            {activeTab === "logo-story" && (
          <div className="logo-story-tab-content">
            <h6>The Logo Story</h6>
            <p>
              Talspo's logo represents our vision of collaboration and growth, embodying the
              unity of learners and trainers.
            </p>

            <div className="logo-story-slider">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {logoStoryData.map((item, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                      <img className="w-70" src={item.image} alt={`Logo Story ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                  <HiOutlineArrowSmallLeft />
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                  <HiOutlineArrowSmallRight />
                </a>
              </div>
            </div>
          </div>
        )}
            {activeTab === "ipr" && (
          <div className="ipr-tab-content">
            <h6>{patentData.length > 0 && patentData[0].title}</h6>
            <p>{patentData.length > 0 && patentData[0].description}</p>
            {/* <p>Patent Certificate Legal Status: Inforce</p> */}
            <img src={patentData.length > 0 ? patentData[0].image : ""} alt="Patent" />
          </div>
        )}
            {activeTab === "recognition" && (
          <div className="recognition-tab-content">
            <h6>{recognitionData.length > 0 && recognitionData[0].title}</h6>
            <p>{recognitionData.length > 0 && recognitionData[0].description}</p>
            <img src={recognitionData.length > 0 ? recognitionData[0].image : ""} alt="Recognition" />
          </div>
        )}
          </div>
        </div>


{/* -------------------------------------------------------------------------------------------------- */}             
</div>
{/* -------------------------------------------------------------------------------------------------- */}

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
skill acquisition and enhancing overall employability in a competitive landscape. <br />

   <h6 className="mt-3">1.Pain points being solved:</h6>
   
   <small>Mismatch, Accessibility, Relevance, Authenticity, 1-Stop, Skill Recruiting 
   </small> <br />
</span> <br />
<b>Real-Time (LIVE) Talent Collaboration Marketplace
Providing 360-Degree Peer-to-Peer (P2P) Talent Connections 
Marketplace in Real-Time as a Software as a Service (SaaS) Model.</b> <br />
<span style={{marginTop:"3vmax"}}>
The best thing that makes us keep working on this problem is that we have in-depth 
domain expertise with detailed research and development (R&D) of the target market 
and self-experience(s), it’s like “Fire in the Belly Situation” for us. We are all team 
members are continuous learners with having prior startup experience(s).
</span>



                  <WhyChooseData />
                     


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
