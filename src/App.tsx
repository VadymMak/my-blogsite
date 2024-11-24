import React, { Suspense, lazy, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { initGA } from "./analytics";

import Layout from "./layouts/Layout"; // Your main layout component
import NotFound from "./components/NotFound"; // Your 404 Not Found component

import "./118n/i18n"; // Ensure your translation setup is loaded

// Lazy load the components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const OurProducts = lazy(() => import("./pages/OurProducts"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

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
      { path: "blog", element: <BlogPage /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // Fallback for unmatched routes
]);

// Main App Component
function App() {
  useEffect(() => {
    initGA(); // Инициализация GA
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
