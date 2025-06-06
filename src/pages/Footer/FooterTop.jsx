import "./FooterTop.css"
import linkdin from "/assets/images/linkdin.png"
import productHunt from "/assets/images/ProductHunt.png"
import YourStory from "/assets/images/YourStory.png"
import Crunchbase from "/assets/images/Crunchbase.png"
import F6S from "/assets/images/F6S.png"
import XIcon from "/assets/images/XIcon.png"
import YouTube from "/assets/images/YouTube.png"
import { useNavigate } from "react-router-dom"
const FooterTop = () => {
  const navigate = useNavigate();
  const appHandler = () => {
navigate("/app")
  }
  return (
 <div className='FooterTop-main'>
  <h5 style={{fontWeight:"600"}}>Quick Links</h5>
<div className="Footer-Top-page">

      <div className="footer1">
             <div className="f-Links">
                    <h5><a style={{textDecoration:"none", color:"red"}} href="">Talspo Here</a></h5>
                  <h5><span>About Us : </span><a href="/about-us">About</a> | <a href="/how-it-works?">How It Works?</a> | <a href="/achievements">Achievement so far</a> | <a href="/faq">FAQs</a> | <a href="/our-team">Our Team</a> | <a href="/talspo-search">Talspo Search AI </a> | <a href="/talspo-api">Talspo API</a> | <a href="/talfia">Talfia(*sub brand of talspo)</a> | <a href="/talspo-affiliate">Talspo Affiliate Programe: become a part of our growth story (Lets grow together)</a></h5>   
                  <h5><span>Services: </span><a href="/services">Services</a> | <a href="/service-detail/1">Students/Learner Model Services</a> | <a href="/service-detail/2">Professional + Trainers Model Services</a> | <a href="/service-detail/3">Corporate + Organization Model Services</a> | <a href="/service-detail/4">Co-Working Spaces + Co-works&Co-live & Events Model Services</a></h5>   
                    <h5><span>Join Us : </span> <a href="/join">Join Us</a> | <a href="/opportunities">Find Opportunities(*Career)at Talspo</a> | <a href="/partners">Do Partnership</a> | <a href="/tca">Talspo Campus Ambassador(TCA)</a></h5>
                    <h5><span>Blog : </span> <a href="/blog">Read Our Blogs</a> | <a href="/"> <span>Become a Talspo Blogger : </span> User Blogger Registration (Your bloga are read in offline network connection) </a></h5>
             </div>
      </div>   
      <div className="footer2">

          <h5>ADD TALSPO TO YOUR HOME SCREEN</h5>
             <div className="f_btn">
                <button onClick={appHandler}>DOWNLOAD APP</button>
             </div>
     </div>   
     <div className="footer3">
                 <h6>Follow and get updates via company profile links</h6>
                 <h5><a href="https://in.linkedin.com/company/talspo"><img src={linkdin} alt="linkdin"  style={{ width: '24px', height: '24px' }}/></a>|<a href="https://x.com/talspogroup"><img src={XIcon} alt="xIcon"  style={{ width: '24px', height: '24px' }}/></a>|<a href="https://www.youtube.com/@TalspoGroup "><img src={YouTube} alt="Youtube"/></a>|<a href="https://www.f6s.com/talspo"><img src={F6S} alt="f6s" style={{ width: '24px', height: '24px' }}/></a>|<a href="https://www.crunchbase.com/organization/talspo-explore-spot-connect"><img src={Crunchbase} alt="crunchbase"  style={{ width: '80px', height: '50px' }}/></a>|  < a href="https://www.producthunt.com/@talspo"><img src={productHunt} alt="productHunt"/></a>|<a href="https://yourstory.com/companies/talspo"><img src={YourStory} alt="YourStory"  style={{ width: '40px', height: '24px' }} /></a>  </h5>
      </div>      

</div>
</div>
  )
}

export default FooterTop