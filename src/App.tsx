import React, { Suspense, lazy, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { initGA } from "./analytics";

import Layout from "./layouts/Layout";
import NotFound from "./components/NotFound";

import "./118n/i18n";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const OurProducts = lazy(() => import("./pages/OurProducts"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

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
  { path: "*", element: <NotFound /> },
]);

function App() {
  useEffect(() => {
    initGA(); // Initialize GA
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;