import React from 'react'
import "./SiteMap.css"
import Navbar from "../../pages/Navbar/Navbar"

const SiteMap = () => {
  return (
   <>
   <Navbar />
    <div className='SiteMap-main'>
          <div className="site_top">
          <h5>SiteMap</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates excepturi soluta necessitatibus labore officia! Fugiat porro dolorum non nihil quis.</p>
          </div>
          <div className="site-map">
  {/* --------------------------------------------------*/}
             <div className="site-box">
                    <h5>About</h5>
                   <a href="/about-us"><span>About Us </span></a>
                   <a href="/faq"><span>Faq</span></a>
                   <a href="/our-team"><span>Our Team</span></a>
                   <a href="/achievements"><span>Achievements</span></a>
                   <a href="/how-we-work"><span>How We Work</span></a>
                   <a href="/talspo-search"><span>Talspo Search AI</span></a>
                   <a href="/talspo-api"><span>Talspo API</span></a>
           </div>
           <div className="site-box">
           <h5>Services</h5> 
           <a href="/student-service"><span>Students/Learner Model Services</span></a>
                   <a href="/professional-service"><span>Professional + Trainers Model Services</span></a>
                   <a href="/corporate-service"><span>Corporate + Organization Model Services</span></a>
                   <a href="/co-working"><span>Co-Working Spaces + Co-works & Co-live & Events Model Services</span></a>              
           </div>
           <div className="site-box">
           <h5>Join</h5> 
           <a href="/opportunities"><span>Find Opportunities </span></a>
                   <a href="/partners"><span>Do Partnership</span></a>
                   <a href="/tca"><span> Talspo Campus Ambassador</span></a>       
          </div>
          <div className="site-box">
           <h5>Blogs</h5>   
           <a href="/blog"><span>Blog</span></a>

          </div>
          <div className="site-box">
                    <h5>Other</h5>
                   <a href="/talspo-here"><span>Talspo Here</span></a>
                   <a href="/contact-us"><span>Contact Us</span></a>

             </div>
 
             <div className="site-box">
                    <h5>Footer</h5>
                   <a href="/privacy-policy"><span>Privacy Policy</span></a>
                   <a href="/term-condition"><span>Terms & Conditions</span></a>
                   <a href="/term-of-use"><span>Terms Of Use</span></a>
                   <a href="/cookie-policy"><span>Cookie Policy</span></a>

                   <a href="/disclaimer"><span>Disclaimer</span></a>  
                   <a href="/anti-spam-policy"><span>Anti Spam Policy</span></a>
                   <a href="/"><span>Legal Certification</span></a>
                   <a href="/dmca-policy"><span> IPR Compilance & Other Compilance</span></a>
                   <a href="/gdbr-policy"><span> GPR Compilance</span></a>
                   <a href="/eula-policy"><span>EULA</span></a>


             </div>
 
</div>
</div>
   </>
  )
}

export default SiteMap