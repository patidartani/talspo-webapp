import React from 'react';
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import Footer from "../../pages/Footer/Footer";
import { Row, Col } from "react-bootstrap";
import "./TalspoSearchAI.css"

const TalspoSearchAI = () => {
  return (
    <>
      <NavbarContainer />
      <div className="service_con">
        <div className="service_box">
          <Row>
            <Col md={6} sm={12}>
              <div className="service_head">
          <h1>Talspo Search AI</h1>
                <h4 className='mt-4 text-danger'>Coming Soon.....</h4>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="service_video" style={{ position: 'relative', height: '0', paddingBottom: '60%' }}>
                <iframe
                  src="https://www.youtube.com/embed/o7QuAauyzP4?autoplay=1&mute=1&loop=1&playlist=o7QuAauyzP4"
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
        <div className="talspo-search-ai">
          <h5>Our Focus</h5>
          <p>We provides Software as a Services (SaaS) solutions in the field of Human Resources
            and job search. It focuses on three core areas:</p>
          <span><b>1. Job Search AI</b>: Leveraging artificial intelligence to help job seekers find the most
            relevant job opportunities based on their skills, experience, and preferences</span>
          <span><b>2. Human Resources ATS (Applicant Tracking System):</b> Designed for recruiters and
            corporate HR teams to streamline the hiring process by tracking, managing, and
            organizing job applications.</span>
          <span><b>3. Job Posts Geo Location: </b>A geo-location feature that allows job seekers and
            recruiters to find or post job opportunities based on specific geographic regions,
            making it easier to target local talent or opportunities.
            The platform aims to serve job seekers, recruiters, corporates, and skill training
            institutes by offering AI-powered tools and user-friendly interfaces to improve the job
            search and recruitment experience.</span>

          <small>Know more about Talspo Search AI Geo-Location (NEARBY) Software
            Technology</small>

          <span style={{ textDecoration: "underline", marginTop: "2vmax", fontSize: "1.2vmax" }}>Unlock Local Talent and Opportunities through Geo-Location Powered Upskilling</span>
          <span style={{ marginTop: "1vmax" }}>In today’s competitive workforce, it’s essential to connect the right skills with the right
            opportunities. Our AI-powered platform uses geo-location technology to help
            organizations identify local talent pools, enhance skills based on regional demands,
            and provide employees with learning paths that are tailored to their geographic
            location and industry trends.</span>

          <span style={{ textDecoration: "underline", marginTop: "2vmax", fontSize: "1.2vmax" }}>Geo-Location Driven Upskilling & Reskilling</span>
          <span style={{ marginTop: "1vmax" }}>With real-time access to location-based insights, we help organizations understand
            skill gaps in specific regions and offer tailored upskilling or reskilling programs. By
            matching regional job market trends to employee development, we ensure that your
            team members acquire the exact skills needed for future job opportunities.</span>

          <li>Regional Talent Mapping: Understand skill demands and availability in different
            locations.</li>
          <li>Localized Learning Pathways: Personalize employee development programs based
            on market trends in their area.</li>
          <li>Talent Mobility: Seamlessly connect employees to new job roles, both within and
            outside their geographic region.</li>

          <span style={{ textDecoration: "underline", marginTop: "2vmax", fontSize: "1.2vmax" }}>Maximize Talent Utilization with Location-Based Insights</span>
          <span style={{ marginTop: "1vmax" }}>Our platform also enables organizations to make informed decisions on utilizing their
            existing workforce. By tracking talent across different geographic locations, HR teams can better match skills to job roles, ensuring that resources are being used efficiently.
            Whether it’s for remote work opportunities or geographic relocation, our AI ensures
            your talent is always in the right place at the right time</span>

          <li>Efficient Resource Allocation: Use geo-data to ensure your employees are placed in
            roles where their skills are needed most.</li>
          <li>Optimize Remote Work Opportunities: Leverage location-based insights to offer
            work-from-home or hybrid opportunities tailored to employees’ skill sets.</li>
          <li>Regional Talent Pool Development: Build and nurture talent pipelines in specific
            regions to foster localized skill development.</li>

          <span style={{ marginTop: "1vmax" }}>Features:</span>

          <li>Geo-Location-Based Skill Demand Analysis: Leverage local industry data to create
            targeted skill development programs.</li>
          <li>AI-Powered Reskilling Recommendations: Help employees transition to new roles
            based on their existing skills and local market opportunities.</li>
          <li>Talent Optimization: Identify and utilize employee skills effectively, ensuring high
            productivity and job satisfaction.</li>



        </div>
      </div>
      <Footer />
    </>
  );
};

export default TalspoSearchAI;
