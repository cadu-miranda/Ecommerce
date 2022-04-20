import React from "react";
import Filter from "../Filter";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <p className={styles.title}>Filtros</p>
      <div>
        <Filter
          name="Gender"
          options={[{ name: "Male" }, { name: "Female" }]}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <Filter
          name="Product Type"
          options={[{ name: "Shirts" }, { name: "Pants" }]}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <Filter
          name="Size"
          options={[{ name: "S" }, { name: "M" }, { name: "L" }]}
        />
      </div>
      <div className={styles.checkbox_group}></div>
    </aside>
  );
};

export default Sidebar;
