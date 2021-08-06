import classes from "../styles/Footer.module.css";
import Grid from "@material-ui/core/Grid";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocationOn,
  Public,
} from "@material-ui/icons";
import logoWhite from "../Images/logo_white.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainTitle}>
        <div className={classes.logoFooter}>
          <img
            alt="logofooter"
            src={logoWhite}
            className={classes.truLogoFooter}
          />
        </div>
      </div>
      {/* Table */}
      <div className={classes.tableElements}>
        <Grid container>
          <Grid item>
            <div className={classes.itemSpace}>
              <div className={classes.title}>Company</div>
              <div className={classes.elementIn}>About us</div>
              <div className={classes.elementIn}>Contact</div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item>
            <div className={classes.itemSpace}>
              <div className={classes.title}>Products</div>
              <div className={classes.elementIn}>Ride</div>
              <div className={classes.elementIn}>Delivery</div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Second stage */}
      <Grid container>
        <Grid item>
          <div className={classes.seconStageContainer}>
            <div className={classes.secondStageEls1}>
              <div className={classes.socialMed}>
                <Twitter style={{ fontSize: "2.3vmin" }} />
              </div>
              <div className={classes.socialMed}>
                <Instagram style={{ fontSize: "2.3vmin" }} />
              </div>
              <div className={classes.socialMed}>
                <Facebook style={{ fontSize: "2.3vmin" }} />
              </div>
              <div className={classes.socialMed}>
                <LinkedIn style={{ fontSize: "2.3vmin" }} />
              </div>
            </div>
            <div className={classes.secondStageEls2}>
              <div className={classes.sse2Part1}>
                <Public style={{ fontSize: "2.1vmin" }} />
                <span style={{ width: "5px" }}></span>English
              </div>
              <div className={classes.sse2Part2}>
                <LocationOn style={{ fontSize: "2.1vmin" }} />
                <span style={{ width: "5px" }}></span>Windhoek, Namibia
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* Thrid stage */}
      <Grid container className={classes.containerCopyrightTerms}>
        <Grid item xs={6} className={classes.copyrPart1}>
          <div>© 2021 Posterity TaxiConnect Technologies CC.</div>
        </Grid>
        <Grid item xs={6} className={classes.copyrPart2}>
          <div className={classes.termsEls}>Privacy</div>
          <div className={classes.termsEls} style={{ marginRight: 0 }}>
            Terms
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
