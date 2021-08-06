import classes from "../styles/ConnectMeUs.module.css";
import Grid from "@material-ui/core/Grid";
import { Person, CreditCard } from "@material-ui/icons";
//Imaages
import connectme from "../Images/connectme.jpg";
import connectus from "../Images/connectus.jpg";
import linkConnect from "../Images/link.png";

const ConnectMeUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.introConnectsContainer}>
        <div className={classes.introConnectsImgContainer}>
          <img
            alt="connectstheme"
            src={linkConnect}
            className={classes.linkImg}
          />
        </div>
        <div className={classes.subTextIntroConnects}>
          We understand that after your safety, you should have choice of
          convenience.
        </div>
      </div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <div className={classes.containerCard}>
            <div className={classes.imageCardContainer}>
              <img
                alt="connectus"
                src={connectus}
                className={classes.imageCardTrue}
              />
            </div>
            <div className={classes.mainTitleCard}>ConnectUs</div>
            <div className={classes.subTextCard}>
              Affordably get around the city by sharing your ride with other
              passengers heading the same direction. This shared option allows
              you to share rides with different passengers.
            </div>
            <div className={classes.specCardText}>
              <div className={classes.passengerLine}>
                <Person style={{ fontSize: 21 }} />4 passengers
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className={classes.linearSeparatorConnects}></div>
        </Grid>
        <Grid item>
          <div className={classes.containerCard}>
            <div className={classes.imageCardContainer}>
              <img
                alt="connectme"
                src={connectme}
                className={classes.imageCardTrue}
              />
            </div>
            <div className={classes.mainTitleCard}>ConnectMe</div>
            <div className={classes.subTextCard}>
              For those times when you need the car to yourself, it’s a more
              comfortable option that allows you to be the only person in the
              car and also gives you the benefit to arrive faster at your
              destination.
            </div>
            <div className={classes.specCardText}>
              <div className={classes.passengerLine}>
                <Person style={{ fontSize: 21 }} />3 passengers
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ConnectMeUs;
