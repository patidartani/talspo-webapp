import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import './SliderHome.css'; 

const images = [ 
  { 
    img: 'https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    text: 'The future depends on what you do today', 
    description: 'Act now for a better tomorrow.', // Description for the first image
  }, 
  { 
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    text: 'Opportunities do not happen. You create them', 
    description: 'Be proactive and make your dreams a reality.', // Description for the second image
  }, 
  { 
    img: 'https://images.unsplash.com/photo-1653669485546-7389365ca840?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    text: 'If opportunity doesn’t knock, build a door', 
    description: 'Create your own chances and seize them.', // Description for the third image
  } 
]; 

const SliderHome = () => { 
  return ( 
    <div className="Slider-main"> 
      <div className="slider-page"> 
        <Swiper 
          modules={[Pagination, Autoplay]} 
          pagination={{ clickable: true }} 
          spaceBetween={30} 
          slidesPerView={1} 
          loop={true} 
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
        > 
          {images.map((img, index) => ( 
            <SwiperSlide key={index}> 
              <div className="slide-container"> 
                <img src={img.img} alt={`Slide ${index + 1}`} /> 
                <div className="overlay"></div> {/* Black overlay */} 
                <div className="slide-text"> 
                  {img.text} 
                </div> 
                <p className="slide-description"> 
                  {img.description} 
                </p> {/* Add description from the image object */} 
              </div> 
            </SwiperSlide> 
          ))} 
        </Swiper> 
      </div> 
    </div> 
  ); 
}; 

export default SliderHome;
