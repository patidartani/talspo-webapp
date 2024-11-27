import {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurTeam.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from '../../pages/Footer/Footer';
import {ourTeam} from "../../apiService"
import Loading from "../../pages/loading/Loading"

import OurTeamimg from '../../assets/images/teamourr.png';

const OurTeam = () => {

  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {

    const fetchOurTeam = async () => {
      setLoading(true); 
      try {
        const response = await ourTeam(); 
        console.log("Our Team API Response:", response);
        setTeamMembers(response.records)
      } catch (error) {
        console.error("Error fetching our team data:", error); 
      }finally {
        setLoading(false);
      }
    };

    fetchOurTeam();
  }, []);
   
  if (loading) {
    return <Loading />;
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
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
              <div className="team-btn">
                <button>Get In Touch</button>
              </div>
            </div>
            <div className="two">
              <Slider {...settings}>
                {teamMembers.map((member, index) => (
                  <div key={index} className="team">
                    <div className="t-img">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="text">
                      <h6>{member.title}</h6>
                      <span>{member.subtitle}</span>
                      <p>{member.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="three">
              <p>
                Our team embodies the spirit of collaboration, innovation, and commitment.  
                Each member brings unique strengths and perspectives, working together to achieve 
                common goals. Together, we navigate challenges and celebrate successes, 
                fostering a culture of trust and support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurTeam;
