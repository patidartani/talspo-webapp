import "./DoPartnership.css";

const partnershipPoints = [
  {
    heading: "1. Access to a Targeted Talent Pool",
    details: [
      "Job Seekers: Talspo attracts a diverse range of job seekers, from entry-level candidates to experienced professionals, thanks to its AI-powered job search and geo-location-based job posts.",
      "Skill Development: Skill training institutes can reach individuals who are actively looking to enhance their skills and pursue new opportunities.",
    ],
  },
  {
    heading: "2. Advanced AI-Powered Solutions",
    details: [
      "Talspo utilizes Artificial Intelligence to match job seekers with the best-suited opportunities based on their profiles. As a partner, you can leverage these AI tools to find the right candidates more quickly and accurately, improving the recruitment process for your clients.",
      "For corporates and recruiters, the AI-driven ATS (Applicant Tracking System) helps in automating resume screening, candidate ranking, and predicting hiring needs.",
    ],
  },
  {
    heading: "3. Customized HR Solutions",
    details: [
      "Talspo offers customizable HR solutions, including recruitment services, applicant tracking, onboarding, and performance management tools. These services can be tailored to meet the specific needs of your organization or clients.",
    ],
  },
  {
    heading: "4. Increase Brand Visibility",
    details: [
      "Partnering with Talspo enhances your brand’s exposure among job seekers, recruiters, and corporate HR teams. Your brand will be featured in Talspo’s network, events, and platform, providing visibility to a wide and relevant audience.",
    ],
  },
  {
    heading: "5. Boost Recruitment Efficiency",
    details: [
      "Talspo’s geo-location-based job posting feature allows your organization to target specific regions or demographics for hiring, making your recruitment efforts more efficient.",
      "By automating and streamlining the hiring process with Talspo’s ATS, recruiters can reduce time-to-hire and improve candidate engagement.",
    ],
  },
  {
    heading: "6. Exclusive Access to Data & Insights",
    details: [
      "As a partner, you gain access to valuable market insights, including candidate behavior, job market trends, and workforce data. These analytics can inform your recruitment strategy and help you stay competitive in a dynamic hiring environment.",
    ],
  },
  {
    heading: "7. Networking Opportunities",
    details: [
      "Partnering with Talspo opens doors to connect with HR professionals, recruiters, and skill training institutes across various industries. You can collaborate on shared projects, events, and webinars that promote both your brand and Talspo.",
    ],
  },
  {
    heading: "8. Innovative Tools for Skill Development",
    details: [
      "Skill training partners can use Talspo’s platform to promote courses, certifications, and upskilling programs to job seekers looking for career growth. Talspo’s tools allow you to directly target candidates who need training in specific skill areas.",
    ],
  },
  {
    heading: "9. Improve Job Market Outcomes",
    details: [
      "By partnering with Talspo, educational institutions and skill training providers can improve employment outcomes for students and trainees. Offering direct access to job opportunities, internships, and industry connections helps your students succeed in the competitive job market.",
    ],
  },
  {
    heading: "10. Flexible Partnership Models",
    details: [
      "Talspo offers varied partnership opportunities—whether you’re a recruiter, HR service provider, skill training institute, or corporate entity, Talspo can create a partnership model that meets your goals, including revenue-sharing options and co-branded events or campaigns.",
    ],
  },
  {
    heading: "11. Continuous Innovation",
    details: [
      "Talspo is constantly evolving to offer innovative features such as mobile-friendly design, AI chatbots for recruitment, and personalized career recommendations. As a partner, you benefit from cutting-edge technology and an ever-expanding suite of tools that improve the talent acquisition and job search experience.",
    ],
  },
  {
    heading: "12. Corporate Social Responsibility (CSR) Initiatives",
    details: [
      "Companies looking to expand their CSR footprint can partner with Talspo to support employment initiatives, skill development programs, and youth training, contributing to economic growth and community empowerment.",
    ],
  },
  {
    heading: "13. Strengthened Campus Connections",
    details: [
      "Educational institutions can work with Talspo to enhance career services by offering students access to real-time job opportunities, recruitment drives, and internship placements through the platform’s Campus Ambassador Program.",
    ],
  },
];

const DoPartnershipContent = () => {
  return (
    <div className="DoPartnershipContent-main">
      <div className="partner-textData">
        <p>
          Partnering with Talspo offers numerous benefits to organizations, educational institutions, and service providers in the recruitment, job search, and skill development industries. Here are key reasons to consider a partnership:
        </p>
        {partnershipPoints.map((point, index) => (
          <div className="text-partner mt-3" key={index}>
            <h5 style={{ fontWeight: "600" }}>{point.heading}</h5>
            {point.details.map((detail, idx) => (
              <span key={idx} className="mt-2">
                • {detail}
                <br />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoPartnershipContent;
