import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState, useEffect } from 'react';

import "./Home.css"
import Navbar from '../../pages/Navbar/Navbar'
import Whowe from './Whowe'
import Footer from '../../pages/Footer/Footer'
import Free from './Free'
// import LernerTrainer from './LernerTrainer'
import HomeTwo from './HomeTwo';
import HomeBlog from '../Blog/HomeBlog';
import { useNavigate } from 'react-router-dom';
import HomeBroach from './HomeBroach';
import FooterTop from '../../pages/Footer/FooterTop';
import gifImg from "../../assets/images/homeslidergif.gif"
import {technologyApi} from "../../apiService"
import Loading from "../../pages/loading/Loading"

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 
  const items = [
    {
      title: "Experienced Team",
      description:
        "Our team comprises industry experts who understand the challenges and demands of today’s job market.",
      icon: "ri-group-2-fill",
      imageUrl:
        "https://img.freepik.com/premium-vector/frequently-asked-questions-faq-questions-answers_773186-1025.jpg?semt=ais_hybrid",
    },
    {
      title: "Quick Job Matching",
      description:
        "Talspo’s advanced algorithms connect job seekers with opportunities that match their skills and aspirations in real-time.",
      icon: "ri-rocket-line",
      imageUrl:
        "https://images.businessnewsdaily.com/app/uploads/2017/08/06120028/Communicate-nonverbally-during-the-job-interview.png",
    },
    {
      title: "Global Reach",
      description:
        "Our platform connects talent and employers from around the world, offering global opportunities for local job seekers.",
      icon: "ri-global-line",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/soft-skills-9221151-7518679.png",
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay updated with real-time notifications about job opportunities, applications, and more, ensuring you never miss a chance.",
      icon: "ri-time-line",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/010/872/627/original/3d-job-interview-illustration-png.png",
    },
    {
      title: "Supportive Community",
      description:
        "Join a network of professionals and employers who support each other in career development and growth.",
      icon: "ri-hand-heart-line",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/010/872/229/original/3d-job-applicant-illustration-png.png",
    },
  ];

  // Initialize state after items is defined
  const [activeIndex, setActiveIndex] = useState(0); // Track active index
  const [selectedImage, setSelectedImage] = useState(items[0].imageUrl); // Track selected image

  const handleClick = (imageUrl, index) => {
    setActiveIndex(index); // Update active index
    setSelectedImage(imageUrl); // Update selected image
  };

  // ---------------------techno api --------------------------------------
  const [techStack, setTechStack] = useState([]); 

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await technologyApi(); 
        // console.log("Techno api Response:", response.records); 
        setTechStack(response.records); 
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching technology stack:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />; // Render Loading component while data is being fetched
  }


  // -----------------------------------------------------------

  const joinfree = () => {
    navigate('/signup')
  };
  const learnmore = () => {
    navigate('/about-us')
  };

  const images = [
    'https://static.vecteezy.com/system/resources/thumbnails/001/879/458/small_2x/digital-library-to-get-ideas-inspiration-and-solutions-online-learning-for-students-reading-app-online-books-education-by-blog-illustration-landing-page-card-banner-brochure-flyer-free-vector.jpg',
    gifImg
  ];

  return (
    <div className='Home-main'>
      <div className="Home-page">
        <Navbar />
        <div className="Home">
          <div className="left">
            <h6>With Talspo, <br /> Connect with people in real-time to learn skills</h6>
            <p>
              Be a <small>Learner</small>, <small>Teacher</small>, or <small>Both</small>.
              Talspo helps to solve skill mismatch globally in both Online and Offline mode.
            </p>
            <span>DYNAMIC TEXT HERE</span>

            <div className="home-btns">
              <div className="join-free">
                <button onClick={joinfree}>JOIN FOR FREE</button>
              </div>
              <button onClick={learnmore} className="more">LEARN MORE</button>
            </div>
          </div>

          <div className="right">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {/* First Image Slide */}
              <SwiperSlide>
                <div className="swiper-image-container">
                  <img src={images[0]} alt="Slide 1" />
                </div>
              </SwiperSlide>

              {/* Video Slide */}
              <SwiperSlide>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/hMjaZKCh3Nc?autoplay=1&mute=1&loop=1&playlist=hMjaZKCh3Nc"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Talspo Video"
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-image-container">
                  <img src={images[1]} alt="Slide 2" style={{ width: '50%' }} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>


        </div>
        <HomeTwo />
        {/* ---------------------------------------------------------------------------------- */}


        <div className="home-two">
      <h5>Why Choose Talspo?</h5>
      <p>You can explore, spot, connect talented people nearby (Online).</p>
      <div className="home-two-btm">
        <div className="home2-left">
          <img src={selectedImage || "defaultImage.jpg"} alt="Selected" />
        </div>
        <div className="home2-right">
          {items.map((item, index) => (
            <div
              key={index}
              className={`linee ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(item.imageUrl, index)}
            >
              <div className="linee-left">
                <div className="icon-line">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="linee-right">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>





        {/* ---------------------------------------------------------------------------------- */}
        <Whowe />
        <div className="home-three">
      <h5>Our Advance Technology Stack Includes</h5>
      <div className="h3-tbm">
        <div className="h3-top">
          {techStack.length > 0 ? (
            techStack.map((tech, index) => (
              <div className="line" key={index}>
                <img src={tech.image} alt={`Tech ${tech.id}`} />
              </div>
            ))
          ) : (
            <p>Loading technologies...</p>
          )}
        </div>
      </div>
    </div>
        {/* ---------------------------------------------------------------------------------- */}
        <HomeBlog />
        <HomeBroach />

        <FooterTop />
        <Free />
        <Footer />

      </div>
    </div>
  )
}

export default Home