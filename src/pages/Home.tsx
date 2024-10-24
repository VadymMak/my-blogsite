// src/pages/Home.tsx
import React from "react";
import styles from "./Home.module.scss";
import PhoneIcon from "../components/PhoneIcon";
import Contacts from "../components/Contacts";
import Carousel from "../components/Carousel";
import AboutUs from "./AboutUs";
import Banner from "../components/Banner";
import OurLocation from "../components/OurLocation";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Banner Section */}
      <Banner />
      {/* Second Section: About Us */}
      <section className={styles.section}>
        <AboutUs />
      </section>
      <Carousel />
      {/* Other components can go here */}
      <section className={styles.section}>
        <Contacts />
      </section>
      {/* Google Map Section */}
      <OurLocation />
      {/* Phone Icon Section */}
      <PhoneIcon />
    </div>
  );
};

export default Home;
