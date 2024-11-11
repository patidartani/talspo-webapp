import React from 'react'
import "./HomeBroach.css"
import networkImg from "../../assets/images/Talspo Connectivity Network Image.png"
import YlwImg from "../../assets/images/yellowqr.png"


const HomeBroach = () => {
  return (
    <div className='HomeBroach-main'>
          <div className="homebroch">
                     <div className="broch1">
                      <h6>Check Our Company's Latest E-Brochure</h6>
                      <img src={YlwImg} alt="" />
                      </div>
                      <div className="broch2">
                            <img src={networkImg} alt="" />
                            <img src={networkImg} alt="" />
                        </div> 
                        <div className="broch3">
                          <h6>Connect with us</h6>
                          <button>CONTACT US</button>
                           <img src={YlwImg} alt="" />
                        </div>
    </div>
    </div>
  )
}

export default HomeBroach