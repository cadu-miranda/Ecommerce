import React from "react";
import Filter from "../Filter";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <p className={styles.title}>Filtros</p>
      <div style={{ marginTop: 16 }}>
        <Filter
          name="Categoria"
          options={[
            { name: "Blusas" },
            { name: "Camisas" },
            { name: "Calças" },
          ]}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <Filter
          name="Tamanho"
          options={[
            { name: "PP" },
            { name: "P" },
            { name: "M" },
            { name: "G" },
            { name: "GG" },
          ]}
        />
      </div>
      <div>
        <Filter
          name="Gênero"
          options={[
            { name: "Masculino" },
            { name: "Feminino" },
            { name: "Unissex" },
          ]}
        />
      </div>

      <div className={styles.checkbox_group}></div>
    </aside>
  );
};

export default Sidebar;
