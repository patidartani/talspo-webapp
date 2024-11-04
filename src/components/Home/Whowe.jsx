import React from "react";
import "./Whowe.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whowe1 from "../../assets/images/whowe1r.jpg";

const Whowe = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 2000, 
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
    <div className="Whowe-main">
      <div className="who-page">
        <div className="who-btm">
          <h6>Our Services</h6>
          <div className="who-slide">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <div className="w-box">
                    <img src={whowe1} alt="" />
                    <h6>Are You A Student?</h6>
                    <p>Enhance your existing skills and learn new skills!</p>
                    <div className="get">
                    <button>Get it nearby</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-box">
                    <img src='https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D' alt="" />
                    <h6>Are You A Teacher?</h6>
                    <p>Help people learn and enhance your existing skills!</p>
                    <div className="get">
                    <button>Get it nearby</button>
                    </div>
                                      </div>
                </div>
                <div>
                  <div className="w-box">
                    <img src='https://images.unsplash.com/photo-1664575599730-0814817939de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D' alt="" />
                    <h6>Are You A 9-to-5 Employee?</h6>
                    <p>Level up your existing skills and learn new skills!</p>
                    <div className="get">
                    <button>Get it nearby</button>
                    </div>                  </div>
                </div>
                <div>
                  <div className="w-box">
                    <img src='https://plus.unsplash.com/premium_photo-1661277816311-28cced31f998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D' alt="" />
                    <h6>Are You An Entrepreneur?</h6>
                    <p>Get an opportunity to network with potential co-founders!</p>
                    <div className="get">
                    <button>Get it nearby</button>
                    </div>                  </div>
                </div>
                <div>
                  <div className="w-box">
                    <img src='https://images.unsplash.com/photo-1665686306265-c52ee9054479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8fDB8fHww' alt="" />
                    <h6>Are You A Networker?</h6>
                    <p>Meet people with similar interests!</p>
                    <div className="get">
                    <button>Get it nearby</button>
                    </div>                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whowe;
