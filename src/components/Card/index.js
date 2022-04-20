import React from "react";
import styles from "./card.module.css";

const Card = ({ title, price, image, category, description, onClick }) => {
  const preco = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <div className={styles.card}>
      <img src={image} alt="title" />
      <div className={styles.card__content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.title}>{category}</p>
        <p className={styles.price}>{preco}</p>
        <button onClick={onClick} className={styles.button}>
          Buy now!
        </button>
      </div>
    </div>
  );
};

export default Card;
