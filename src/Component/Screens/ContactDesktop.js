import classes from "../../styles/Contact_desktop.module.css";
import Header from "../Header";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactDesktop = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.mapContainer}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="1"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactDesktop;
