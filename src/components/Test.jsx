import {useEffect, useState} from 'react';
import './OurTeam.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from '../../pages/Footer/Footer';
// import {ourTeam} from "../../apiService"
// import Loading from "../../pages/loading/Loading"

import OurTeamimg from '../../assets/images/teamourr.png';
import FooterTop from '../../pages/Footer/FooterTop';

const OurTeam = () => {

  const [activeTabs, setActiveTabs] = useState({
    leadership: "founder",
    developers: "Previous",
    interns: "Previous-int",
  });

  const handleTabChange = (category, tab) => {
    setActiveTabs((prevState) => ({ ...prevState, [category]: tab }));
  }

  const leadershipData = {
    founder: [
      {
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Andrea-La-Mendola-Chief-Operating-Officer-2.jpg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },
      {
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Profile-Julia-Soriano-1-1-1500x1500.jpg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },{
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Chris-Bobko-Head-of-Engineering-Integration-4.jpg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },{
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Derya-Thompson_HyperloopTT-1500x1500.jpeg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },{
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Andres-de-Leon-Chief-Executive-Officer-6.jpg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },{
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Andrea-La-Mendola-Chief-Operating-Officer-2.jpg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },{
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Chuck-Michael_HyperloopTT.jpg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },{
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Ben-Cooke-Head-of-Media-Relations-2.jpg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },{
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Shelby-Phillips_HyperloopTT-e1723042821790.jpeg",
        name: "Anand Mehta",
        position: "Chief Operating Officer",
      },
      {
        img: "https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/David-Doll-Chief-Engineering-Council-Member-3.jpg",
        name: "David Doll",
        position: "Chief Engineering Officer",
      },
      // Add more founder data as needed
    ],
    "co-founder": [
      {
        img: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Jane Doe",
        position: "Co-Founder & CTO",
      },
      {
        img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "John Smith",
        position: "Co-Founder & COO",
      },
      // Add more co-founder data as needed
    ],
    advisors: [
      {
        img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Dr. Emily Carter",
        position: "Strategic Advisor",
      },
      {
        img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Michael Lee",
        position: "Financial Advisor",
      },
    ],
  };
  

  return (
    <>
    <Navbar />
    <div className="OurTeam-main">
      <div className="ourteam">
        <div className="team-top">
          <img src={OurTeamimg} alt="Our Team" />
        </div>
        <div className="team-btm">
          <div className="one">
            <h5>Meet Our Beautiful Team</h5>
            <p>
              We are passionate professionals working together to create impactful solutions.
              Our team brings a blend of creativity, expertise, and dedication.
            </p>
          </div>
          <div className="two">


          <div className="teamOne">
  <h5>Leadership</h5>
  <div className="btns-tab">
    {["founder", "co-founder", "advisors", "investors"].map((tab) => (
      <button
        key={tab}
        className={`${tab} ${activeTabs.leadership === tab ? "active" : ""}`}
        onClick={() => handleTabChange("leadership", tab)}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
      </button>
    ))}
  </div>
  <div className="leadership-tab-content">
    {Object.keys(leadershipData).map(
      (key) =>
        activeTabs.leadership === key && (
          <div key={key} className="leader">
            {leadershipData[key].map((person, index) => (
              <div key={index} className="tab-box">
                <div className="img">
                  {person.img && <img src={person.img} alt={person.name} />}
                </div>
                <div className="text-tab">
                  <h6>{person.name}</h6>
                  <span>{person.position}</span>
                </div>
              </div>
            ))}
          </div>
        )
    )}
  </div>
</div>

{/* ------------------------------------------------------------------------------------------ */}
            <div className="teamTwo">
              <h5>Management and Technology Developer</h5>
              <div className="btns-tab">
                <button
                  className={`Previous ${activeTabs.developers === "Previous" ? "active" : ""}`}
                  onClick={() => handleTabChange("developers", "Previous")}
                >
                  Previous
                </button>
                <button
                  className={`Current ${activeTabs.developers === "Current" ? "active" : ""}`}
                  onClick={() => handleTabChange("developers", "Current")}
                >
                  Current
                </button>
              </div>

              <div className="developers-tab-content">
                {activeTabs.developers === "Previous" && <div className='leader'>
                  <div className="tab-box">
                              <div className="img">
                                 <img src="https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Andres-de-Leon-Chief-Executive-Officer-6.jpg" alt="" />
                                </div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                           <div className="tab-box">
                              <div className="img">
                                 <img src="https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Shelby-Phillips_HyperloopTT-e1723042821790.jpeg" alt="" />
                                </div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                           <div className="tab-box">
                              <div className="img">
                                 <img src="https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Cristian-Santibanez-Marketing-Operations-Urban-Mobility-Lead-3.jpg" alt="" />
                                </div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                  </div>}
                {activeTabs.developers === "Current" && <div className='leader'>
                  <div className="tab-box">
                              <div className="img">
                                 <img src="https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Charles.png" alt="" />
                                </div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                           <div className="tab-box">
                              <div className="img">
                                 <img src="https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Ben-Cooke-Head-of-Media-Relations-2.jpg" alt="" />
                                </div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div><div className="tab-box">
                              <div className="img">
                                 <img src="https://www.hyperlooptt.com/hyperlooptt/wp-content/uploads/2020/06/Michael-Burton-Talent-Acquisition-Lead.jpg" alt="" />
                                </div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                  </div>
                  }
              </div>
            </div>
{/* ------------------------------------------------------------------------------------------ */}

            <div className="teamThree">
              <h5>Interns</h5>
              <div className="btns-tab">
                <button
                  className={`Previous-int ${
                    activeTabs.interns === "Previous-int" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("interns", "Previous-int")}
                >
                  Previous
                </button>
                <button
                  className={`Current-int ${
                    activeTabs.interns === "Current-int" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("interns", "Current-int")}
                >
                  Current
                </button>
              </div>
              <div className="Interns-tab-content">
                {activeTabs.interns === "Previous-int" && <div className='leader'>
                  <div className="tab-box">
                              <div className="img">
                                 <img src="https://images.pexels.com/photos/29553145/pexels-photo-29553145/free-photo-of-portrait-of-a-woman-in-mexico-city-park.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                           <div className="tab-box">
                              <div className="img"> <img src="https://images.pexels.com/photos/29547164/pexels-photo-29547164/free-photo-of-professional-woman-in-modern-laboratory-holding-tablet.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                  </div>}
                {activeTabs.interns === "Current-int" && <div className='leader'>
                  <div className="tab-box">
                              <div className="img"> <img src="https://images.pexels.com/photos/29540826/pexels-photo-29540826/free-photo-of-smiling-young-woman-with-dark-hair-portrait.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>  
                                <div className="text-tab">
                                  <h6>Anand Mehta</h6>
                                  <span>Chief Operating Officer</span>
                                </div>
                           </div>
                  </div>}
              </div>
            </div>

{/* ------------------------------------------------------------------------------------------ */}

          </div>
        </div>
      </div>
    </div>

    <FooterTop />
    <Footer />
  </>
  );
};

export default OurTeam;
