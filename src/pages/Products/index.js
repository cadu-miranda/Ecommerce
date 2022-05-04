import React, { useState, useEffect } from "react";
import styles from "./shop.module.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

import { FaSearch } from "react-icons/fa";
import { api } from "../../services/api";
import { products } from "../../utils/products";

import { useCart } from "../../hooks/useCart";

const Products = () => {
  const [produtos, setProdutos] = useState(products);

  const { addProduct } = useCart();

  useEffect(() => {
    // const getProducts = async () => {
    //   try {
    //     const response = await api.get("https://fakestoreapi.com/products");
    //     console.log(response.data);
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <main className={styles.content__main}>
          <div className={styles.content__main__inputbox}>
            <div className={styles.filter_input}>
              <FaSearch style={{ marginLeft: 8 }} color="#000" />
              <input
                type="search"
                className={styles.searchbar}
                placeholder="Pesquisar..."
              />
            </div>
            <button className={styles.sort}>Menor preço</button>
          </div>
          <div style={{ display: "flex", marginTop: 70 }}>
            <div className={styles.sidebar_main}>
              <Sidebar />
            </div>
            <div className={styles.content__main__grid}>
              {produtos.map((product) => {
                console.log(product);
                return (
                  <Card
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    description={product.description}
                    onClick={() => addProduct(product.id)}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
