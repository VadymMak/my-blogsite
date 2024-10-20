// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
