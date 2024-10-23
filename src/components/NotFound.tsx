import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>
        Return to Home
      </Link>
    </section>
  );
};

export default NotFound;
