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
        <ButtonDownload
          link={"https://play.google.com/store/apps/details?id=com.taxiconnect"}
        />
        <ButtonDownload
          storeIcon="appstore"
          introTitle="Or"
          storeName="AppStore"
          marginLeft={"5%"}
          link={"https://apps.apple.com/us/app/taxiconnect/id1523176507"}
        />
        <ButtonDownload
          storeIcon="appgallery"
          introTitle="Or"
          storeName="AppGallery"
          marginLeft={"5%"}
          link={"https://appgallery.huawei.com/app/C104325591"}
        />
      </div>
    </div>
  );
};

export default SafetyShowcase;
