import classes from "../styles/Header.module.css";
import logo from "../Images/logo.png";
import Grid from "@material-ui/core/Grid";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <div className={classes.headerBar}>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <div className={classes.logo}>
            <img alt="logo" src={logo} className={classes.logoImg} />
          </div>
        </Grid>
        <Grid item>
          <div>
            <span className={classes.headerMenuName}>About</span>
            <span className={classes.headerMenuName}>Privacy</span>
            <span className={classes.headerMenuName}>Contact</span>
          </div>
        </Grid>
        <div className={classes.loginSignupContainer}>
          <LoginButton />
        </div>
      </Grid>
    </div>
  );
};

export default Header;
