import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer";
import { Row, Col } from "react-bootstrap";
import "./TalspoSearchAI.css"

const TalspoAffiliate = () => {
  return (
    <>
      <NavbarContainer />
      <div className="service_con">
        <div className="service_box">
          <h1>Talspo Affiliate Programe</h1>
          <Row>
            <Col md={6} sm={12}>
              <p>
                The Talspo Affiliate Program is a partnership initiative that allows individuals,
                businesses, and organizations to earn incentives by promoting Talspo’s platform and
                services. As an affiliate, you act as a brand ambassador, helping Talspo reach a wider
                audience while earning rewards for every successful referral.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <div className="service_video" style={{ position: 'relative', height: '0', paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/OQvIlOG3zyM"
                  frameBorder="0"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  allow="autoplay; fullscreen"
                  title="Talspo Search AI Video"
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
        <div className="affiliate-program">
          <div className="aff-prog">
            <h5>Key Features of the Talspo Affiliate Program</h5>
            <small>
              1. <b>Earn Commission on Referrals: </b>
              Affiliates earn a percentage-based commission for every successful sign-up, job post,
              or premium service purchase made through their unique referral link.
            </small>
            <small>
              2. <b>Wide Target Audience: </b>
              Promote Talspo to job seekers, recruiters, corporates, and skill training institutes,
              maximizing your earning potential.
            </small>
            <small>
              3. <b>Easy Onboarding: </b>
              The affiliate program is simple to join, with a quick sign-up process and instant access
              to marketing resources like banners, links, and promotional materials.
            </small>
            <small>
              4. <b>Real-Time Tracking and Analytics: </b>
              Affiliates get access to a personalized dashboard to monitor clicks, conversions, and
              earnings in real time.
            </small>
            <small>
              5. <b>Recurring Revenue Options: </b>
              For long-term partnerships, affiliates can earn recurring commissions for premium
              subscriptions renewed by referred users.
            </small>
            <small>
              6. <b>Exclusive Incentives for Top Affiliates: </b>
              High-performing affiliates may receive bonuses, additional rewards, or exclusive
              partnerships with Talspo.
            </small>

            <h5 className='mt-5'>Benefits of Joining the Talspo Affiliate Program</h5>
            <small>
              1. <b>Flexible Work: </b>
              Promote Talspo at your convenience—through social media, blogs, emails, or
              personal networks.
            </small>
            <small>
              2. <b>No Upfront Costs: </b>
              The affiliate program is completely free to join, with no hidden fees or requirements.
            </small>
            <small>
              3. <b>Global Reach: </b>
              Talspo’s services are designed to cater to a wide demographic, allowing affiliates to
              promote them globally.
            </small>
            <small>
              4. <b>Custom Support: </b>
              Affiliates receive dedicated support to help optimize campaigns and maximize
              conversions.
            </small>
            <small>
              5. <b>Enhance Your Brand: </b>
              Partnering with Talspo adds credibility to your personal or business brand by
              associating with a leading job search and recruitment platform.
            </small> 
            <h5 className='mt-5'>How It Works</h5>
            <small>
              1. <b>Sign Up: </b>
              Apply for the program through Talspo’s website. Once approved, you’ll receive a
              unique affiliate link and access to promotional resources.
            </small>
            <small>
              2. <b>Promote Talspo: </b>
              Share your referral link via social media, blogs, websites, or email campaigns to drive
              traffic to Talspo.
            </small>
            <small>
              3. <b>Track Performance: </b>
              Use the affiliate dashboard to track user sign-ups, purchases, and your earnings in real
              time.
            </small>
            <small>
              4. <b>Earn Rewards: </b>
              Earn a commission for each referral that completes a specific action, such as signing
              up, posting a job, or subscribing to premium services.
            </small>

            <h5 className='mt-5'>Who Can Join?</h5>
            <li><b>Bloggers & Content Creators:</b> Share Talspo through articles, videos, or social media posts.</li>
            <li><b>Career Counselors & Educators:</b> Recommend Talspo to job seekers or students.</li>
            <li><b>Recruitment Agencies:</b> Partner with Talspo to promote its ATS and job posting tools.</li>
            <li><b>Social Media Influencers:</b> Use your audience to introduce Talspo to a wider network.</li>
            <li><b>HR Consultants:</b> Offer Talspo’s services as part of your solutions to clients.</li>

            <h5 className='mt-5'>Why Join the Talspo Affiliate Program?</h5>
            <small><b>1. Promote an Innovative Platform: </b>
              With unique features like AI-powered job search and geo-location tools, Talspo
              stands out as a leader in recruitment and job search.</small>

            <small><b>2. Expand Your Earning Potential: </b>
              The program offers generous commissions, bonuses, and recurring revenue
              opportunities.</small>

            <small><b>3. Make an Impact: </b>
              Help connect job seekers, recruiters, and corporates while earning for your efforts.</small>

            <h5 className='mt-5'>How to Apply</h5>
            <li>Visit Talspo’s website and navigate to the Affiliate Program section.</li>
            <li>Complete the application form and submit it for review.</li>
            <li>Once approved, you’ll receive access to your affiliate dashboard and materials to start promoting Talspo.</li>


          </div>
        </div>

           <h6 style={{fontSize:"2vmax", color:"red"}}>Coming Soon...</h6>
      </div>
      <Footer />
    </>
  );
};

export default TalspoAffiliate;
 