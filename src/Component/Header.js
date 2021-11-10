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
            <img
              alt="logo"
              src={logo}
              className={classes.logoImg}
              onClick={() => (window.location.href = "/")}
            />
          </div>
        </Grid>
        <Grid item>
          <div>
            <span
              className={classes.headerMenuName}
              onClick={() => (window.location.href = "/about")}
            >
              About
            </span>
            <span
              className={classes.headerMenuName}
              onClick={() => (window.location.href = "/privacy")}
            >
              Privacy
            </span>
            <span
              className={classes.headerMenuName}
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </span>
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
