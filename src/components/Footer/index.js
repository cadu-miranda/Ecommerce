import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {[1, 2, 3, 4].map(() => (
        <div>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            commodo metus vel elit vehicula, vel vulputate est elementum.
            Vestibulum justo velit, euismod eget elit eu, aliquet scelerisque
            tellus. Vivamus at condimentum dolor.
          </p>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
