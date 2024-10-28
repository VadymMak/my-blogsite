import React, { startTransition, Suspense } from "react";
import styles from "./Home.module.scss";

const Carousel = React.lazy(() => import("../components/Carousel"));
const Contacts = React.lazy(() => import("../components/Contacts"));
// const PhoneIcon = React.lazy(() => import("../components/PhoneIcon"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Banner = React.lazy(() => import("../components/Banner"));
const OurLocation = React.lazy(() => import("../components/OurLocation"));

const Home: React.FC = () => {
  const handleLoadComponents = () => {
    startTransition(() => {
      // This loads all lazy components without suspending
    });
  };

  React.useEffect(() => {
    handleLoadComponents();
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
        {/* <PhoneIcon /> */}
      </div>
    </Suspense>
  );
};

export default Home;
