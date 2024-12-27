import React from "react";
import { Container } from "react-bootstrap";
import NavBarContainer from "../../NavbarCom/NavBarContainer";
import Footer from "../../Footer/Footer";
import "../privacyPolicy/AntiSpamPolicy.css";

const AcceptableUse = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <>
      <NavBarContainer />
      <div className="anti-spam-policy">
        <h1>ACCEPTABLE USE POLICY (ABUSE POLICY) & RESPONSIBLE AI POLICY</h1>
      </div>
      <Container>
        <div className="anti-spam-con">
          {/* <p>Last updated: November 09, 2024</p> */}
          <p>Last updated: {formattedDate}</p>
          <p>
            This Acceptable Use Policy (Abuse Policy) & Responsible AI Policy
            (’Policy’) is part of our Terms and Conditions (’Legal Terms’) and
            should therefore be read alongside our main Legal Terms:{" "}
            <a
              href="https://taispo.com/terms- and-conditions"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://taispo.com/terms- and-conditions
            </a>{" "}
            . When you use the Al-powered services provided by Talspo Private
            Limited ('AI Products’), you warrant that you will comply with this
            document, our Legal Terms and all applicable laws and regulations
            governing AI. Your usage of our AI Products signifies your agreement
            to engage with our platform in a lawful, ethical, and responsible
            manner that respects the rights and dignity of all individuals. If
            you do not agree with these Legal Terms, please refrain from using
            our Services. Your continued use of our Services implies acceptance
            of these Legal Terms.
          </p>
          <p>
            Please carefully review this Policy which applies to any and all:
          </p>
          <ul className="list_policy">
            <li>
              <strong>(a)</strong> uses of our Services (as defined in ‘Legal
              Terms’)
            </li>
            <li>
              <strong>(b)</strong> forms, materials, consent tools, comments,
              posts, and all other content available on the Services (‘Content’)
            </li>
            <li>
              <strong>(c)</strong> material which you contribute to the
              Services, including any upload, post, review, disclosure, ratings,
              comments, chat, etc., in any forum, chatrooms, reviews, and to any
              interactive services associated with it (‘Contribution’)
            </li>
            <li>
              <strong>(d)</strong> responsible implementation and management of
              AI Products within our Services
            </li>
          </ul>
          <h4>WHO WE ARE</h4>
          <p>
            We are Talspo Private Limited, doing business as TS ('Company’,
            ’we’, ’us', or ’our’), a company registered in India at Ocean Park
            Township, Indore Bypass Road, near Delhi Public School Indore,
            Nipania, Indore, Madhya Pradesh 452016. We operate the website
            <a
              href="https://taispo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://taispo.com
            </a>
            (the ’Site’), the mobile application Talspo (the 'App'), as well as
            any other related products and services that refer or link to this
            Policy (collectively, the ’Services').
          </p>
          <h4>USE OF THE SERVICES</h4>
          <p>
            When you use the Services, you warrant that you will comply with
            this Policy and with all applicable laws. You also acknowledge that
            you may not:
          </p>
          <ul>
            <li>
              Systematically retrieve data or other content from the Services to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Make any unauthorised use of the Services, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretences.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Services, including features that prevent or
              restrict the use or copying of any Content or enforce limitations
              on the use of the Services and/or the Content contained therein.
            </li>
            <li>
              Engage in unauthorised framing of or linking to the Services.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>
            <li>
              Make improper use of our Services, including our support services
              or submit false reports of abuse or misconduct.
            </li>
            <li>
              Engage in any automated use of the Services, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools.
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services
              or the networks or the Services connected.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>
              Use any information obtained from the Services in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Use the Services as part of any effort to compete with us or
              otherwise use the Services and/or the Content for any
              revenue-generating endeavour or commercial enterprise.
            </li>
            <li>
              Decipher, decompile, disassemble, or reverse engineer any of the
              software comprising or in any way making up a part of the
              Services, except as expressly permitted by applicable law.
            </li>
            <li>
              Attempt to bypass any measures of the Services designed to prevent
              or restrict access to the Services, or any portion of the
              Services.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or
              agents engaged in providing any portion of the Services to you.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any
              Content.
            </li>
            <li>
              Copy or adapt the Services’ software, including but not limited to
              Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party’s uninterrupted use and
              enjoyment of the Services or modifies, impairs, disrupts, alters,
              or interferes with the use, features, functions, operation, or
              maintenance of the Services.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism, including without limitation, clear
              graphics interchange formats (’gifs'), 1•1 pixels, web bugs,
              cookies, or other similar devices (sometimes referred to as
              'spyware’ or 'passive collection mechanisms' or ’pcms').
            </li>
            <li>
              Except as may be the result of standard search engine or Internet
              browser usage, use, launch, develop, or distribute any automated
              system, including without limitation, any spider, robot, cheat
              utility, scraper, or offline reader that accesses the Services, or
              using or launching any unauthorised script or other software.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Services.
            </li>
            <li>
              Use the Services in a manner inconsistent with any applicable laws
              or regulations.
            </li>
            <li>
              Use a buying agent or purchasing agent to make purchases on the
              Services.
            </li>
            <li>Sell or otherwise transfer your profile.</li>
          </ul>
          <h4>Subscriptions</h4>
          <p>
            If you subscribe to our Services, you understand, acknowledge, and
            agree that you may not, except if expressly permitted:
          </p>
          <ul>
            <li>
              Engage in any use, including modification, copying,
              redistribution, publication, display, performance, or
              retransmission, of any portions of any Services, other than as
              expressly permitted by this Policy, without the prior written
              consent of Talspo Private Limited, which consent Talspo Private
              Limited may grant or refuse in its sole and absolute discretion.
            </li>
            <li>
              Reconstruct or attempt to discover any source code or algorithms
              of the Services, or any portion thereof, by any means whatsoever.
            </li>
            <li>
              Provide, or otherwise make available, the Services to any third
              party.
            </li>
            <li>Intercept any data not intended for you.</li>
            <li>
              Damage, reveal, or alter any user’s data, or any other hardware,
              software, or information relating to another person or entity.
            </li>
            <li>All types of Infringement Activities.</li>
          </ul>
          <h4>AI Products</h4>
          <p>
            When you use the AI Products provided by Talspo Private Limited, you
            warrant that you will not:
          </p>
          <ul>
            <li>
              Deploy AI techniques that utilise subliminal, manipulative, or
              deceptive methods designed to distort behaviour and impair
              informed decision-making, particularly when such actions cause
              significant harm to individuals.
            </li>
            <li>
              Exploit vulnerabilities related to age, disability, or
              socio-economic circumstances through AI in a way that distorts
              behaviour or decision-making, especially if this results in
              significant harm to the individual.
            </li>
            <li>
              Use AI systems for biometric categorization that infer sensitive
              attributes such as race, political opinions, trade union
              membership, religious or philosophical beliefs, sex life, or
              sexual orientation, except in limited cases, such as labelling or
              filtering lawfully acquired datasets, or specific law enforcement
              activities.
            </li>
            <li>
              Implement Al-based social scoring systems that evaluate or
              classify individuals or groups based on their social behaviour or
              personal traits in a manner that causes harm, discrimination, or
              unfair treatment.
            </li>
            <li>
              Assess the risk of an individual committing criminal offenses
              based solely on profiling, personality traits, or other
              non-behavioural factors, except in narrowly defined circumstances
              where legal safeguards are in place.
            </li>
            <li>
              Not compile facial recognition databases through untargeted
              scraping of facial images from the internet, social media, or CCTV
              footage, unless it is part of a legally compliant and narrowly
              defined purpose.
            </li>
            <li>
              Use AI to infer emotions in sensitive environments such as
              workplaces, educational institutions, or any other context where
              such analysis could lead to discrimination, unfair treatment, or
              privacy violations.
            </li>
            <li>
              Engage in real-time remote biometric identification in public
              places for law enforcement purposes, except in specific situations
              where there are strong legal justifications and oversight
              mechanisms.
            </li>
          </ul>
          <h4>COMMUNITY/FORUM GUIDELINES</h4>
          <a href=""></a>
          <h4>ARTIFICIAL INTELLIGENCE</h4>
          <p>
            We recognise the significant impact AI can have on our users and
            society, and we are dedicated to ensuring that our AI Products are
            designed and operated in a manner that aligns with comprehensive
            ethical standards. We aim to use AI to enhance user experiences
            while upholding fairness, transparency, and accountability
            principles.
          </p>
          <p>
            This Policy applies to all Al-powered features, services, and
            systems in our Services. It governs the development, deployment, and
            use of AI technologies to protect users’ rights and maintain
            transparency in all AI operations. This Policy applies to all
            stakeholders, including employees, third-party vendors, and partners
            who contribute to or interact with our AI Products.
          </p>
          <h4>Enforcement</h4>
          <p>
            Any misuse of our AI Products or failure to adhere to the standards
            outlined in this Policy will result in appropriate actions to ensure
            the integrity of our platform and the protection of our users. The
            specific consequences for misuse of AI may vary depending on the
            nature and severity of the violation and the user’s history with our
            Services.
          </p>
          <p>Violations may include, but are not limited to:</p>
          <ul>
            <li>
              Engaging the AI Products in ways that violate user privacy,
              manipulate data, disregard ethical guidelines, or are against AI
              Service Providers’ terms of use
            </li>
            <li>
              Deploying AI in a manner that introduces or causes bias, leading
              to unfair treatment of users or groups.
            </li>
            <li>
              Improper handling, storage, or use of data by AI Products, leading
              to breaches of user trust and legal compliance.
            </li>
            <li>
              Using AI in a way that compromises the privacy and security of our
              systems, data, or users.
            </li>
            <p>
              Depending on the violation, Talspo Private Limited may take one or
              more of the following actions:
            </p>
            <li>
              Warnings: The responsible party may receive a formal warning and
              be required to cease violating practices.
            </li>
            <li>
              Temporary Suspension: In cases of repeated or more severe
              violations, the responsible individual’s access to AI Products or
              certain features of our platform may be temporarily suspended
              while the issue is investigated.
            </li>
            <li>
              Termination of Access: Serious violations, particularly those that
              result in harm to users or breach privacy or other regulations,
              may lead to the permanent termination of access to our AI Products
              and Services.
            </li>
            <li>
              Legal Action: In cases where the misuse of AI leads to significant
              harm, data breaches, or legal violations, we may pursue legal
              action against the party responsible. This could include reporting
              the incident to law enforcement or regulatory bodies.
            </li>
            <li>
              Public Disclosure: For incidents that impact public trust or
              involve severe ethical breaches, we reserve the right to publicly
              disclose the violation and the actions taken in response to
              maintain transparency and accountability.
            </li>
          </ul>
          <h4>Commitment to Responsible AI</h4>
          <p>
            In addition to the consequences outlined above, we are deeply
            committed to repairing any harm caused by the misuse of AI. This
            commitment is a testament to our dedication to our users and our
            responsibility as a company. We will correct biased outcomes and
            implement additional safeguards to prevent future violations.
          </p>
          <p>
            At Talspo Private Limited, we are committed to the ongoing
            refinement and enhancement of our Policy. As technology evolves and
            regulatory environments shift, we recognise the importance of
            keeping our policies up to date to ensure that they remain relevant,
            effective, and aligned with best practices in AI ethics. We will
            regularly review and update our Policy to reflect technological
            advancements and legal changes in local, national, and international
            regulations related to AI. Our Policy will be updated as needed to
            comply with new laws and guidelines, ensuring that our practices
            remain legally sound and socially responsible.
          </p>
          <h4>CONTRIBUTIONS</h4>
          <p>In this Policy, the term ’Contribution’ means:</p>
          <ul>
            <li>
              any data, information, software, text, code, music, scripts,
              sound, graphics, photos, videos, tags, messages, interactive
              features, or other materials that you post, share, upload, submit,
              or otherwise provide in any manner on or through to the Services;
              or
            </li>
            <li>
              any other content, materials, or data you provide to Talspo
              Private Limited or use with the Services.
            </li>
          </ul>
          <p>
            Some areas of the Services may allow users to upload, transmit, or
            post Contributions. We may but are under no obligation to review or
            moderate the Contributions made on the Services, and we expressly
            exclude our liability for any loss or damage resulting from any of
            our users’ breach of this Policy. Please report any Contribution
            that you believe breaches this Policy; however, we will determine,
            in our sole discretion, whether a Contribution is indeed in breach
            of this Policy.
          </p>
          <h4>You warrant that:</h4>
          <ul>
            <li>
              you are the creator and owner of or have the necessary licences,
              rights, consents, releases, and permissions to use and to
              authorise us, the Services, and other users of the Services to use
              your Contributions in any manner contemplated by the Services and
              this Policy;
            </li>
            <li>
              all your Contributions comply with applicable laws and are
              original and true (if they represent your opinion or facts);
            </li>
            <li>
              the creation, distribution, transmission, public display, or
              performance, and the accessing, downloading, or copying of your
              Contributions do not and will not infringe the proprietary rights,
              including but not limited to the copyright, patent, trademark,
              trade secret, or moral rights of any third party; and
            </li>
            <li>
              you have the verifiable consent, release, and/or permission of
              each and every identifiable individual person in your
              Contributions to use the name or likeness of each and every such
              identifiable individual person to enable inclusion and use of your
              Contributions in any manner contemplated by the Services and this
              Policy.
            </li>
          </ul>
          <p>
            You also agree that you will not post, transmit, or upload any (or
            any part of a) Contribution that:
          </p>
          <ul>
            <li>
              is in breach of applicable laws, regulation, court order,
              contractual obligation, this Policy, our Legal Terms, a legal
              duty, or that promotes or facilitates fraud or illegal activities;
            </li>
            <li>
              is defamatory, obscene, offensive, hateful, insulting,
              intimidating, bullying, abusive, or threatening, to any person or
              group;
            </li>
            <li>is false, inaccurate, or misleading;</li>
            <li>
              includes child sexual abuse material, or violates any applicable
              law concerning child pornography or otherwise intended to protect
              minors;
            </li>
            <li>
              contains any material that solicits personal information from
              anyone under the age of 18 or exploits people under the age of 18
              in a sexual or violent manner;
            </li>
            <li>
              promotes violence, advocates the violent overthrow of any
              government, or incites, encourages, or threatens physical harm
              against another;
            </li>
            <li>
              is obscene, lewd, lascivious, filthy, violent, harassing,
              libellous, slanderous, contains sexually explicit material, or is
              otherwise objectionable (as determined by us);
            </li>
            <li>
              is discriminatory based on race, sex, religion, nationality,
              disability, sexual orientation, or age; •bullies, intimidates,
              humiliates, or insults any person;
            </li>
            <li>
              promotes, facilitates, or assists anyone in promoting and
              facilitating acts of terrorism;
            </li>
            <li>
              infringes, or assists anyone in infringing, a third party’s
              intellectual property rights or publicity or privacy rights; •is
              deceitful, misrepresents your identity or affiliation with any
              person and/or misleads anyone as to your relationship with us or
              implies that the Contribution was made by someone else than you;
            </li>
            <li>
              contains unsolicited or unauthorised advertising, promotional
              materials, pyramid schemes, chain letters, spam, mass mailings, or
              other forms of solicitation that has been 'paid for', whether with
              monetary compensation or in kind; or
            </li>
            <li>
              misrepresents your identity or who the Contribution is from.
            </li>
          </ul>
          <p>
            You may not use our Services to offer, present, promote, sell, give
            away or otherwise make available to others any good or service
            involving:
          </p>
          <ul>
            <li>
              items that promote, encourage, facilitate, or instruct others how
              to engage in illegal activity,
            </li>
            <li>cigarettes</li>
            <li>
              controlled substances and/or other products that present a risk to
              consumer safety, narcotics, steroids, drug paraphernalia,
            </li>
            <li>
              specific knives or other weapons regulated under applicable law,
            </li>
            <li>
              firearms, ammunition, or certain firearm parts or accessories,
            </li>
            <li>certain sexually oriented materials or services,</li>
            <li>
              certain items before the seller has control or possession of the
              item,
            </li>
            <li>stolen goods,</li>
            <li>
              products or services identified by government agencies to be
              highly likely to be fraudulent, and
            </li>
            <li>
              any transaction or activity that requires pre-approval without
              having obtained said approval.
            </li>
          </ul>
          <h4>REVIEW AND RATINGS</h4>
          <p>
            When your Contribution is a review or rating, you also agree that:
          </p>
          <ul>
            <li>
              you have firsthand experience with the services and software being
              reviewed;
            </li>
            <li>your Contribution is true to your experience;</li>
            <li>
              you are not affiliated with competitors if posting negative
              reviews (or linked in any way to, e.g., by being the owner or
              seller/manufacturer of, a product or service if posting positive
              reviews);
            </li>
            <li>
              you cannot make or offer any conclusions as to the legality of
              conduct;
            </li>
            <li>you cannot post any false or misleading statements; and</li>
            <li>
              you do not and will not organise a campaign encouraging others to
              post reviews, whether positive or negative.
            </li>
          </ul>
          <h4>REPORTING A BREACH OF THIS POLICY</h4>
          <p>
            We may but are under no obligation to review or moderate the
            Contributions made on the Services and we expressly exclude our
            liability for any loss or damage resulting from any of our users’
            breach of this Policy.
          </p>
          <p>If you consider that any Service, Content, or Contribution:</p>
          <ul>
            <li>
              breach this Policy, please call +91 93160 40952, email us at
              <a href="legal@taispo.com" target="_blank">
                legal@taispo.com
              </a>
              , visit
              <a href="https://taispo.com/contact" target="_blank">
                https://taispo.com/contact
              </a>
              , or refer to the contact details at the bottom of this document
              to let us know which Service, Content, or Contribution is in
              breach of this Policy and why
            </li>
            <li>
              •infringe any third-party intellectual property rights, please
              email us at
              <a href="legal@taispo.com" target="_blank">
                legal@taispo.com
              </a>
            </li>
            <li>
              users can also send detailed feedback on their interactions with
              our AI Products by calling
              <a href="+91 9316040952" target="_blank">
                +91 9316040952
              </a>
              , emailing legal@taispo.com, visiting
              <a href="https://taispo.com/contact" target="_blank">
                https://taispo.com/contact
              </a>
              , or referring to the contact details at the bottom of this
              document. You should include specific details about the AI
              interaction, such as the context, the nature of the concern, and
              any relevant screenshots or documentation
            </li>
            <p>
              We will reasonably determine whether a Service, Content, or
              Contribution breaches this Policy.
            </p>
          </ul>
          <h4>CONSEQUENCES OF BREACHING THIS POLICY</h4>
          <p>
            The consequences for violating our Policy will vary depending on the
            severity of the breach and the user's history on the Services, by
            way of example:
          </p>
          <p>
            We may, in some cases, give you a warning and/or remove the
            infringing Contribution, however, if your breach is serious or if
            you continue to breach our Legal Terms and this Policy, we have the
            right to suspend or terminate your access to and use of our Services
            and, if applicable, disable your account. We may also notify law
            enforcement or issue legal proceedings against you when we believe
            that there is a genuine risk to an individual or a threat to public
            safety.
          </p>
          <p>
            We exclude our liability for all action we may take in response to
            any of your breaches of this Policy.
          </p>
          <h4>COMPLAINTS AND REMOVAL OF LEGITIMATE CONTENT</h4>
          <p>
            If you consider that some Content or Contribution have been
            mistakenly removed or blocked from the Services, please refer to the
            contact details at the bottom of this document and we will promptly
            review our decision to remove such Content or Contribution. The
            Content or Contribution may stay ’down’ whilst we conduct the review
            process.
          </p>
          <p>
            For more information, visit
            <a href=" https://taispo.com/privacy-policy" target="_blank">
              https://taispo.com/privacy-policy
            </a>
          </p>
          <h4>DISCLAIMER</h4>
          <p>
            Talspo Private Limited is under no obligation to monitor users’
            activities, and we disclaim any responsibility for any user’s misuse
            of the Services. Talspo Private Limited has no responsibility for
            any user or other Content or Contribution created, maintained,
            stored, transmitted, or accessible on or through the Services, and
            is not obligated to monitor or exercise any editorial control over
            such material. If Talspo Private Limited becomes aware that any such
            Content or Contribution violates this Policy, Talspo Private Limited
            may, in addition to removing such Content or Contribution and
            blocking your account, report such breach to the police or
            appropriate regulatory authority. Unless otherwise stated in this
            Policy, Talspo Private Limited disclaims any obligation to any
            person who has not entered into an agreement with Talspo Private
            Limited for the use of the Services.
          </p>
          <h4>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h4>
          <p>
            If you have any further questions or comments or wish to report any
            problematic Content or Contribution, you may contact us by:
          </p>
          <p>By phone number: +91 93160 40952</p>
          <p>
            By email: <a href="info@talspo.com"> info@talspo.com</a>
          </p>
          <p>
            Online contact form:
            <a
              href="https://talspo.com/contact"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://talspo.com/contact
            </a>
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AcceptableUse;
