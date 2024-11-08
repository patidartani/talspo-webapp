import React from 'react'
import "./HomeBlog.css"
import { useNavigate } from 'react-router-dom'

const HomeBlog = () => {
   const navigate = useNavigate();

   const Blogview = () => {
      navigate('/blog')
   }

  return (
    <div className='HomeBlog-main'>
             <div className="blg-top">
                 <h4>Our Latest Blogs</h4>
             </div>
          <div className="home-blog">
                    <div className="home-blog-right">
                           <div className="h-blg-right">
                              <img src="https://images.pexels.com/photos/7585665/pexels-photo-7585665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                              <h5>New Seminar Newest </h5>
                               <h6>2020</h6>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, animi!</span>
                              <div className="view-blog-btn">
                     <button onClick={Blogview}>Read More</button>
                    </div>
                           </div>
                           <div className="h-blg-right">
                              <img src="https://images.pexels.com/photos/20897034/pexels-photo-20897034/free-photo-of-smiling-woman-sitting-on-floor-in-front-of-camera.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                              <h5>New Seminar Newest </h5>
                              <h6>2020</h6>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, animi!</span>
                              <div className="view-blog-btn">
                     <button onClick={Blogview}>Read More</button>
                    </div>
                           </div> <div className="h-blg-right">
                              <img src="https://images.pexels.com/photos/12679998/pexels-photo-12679998.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                              <h5>New Seminar Newest </h5>
                              <h6>2022</h6>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, animi!</span>
                              <div className="view-blog-btn">
                     <button onClick={Blogview}>Read More</button>
                    </div>
                           </div> <div className="h-blg-right">
                              <img src="https://images.pexels.com/photos/8360444/pexels-photo-8360444.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                              <h5>New Seminar Newest </h5>
                              <h6>2020</h6>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, animi!</span>
                              <div className="view-blog-btn">
                     <button onClick={Blogview}>Read More</button>
                    </div>
                           </div>

                          
                    </div>
                   
          </div>
         
    </div>
  )
}

export default HomeBlog