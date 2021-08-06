import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Component/Home";
import AboutDesktop from "./Component/Screens/AboutDesktop";
import PrivacyDesktop from "./Component/Screens/PrivacyDesktop";
import ContactDesktop from "./Component/Screens/ContactDesktop";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ContactDesktop />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
