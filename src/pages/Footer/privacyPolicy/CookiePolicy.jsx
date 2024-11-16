import React from "react";
import Navbar from "../../../pages/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Container } from "react-bootstrap";
import "../privacyPolicy/CookiePolicy.css";
const CookiePolicy = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <>
      <Navbar />
      <div className="cookie_heading">
        <h1>Cookie Policy</h1>
      </div>
      <Container>
        <div className="cookie_con">
          <p>Last updated: {formattedDate}</p>
          <h4>What are Cookies?</h4>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality
          </p>
          <h4>How We Use Cookies</h4>
          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
          <h4>Disabling Cookies</h4>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies.
          </p>
          <h4>The Cookies We Set</h4>
          <p>
            If you create an account with us then we will use cookies for the
            management of the signup process and general administration. These
            cookies will usually be deleted when you log out however in some
            cases they may remain afterwards to remember your site preferences
            when logged out.
          </p>
          <p>
            We use cookies when you are logged in so that we can remember this
            fact. This prevents you from having to log in every single time you
            visit a new page. These cookies are typically removed or cleared
            when you log out to ensure that you can only access restricted
            features and areas when logged in.
          </p>
          <p>
            This site offers newsletter or email subscription services and
            cookies may be used to remember if you are already registered and
            whether to show certain notifications which might only be valid to
            subscribed/unsubscribed use
          </p>
          <p>
            From time to time we offer user surveys and questionnaires to
            provide you with interesting insights, helpful tools, or to
            understand our user base more accurately. These surveys may use
            cookies to remember who has already taken part in a survey or to
            provide you with accurate results after you change pages.
          </p>
          <p>
            When you submit data to through a form such as those found on
            contact pages or comment forms cookies may be set to remember your
            user details for future correspondence
          </p>
          <p>
            In order to provide you with a great experience on this site we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences we need
            to set cookies so that this information can be called whenever you
            interact with a page is affected by your preferences
          </p>
          <h4>Third Party Cookies</h4>
          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>
          <p>
            This site uses Google Analytics which is one of the most widespread
            and trusted analytics solution on the web for helping us to
            understand how you use the site and ways that we can improve your
            experience. These cookies may track things such as how long you
            spend on the site and the pages that you visit so we can continue to
            produce engaging content.
          </p>
          <p>
            For more information on Google Analytics cookies, see the official
            Google Analytics page
          </p>
          <p>
            Third party analytics are used to track and measure usage of this
            site so that we can continue to produce engaging content. These
            cookies may track things such as how long you spend on the site or
            pages you visit which helps us to understand how we can improve the
            site for you.
          </p>
          <p>
            From time to time we test new features and make subtle changes to
            the way that the site is delivered. When we are still testing new
            features these cookies may be used to ensure that you receive a
            consistent experience whilst on the site whilst ensuring we
            understand which optimisations our users appreciate the most.
          </p>
          <p>
            As we sell products it's important for us to understand statistics
            about how many of the visitors to our site actually make a purchase
            and as such this is the kind of data that these cookies will track.
            This is important to you as it means that we can accurately make
            business predictions that allow us to monitor our advertising and
            product costs to ensure the best possible price.
          </p>
          <p>
            The Google AdSense service we use to serve advertising uses a
            DoubleClick cookie to serve more relevant ads across the web and
            limit the number of times that a given ad is shown to you.
          </p>
          <p>
            For more information on Google AdSense see the official Google
            AdSense privacy FAQ.
          </p>
          <p>
            We use adverts to offset the costs of running this site and provide
            funding for further development. The behavioural advertising cookies
            used by this site are designed to ensure that we provide you with
            the most relevant adverts where possible by anonymously tracking
            your interests and presenting similar things that may be of
            interest.
          </p>
          <p>
            In some cases we may provide you with custom content based on what
            you tell us about yourself either directly or indirectly by linking
            a social media account. These types of cookies simply allow us to
            provide you with content that we feel may be of interest to you.
          </p>
          <p>
            Several partners advertise on our behalf and affiliate tracking
            cookies simply allow us to see if our customers have come to the
            site through one of our partner sites so that we can credit them
            appropriately and where applicable allow our affiliate partners to
            provide any bonus that they may provide you for making a purchase.
          </p>
          <p>
            We also use social media buttons and/or plugins on this site that
            allow you to connect with your social network in various ways. For
            these to work the following social media sites including; facebook,
            linkedin, will set cookies through our site which may be used to
            enhance your profile on their site or contribute to the data they
            hold for various purposes outlined in their respective privacy
            policies.
          </p>
          <h4>More information</h4>
          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren't sure whether you
            need or not it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </p>
          <p>
            However if you are still looking for more information then you can
            contact us through one of our preferred contact methods.
          </p>
          <p>
            This Cookies Policy explains what Cookies are and how We use them.
            You should read this policy so You can understand what type of
            cookies We use, or the information We collect using Cookies and how
            that information is used. This Cookies Policy has been created with
            the help of the Cookies Policy Generator.
          </p>
          <p>
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that we store about You
            may be linked to the information stored in and obtained from
            Cookies. For further information on how We use, store and keep your
            personal data secure, see our Privacy Policy.
          </p>
          <h3>Interpretation and Definitions</h3>
          <h4>Interpretation</h4>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h4>Definitions</h4>
          <p>For the purposes of this Cookies Policy:</p>
          <ul>
            <li>
              <strong>Company</strong> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Cookies Policy) refers to Talspo Private Limited, Ocean
              Park Township, Indore Bypass Road, near Delhi Public School
              Indore, Nipania, Indore, Madhya Pradesh 452016.
            </li>
            <li>
              <strong>Cookies</strong> means small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing details of your browsing history on that website among
              its many uses.
            </li>
            <li>
              <strong>Website</strong> refers to Talspo, accessible from
              <a
                href="https://talspo.com"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://talspo.com
              </a>
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Website, or a company, or any legal entity on behalf of which such
              individual is accessing or using the Website, as applicable.
            </li>
          </ul>
          <h3>The use of the Cookies</h3>
          <h4>Type of Cookies We Use</h4>
          <p>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
            Cookies. Persistent Cookies remain on your personal computer or
            mobile device when You go offline, while Session Cookies are deleted
            as soon as You close your web browser.
          </p>
          <p>
            We use both session and persistent Cookies for the purposes set out
            below:
          </p>
          <ul>
            <li>
              <p>
                <strong>Necessary / Essential Cookies</strong>
              </p>
              <p>Type: Session Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </p>
            </li>
            <li>
              <p>
                <strong>Functionality Cookies</strong>
              </p>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
            </li>
          </ul>
          <h4>Your Choices Regarding Cookies</h4>
          <p>
            If You prefer to avoid the use of Cookies on the Website, first You
            must disable the use of Cookies in your browser and then delete the
            Cookies saved in your browser associated with this website. You may
            use this option for preventing the use of Cookies at any time.
          </p>
          <p>
            If You do not accept Our Cookies, You may experience some
            inconvenience in your use of the Website and some features may not
            function properly.
          </p>
          <p>
            If You'd like to delete Cookies or instruct your web browser to
            delete or refuse Cookies, please visit the help pages of your web
            browser.
          </p>
          <ul>
            <li>
              <p>
                For the Chrome web browser, please visit this page from Google:
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </p>
            </li>
            <li>
              <p>
                For the Internet Explorer web browser, please visit this page
                from Microsoft:
                <a
                  href="http://support.microsoft.com/kb/278835"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  http://support.microsoft.com/kb/278835
                </a>
              </p>
            </li>
            <li>
              <p>
                For the Firefox web browser, please visit this page from
                Mozilla:
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </p>
            </li>
            <li>
              <p>
                For the Safari web browser, please visit this page from Apple:
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </p>
            </li>
          </ul>
          <p>
            For any other web browser, please visit your web browser's official
            web pages.
          </p>
          <h4>More Information about Cookies</h4>
          <p>
            You can learn more about cookies here:
            <a href="https://www.termsfeed.com/blog/cookies/" target="_blank">
              All About Cookies by TermsFeed
            </a>
            .
          </p>
          <h4>Contact Us</h4>
          <p>
            If you have any questions about this Cookies Policy, You can contact
            us:
          </p>
          <ul>
            <li>
              <p>
                By email: <a href="info@talspo.com"> info@talspo.com</a>
              </p>
            </li>
            <li>
              <p>
                By visiting this page on our website:
                <a
                  href="https://talspo.com/contact"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://talspo.com/contact
                </a>
              </p>
            </li>
            <li>
              <p>By phone number: +91 93160 40952</p>
            </li>
            <li>
              <p>
                By mail: Ocean Park Township, Indore Bypass Road, near Delhi
                Public School Indore, Nipania, Indore, Madhya Pradesh 452016
              </p>
            </li>
          </ul>
          <script
            data-cfasync="false"
            src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script>
        </div>
      </Container>
      {/* <Container>
       
        <div className="cookie_con">
        
          <p>Last updated: {formattedDate}</p>
          <p>
            This Cookies Policy explains what Cookies are and how We use them.
            You should read this policy so You can understand what type of
            cookies We use, or the information We collect using Cookies and how
            that information is used. This Cookies Policy has been created with
            the help of the
            <a
              href="https://www.termsfeed.com/cookies-policy-generator/"
              target="_blank"
            >
              Cookies Policy Generator
            </a>
          </p>
          <p>
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that we store about You
            may be linked to the information stored in and obtained from
            Cookies. For further information on how We use, store and keep your
            personal data secure, see our Privacy Policy.
          </p>
          <p>
            We do not store sensitive personal information, such as mailing
            addresses, account passwords, etc. in the Cookies We use.
          </p>
          <h3>Interpretation and Definitions</h3>
          <h4>Interpretation</h4>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h4>Definitions</h4>
          <p>For the purposes of this Cookies Policy:</p>
          <ul>
            <li>
              <strong>Company</strong> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Cookies Policy) refers to Talspo Private Limited, Ocean
              Park Township, Indore Bypass Road, near Delhi Public School
              Indore, Nipania, Indore, Madhya Pradesh 452016.
            </li>
            <li>
              <strong>Cookies</strong> means small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing details of your browsing history on that website among
              its many uses.
            </li>
            <li>
              <strong>Website</strong> refers to Talspo, accessible from
              <a
                href="https://talspo.com"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://talspo.com
              </a>
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Website, or a company, or any legal entity on behalf of which such
              individual is accessing or using the Website, as applicable.
            </li>
          </ul>
          <h3>The use of the Cookies</h3>
          <h4>Type of Cookies We Use</h4>
          <p>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
            Cookies. Persistent Cookies remain on your personal computer or
            mobile device when You go offline, while Session Cookies are deleted
            as soon as You close your web browser.
          </p>
          <p>
            We use both session and persistent Cookies for the purposes set out
            below:
          </p>
          <ul>
            <li>
              <p>
                <strong>Necessary / Essential Cookies</strong>
              </p>
              <p>Type: Session Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </p>
            </li>
            <li>
              <p>
                <strong>Functionality Cookies</strong>
              </p>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
            </li>
          </ul>
          <h4>Your Choices Regarding Cookies</h4>
          <p>
            If You prefer to avoid the use of Cookies on the Website, first You
            must disable the use of Cookies in your browser and then delete the
            Cookies saved in your browser associated with this website. You may
            use this option for preventing the use of Cookies at any time.
          </p>
          <p>
            If You do not accept Our Cookies, You may experience some
            inconvenience in your use of the Website and some features may not
            function properly.
          </p>
          <p>
            If You'd like to delete Cookies or instruct your web browser to
            delete or refuse Cookies, please visit the help pages of your web
            browser.
          </p>
          <ul>
            <li>
              <p>
                For the Chrome web browser, please visit this page from Google:
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </p>
            </li>
            <li>
              <p>
                For the Internet Explorer web browser, please visit this page
                from Microsoft:
                <a
                  href="http://support.microsoft.com/kb/278835"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  http://support.microsoft.com/kb/278835
                </a>
              </p>
            </li>
            <li>
              <p>
                For the Firefox web browser, please visit this page from
                Mozilla:
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </p>
            </li>
            <li>
              <p>
                For the Safari web browser, please visit this page from Apple:
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </p>
            </li>
          </ul>
          <p>
            For any other web browser, please visit your web browser's official
            web pages.
          </p>
          <h4>More Information about Cookies</h4>
          <p>
            You can learn more about cookies here:
            <a href="https://www.termsfeed.com/blog/cookies/" target="_blank">
              All About Cookies by TermsFeed
            </a>
            .
          </p>
          <h4>Contact Us</h4>
          <p>
            If you have any questions about this Cookies Policy, You can contact
            us:
          </p>
          <ul>
            <li>
              <p>
                By email: <a href="info@talspo.com"> info@talspo.com</a>
              </p>
            </li>
            <li>
              <p>
                By visiting this page on our website:
                <a
                  href="https://talspo.com/contact"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://talspo.com/contact
                </a>
              </p>
            </li>
            <li>
              <p>By phone number: +91 93160 40952</p>
            </li>
            <li>
              <p>
                By mail: Ocean Park Township, Indore Bypass Road, near Delhi
                Public School Indore, Nipania, Indore, Madhya Pradesh 452016
              </p>
            </li>
          </ul>
          <script
            data-cfasync="false"
            src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script>
        </div>
      </Container> */}
      <Footer />
    </>
  );
};

export default CookiePolicy;
