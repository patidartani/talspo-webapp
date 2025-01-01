import React from 'react'
import "./DownloadApp.css"
import NavBarContainer from '../NavbarCom/NavBarContainer'
import Footer from './Footer'

const DownloadApp = () => {
  return (
    <>
    <NavBarContainer />
    <div className='DownloadApp'>
          <div className="app-download">
          <div className="app-top">
            <h5>Download The Talspo App</h5>
            <p>Add Talspo To Your Homescreen          </p>
          </div> 
           <div className="app-last">
          <div className="app1 mt-4">
                <div className="app1-left">
                     <h5>For Android users,</h5>
                      <p><b>Step 1:</b>Open the option menu.</p>
                      <p><b>Step 2:</b>Tap on Add to Home screen.</p>
                      <p><b>Step 3:</b>Accept the install request.</p>
                    </div>        
          </div>  

          <div className="app1 mt-5">  
                    <div className="app1-left">
                     <h5>For iOS users,</h5>
                      <p><b>Step 1:</b>Open the share menu.</p>
                      <p><b>Step 2:</b>Tap on Add to Home screen.</p>
                    </div>     
          </div> 

           </div>

          </div>
    </div>
    <Footer />
    </>
  )
}

export default DownloadApp