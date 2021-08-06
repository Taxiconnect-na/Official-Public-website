import classes from "../styles/SideSummary.module.css";
import { CheckCircle } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

const SideSummary = ({
  mainTitle = "Why TaxiConnect?",
  headTitles = ["title1", "title2"],
  subForTitles = ["sub1", "sub2"],
  iconLeading = <CheckCircle />,
  endComponents = null,
}) => {
  return (
    <div className={classes.container}>
      {mainTitle !== null ? (
        <div
          className={classes.mainTitle}
          style={{ marginLeft: iconLeading == null ? "40px" : "0px" }}
        >
          {mainTitle}
        </div>
      ) : null}
      {headTitles.map((title, index) => {
        return (
          <div
            className={classes.elementInsideContainer}
            style={{ marginLeft: iconLeading == null ? "40px" : "0px" }}
          >
            {iconLeading !== null ? (
              <div className={classes.insidePicContainer}>{iconLeading}</div>
            ) : null}
            <div className={classes.insideTextContainer}>
              <div className={classes.titleElement}>{title}</div>
              <div className={classes.subtitleElement}>
                {subForTitles[index]}
              </div>
            </div>
          </div>
        );
      })}
      <br />
      <br />
      {/* Buttons actions */}
      {endComponents !== null ? (
        <div className={classes.elementInsideContainer}>
          <div className={classes.insidePicContainer}></div>
          <div className={classes.insideTextContainer}>
            <Grid container>
              {endComponents.map((component, index) => {
                return <Grid item>{component}</Grid>;
              })}
            </Grid>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SideSummary;
