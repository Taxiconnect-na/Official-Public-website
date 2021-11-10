import classes from "../styles/DownloadButton.module.css";
import playstoreIcon from "../Images/playstorecolor.png";
import appstoreIcon from "../Images/apple.png";
import appgallery from "../Images/huawei.png";

const ButtonDownload = ({
  introTitle = "Get it on",
  storeName = "Playstore",
  storeIcon = "playstore",
  marginLeft = 0,
  link = null,
}) => {
  return (
    <div
      onClick={
        link !== null
          ? () => {
              window.location.href = link;
            }
          : {}
      }
      className={classes.container}
      style={{ marginLeft: marginLeft }}
    >
      <div className={classes.iconPart}>
        <img
          alt="ico"
          src={
            storeIcon === "playstore"
              ? playstoreIcon
              : storeIcon === "appstore"
              ? appstoreIcon
              : appgallery
          }
          className={classes.iconTrueIco}
        />
      </div>
      <div className={classes.textPart}>
        <div className={classes.introText}>{introTitle}</div>
        <div className={classes.storeName}>{storeName}</div>
      </div>
    </div>
  );
};

export default ButtonDownload;
