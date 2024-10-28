import React, { startTransition, Suspense, useEffect } from "react";
import styles from "./Home.module.scss";

const Carousel = React.lazy(() => import("../components/Carousel"));
const Contacts = React.lazy(() => import("../components/Contacts"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Banner = React.lazy(() => import("../components/Banner"));
const OurLocation = React.lazy(() => import("../components/OurLocation"));

const Home: React.FC = () => {
  useEffect(() => {
    startTransition(() => {
      // Lazy load all components without suspending
      import("../components/Carousel");
      import("../components/Contacts");
      import("./AboutUs");
      import("../components/Banner");
      import("../components/OurLocation");
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
  );
};

export default Home;
