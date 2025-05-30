import { useEffect, useState } from 'react';
import './OurTeam.css';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from '../../pages/Footer/Footer';
import { ourTeam } from "../../apiService";
import FooterTop from '../../pages/Footer/FooterTop';
import Loading from "../../pages/loading/Loading"
import { useNavigate } from 'react-router-dom';

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [activeTabs, setActiveTabs] = useState({
    leadership: "Founder",
    developers: "Current",
    interns: "Current",
  });

  const joinTeamHandler = () => {
    navigate("/join")
  }

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await ourTeam();
        setTeamData(response.records || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setError("Error fetching team data: " + error.message);
        setIsLoading(false);
      }
    };
    fetchTeamData();
  }, []);

  // Filter data by meet_our_team and category
  const getFilteredData = (team, category, tab) => {
    return team.filter(
      (item) =>
        (item.meet_our_team || "").toLowerCase() === category.toLowerCase() &&
        (item.category || "").toLowerCase() === tab.toLowerCase()
    );
  };


  const handleTabChange = (category, tab) => {
    setActiveTabs((prevState) => ({ ...prevState, [category]: tab }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <>
      <NavbarContainer />
      <div className="OurTeam-main">
        <div className="ourteam">
          <div className="team-top">
            <h5>Meet The Team</h5>
            <p>Meet the highly motivated core team behind Talspo that believes in the potential of transforming Human Resources (HR) in an age of highly innovative technologies like Artificial Intelligence (AI).</p>
          </div>
          <div className="team-btm">
            <div className="one">
              <p>
                Your friends will believe in your potential, your enemies will make you live up to it.
              </p>
              <h5>Tim Fargo </h5>
            </div>
            <div className="two">
              {/* Leadership */}
              <div className="teamOne">
                <h5>Leadership</h5>
                <div className="btns-tab">
                {["Founder", "Co-Founder", "Advisors", "Investors"].map((tab) => (
  <button
    key={tab}
    className={`${tab} ${activeTabs.leadership === tab ? "active" : ""}`}
    onClick={() => handleTabChange("leadership", tab)}
  >
    {tab}
  </button>
))}

                </div>
                <div className="leadership-tab-content">
                  <div className="leader">
                    {getFilteredData(teamData, "Leadership", activeTabs.leadership).map((person) => (
                      <div key={person.id} className="tab-box">
                        <div className="img">
                          <img src={person.image} alt={person.title} />
                        </div>
                        <div className="text-tab">
                          <h6>{person.title}</h6>
                          <span>{person.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Management */}
              <div className="teamTwo">
                <h5>Management and Technology Developer</h5>
                <div className="btns-tab">
                  {["Previous", "Current"].map((tab) => (
                    <button
                      key={tab}
                      className={`${tab} ${activeTabs.developers === tab ? "active" : ""}`}
                      onClick={() => handleTabChange("developers", tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="developers-tab-content">
                  <div className="leader">
                    {getFilteredData(teamData, "Management and Technology Developer", activeTabs.developers).map((person) => (
                      <div key={person.id} className="tab-box">
                        <div className="img">
                          <img src={person.image} alt={person.title} />
                        </div>
                        <div className="text-tab">
                          <h6>{person.title}</h6>
                          <span>{person.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interns */}
              <div className="teamThree">
                <h5>Interns</h5>
                <div className="btns-tab">
                  {["Previous", "Current"].map((tab) => (
                    <button
                      key={tab}
                      className={`${tab} ${activeTabs.interns === tab ? "active" : ""}`}
                      onClick={() => handleTabChange("interns", tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="Interns-tab-content">
                  <div className="leader">
                    {getFilteredData(teamData, "Interns", activeTabs.interns).map((person) => (
                      <div key={person.id} className="tab-box">
                        <div className="img">
                          <img src={person.image} alt={person.title} />
                        </div>
                        <div className="text-tab">
                          <h6>{person.title}</h6>
                          <span>{person.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="join-btn-team">
           <button onClick={joinTeamHandler}>Join Our Team</button>
            </div>
          <div className="team-last-videos">
            <div className="team-video-heading">
           <h5>Our Team Videos</h5>
            </div>

           <div  className='team-v'>
           <iframe
              src="https://www.youtube.com/embed/mkOWfKR84sE"
              width="100%"
              height="315"
              style={{ border: "none" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/wSW4QcFvlgA"
              width="100%"
              height="315"
              style={{ border: "none" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
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
