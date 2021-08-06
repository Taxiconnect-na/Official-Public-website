import classes from "../../styles/Contact_desktop.module.css";
import Header from "../Header";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../styles/leaflet/leaflet.css";
import L from "leaflet";

const iconPerson = new L.Icon({
  iconUrl: require("../../styles/leaflet/images/marker-icon.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

const ContactDesktop = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.mapContainer}>
        <MapContainer
          center={[-22.575694, 17.083251]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='TaxiConnect | <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            accessToken="pk.eyJ1IjoiZG9taW5pcXVla3R0IiwiYSI6ImNrYXg0M3gyNDAybDgyem81cjZuMXp4dzcifQ.PpW6VnORUHYSYqNCD9n6Yg"
            maxZoom={15}
            minZoom={15}
            id="mapbox/streets-v11"
            tileSize={512}
            zoomOffset={-1}
          />
          <Marker icon={iconPerson} position={[-22.575694, 17.083251]}>
            <Popup>TaxiConnect Headquarters</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactDesktop;
