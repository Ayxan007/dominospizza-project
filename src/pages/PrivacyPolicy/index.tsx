import "./index.css";
import privacyLogo from "../../assets/img/download (30).png";
import Navbar from "../Main/sections/Navbar";

function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="privacy-header">
        <img src={privacyLogo} />
      </div>
      <div className="privacy-policy">
        <div className="first-policy">
        <p className="gray-policy">
          This site is owned by HiTech Prime Private Limited. This Privacy
          Policy is designed to tell you about our practices regarding
          collection, use, and disclosure of information that you may provide
          via this site. Please be sure to read this entire Privacy Policy
          before using or submitting information to this site.
        </p>
        </div>
        <div className="consent-policy">
        <h1 className="gray-policy-title">Consent:</h1>
        <p className="gray-policy">
          By using this site, you agree to the terms of this Privacy Policy.
          Whenever you submit information via this site, you consent to the
          collection, use, preserving/storing and disclosure of the information
          in accordance with this Privacy Policy.
          <br />
          Use and Disclosure Except as otherwise stated, we may use information
          collected via this site toimprove the content of our site, to
          customize the site to your preferences, to communicateinformation to
          you (if you have requested it), and for any other purpose specified.
          <br />
          Domino’s Pizza may use the personal information that you submit to
          store and process that information in order to provide goods and
          services. Generally, we may use your personal information in the ways
          in which you would expect, including but not limited, to any of the
          following purposes:
        </p>
        <ul className="consent-ul">
          <li> To process any job application, you may submit</li>
          <li>
            {" "}
            To provide you with any restaurant or promotion information you may
            request
          </li>
          <li> To process any online ordering</li>
          <li>
            {" "}
            To determine the number of visitors to our websites and conduct
            reviews of our sites
          </li>
          <li> To fulfill prizes, awards and purchases</li>
          <li> To respond to specific requests from visitors</li>
          <li> To subscribe to our mailing list</li>
          <li> To keep you informed about any changes to our websites</li>
          <li> To submit website feedback</li>
          <li> To conduct marketing research</li>
          <li>
            {" "}
            To now and again send you offers or information on products or
            services that we consider will be of interest to you
          </li>
        </ul>
        <p className="gray-policy">
          When using the Domino's Pizza internet ordering system additional
          information is collected when you order a pizza online. This
          information assists in the delivery to your door and to verify your
          credit card payment. The internet order system also stores information
          about your order to help you remember and re-order the same menu in
          future.
        </p>
        </div>
        <div className="card-policy">
        <h1 className="gray-policy-title">Card Details: </h1>
        <p className="gray-policy">Domino’s Pizza does not store any of your credit card details.</p>
        </div>
        <div className="party-policy">
        <h1 className="gray-policy-title">Third Party Disclosure:</h1>
        <p className="gray-policy">
          Domino’s Pizza may share statistics and personal information between
          themselves and with companies that are related to Domino’s Pizza
          including our international branches. Personal information that you
          submit to Domino’s Pizza may be disclosed to a third party: such as
          our suppliers or our mailing houses, who are employed to provide some
          of our services, to meet the purpose for which it was submitted.
        </p>
        <ul className="consent-ul">
          <li>
            If you have provided your express consent to share the information.
          </li>
          <li>
            If Domino’s Pizza are required or authorized by law to disclose the
            information.
          </li>
          <li>
            If your personal information is collected in connection with a joint
            promoter, to that joint promoter for marketing and research
            purposes.
          </li>
          <li>
            <p className="gray-policy">
              If Domino’s Pizza feel you might like to know about a third
              party's goods and services we may supply that personal information
              to that third party. (We know that many of our guests/customers
              enjoy receiving these excellent offers), or if you place an order
              via our internet order system, your details will be passed on to
              Azericard LLC, who receive your credit card details for internet
              order payment. Azericard is a secure internet payment gateway that
              secures your credit card number during transmission. Azericard is
              completely certified by International Payment Systems: MasterCard
              , Visa, American Express, Diners Club, UnionPay and JCB.
              See:<a href="https://www.azericard.com/" target="blank">https://www.azericard.com/</a>&nbsp; for further details.
            </p>
          </li>
        </ul>
        </div>
         <div className="access-policy">
        <h1 className="gray-policy-title">Access, Accuracy and Security</h1>
        <p className="gray-policy">
          Domino’s Pizza will take reasonable steps to ensure that the personal
          information collected is accurate, complete and up-to-date.
        </p>
        </div>
        <div className="information-policy">
          <div className="information-head">
        <h3>INFORMATION COLLECTION</h3>
        </div>
        <h1 className="gray-policy-title padding-tp">Information You Provide:</h1>
        <p className="gray-policy">
          Domino's Pizza collects information you provide directly via the Web
          Site and Applications. The information we collect includes information
          that identifies, relates to, describes, is reasonably capable of being
          associated with, or could reasonably be linked, directly, or
          indirectly to you. The categories of information we collect and have
          collected about you may include the following:
        </p>
        <ul className="consent-ul">
          <li>
            {" "}
            <p>
              <strong>Contact Data.</strong> We collect your first and last
              name, postal address, email address, mobile number, birth date and
              gender.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Account Credentials.</strong> We employ one-time password
              (OTP) provided by a SMS provider company which is used for
              authentication and account access. The OTP is not kept by Domino’s
              Pizza.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Payment Data.</strong>. if you place an order via our
              internet order system, your details will be passed on to Azericard
              LLC, who receive your credit card details for internet order
              payment. Azericard is a secure internet payment gateway that
              secures your credit card number during transmission
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Order Information.</strong> We collect information about
              your orders and food choices.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong> Profile Data.</strong>We collect your interests,
              favorites, and preferences.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Content.</strong>We collect the content of messages you
              send to us, such as feedback and product reviews you may write, or
              questions and information you provide to customer support.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Applicant Data.</strong>. We collect data as necessary to
              consider you for a job opening if you submit an application to us,
              including your employment and education history, transcript,
              writing samples, and references.
            </p>
          </li>
        </ul>
        <p className="gray-policy">
          We collect information you provide at various points of the Web Sites
          and Applications, such as the following:
        </p>
        <ul className="consent-ul">
          <li>
            {" "}
            <p>
              <strong>Payment Data.</strong>. if you place an order via our
              internet order system, your details will be passed on to Azericard
              LLC, who receive your credit card details for internet order
              payment. Azericard is a secure internet payment gateway that
              secures your credit card number during transmission.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Online Orders.</strong> You can place an online order for
              carryout or delivery through your registered account. If you place
              a carryout order, you will need to provide your first name and
              mobile number, and order information. If you pay online, you will
              also need to provide your payment data. If you place an order for
              delivery, you will also need to provide your postal address in
              addition to the information above.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Rewards Programs.</strong> We may offer rewards programs,
              sweepstakes, contests, surveys, or other promotions ("Promotions")
              through our Websites or Applications. In order to participate in a
              Promotion, you may be required to register an account and/or
              provide contact data, profile data, and other information.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Other Transactions.</strong> We may offer you other
              opportunities to transact with us through the Web Sites or
              Applications. If you conduct transactions through the Web Sites or
              Applications, we will collect information you provide directly
              about the transactions you engage in while on the Web Sites or
              Applications (including any data gathered through the Application
              while located in a Domino's Pizza store and when you speak to and
              use voice ordering services).This information may include payment
              and billing information as well as the nature, quantity and price
              of the goods or services you exchange, transcripts of any words
              that you speak while using voice ordering services, and the
              individuals or entities with whom you communicate or transact
              business.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Email and other voluntary communications.</strong> You may
              also choose to communicate with us through email, via the Web
              Sites, via the Applications (including through voice ordering
              services), or through other means. Such communications may be in
              connection with our customer service efforts, your questions, or
              for other purposes. We collect the information in these
              communications, and such information may include information that
              personally identifies you.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Information Collected Automatically.</strong> When you
              visit the Web Sites or Applications (including when you use the
              Applications in a Domino's Pizza store), we automatically collect
              information about your device and how your device interacts with
              our Web Sites or Applications
            </p>
          </li>
        </ul>
        <p className="gray-policy">
          {" "}
          The categories of information we have collected about you include the
          following:
        </p>
        <ul className="consent-ul">
          <li>
            {" "}
            <p>
              <strong> Service Use Data.</strong>. We collect data about the
              features you use, the emails and advertisements you view, the
              products you consider and purchase, the date and time you access
              the Web Sites or Applications, the pages you access while using
              the Web Sites or Applications, and the internet address of the web
              sites, if any, from which you linked directly to the Web Sites or
              Applications, and other similar information.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Device Connectivity and Configuration Data. </strong> We
              collect data about the type of device you use, the operating
              system and browser you use, your internet service provider, your
              device's regional and language settings, and other similar
              information. This data also includes IP address, MAC address,
              device advertising Id (e.g., IDFA or AAID), and other device
              identifiers.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Rider Application Data.</strong> If you are a Driver, we
              collect data about your use of the Domino’s Rider Application,
              such as the time you log in and out of the Application, delivery
              updates, and customer service information such as the time it
              takes a Driver to leave the store for a delivery and enter the
              store after a delivery.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong> Location Data.</strong> We collect data about your
              device's location, which can be precise (e.g., latitude/longitude
              data) or imprecise (e.g., location derived from an IP address or
              data that indicates a city or postal code level).
            </p>
          </li>
        </ul>
        <p className="gray-policy">
          A Domino’s Pizza application may seek to activate location tracking
          services on your smart device.This function may result in your
          location being used for purposes such as:
        </p>
        <ul className="consent-ul">
          <li> Marketing (i.e. a nearby store sending you a special deal).</li>
          <li> Identification of your closest Domino’s store.</li>
          <li>
            {" "}
            Identification of your delivery address during placing an order.
          </li>
        </ul>
        <p className="gray-policy">
          We may install GPS trackers in delivery vehicles in order to monitor
          the progress of order deliveries and to ensure the safetyIn connection
          with a tracked order delivery, a GPS driver tracker page may be
          available in order to track your order in real time.We use cookies and
          other tracking technologies now and hereafter developed to
          automatically ollect this information,including the following:
        </p>
        <ul className="consent-ul">
          <li>
            {" "}
            <p>
              <strong>Log Files.</strong> A log file is a file that records
              events that occur in connection with your use of the Web Sites and
              Applications, such as IP address, browser type, internet service
              provider, referring/exit pages, operating system, date/time
              stamps, and related data.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong> Cookies.</strong> Domino's Pizza servers, or the servers
              of other entities, may place a "cookie" on your device, store data
              in your device's browser or access pre-existing removable tracking
              features on your device in order to allow you to use the Web Sites
              and Applications and to personalize your experience. A "cookie" is
              a small piece of data that can be sent by a web server to your
              device, which then may be stored by your browser on your device's
              hard drive. Cookies and browser storage allow us to recognize your
              device while you are on our Web Sites and Applications and help
              customize your online experience and support security features.
              Cookies and browser storage are also useful in allowing more
              efficient log-in for users, tracking transaction histories and
              preserving information between sessions. The information collected
              from cookies and browser storage may also be used to improve the
              functionality of the Web Sites and Applications, analyze your use
              of the Web Sites and Applications, or bring you advertising. Types
              of cookies and tags on our Web Sites and Applications include:
              <ul>
                <li>
                  <strong>Functionality:</strong> Used to remember your
                  preferences and for facilitating transactions such as
                  purchases.
                </li>
                <li>
                  <strong>Performance or Analytics:</strong> Used to measure
                  site activity to improve user experience.
                </li>
                <li>
                  <strong>Targeting:</strong> Used to display information and
                  offers that specifically interest you.
                </li>
              </ul>
              With most Internet Browsers, you can erase Cookies from your
              computer hard drive, block all Cookies, or receive a warning
              before a Cookie is stored. If you want to do this, refer to your
              Browser instructions or help screen to learn more. If you disable
              all cookies, you may be able to take advantage of all the features
              of our sites.
            </p>
          </li>
          <li>
            {" "}
            <p>
              <strong>Local Storage.</strong> We use Local Storage, such as
              HTML5 storage, to store information related to whether the user
              has chosen to "Remain Logged In" as well as tokens if other
              services are used. Various browsers may offer their own management
              tools for removing HTML5 Local Storage.
            </p>
          </li>
        </ul>
        </div>
        <div className="info-use-policy">
          <div className="information-head">
        <h3>INFORMATION USE</h3>
        </div>
        <p className="gray-policy">
          Domino's Pizza collects and uses information for business and
          commercial purposes in accordance with thepractices described in this
          Privacy Policy. Our business purposes for collecting and using
          information, include the following:
        </p>
        <ul className="consent-ul">
          <li>
            {" "}
            operating and managing our Web Sites and Applications, such as
            providing you with products, services,and Promotions, opening,
            maintaining, administering and servicing users' accounts or
            memberships.
          </li>
          <li>
            {" "}
            performing services requested by you, such as responding to your
            comments and requests, processing, servicing or
            enforcingtransactions and sending related communications maintaining
            the security and integrity of our systems, and preventing and
            addressing fraud, unlawful access, and breach of our policies and
            terms.
          </li>
          <li>
            {" "}
            sending you technical notices, updates, security alerts, information
            about our policy changes and administrative messages.
          </li>
          <li>
            {" "}
            analyzing trends and usage, such as the efficiency of deliveries and
            store operations.
          </li>
          <li> to fulfill prizes, awards and purchases</li>
          <li> helping to establish and verify the identity of users.</li>
          <li>
            {" "}
            improving our Web Sites, Applications, stores, advertisements,
            products, Promotions and services.
          </li>
          <li>
            {" "}
            sending you promotional newsletters, offers, advertisements and
            marketing communications and other information about Domino's Pizza
            and its affiliates.
          </li>
          <li>
            {" "}
            sending and serving you advertising; and fulfilling any other
            business or commercial purposes at your direction or with your
            consent.{" "}
          </li>
        </ul>
        <p className="gray-policy">
          You can access and request correction of any personal information
          concerning you at any time. You may also request that yourpersonal
          information be deleted at any time. Any such requests should be made
          directly by contacting us. Domino’s Pizza willtake reasonable steps to
          protect personal information from misuse, loss and unauthorized
          access, modification or disclosure.
        </p>
        </div>
        <div className="sensitive-policy padding-tp">
        <h1 className="gray-policy-title">Sensitive Information:</h1>
        <p className="gray-policy">
          Domino’s Pizza will not collect, use or disclose sensitive information
          except with your specific consent.
        </p>
        </div>
        <div className="data-policy padding-tp">
        <h1 className="gray-policy-title">Click stream Data:</h1>
        <p className="gray-policy">
          Each time you visit the Domino’s Pizza site our server collects some
          anonymous information,known as click-stream data, including the type
          of browser and system you are using, the addressof the site you have
          come from and move to after your visit, the date and time of your
          visit,and your server's IP address. Domino’s Pizza may collect this
          information for statistical purposesto find out how the websites is
          used and navigated, including the number of hits, the frequency
          andduration of visits, most popular session times. Domino’s Pizza may
          use this information to evaluate andimprove the Domino’s Pizza
          websites.
        </p>
        </div>
        <div className="analytics-policy padding-tp">
        <h1 className="gray-policy-title">Analytics:</h1>
        <p className="gray-policy">
          We may use third-party Service providers to monitor and analyze the
          use of our Service.
        </p>
        </div>
        <div className="gg-analytics-policy padding-tp">
        <h1 className="gray-policy-title">Google Analytics:</h1>
        <p className="gray-policy">
          Google Analytics is a web analytics service offered by Google that
          tracks and reports website traffic. Google uses the data collected to
          track and monitor the use of our Service. This data is shared with
          other Google services. Google may use the collected data to
          contextualize and personalize the ads of its own advertising network.
          You may opt-out of certain Google Analytics features through your
          mobile device settings, such as your device advertising settings or by
          following the instructions provided by Google in their Privacy
          Policy:&nbsp;
          <a href="https://policies.google.com/privacy" target="blank">
            https://policies.google.com/privacy
          </a>
          .<br />
          For more information on the privacy practices of Google, please visit
          the Google Privacy &amp; Terms web page:&nbsp;
          <a href="https://policies.google.com/privacy" target="blank">
            https://policies.google.com/privacy{" "}
          </a>
          .
        </p>
        </div>
        <div className="advert-policy padding-tp">
        <h1 className="gray-policy-title">Advertising:</h1>
        <p className="gray-policy">
          We may use Service providers to show advertisements to You to help
          support and maintain Our Service.
        </p>
        </div>
        <div className="gg-ad-double-policy padding-tp">
        <h1 className="gray-policy-title">Google AdSense &amp; DoubleClick Cookie:</h1>
        <p className="gray-policy">
          Google, as a third party vendor, uses cookies to serve ads on our
          Service. Google's use of the DoubleClick cookie enables it and its
          partners to serve ads to our users based on their visit to our Service
          or other websites on the Internet.You may opt out of the use of the
          DoubleClick Cookie for interest-based advertising by visiting the
          Google Ads Settings web page:&nbsp;
          <a href="http://www.google.com/ads/preferences/" target="blank">
            http://www.google.com/ads/preferences/
          </a>
          .
        </p>
        </div>
        <div className="adMob-policy padding-tp">
        <h1 className="gray-policy-title">AdMob by Google:</h1>
        <p className="gray-policy">
          AdMob by Google is provided by Google Inc. You can opt-out from the
          AdMob by Google service by following the instructions described by
          Google:&nbsp;
          <a
            href="https://support.google.com/ads/answer/2662922?hl=en"
            target="blank"
          >
            https://support.google.com/ads/answer/2662922?hl=en
          </a>
          .&nbsp; For more information on how Google uses the collected
          information, please visit the "How Google uses data when you use our
          partners' sites or app" page:&nbsp;
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="blank"
          >
            https://policies.google.com/technologies/partner-sites{" "}
          </a>
          or visit the Privacy Policy of Google:&nbsp;
          <a href="https://policies.google.com/privacy" target="blank">
            https://policies.google.com/privacy
          </a>
          .
        </p>
        </div>
        <div className="facebook-policy padding-tp">
        <h1 className="gray-policy-title">Facebook:</h1>
        <p className="gray-policy">
          Facebook remarketing service is provided by Facebook Inc. You can
          learn more about interest-based advertising from Facebook by visiting
          this page:&nbsp;
          <a
            href="https://www.facebook.com/help/516147308587266"
            target="blank"
          >
            https://www.facebook.com/help/516147308587266
          </a>
          &nbsp; To opt-out from Facebook's interest-based ads, follow these
          instructions from Facebook:&nbsp;
          <a
            href="https://www.facebook.com/help/568137493302217"
            target="blank"
          >
            https://www.facebook.com/help/568137493302217
          </a>
          .
        </p>
        </div>
        <div className="chang-policy padding-tp">
        <h1 className="gray-policy-title">Changes:</h1>
        <p className="gray-policy">
          If this Privacy Policy is changed, the revised policy will be posted
          on this site. Please check back periodically, and especially before
          you provide any personally identifiable information. This Privacy
          Policy was last updated on Oct 15, 2020.
        </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default PrivacyPolicy;
