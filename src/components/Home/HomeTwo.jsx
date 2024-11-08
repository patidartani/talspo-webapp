import React from 'react'
import "./HomeTwo.css"
import { useNavigate } from 'react-router-dom'

const HomeTwo = () => {
  const navigate = useNavigate();
 
   const abouMove = () => {
    navigate('/about-us')
   }

  return (
    <div className='HomeTwo_main'>
        
          <div className="Home-Two">
                     <div className="Two_left">
                        <img src="https://cdn.pixabay.com/photo/2018/07/24/16/36/seo-3559564_640.jpg" alt="" />
                     </div>
                     <div className="Two_Right">
                     <h5>Who We Are</h5>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur qui vitae dolore dignissimos, laborum fugiat error quia harum porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, provident.  </p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur qui vitae dolore dignissimos, laborum fugiat error quia harum porro.</p>
                      <div className="kn">
                        <button onClick={abouMove}>Know More</button>
                      </div>
                     </div>
          </div>
    </div>
  )
}

export default HomeTwo