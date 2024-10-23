// src/App.tsx
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layoutes/Layout";
import NotFound from "./components/NotFound";
import OurProducts from "./pages/OurProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <OurProducts /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // Fallback for unmatched routes
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
