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
    import("../components/Carousel");
    import("../components/Contacts");
    import("./AboutUs");
    import("../components/Banner");
    import("../components/OurLocation");
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Welcome to UB Market - Quality Products at Your Fingertips
        </title>
        <meta
          name="description"
          content="Discover UB Market for quality vegetable oils, margarine, and more. Enjoy exceptional service and top-rated products tailored to your culinary needs. Shop now!"
        />
        <meta
          name="keywords"
          content="UB Market, quality products, vegetable oil, palm oil, margarine, sugar, dairy products, condiments, cooking ingredients"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="UB Market - Quality Products" />
        <meta
          property="og:description"
          content="Discover top-quality products and exceptional service with UB Market. Learn more about our offerings and connect with us!"
        />
        <meta
          property="og:image"
          content="https://ub-market.com/images/logo.png"
        />
        <meta property="og:url" content="https://ub-market.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ub-market.com" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "UB Market",
        "url": "https://ub-market.com/",
        "logo": "https://ub-market.com/images/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+359-8844-69860",
          "contactType": "Customer Service"
        }
      }
    `}
        </script>
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
