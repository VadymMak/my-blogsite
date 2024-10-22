// // src/components/Footer.tsx
// import React from "react";
// import styles from "./Footer.module.scss"; // Import your footer styles

// const Footer: React.FC = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footerContent}>
//         <p>© 2024 Your Company Name. All rights reserved.</p>
//         <div className={styles.socialIcons}>
//           <a
//             href="https://telegram.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fa-brands fa-telegram"></i>
//           </a>
//           <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-whatsapp"></i>
//           </a>
//           <a
//             href="https://www.viber.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fa-brands fa-viber"></i>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: contact@ubmarket.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.viber.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-viber"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 UB Market LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
