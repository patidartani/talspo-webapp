import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../Footer/Footer";

const DmcaPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="cookie_heading">
        <h1> This Digital Millennium Copyright Act policy </h1>
      </div>
      <Container>
        <div className="cookie_con">
          <p>
            This Digital Millennium Copyright Act policy (“Policy”) applies to
            the <a href="https://talspo.com">talspo.com</a> website (“Website”),
            “Talspo” mobile application (“Mobile Application”) and any of their
            related products and services (collectively, “Services”). This
            outlines how Talspo Private Limited (doing business as “TS Pvt.
            Ltd.”, “we”, “us” or “our”) addresses copyright infringement
            notifications and how you (“you” or “your”) may submit a copyright
            infringement complaint.
          </p>
          <p>
            Protection of intellectual property is of utmost importance to us,
            and we ask our users and their authorized agents to do the same. It
            is our policy to expeditiously respond to clear notifications of
            alleged copyright infringement that comply with the United States
            Digital Millennium Copyright Act (“DMCA”) of 1998, the text of which
            can be found at the U.S. Copyright Office
            <a href="https://www.copyright.gov">website</a>. This policy has
            been created with the help of the
            <a href="https://www.websitepolicies.com/dmca-policy-generator">
              DMCA policy generator
            </a>
            .
          </p>
          <div className="toc">
            <h4>Table of Contents</h4>
            <ol>
              <li>
                <a href="#what-to-consider-before-submitting-a-copyright-complaint">
                  What to consider before submitting a copyright complaint
                </a>
              </li>
              <li>
                <a href="#notifications-of-infringement">
                  Notifications of infringement
                </a>
              </li>
              <li>
                <a href="#counter-notifications">Counter-notifications</a>
              </li>
              <li>
                <a href="#changes-and-amendments">Changes and amendments</a>
              </li>
              <li>
                <a href="#reporting-copyright-infringement">
                  Reporting copyright infringement
                </a>
              </li>
            </ol>
          </div>
          <h4 id="what-to-consider-before-submitting-a-copyright-complaint">
            What to consider before submitting a copyright complaint
          </h4>
          <p>
            Before submitting a copyright complaint to us, consider whether the
            use could be considered fair use. Fair use states that brief
            excerpts of copyrighted material may, under certain circumstances,
            be quoted verbatim for purposes such as criticism, news reporting,
            teaching, and research, without the need for permission from or
            payment to the copyright holder. If you have considered fair use and
            still wish to continue with a copyright complaint, you may want to
            first reach out to the user in question to see if you can resolve
            the matter directly with the user.
          </p>
          <p>
            Please note that if you are unsure whether the material you are
            reporting is infringing, you may wish to contact an attorney before
            filing a notification with us.
          </p>
          <p>
            We may, at our discretion or as required by law, share a copy of
            your notification or counter-notification with the account holder
            engaged in the allegedly infringing activity or for publication. If
            you are concerned about your information being forwarded, you may
            wish to
            <a
              href="https://www.copyrighted.com/professional-takedowns"
              rel="noopener noreferrer"
            >
              hire an agent
            </a>
            to report infringing material for you.
          </p>
          <h4 id="notifications-of-infringement">
            Notifications of Infringement
          </h4>
          <p>
            Filing a DMCA complaint is the start of a pre-defined legal process.
            Your complaint will be reviewed for accuracy, validity, and
            completeness. Our response may include the removal or restriction of
            access to allegedly infringing material, as well as a permanent
            termination of repeat infringers’ accounts. A backup of the
            terminated account’s data may be requested; however, we may not be
            able to provide you with one, so you are strongly encouraged to take
            your own backups.
          </p>
          <p>
            If we remove or restrict access to materials or terminate an account
            in response to a notification of alleged infringement, we will make
            a good faith effort to contact the affected user with information
            concerning the removal or restriction of access, which may include a
            full copy of your notification (including your name, address, phone,
            and email address), along with instructions for filing a
            counter-notification.
          </p>
          <h4 id="counter-notifications">Counter-Notifications</h4>
          <p>
            A user who receives a copyright infringement notification may make a
            counter-notification pursuant to sections 512(g)(2) and (3) of the
            US Copyright Act. If you receive a copyright infringement
            notification, it means that the material described in the
            notification has been removed from our services or access to the
            material has been restricted. Please take the time to read through
            the notification, which includes information on the notification we
            received.
          </p>
          <p>
            If you are unsure whether certain material infringes the copyrights
            of others or that the material or activity was removed or restricted
            by mistake, you may wish to contact an attorney before filing a
            counter-notification.
          </p>
          <p>
            TS Pvt. Ltd. reserves the right to take no action upon receipt of a
            counter-notification. If we receive a counter-notification that
            complies with the terms of 17 U.S.C. § 512(g), we may forward it to
            the person who filed the original notification.
          </p>
          <h4 id="changes-and-amendments">Changes and Amendments</h4>
          <p>
            We reserve the right to modify this policy or its terms related to
            the services at any time at our discretion. When we do, we will
            revise the updated date at the bottom of this page, post a
            notification within the services, and send you an email to notify
            you. An updated version of this policy will be effective immediately
            upon the posting of the revised policy unless otherwise specified.
          </p>
          <h4 id="reporting-copyright-infringement">
            Reporting Copyright Infringement
          </h4>
          <p>
            If you would like to notify us of infringing material or activity,
            please contact us using the details below:
          </p>
          <p>
            <a href="https://talspo.com/contact">https://talspo.com/contact</a>
            <br />
            <a href="mailto:legal@talspo.com">legal@talspo.com</a>
            <br />
            Ocean Park Township, Indore Bypass Road, near Delhi Public School
            Indore, Nipania, Indore, Madhya Pradesh 452016
          </p>
          <p>This document was last updated on November 9, 2024.</p>
          <p className="madewith">
            <a href="https://www.websitepolicies.com/dmca-policy-generator?via=madewithbadge">
              <img
                width="200"
                height="25"
                alt="Made with WebsitePolicies DMCA policy generator"
                src="https://cdnapp.websitepolicies.com/widgets/policies/badge.png"
                srcSet="https://cdnapp.websitepolicies.com/widgets/policies/badge_2x.png 2x"
              />
            </a>
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DmcaPolicy;
