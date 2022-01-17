import classes from "../../styles/Home_desktop.module.css";
import Header from "../Header";
import headerPic from "../../Images/headerPic.png";
import Phone1 from "../../Images/phone1.png";
import ButtonDownload from "../ButtonDownload";
import Grid from "@material-ui/core/Grid";
import SideSummary from "../SideSummary";
import { VerifiedUser } from "@material-ui/icons";
import ExpositionOfThing from "../ExpositionOfThing";
import ConnectMeUs from "../ConnectMeUs";
import SafetyShowcase from "../SafetyShowcase";
import Footer from "../Footer";
// Images vehicles
import comfortrideElectric_d from "../../Images/Vehicles/comfortrideElectric_d.jpg";
import comfortrideNormal_e from "../../Images/Vehicles/comfortrideNormal_e.jpg";
import electricEconomy from "../../Images/Vehicles/electricEconomy.jpg";
import luxuryRideElectric from "../../Images/Vehicles/luxuryRideElectric.jpg";
import luxuryRideNormal_d from "../../Images/Vehicles/luxuryRideNormal_d.jpg";
import normaltaxieconomy from "../../Images/Vehicles/normaltaxieconomy.jpg";
import vandeliveryNormal_c from "../../Images/Vehicles/vandeliveryNormal_c.jpg";
import bikesdeliveryElectric from "../../Images/Vehicles/bikesdeliveryElectric.jpg";
import bikesdeliveryNormal_d from "../../Images/Vehicles/bikesdeliveryNormal_d.jpg";
import phoneHands from "../../Images/phone.png";
import windhoek from "../../Images/windhoek.jpg";

const HomeDesktop = () => {
  return (
    <div className={classes.container}>
      <Header />
      {/* Presentation head */}
      <div className={classes.presentationContainer}>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          className={classes.gridContainer}
        >
          <Grid item xs={5}>
            <div className={classes.leftpartContainer}>
              <div className={classes.prestTextEntryContainer}>
                <span className={classes.prestTextEntry}>
                  Better, Safer, and Convenient transportation.
                </span>
              </div>
              <div className={classes.presTextSubContainer}>
                <span className={classes.presTextSub}>
                  We provide interactive and smart technology for transport
                  booking and transport management.
                </span>
              </div>
              <div className={classes.presHaaderDownloadContainer}>
                <ButtonDownload
                  link={
                    "https://play.google.com/store/apps/details?id=com.taxiconnect"
                  }
                />
                <ButtonDownload
                  storeIcon="appstore"
                  introTitle="Or"
                  storeName="AppStore"
                  marginLeft={"5%"}
                  link={
                    "https://apps.apple.com/us/app/taxiconnect/id1523176507"
                  }
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className={classes.rightpartContainer}>
              <img alt="prest" src={headerPic} className={classes.headerPic} />
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.businessContainer}>
        <div className={classes.insideBusinessC}>
          <div className={classes.titleBusi}>TaxiConnect for Business</div>
          <div className={classes.subTitleBusi}>
            Solutions that help grow your business
          </div>
          <div
            className={classes.btnDeliverySol}
            onClick={() =>
              (window.location.href =
                "https://www.delivery.taxiconnectnanetwork.com/")
            }
          >
            Delivery solution
          </div>
        </div>
      </div>

      {/* Body part one */}
      <div className={classes.bodyPartOneContainer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={4}>
            <div className={classes.leftPartBPOContainer}>
              <img alt="phon1" src={Phone1} className={classes.phone1} />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.rightPartBPOContainer}>
              <SideSummary
                mainTitle={"Why TaxiConnect?"}
                headTitles={[
                  "Easy ride booking",
                  "Efficient pricing",
                  "On track management",
                ]}
                subForTitles={[
                  "TaxiConnect allows you to quickly find the closest taxi around you for your destination.",
                  "Our prices start from the normal taxi fares and optional services for your convenience at its best.",
                  "We provide our partners with a platform to track the daily activities of their business in real time.",
                ]}
                iconLeading={
                  <VerifiedUser
                    style={{ fontSize: "3.2vmin", color: "#096ED4" }}
                  />
                }
                endComponents={[
                  <ButtonDownload
                    link={
                      "https://play.google.com/store/apps/details?id=com.taxiconnect"
                    }
                  />,
                  <ButtonDownload
                    storeIcon="appgallery"
                    introTitle="Or"
                    storeName="AppGallery"
                    marginLeft={"7%"}
                    link={"https://appgallery.huawei.com/app/C104325591"}
                  />,
                ]}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Body part two */}
      <div className={classes.bodyPartTwoContainer}>
        <ExpositionOfThing
          mainTitle={"Rides and deliveries seemlessly"}
          subtitle={
            "Welcome to a world where drivers come to you from the comfort of your home, office, friends place or even date night, wherever you are we can get you there. A world where we try to make life a little easier with our new on-demand package delivery. All from the palm of your hands without any hassle."
          }
          picturesToExpose={[
            vandeliveryNormal_c,
            bikesdeliveryNormal_d,
            bikesdeliveryElectric,
            normaltaxieconomy,
            electricEconomy,
            comfortrideNormal_e,
            luxuryRideNormal_d,
          ]}
        />
      </div>

      {/* Body part three */}
      <div className={classes.bodyPartThreeContainer}>
        <ConnectMeUs />
      </div>

      {/* Body part four */}
      <div className={classes.bodyPartFourContainer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={4}>
            <div className={classes.leftPartBPOContainer}>
              <img alt="phon1" src={phoneHands} className={classes.phone1} />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.rightPartBPOContainer}>
              <SideSummary
                mainTitle={"Cashless payments to taxis"}
                headTitles={[
                  "Pay any driver",
                  "Send cab fares to anyone",
                  "Auto-secured wallet",
                ]}
                subForTitles={[
                  "Do you prefer not to carry hard cash around? We got you covered! Use your Connect Wallet to pay any of our partner drivers.",
                  "We use high-end encryptions to keep Connect Wallet safe and completely under your control.",
                  "We use high-end encryptions to keep Connect Wallet safe and completely under your control.",
                ]}
                iconLeading={
                  <VerifiedUser
                    style={{ fontSize: "3.2vmin", color: "#0e8491" }}
                  />
                }
                endComponents={null}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Body part five */}
      <div className={classes.bodyPartFiveContainer}>
        <SafetyShowcase />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeDesktop;
