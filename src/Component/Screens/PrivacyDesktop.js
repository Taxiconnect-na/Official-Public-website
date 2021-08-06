import classes from "../../styles/Privacy_desktop.module.css";
import Header from "../Header";
import { FiberManualRecord } from "@material-ui/icons";
import Footer from "../Footer";

//Bolt
const makeBold = (text) => {
  return <span className={classes.makeBold}>{text}</span>;
};

//Head
const headTerms = () => {
  return (
    <div className={classes.headerPrivacy}>
      <div className={classes.downloadTerms}>TERMS & CONDITIONS</div>
      <div className={classes.titleHeadPrivacy}>
        TaxiConnect Privacy Policy Statement
      </div>
      <div className={classes.dateUpdated}>Last update : Aug 1, 2021</div>
      <div className={classes.shortIntroHead}>
        Thanks for entrusting TaxiConnect with your personal information.
        Holding onto your private information is a serious responsibility, and
        we want you to know how we're handling it.
      </div>
    </div>
  );
};

//Showcase points
const showcasePoints = (
  index = 1,
  mainTitle = "mainTitle",
  points = [1, 2, 3],
  introTitle = "Intro title"
) => {
  return (
    <div className={classes.pointContainer}>
      <div className={classes.pointTitle}>
        {index}. {mainTitle}
      </div>
      {introTitle !== null ? (
        introTitle.superTitle !== null &&
        introTitle.superTitle !== undefined ? (
          <div className={classes.pointTitleWithSuperTitle}>
            <div className={classes.superTitlePoint}>
              {introTitle.superTitle}
            </div>
            <div className={classes.introTitlePoint}>{introTitle.subTitle}</div>
          </div>
        ) : (
          <div className={classes.introTitlePoint}>{introTitle}</div>
        )
      ) : null}
      <div className={classes.pointContentContainer}>
        {points.map((pointText) => {
          return (
            <div className={classes.textPointSingle}>
              {points.length > 1 &&
              pointText.subSuperTile === undefined &&
              pointText.superTitle === undefined ? (
                <div className={classes.dotContainer}>
                  <FiberManualRecord style={{ fontSize: "1vmin" }} />
                </div>
              ) : null}

              {pointText.superTitle !== undefined &&
              pointText.subSuperTile === undefined ? (
                <div className={classes.pointTrueText}>
                  <div className={classes.superTitlePointDeep}>
                    {pointText.superTitle}
                  </div>
                  <div className={classes.pointContainer2ndForm}>
                    <div className={classes.dotContainer}>
                      <FiberManualRecord style={{ fontSize: "1vmin" }} />
                    </div>
                    <div className={classes.pointTrueText}>
                      {pointText.text}
                    </div>
                  </div>
                </div>
              ) : pointText.superTitle !== undefined &&
                pointText.subSuperTile !== undefined ? (
                <div className={classes.pointTrueText}>
                  <div className={classes.superTitlePointDeep}>
                    {pointText.superTitle}
                  </div>
                  <div className={classes.pointContainer2ndForm}>
                    <div className={classes.dotContainer}>
                      <FiberManualRecord style={{ fontSize: "1vmin" }} />
                    </div>
                    <div className={classes.subTitleSuperText}>
                      {pointText.subSuperTile}
                    </div>
                  </div>
                  <div className={classes.pointContainer2ndForm}>
                    <div className={classes.dotContainer}>
                      <FiberManualRecord
                        style={{ fontSize: "1vmin", opacity: 0 }}
                      />
                    </div>
                    <div className={classes.pointTrueText}>
                      {pointText.text}
                    </div>
                  </div>
                </div>
              ) : pointText.superTitle === undefined &&
                pointText.subSuperTile !== undefined ? (
                <div className={classes.pointTrueText}>
                  <div className={classes.pointContainer2ndForm}>
                    <div className={classes.dotContainer}>
                      <FiberManualRecord style={{ fontSize: "1vmin" }} />
                    </div>
                    <div className={classes.subTitleSuperText}>
                      {pointText.subSuperTile}
                    </div>
                  </div>
                  <div className={classes.pointContainer2ndForm}>
                    <div className={classes.dotContainer}>
                      <FiberManualRecord
                        style={{ fontSize: "1vmin", opacity: 0 }}
                      />
                    </div>
                    <div className={classes.pointTrueText}>
                      {pointText.text}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={classes.pointTrueText}>{pointText}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PrivacyDesktop = () => {
  return (
    <div className={classes.container}>
      <Header />
      {headTerms()}
      {/* Points */}
      <div className={classes.pointsContainer}>
        {showcasePoints(
          1,
          "Introduction",
          [
            "TaxiConnect is a ride-hailing technology platform that, as part of obtaining ride-hail services, enables users (“Users”) of our mobile ride-hail application (the “App”) to arrange rides with independent Taxi drivers (“TaxiConnect Partner Taxi Drivers”). This Privacy Policy applies to Users.",
            "This Privacy Policy applies to Users’ access to and use of the App, websites, content, products and services (collectively, the “ Services ”) made available to Users on or through TaxiConnect’s website at “ www.taxiconnectna.com ”, which is composed of numerous subsites and webpages operated by TaxiConnect (collectively, the “ Website ”), whether accessed or used via personal computers, mobile devices, or otherwise, provided as part of the Services. In this Privacy Policy, references to “ you ” or “your ” mean Users, including and references to “ TaxiConnect ”, “ we ”, “ us ”, “ our ” refers to Posterity TaxiConnect Technologies cc.",
            "By creating an account, installing the App, and using the App, Website or Services, you agree to the collection, use and disclosure of Personal Information as set out in this Privacy Policy.",
            "We have prepared this Privacy Policy to describe how we collect, use, disclose and otherwise manage the personal information we collect from you through the Website, the Services and the App (as defined above).",
            "If you have any questions about this Privacy Policy or don’t see your concerns addressed here, you should contact us by email at support@taxiconnectna.com",
          ],
          null
        )}

        {showcasePoints(
          2,
          "Changes to this privacy policy",
          [
            "TaxiConnect may update and make changes to this Privacy Policy from time to time in response to changing business circumstances and legal developments, effective upon posting the revised privacy policy on the Website. We strongly encourage you to refer to this Privacy Policy often for the latest information about our personal information policies and practices.",
          ],
          null
        )}

        {showcasePoints(
          3,
          "Types of personal information we collect from users",
          [
            "User profile information: Name, email address, phone number and picture; • Trip information : Includes, but is not limited to, GPS location and information regarding pick up and drop off locations, trip time, trip routes, etc.",
            "Device and traffic information : Includes, but is not limited to: IP (Internet protocol) addresses, hardware model, operating system and version, date and time of access, geolocation, page requests, browser type and error logs, etc . Geolocation data is only collected while the App is open.",
            "When you elect to register for the Services, you will be required to provide us with your profile information. Users must provide their email address and phone number in order to use the App to access ride-hailing services. Certain information, in particular their name and picture, and whether to enable notification and location services, are optional to use our Services, the Website or the App. However, if you decide not to provide such information, you may not be able to take full advantage of all of the features of our Services, the Website and/or the App.",
          ],
          "The term “personal information” means information about an identifiable individual, including name, address, email address, and other information relating to an individual. We collect the following types of personal information from Users:"
        )}

        {showcasePoints(
          4,
          "How we use TaxiConnect users’ personal information",
          [
            "User profile information: We use your profile information for purposes including, but not limited to: (a) creating your account during the registration process, (b) determining your eligibility for a TaxiConnect account, and (c) managing your TaxiConnect account and contacting you about your transactions and other activities on the Website or App.",
            "User payment information: We use payment information to facilitate payments for use of the Services.",
            "Device and traffic information : We use the device and traffic information to help us understand Website and App activity and to monitor and improve our Services, the Website and the App. We may also use your personal information to track your compliance with our policies and terms.",
            {
              superTitle: "Secondary Uses of your Personal Information",
              subSuperTile: "Communications",
              text: "From time to time, we may also use your personal information to send you email or other communications that may be of interest to you and to tailor communications to your interests. You may opt-out of marketing and promotional communications but will continue to receive other communications necessary to provide the Services. To opt-out of such marketing and promotional communications, please email us at support@taxiconnectna.com or select the unsubscribe option in the marketing and promotional communication.",
            },
            {
              subSuperTile: "Cookies",
              text: "Like most websites, our Website uses a technology called “cookies”. A cookie is a tiny element of data that our Website can send to your browser, which is stored on your device and records your preferences and your use of the Website so we can recognize you when you return. We use cookies to help us understand our Website activity and which areas of our Website are useful and which areas need improvement. You may set your Web browser to notify you when you receive a cookie or to not accept certain cookies. However, if you decide not to accept cookies from our Website, you may not be able to take full advantage of all of the features of our Website.",
            },
          ],
          {
            superTitle: "Services",
            subTitle:
              "We use the personal information described above to generally enable you to use our Services, including in the following ways:",
          }
        )}

        {showcasePoints(
          5,
          "Sharing of personal information",
          [
            {
              superTitle:
                "Personal information shared with TaxiConnect Partner Drivers",
              text: "We will share your personal information with TaxiConnect Partner Drivers in certain situations. When you are connected with a TaxiConnect Partner Driver for a trip, we will share certain profile information with the TaxiConnect Partner Driver, including your name, picture, contact number, pickup location, destination location, as well as geolocation information.",
            },
            {
              superTitle: "Legal",
              text: "We may provide your personal information in response to a search warrant or other legally valid inquiry or order, or as otherwise required or permitted by applicable law, including the disclosure of personal information where necessary for the establishment, exercise or defence of legal claims or to prevent actual or suspected loss or harm to persons or property.",
            },
          ],
          "The term “personal information” means information about an identifiable individual, including name, address, email address, and other information relating to an individual. We collect the following types of personal information from Users:"
        )}

        {showcasePoints(
          6,
          "How we safeguard personal information",
          [
            "As required by law, we have implemented reasonable physical, organizational and technological safeguards, appropriate to the sensitivity of the information collected, in an effort to protect against unauthorized access, use, modification and disclosure of personal information in our custody and control. As privacy is a key priority, we have implemented multiple security layers designed to protect every type of data that exists in our system.",
            "While TaxiConnect makes good faith efforts to safeguard your personal information and to secure your data during use of the Services, the Website and/or the App, no transmission of data over the Internet, wireless network, or any other public network can be guaranteed to be 100% secure. In addition, if you are visiting, using or interacting with our Website or the App from a country other than Namibia, your communication with us through the Website or the App will necessarily result in the transfer of information across international boundaries.TaxiConnect cannot ensure or warrant the security of any information that you transmit to us and we do not take any responsibility for any breach that may occur.",
          ],
          null
        )}

        {showcasePoints(
          7,
          "Retention of personal information",
          [
            "We retain your personal information,for no longer than necessary for the purposes stated above or is otherwise permitted or required by law. When personal information is no longer required, we securely destroy or irrevocably erase the information.",
          ],
          null
        )}

        {showcasePoints(
          8,
          "Is information collected from children?",
          [
            "Users must be at least eighteen (18) years old to use the Services. TaxiConnect does not knowingly collect personal information from children, which we define as individuals under 18 years . If we discover that a child has provided us with personal information, we will immediately delete that child’s personal information. Also, if any parent or guardian of a child is aware that a child has provided us with personal information, we ask that the parent or guardian contact us.",
          ],
          null
        )}

        {showcasePoints(
          9,
          "Accessing and updating your personal information",
          [
            "You have the right to access and request correction or updating of your personal information in our custody and control, subject to limited exceptions prescribed by applicable laws. You may do so directly by updating your member account profile or by emailing us at support@taxiconnectna.com",
          ],
          null
        )}

        {showcasePoints(
          10,
          "How to contact us",
          [
            "If you have any questions, concerns or complaints regarding our Privacy Policy please contact us by email at support@taxiconnectna.com or via phone at +264812876860.",
          ],
          null
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyDesktop;
