import classes from "../../styles/Contact_desktop.module.css";
import Header from "../Header";
import { useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import ReactMapGL from "react-map-gl";
import MapGL from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFzdGVycm9vdCIsImEiOiJja3EzcmRpN3gwZzAxMm9vNjR6ZDd6b296In0.5s0exTc2Fch6A2X67mRxlQ";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWFzdGVycm9vdCIsImEiOiJja3EzcmRpN3gwZzAxMm9vNjR6ZDd6b296In0.5s0exTc2Fch6A2X67mRxlQ";

class ContactDesktop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lat: -22.575694,
      lng: 17.083251,
      zoom: 14,

      viewport: {
        longitude: -22.575694,
        latitude: 17.083251,
        zoom: 14,
        bearing: 0,
        pitch: 0,
      },
    };
    this.mapContainer = React.createRef();
  }

  static defaultProps = {
    center: {
      lat: -22.575694,
      lng: 17.083251,
    },
    zoom: 11,
  };

  componentDidMount() {
    // const { lng, lat, zoom } = this.state;
    // const map = new mapboxgl.Map({
    //   container: this.mapContainer.current,
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [lng, lat],
    //   zoom: zoom,
    // });
  }

  render() {
    // const [viewport, setViewport] = useState({
    //   width: "100%",
    //   height: "100%",
    //   latitude: -22.575694,
    //   longitude: 17.083251,
    //   zoom: 13,
    // });

    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.mapContainer}>
          {/* <MapGL
            {...this.state.viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={(viewport) => this.setState({ viewport })}
            accessToken={
              "pk.eyJ1IjoibWFzdGVycm9vdCIsImEiOiJja3EzcmRpN3gwZzAxMm9vNjR6ZDd6b296In0.5s0exTc2Fch6A2X67mRxlQ"
            }
          /> */}
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBW_ELvI97k4hrop74KL2VIVG8xzAQHUR0",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={-22.575694}
              lng={17.083251}
              text="My Marker"
            />
          </GoogleMapReact> */}
          {/* <div ref={this.mapContainer} className={classes.mapContainer} /> */}
          <ReactMapGL
            width={"100%"}
            height={"100%"}
            zoom={13}
            mapStyle={"mapbox://styles/mapbox/streets-v11"}
            mapboxApiAccessToken={
              "pk.eyJ1IjoiZG9taW5pcXVla3R0IiwiYSI6ImNrYXg0M3gyNDAybDgyem81cjZuMXp4dzcifQ.PpW6VnORUHYSYqNCD9n6Yg"
            }
          />
          {/* <MapGL
          style={{ width: "100%", height: "400px" }}
          mapStyle="mapbox://styles/masterroot/ckq3roasw2m4u18mjz8xkoale"
          accessToken={MAPBOX_ACCESS_TOKEN}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={setViewport}
        /> */}
        </div>
      </div>
    );
  }
}

export default ContactDesktop;
