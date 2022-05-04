import React from "react";
import styles from "./navbar.module.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import MindLogo from "../../assets/images/header-img.svg";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <img src={MindLogo} alt="Logo da Mind Consulting" />
      <div className={styles.navbar__buttonbox}>
        <Link to="/cart">
          <button className={styles.button}>
            <AiOutlineShoppingCart fontSize={22} />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
