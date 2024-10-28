// src/App.tsx
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layouts/Layout"; // Corrected the spelling from 'layoutes' to 'layouts'
import Home from "./pages/Home";
import About from "./pages/About";
import OurProducts from "./pages/OurProducts";
import ContactsPage from "./pages/ContactsPage";
import NotFound from "./components/NotFound";
import "./118n/i18n"; // Ensure your translation setup is loaded

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <OurProducts /> },
      { path: "contacts", element: <ContactsPage /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // Fallback for unmatched routes
]);

// Main App Component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
