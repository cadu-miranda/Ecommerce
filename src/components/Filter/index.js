import React from "react";
import styles from "./filter.module.css";

const Filter = ({ name, options }) => {
  return (
    <div className={styles.filter_wrapper}>
      <p className={styles.filter_name}>{name}</p>
      {options?.map((option) => {
        return (
          <div className={styles.option_wrapper}>
            <input
              type="radio"
              id={option.name.toLowerCase()}
              name={name.toLowerCase()}
            />
            <label for="scales">{option.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
