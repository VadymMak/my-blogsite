import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./Home.module.scss";

// Lazy-loaded components
const Carousel = React.lazy(() => import("../components/Carousel"));
const Contacts = React.lazy(() => import("../components/Contacts"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Banner = React.lazy(() => import("../components/Banner"));
const OurLocation = React.lazy(() => import("../components/OurLocation"));

const Home: React.FC = () => {
  useEffect(() => {
    // Preload important components without rendering them
    import("../components/Carousel");
    import("../components/Contacts");
    import("./AboutUs");
    import("../components/Banner");
    import("../components/OurLocation");
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>
          Welcome to UB Market - Quality Products at Your Fingertips
        </title>
        <meta
          name="description"
          content="Explore UB Market, where quality products and exceptional service meet. Discover our top-rated items and learn more about our story."
        />
        <meta
          name="keywords"
          content="UB Market, quality products, carousel, contact, location"
        />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <Suspense fallback={<div>Loading main content...</div>}>
        <div className={styles.home}>
          <Banner />
          <section className={styles.section}>
            <AboutUs />
          </section>
          <Carousel />
          <section className={styles.section}>
            <Contacts />
          </section>
          <OurLocation />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
