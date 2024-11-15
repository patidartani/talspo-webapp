import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/GdbrPolicy.css";
const GdbrPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="gdbr-policy">
        <h1>GDPR Privacy Policy for Talspo Private Limited</h1>
      </div>
      <Container>
        <div className="gdbr_con">
          <section>
            <h2>Introduction</h2>
            <p>
              Talspo, accessible at
              <a
                href="https://talspo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                talspo.com
              </a>
              , is committed to protecting the privacy of our users. This
              Privacy Policy outlines the types of data collected and how it’s
              used. If you have questions, please contact us at
              <a href="mailto:legal@talspo.com">legal@talspo.com</a>.
            </p>
          </section>

          <section>
            <h2>General Data Protection Regulation (GDPR)</h2>
            <p>
              As the Data Controller of your information, Talspo Private Limited
              collects personal information under the following legal bases:
            </p>
            <ul>
              <li>Performance of a contract</li>
              <li>User consent</li>
              <li>Legitimate interests</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for
              purposes outlined in this policy, including legal obligations,
              dispute resolution, and policy enforcement.
            </p>
          </section>

          <section>
            <h2>Your Data Protection Rights (EEA Residents)</h2>
            <p>
              If you reside in the European Economic Area (EEA), you have rights
              to:
            </p>
            <ul>
              <li>Access, update, or delete your information</li>
              <li>Correct inaccurate data</li>
              <li>Object to processing</li>
              <li>Restrict data processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p>For requests related to these rights, please contact us.</p>
          </section>

          <section>
            <h2>Log Files</h2>
            <p>
              Talspo uses log files to record visitor data, including IP
              addresses, browser type, ISP, date and time, and pages visited.
              This data helps analyze trends, manage the site, track user
              movement, and collect demographic data without linking it to
              personally identifiable information.
            </p>
          </section>

          <section>
            <h2>Cookies and Web Beacons</h2>
            <p>
              Talspo uses cookies to store visitor preferences and enhance user
              experience by customizing content. You may choose to disable
              cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2>Advertising Partners and DART Cookies</h2>
            <p>
              Talspo partners with Google for advertising, which may involve
              DART cookies to serve ads based on your visits to talspo.com and
              other websites. You can opt out by visiting Google’s{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ad and Content Network Privacy Policy
              </a>
              .
            </p>
            <p>
              For privacy policies of Talspo’s advertising partners, please
              refer to the following link:
            </p>
            <ul>
              <li>
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </li>
            </ul>
            <p>
              Third-party ad servers may use cookies, JavaScript, and Web
              Beacons to measure ad effectiveness or personalize ads you see.
            </p>
          </section>

          <p>
            This Privacy Policy may be updated periodically; continued use of
            our services constitutes acceptance of these terms.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default GdbrPolicy;
