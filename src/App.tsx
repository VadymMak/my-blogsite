// src/App.tsx
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layoutes/Layout";
import NotFound from "./components/NotFound";
import OurProducts from "./pages/OurProducts";
import ContactsPage from "./pages/ContactsPage";

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
