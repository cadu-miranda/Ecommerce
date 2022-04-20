import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          height: "650px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* left */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 40px",
          }}
        >
          <div>
            <div>
              <h3
                style={{
                  color: "white",
                  margin: 0,
                  padding: 0,
                  fontSize: 18,
                }}
              >
                Mens Clothing
              </h3>
              <h1 style={{ color: "white", fontSize: 36 }}>
                Evolution Black T-shirt{" "}
              </h1>
              <p style={{ color: "white", fontSize: 18 }}>
                Do you believe that Bitcoin is the evolution of money? Spread
                the word to those no-coiners with this cool t-shirt
              </p>
            </div>
            {/* Box */}
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                padding: 18,
                width: "420px",
                marginTop: 32,
                borderRadius: 15,
              }}
            >
              <p style={{ color: "white" }}>R$30,00</p>
              <div style={{ marginTop: 28 }}>
                <p style={{ color: "white" }}>Size</p>
                <p style={{ color: "white" }}>Quadrado</p>
              </div>
              <div style={{ marginTop: 28 }}>
                <p style={{ color: "white" }}>Quantidade</p>
                <p style={{ color: "white" }}>Controles</p>
              </div>
              <button
                style={{
                  width: 240,
                  padding: 8,
                  border: 0,
                  borderRadius: 8,
                  marginTop: 28,
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
        {/* right */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div
              style={{
                width: "480px",
                height: "420px",
                //   margin: "auto auto",
                backgroundColor: "orangered",
              }}
            >
              a
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: 140,
                  height: 140,
                  marginTop: "22px",
                  backgroundColor: "orangered",
                }}
              >
                a
              </div>
              <div
                style={{
                  width: 140,
                  height: 140,
                  marginTop: "22px",
                  backgroundColor: "orangered",
                }}
              >
                b
              </div>
              <div
                style={{
                  width: 140,
                  height: 140,
                  marginTop: "22px",
                  backgroundColor: "orangered",
                }}
              >
                c
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
