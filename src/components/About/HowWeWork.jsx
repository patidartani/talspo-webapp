import React from 'react'
import "./HowWeWork.css"
import Gif from "../../assets/images/How_We_Work_UC.gif"
import Navbar from "../../pages/Navbar/Navbar"

const HowWeWork = () => {
  return (
    <>
    <Navbar />
    <div className='HowWeWork-main'>
{/* ----------------------------- */}
                      <div className="how-tp">
                    <div className="how-left">
                           <h6>How We Work</h6>
                           <p>Get to know about our functionality, we hope you understand better through our content mentioned below</p>
                    </div>  
                    <div className="how-right">
                              <img src={Gif} alt="" />
                    </div>
                      </div>

                      <div className="how-btm">
                              
                      </div>

 </div>
    </>
  )
}

export default HowWeWork