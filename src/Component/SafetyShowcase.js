import classes from "../styles/SafetyShowcase.module.css";
import ButtonDownload from "./ButtonDownload";
import {
  Map,
  Explore,
  EmojiPeople,
  Fingerprint,
  EmojiTransportation,
} from "@material-ui/icons";

const SafetyShowcase = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bigTitle}>Enjoy Safety by Default</div>
      <div className={classes.emojiIconsElements}>
        <div className={classes.smallElements}>
          <Map />
        </div>
        <div className={classes.smallElements}>
          <Explore />
        </div>
        <div className={classes.smallElements}>
          <EmojiPeople />
        </div>
        <div className={classes.smallElements}>
          <Fingerprint />
        </div>
        <div className={classes.smallElements}>
          <EmojiTransportation />
        </div>
      </div>
      <div className={classes.downloadParts}>
        <ButtonDownload />
        <ButtonDownload
          storeIcon="appstore"
          introTitle="Or"
          storeName="AppStore"
          marginLeft={"5%"}
        />
        <ButtonDownload
          storeIcon="appgallery"
          introTitle="Or"
          storeName="AppGallery"
          marginLeft={"5%"}
        />
      </div>
    </div>
  );
};

export default SafetyShowcase;
