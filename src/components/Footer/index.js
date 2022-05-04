import React from "react";
import styles from "./footer.module.css";
import FooterImage from "../../assets/images/footer-img.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src={FooterImage}
        alt="Imagem da Mind Consulting"
        className={styles.footerImage}
      />
    </footer>
  );
};

export default Footer;
