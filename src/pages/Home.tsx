import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import styles from "./Home.module.scss";

const Carousel = React.lazy(() => import("../components/Carousel"));
const Contacts = React.lazy(() => import("../components/Contacts"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Banner = React.lazy(() => import("../components/Banner"));
const OurLocation = React.lazy(() => import("../components/OurLocation"));

const Home: React.FC = () => {
  

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://ub-market.com" />
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
