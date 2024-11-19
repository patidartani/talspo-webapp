import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/AntiSpamPolicy.css";
import {fetchAntySpamPolicy} from "../../../apiService"
import  { useEffect, useState } from "react";

const AntiSpamPolicy = () => {
  const [antiSpamPolicy, setAntiSpamPolicy] = useState(null);

  useEffect(() => {
    const fetchAntiSpam = async () => {
      const data = await fetchAntySpamPolicy();
      if (data) {
        setAntiSpamPolicy(data);
      }
    };

    fetchAntiSpam();
  }, []);
  return (
    <>
      <Navbar />
      
      {
      antiSpamPolicy ? (
  <div>
    <div className="policy_heading">
      <h2>{antiSpamPolicy.title}</h2>
    </div>
    <Container>
      <div  className="policy_con">
   
          {/* <p>Last updated: {formattedDate}</p> */}
    
      <div
                dangerouslySetInnerHTML={{
                  __html:antiSpamPolicy.description,
                }}
              ></div>
      </div>
    
    </Container>
  </div>
) : (
  <p>Loading...</p>
)}

      {/* <div className="anti-spam-policy">
        <h1>Anti-Spam Policy for Talspo Private Limited</h1>
      </div> */}
      {/* <Container>
        <div className="anti-spam-con">
          <section>
            <p>
              The document describes the principles jointly referred to as the
              anti-spam policy applied by Talspo Private Limited with
              headquarters at Ocean Park Township, Indore Bypass Road, near
              Delhi Public School Indore, Nipania, Indore, Madhya Pradesh
              452016, (hereinafter: “Talspo“) will not send unsolicited
              commercial information without the recipient(“you or user”)
              consent. Talspo has a zero tolerance policy on sending any type of
              spam messages and believe in promoting responsible online
              marketing based on recipient consent.
            </p>
            <p>
              By subscribing to use our online marketing and related services
              (the “Service”), you (“User” or “you”) agree not to use the
              Service to send unsolicited email in any form (“Spam“), that you
              will comply with this Anti-Spam Policy (the “Policy”), and that
              your use of the Service is subject to the terms of this Policy,
              the Talspo Privacy Policy and the Terms of Service (Terms and
              Conditions).
            </p>
          </section>

          <section>
            <h4>I. Legal Requirements</h4>
            <p>
              In addition to complying with the terms of this Policy, Users must
              comply with all legal requirements for commercial email service
              providers in the country of residence of the User and its
              Contacts, and the following to the extent applicable (each as
              amended or superseded and in effect): the Directive 2000/31/EC of
              the European Parliament and Council of 8 June 2000 on certain
              legal aspects of information society services, in particular,
              electronic commerce, in the Internal Market (“Directive on
              Electronic Commerce”), the Directive 2002/58/EC of the European
              Parliament and Council of 12 July 2002, concerning the processing
              of personal data and the protection of privacy in the electronic
              communications sector (“Directive on Privacy and Electronic
              Communications”), Regulation (EU) 2016/679 of the European
              Parliament and of the Council of 27 April 2016 on the protection
              of natural persons with regard to the processing of personal data
              and on the free movement of such data, and repealing Directive
              95/46/EC and CAN SPAM Act of 2003, along with other applicable
              laws on privacy and electronic communication. You are solely
              responsible for familiarizing yourself with applicable legal
              requirements and ensuring that you fully comply.
            </p>
          </section>

          <section>
            <h4>II. What Is Spam?</h4>
            <p>
              Spam, also known as junk mail, is unsolicited commercial email
              messages, especially (but not only) bulk email messages.
              “Unsolicited” means that the recipient has not provided verifiable
              permission for the message to be sent. “Bulk” means that the
              message is sent as part of a larger collection of messages, all
              having substantively identical content. The term “spamming” refers
              to transmitting, distributing or delivering any unsolicited
              commercial e-mail correspondence, especially in mass quantities,
              through electronic means of communication.
            </p>
          </section>

          <section>
            <h4>III. Verification</h4>
            <p>
              Subscribers can be added to the Service account (“Talspo Account”)
              in multiple ways. Email addresses may be imported, added via API
              calls, iPhone or added to the mailing list manually. In such
              cases, the User must have their subscriber’s permission to process
              their data. It is prohibited to send messages to any person that
              has not expressed their consent to receive such information from
              the User. We would like to note that the subscriber’s consent may
              not be presumed or infer from the statements of other content. In
              addition, subscribers may withdraw their consent at any time.
            </p>
            <p>
              Talspo will send a new subscriber a message confirming their
              interest in receiving information from the User. Users may request
              to disable the confirmation for email and web subscriptions.
            </p>
            <p>
              We recommend “confirmed opt-in” to all Users. This efficiently
              prevents spam complaints and makes the list much more responsive,
              as subscribers are receiving information they expect. At the
              User’s request, we may send the Contact a message to confirm his
              interest in receiving information from the User. The confirmation
              email may be customized, so that recipients can easily recognize
              to which list they subscribe.
            </p>
            <p>
              Talspo strictly prohibits users from renting, leasing and/or
              purchasing email addresses from a third party, as well as from
              gathering them through surreptitious methods, such as scraping or
              harvesting. The use of any kinds of automated solutions, software
              or scripts is strictly prohibited. The User may store, manage the
              data and send electronic information only to those recipients who
              have expressly agreed to receive such information from the User.
            </p>
            <p>
              We reserve the right to verify the list of subscribers imported by
              the User in terms of their quality, i.e. among others possessing
              required approvals for the sending of electronic messages,
              existence of spam-traps or misspellings. The negative result of
              such a verification entitles us to reject the imported list. If a
              greater number of email addresses is imported, we reserve the
              right to require the User to carry out a test dispatch to a part
              of email addresses. The User’s capability to import the entire
              list or send messages to the remaining email addresses from the
              list will depend on the results of the test dispatch.
            </p>
          </section>

          <section>
            <h4>IV. Content of Your Messages</h4>
            <p>
              The User must provide true and accurate headers and content in its
              messages. Among other things, the “From”, “To”, “Reply-To” and
              routing information (including originating domain name and email
              address) must be accurate and clearly identify the sender. The
              subject line must accurately reflect the content of the message
              and not be deceptive or misleading. The message must also disclose
              clearly and conspicuously when it is primarily an advertisement,
              and must not contain any content that is vulgar, offensive,
              illegal or otherwise prohibited by applicable law or Talspo
              policy, in particular, but not limited to Talspo Terms of Service
              (Terms and Conditions).
            </p>
          </section>

          <section>
            <h4>V. Postal Address</h4>
            <p>
              The User must provide Talspo with the User’s valid physical postal
              address, which will be included in each message footer. The User
              is required to maintain and promptly update this data with Talspo
              to ensure it is current, complete and accurate.
            </p>
          </section>

          <section>
            <h4>VI. Withdrawal of Consent – “unsubscribe” link</h4>
            <p>
              Each message sent from the Account shall contain an unsubscribe
              link. The link automatically updates the mailing list to ensure
              that a Subscriber that has opted out will not be sent any further
              mailings from that list. Users are expressly prohibited from
              removing, altering or hiding the unsubscribe link, or from
              charging any fee, requiring any personally identifying information
              other than an email address, or requiring the Contact to take any
              step other than sending a reply email or visiting a single page,
              as a condition for honoring an opt-out request.
            </p>
            <p>
              Once a Contact has opted out, the User must not send them further
              messages or sell or transfer their email addresses, even in the
              form of a mailing list. Talspo automatically handles all
              unsubscribe requests on User’s behalf, and lists Contacts that
              have opted out in the User’s Account.
            </p>
          </section>

          <section>
            <h4>VII. Agreement Violations</h4>
            <p>
              The User must not use the Service to send any Spam. Neither emails
              with the talspo.com domain, nor the Talspo URL may be included in
              a bulk message or in a bulk-advertised web page.
            </p>
            <p>
              We reserve the right to issue a warning or take other action
              should the User be found spamming or using the Service for any
              abusive, illegal, prohibited in Talspo Terms of Service (Terms and
              Conditions) or otherwise unauthorized purposes. In each such case,
              Talspo reserves the right to take such action as it deems
              appropriate under the circumstances, including without limitation,
              warning, terminating the User’s Account without notice or a
              refund, and/or reporting the User and the incident to their ISP
              and proper authorities. The User shall be liable for any loss
              incurred or damage suffered by Talspo or any y third party should
              such loss result from noncompliance with this AntiSpam Policy.
            </p>
            <p>
              If you believe you have received spam, please contact us at
              <a href="mailto:legal@talspo.com">legal@talspo.com</a>.
            </p>
          </section>
        </div>
      </Container> */}
      <Footer />
    </>
  );
};

export default AntiSpamPolicy;
