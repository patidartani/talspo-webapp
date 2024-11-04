import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurTeam.css';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from '../../pages/Footer/Footer';

import OurTeamimg from '../../assets/images/teamourr.png';

const OurTeam = () => {
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

  const teamMembers = [
    {
      name: 'Pallavi Sharma',
      role: 'Chief Technology Officer',
      description: 'Passionate about technology and innovation, Ravi leads our tech initiatives.',
      img: 'https://images.pexels.com/photos/5685951/pexels-photo-5685951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      name: 'Umesh Gupta',
      role: 'Marketing Director',
      description: 'Expert in digital marketing strategies, Sneha drives our marketing efforts.',
      img: 'https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?b=1&s=612x612&w=0&k=20&c=-zIXXuXi1Bufza1-8Pay9Q-a65BbNxolOJJlMY62siI=',
    },
    {
      name: 'Rajesh Singh',
      role: 'Lead Designer',
      description: 'With an eye for detail, Rajesh creates stunning designs that elevate our brand.',
      img: 'https://images.pexels.com/photos/9212726/pexels-photo-9212726.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Priya Verma',
      role: 'Product Manager',
      description: 'Priya ensures that our products meet market needs and customer expectations.',
      img: 'https://images.pexels.com/photos/5685978/pexels-photo-5685978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      name: 'Karan Mehta',
      role: 'Financial Analyst',
      description: 'Karan provides insights into our financial performance and strategy.',
      img: 'https://images.pexels.com/photos/8178754/pexels-photo-8178754.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Amit Desai',
      role: 'Human Resources Manager',
      description: 'Anita fosters a positive work environment and manages our talent acquisition.',
      img: 'https://media.istockphoto.com/id/1822210952/photo/businessman-with-computer-reading-documents-in-office-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=cd4YS0QCEhlD84XAzERwUSFkCOR21ccaSK7myUleba8=',
    }, 
    {
      name: 'Deepak Nair',
      role: 'Customer Success Manager',
      description: 'Dedicated to ensuring customer satisfaction and retention, Deepak is our client advocate.',
      img: 'https://images.pexels.com/photos/4064839/pexels-photo-4064839.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

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
                      <img src={member.img} alt={member.name} />
                    </div>
                    <div className="text">
                      <h6>{member.name}</h6>
                      <span>{member.role}</span>
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
