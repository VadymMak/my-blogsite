import React from "react";
import { Helmet } from "react-helmet"; // Ensure you install react-helmet
import styles from "./ContactsPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ContactsPage: React.FC = () => {
  return (
    <div className={styles.contactsPage}>
      <Helmet>
        <title>Contact Us | UB Market</title>
        <meta
          name="description"
          content="Get in touch with UB Market for inquiries, support, and feedback. Find our contact information, office hours, and location."
        />
        <meta
          name="keywords"
          content="Contact, UB Market, Support, Feedback, Location"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1>Contact Us</h1>

      <p>
        We’re here to help! Reach out to us for any inquiries, support, or
        feedback.
      </p>

      <section className={styles.contactInfo}>
        <h2>Our Contact Information</h2>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@ubmarket.com
        </p>
        <p>
          <strong>Address:</strong> 1234 Market Street, Suite 100
          <br />
          Varna, Bulgaria, 9010, Sirma Voivoda St., b.1, ap. 21
        </p>
      </section>

      <section className={styles.officeHours}>
        <h2>Office Hours</h2>
        <p>Our team is available during the following hours:</p>
        <ul>
          <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
          <li>Saturday: 10:00 AM - 2:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </section>

      <section className={styles.locationMap}>
        <h2>Find Us Here</h2>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93031.0181942096!2d27.78026205034398!3d43.2258611704557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45439205714b3%3A0x99c4e0902fa8939b!2s9010%20Varna%2C%20Bulgaria!5e0!3m2!1sen!2spl!4v1729407709833!5m2!1sen!2spl"
            className={styles.map}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      <section className={styles.followUs}>
        <h2>Follow Us on Social Media</h2>
        <p>Stay connected with us for updates and more.</p>
        <ul>
          <li>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactsPage;
