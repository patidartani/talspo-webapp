import "./SiteMap.css"
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer"


const SiteMap = () => {
  return (
   <>
   <NavbarContainer />
    <div className='SiteMap-main'>
          <div className="site_top">
          <h5>SiteMap</h5>
          <p>Discover the connections on each page by exploring the sitemap menu provided below, this is essential for gaining a deeper understanding of Talspo Application(s)</p>
          </div>
          <div className="site-map">
  {/* --------------------------------------------------*/}
             <div className="site-box">
                    <h5>About</h5>
                   <a href="/about-us"><span>About Us </span></a>
                   <a href="/faq"><span>Faq</span></a>
                   <a href="/our-team"><span>Our Team</span></a>
                   <a href="/achievements"><span>Achievements</span></a>
                   <a href="/how-it-works?"><span>How It Works?</span></a>
                   <a href="/talspo-search"><span>Talspo Search AI</span></a>
                   <a href="/talspo-api"><span>Talspo API</span></a>
                   <a href="/talspo-affiliate"><span>Talspo Affiliate Program</span></a>
                   <a href="/talfia"><span>Talfia (*sub-brand of Talspo)</span></a>
           </div>
           <div className="site-box">
           <h5>Services</h5> 
           <a href="/services"><span> Services</span></a>
           <a href="/service-detail/1"><span>Students/Learner Model Services</span></a>
                   <a href="/service-detail/2"><span>Professional + Trainers Model Services</span></a>
                   <a href="/service-detail/3"><span>Corporate + Organization Model Services</span></a>
                   <a href="/service-detail/4"><span>Co-Working Spaces + Co-works & Co-live & Events Model Services</span></a>              
           </div>
           <div className="site-box">
           <h5>Join</h5> 
                        <a href="/join"><span>Join Us </span></a>
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
                    <h5>Legal Pages</h5>
                   <a href="/privacy-policy"><span>Privacy Policy</span></a>
                   <a href="/term-condition"><span>Terms & Conditions</span></a>
                   <a href="/term-of-use"><span>Terms Of Use</span></a>
                   <a href="/cookie-policy"><span>Cookie Policy</span></a>

                   <a href="/disclaimer"><span>Disclaimer</span></a>  
                   <a href="/anti-spam-policy"><span>Anti Spam Policy</span></a>
                   <a href="/legal-certificate"><span>Legal Certification</span></a>
                   <a href="/dmca-policy"><span> IPR Compilance & Other Compilance</span></a>
                   <a href="/gdbr-policy"><span> GPR Compilance</span></a>
                   <a href="/eula-policy"><span>EULA</span></a>

             </div>
 
</div>
</div>
<Footer />
   </>
  )
}

export default SiteMap