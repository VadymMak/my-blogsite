import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
