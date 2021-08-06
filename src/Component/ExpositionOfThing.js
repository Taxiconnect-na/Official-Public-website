import classes from "../styles/ExpositionOfThing.module.css";
import Grid from "@material-ui/core/Grid";

const ExpositionOfThing = ({
  picturesToExpose = [1, 2, 3, 4, 5, 6, 7],
  mainTitle = "My main title here",
  subtitle = "Here will be my subtitle",
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.expoPart}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {picturesToExpose.map((picture, index) => {
            let currentIndex = index + 1; //Index of the current element
            let middlePic = Math.round(picturesToExpose.length / 2);
            let middleSize = 2;
            let sideSize = Math.floor(
              (12 - middleSize) / picturesToExpose.length
            );
            let basePaddingBottom = 45;
            let sidePaddingBottom = `${
              Math.abs(middlePic - currentIndex) * basePaddingBottom
            }px`;
            //...
            if (middlePic === index + 1) {
              //Aat the middle
              return (
                <Grid item xs={middleSize}>
                  <div className={classes.middleElement}>
                    <img
                      alt={index}
                      src={picture}
                      className={classes.middlePic}
                    />
                  </div>
                </Grid>
              );
            } //Normal els
            else {
              return (
                <Grid
                  item
                  xs={sideSize}
                  style={{ paddingBottom: sidePaddingBottom }}
                >
                  <div className={classes.sideElement}>
                    <img
                      alt={index}
                      src={picture}
                      className={classes.sidePic}
                    />
                  </div>
                </Grid>
              );
            }
          })}
        </Grid>
      </div>
      <div className={classes.mainTitle}>{mainTitle}</div>
      <div className={classes.subtitle}>{subtitle}</div>
      <div className={classes.separator}></div>
    </div>
  );
};

export default ExpositionOfThing;
