import classes from "../../styles/About_desktop.module.css";
import Header from "../Header";
import Grid from "@material-ui/core/Grid";
import SideSummary from "../SideSummary";
import {
  FiberManualRecord,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  VerifiedUser,
} from "@material-ui/icons";
import ButtonDownload from "../ButtonDownload";
import Typist from "react-typist";
//...Images
import imageHeader from "../../Images/driverIconic.jpg";
import town1 from "../../Images/town1.jpg";
import church from "../../Images/church.jpg";
import dom from "../../Images/Team/dom.jpg";
import ren from "../../Images/Team/ren.jpg";
import phil from "../../Images/Team/phil.jpg";
import sar from "../../Images/Team/sar.jpg";
import mac from "../../Images/Team/mac.jpg";
import hands2 from "../../Images/hands2.png";
import Footer from "../Footer";

const AboutDesktop = () => {
  return (
    <div className={classes.container}>
      <Header />
      {/* Presentation head */}
      <div className={classes.presentationContainer}>
        <div className={classes.opacityHeaderOverlay}></div>
        <div className={classes.grettingsHeader}>Hello</div>
        <img
          alt="presentationImage"
          src={imageHeader}
          className={classes.mainImgPresentation}
        />
      </div>

      {/* Body part one */}
      <div className={classes.bodyPartOne}>
        <div className={classes.bigTitle1}>Dreams never stop growing</div>
        <div className={classes.sub1}>
          It all starts with a dream. A dream to serve, to play, to give, to
          sing. And make an impact in our world. With our dreams we move the
          world and in our journey we need to move, with the use of our market
          adopting technology every destination is a step closer to your dream.
          Seat back and enjoy every ride with convenience.
        </div>
      </div>

      {/* Body part two */}
      <div className={classes.bodyPartTwo}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={6}>
            <div className={classes.leftPartBPOContainer}>
              <img
                alt="town1"
                src={town1}
                className={classes.imageSideGeneric}
              />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.rightPartBPOContainer}>
              <SideSummary
                mainTitle={null}
                headTitles={["Our Vision", "Our Mission"]}
                subForTitles={[
                  "Is to safely, conveniently, and reliably connect the transportation industry to its partners, customers, and clients through innovative and market adopting technology.",
                  "Our mission is to provide convenience, safety, and a reliable ride experience. To provide our partners with the ability to track the daily activities of their transportation business in real-time.",
                ]}
                iconLeading={
                  <FiberManualRecord
                    style={{ fontSize: "3.2vmin", color: "#096ED4" }}
                  />
                }
                endComponents={null}
              />
            </div>
          </Grid>
        </Grid>
        {/* Why we care */}
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ marginTop: "20vmin" }}
        >
          <Grid item xs={6}>
            <div className={classes.leftPartBPOContainer}>
              <img
                alt="church"
                src={church}
                className={classes.imageSideGeneric}
              />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.rightPartBPOContainer}>
              <SideSummary
                mainTitle={"Why TaxiConnect cares?"}
                headTitles={[""]}
                subForTitles={[
                  "The Namibian taxi industry is one berly evolving and is being left behind as the world moves into the 4th Industrial Revolution thus leaving gaps for fear, theft, piracy and so many others you or someone close to you has personally experienced. We care because your safety matters and you deserve convenience in your busy schedule.",
                ]}
                iconLeading={null}
                endComponents={null}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Team */}
      <div className={classes.bodyPartThree}>
        <div className={classes.teamBigTitle}>Meet the Team</div>
        <div className={classes.teamShow}>
          {/* 1 */}
          <div className={classes.singleTeamNode}>
            <div className={classes.imageContainer}>
              <div className={classes.teamSImage}>
                <img alt="team1" src={ren} className={classes.truePicTeamS} />
              </div>
            </div>
            <div className={classes.teamSName}>Reinhold Shiwagala</div>
            <div className={classes.teamSQuote}>Quote</div>
            <div className={classes.teamSStatus}>Co-Founder</div>
            <div className={classes.teamSTitle}>Chief Executive Officer</div>
            <div className={classes.socialSTeam}>
              <div className={classes.socialSEl}>
                <LinkedIn style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Instagram style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Facebook style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Twitter style={{ fontSize: "2.5vmin" }} />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className={classes.singleTeamNode}>
            <div className={classes.imageContainer}>
              <div className={classes.teamSImage}>
                <img alt="team2" src={dom} className={classes.truePicTeamS} />
              </div>
            </div>
            <div className={classes.teamSName}>Dominique Tesh</div>
            <div className={classes.teamSQuote}>
              <strong>&ldquo;</strong> It's about keeping the conviction to
              yourself, sooner or later people will understand.
              <strong>&rdquo;</strong>
            </div>
            <div className={classes.teamSStatus}>Co-Founder</div>
            <div className={classes.teamSTitle}>Chief Technology Officer</div>
            <div className={classes.socialSTeam}>
              <div className={classes.socialSEl}>
                <LinkedIn style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Instagram style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Facebook style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Twitter style={{ fontSize: "2.5vmin" }} />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className={classes.singleTeamNode}>
            <div className={classes.imageContainer}>
              <div className={classes.teamSImage}>
                <img alt="team3" src={phil} className={classes.truePicTeamS} />
              </div>
            </div>
            <div className={classes.teamSName}>Phillipus Amunyela</div>
            <div className={classes.teamSQuote}>.</div>
            <div className={classes.teamSStatus}></div>
            <div className={classes.teamSTitle}>Financial Officer</div>
            <div className={classes.socialSTeam}>
              <div className={classes.socialSEl}>
                <LinkedIn style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Instagram style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Facebook style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Twitter style={{ fontSize: "2.5vmin" }} />
              </div>
            </div>
          </div>
        </div>
        {/* Line 2 */}
        <div className={classes.teamShow}>
          {/* 4 */}
          <div className={classes.singleTeamNode}>
            <div className={classes.imageContainer}>
              <div className={classes.teamSImage}>
                <img alt="team4" src={mac} className={classes.truePicTeamS} />
              </div>
            </div>
            <div className={classes.teamSName}>Mack Kaputo</div>
            <div className={classes.teamSQuote}>.</div>
            <div className={classes.teamSStatus}></div>
            <div className={classes.teamSTitle}>Fullstack Developer</div>
            <div className={classes.socialSTeam}>
              <div className={classes.socialSEl}>
                <LinkedIn style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Instagram style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Facebook style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Twitter style={{ fontSize: "2.5vmin" }} />
              </div>
            </div>
          </div>
          {/* 5 */}
          {/* <div className={classes.singleTeamNode}>
            <div className={classes.imageContainer}>
              <div className={classes.teamSImage}>
                <img alt="team5" src={sar} className={classes.truePicTeamS} />
              </div>
            </div>
            <div className={classes.teamSName}>Saara Ileka</div>
            <div className={classes.teamSQuote}>
              <strong>&ldquo;</strong> You are once decision away from living a
              completely different life. <strong>&rdquo;</strong>
            </div>
            <div className={classes.teamSStatus}></div>
            <div className={classes.teamSTitle}>
              Chief Communication Officer
            </div>
            <div className={classes.socialSTeam}>
              <div className={classes.socialSEl}>
                <LinkedIn style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Instagram style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Facebook style={{ fontSize: "2.5vmin" }} />
              </div>
              <div className={classes.socialSEl}>
                <Twitter style={{ fontSize: "2.5vmin" }} />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Before last form */}
      <div className={classes.bodyPartFourContainer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={4}>
            <div className={classes.leftPartBPOContainerBeforeFooter}>
              <img alt="hands2" src={hands2} className={classes.phone1} />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.rightPartBPOContainer}>
              <SideSummary
                mainTitle={"One click away from your safe ride"}
                headTitles={[
                  "Taxi ranks",
                  "Private locations",
                  "Safety and affordability forever!",
                ]}
                subForTitles={[
                  "With taxi ranks being part of our public transport DNA, we couldn’t but have it as an option. Get a ride from any rank!",
                  "You could be at home, eating out with friends at your favourite restaurant or just hanging out at a friend’s place. It doesn't matter where you are, We’ll get you a ride. Additional N$5 pick-up fee.",
                  `On top of our checked & verified drivers' policy, you have 
                  a quick access to police line in case of emergencies Share live trip location with family and friends`,
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutDesktop;
