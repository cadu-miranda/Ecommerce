import React from "react";
import styles from "./navbar.module.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.navbar__logo}>Logo</p>
      <div className={styles.navbar__buttonbox}>
        <Link to="/cart">
          <button className={styles.button}>
            <AiOutlineShoppingCart color="white" fontSize={22} />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
