import React, { useEffect, useState } from 'react'
import "./HowWeWork.css"
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"
import { howWork } from "../../apiService"
import FooterTop from '../../pages/Footer/FooterTop'


const HowWeWork = () => {

  const [howWeWorkData, setHowWeWorkData] = useState(null);

  useEffect(() => {
    const fetchHowWeWork = async () => {
      try {
        const response = await howWork();
        console.log('How work response', response.records)
        setHowWeWorkData(response.records)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchHowWeWork()
  }, [])


  return (
    <>
      <NavbarContainer />
      <div className='HowWeWork-main'>
        {/* ----------------------------- */}
        <div className="how-tp">
          <div className="how-left">
            <h6>{howWeWorkData && howWeWorkData[0] && howWeWorkData[0].title}</h6>
            <p>{howWeWorkData && howWeWorkData[0] && howWeWorkData[0].cantante}</p>
          </div>
          <div className="how-right">
            {howWeWorkData && howWeWorkData.length > 0 && (
              <img src={howWeWorkData[0].image} alt={howWeWorkData[0].title} />
            )}
          </div>
        </div>

        <div className="how-btm">
          <div className="work-box">
            <p dangerouslySetInnerHTML={{ __html: howWeWorkData && howWeWorkData[0]?.description }} />
          </div>
        </div>

      </div>

      <FooterTop />
      <Footer />
    </>
  )
}

export default HowWeWork