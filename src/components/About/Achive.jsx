import "./Achive.css"
import Navbar from "../../pages/Navbar/Navbar"
import Footer from "../../pages/Footer/Footer"
import AchiveImg from "../../assets/images/achiveImg.jpg"

const Achive = () => {
  return (
   <>
   <Navbar />
    <div className='Achive-main'>
    <div className="Achive-page">
{/* ---------------------------------------------------------------- */}
          <div className="achive-top">
            <h5>Our Achievements</h5>
            <p>The Story So far</p>
          </div>
          <div className="achive-btm">
          <div className="a-left">
             <h6>Ship- The Startup Festival & Global Startup Challenge (GSC) 2017, Kotka, Finland </h6>
             <p>The ONLY Startup to represent India in *Ship: The Startup Festival, in Kotka, Finland, The Global Startup Challenge (GSC) 2017 as the Semifinalist. The ONLY Startup from India that was selected out of 656 Applications from 70 Countries.</p>
             <div className="btuns">
                    <button>Get Started</button>
                      <div className="cont-btn">
                    <button>Contact Us</button>
                      </div>
             </div>
          </div>  
          <div className="a-right">
              <img src={AchiveImg} alt="  " />
          </div>
          </div>

 </div>
 </div>
 <Footer />
   </>
  )
}

export default Achive