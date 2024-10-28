// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // or any global CSS

// Get the root element from the DOM
const container = document.getElementById("root");

// Ensure container exists before using createRoot
if (container) {
  // Initialize the root with createRoot
  const root = ReactDOM.createRoot(container);

  // Render the App component into the root
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
