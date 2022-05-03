import React, { useState } from "react";
import styles from "./checkout.module.css";
import Navbar from "../../components/Navbar";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Checkout = () => {
  const [formaDePagamentoSelecionada, setFormaDePagamentoSelecionada] =
    useState(1);
  const [nomeCartao, setNomeCartao] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [focus, setFocus] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleChange = (event) => {
    setNomeCartao(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content} style={{ marginTop: 32 }}>
        <div className={styles.grid_item} style={{ flex: 1 }}>
          <p style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            Formas de Pagamento
          </p>
          <div
            style={{
              border: "2px solid rgba(255,255,255,0.18)",
              borderRadius: 4,
              marginTop: 12,
              padding: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              value="boleto"
              checked={formaDePagamentoSelecionada == 1}
              name="forma_pagamento"
              onChange={() => setFormaDePagamentoSelecionada(1)}
            />
            <p style={{ marginLeft: 6, fontSize: 16, color: "white" }}>
              Boleto Bancário
            </p>
          </div>{" "}
          <div
            style={{
              border: "2px solid rgba(255,255,255,0.18)",
              borderRadius: 4,
              marginTop: 12,
              padding: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              checked={formaDePagamentoSelecionada == 2}
              name="forma_pagamento"
              onChange={() => setFormaDePagamentoSelecionada(2)}
            />
            <p style={{ marginLeft: 6, fontSize: 16, color: "white" }}>
              Cartão de Crédito
            </p>
          </div>
          <p
            style={{
              fontSize: 22,
              color: "white",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Cartões cadastrados
          </p>
          <button
            style={{
              height: 35,
              marginTop: 12,
              border: 0,
              borderRadius: 4,
              backgroundColor: "orange",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              Adicionar Cartão
            </p>
          </button>
        </div>
        {/* Coluna do meio */}
        <div
          className={styles.grid_item}
          style={{ flex: 2, padding: "0 32px" }}
        >
          <div className={styles.new_card_wrapper}>
            <Cards
              cvc={cvc}
              expiry={expiryDate}
              focused={focus}
              name={nomeCartao}
              number={cardNumber}
            />
            <div
              style={{
                border: "2px solid rgba(255,255,255,0.18)",
                padding: 12,
                marginLeft: 6,
                borderRadius: 4,
              }}
            >
              <p style={{ fontSize: 22, color: "white" }}>
                Novo Cartão de Crédito
              </p>
              <div style={{ marginTop: 16 }}>
                <input
                  onChange={handleChange}
                  value={nomeCartao}
                  type="text"
                  placeholder="Nome impresso no cartão"
                />
                <input
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={16}
                  type="text"
                  style={{ marginTop: 12 }}
                  placeholder="Número do cartão"
                />
                <div style={{ display: "flex", marginTop: 12 }}>
                  <input
                    type="text"
                    style={{ marginRight: 12 }}
                    placeholder="Mês de vencimento"
                  />
                  <input type="text" placeholder="Ano de venc. (4 dígitos)" />
                </div>{" "}
                <div style={{ display: "flex", marginTop: 12 }}>
                  <input
                    type="text"
                    style={{ marginRight: 12 }}
                    placeholder="Código de verificação"
                  />
                  <input type="text" placeholder="Valor" />
                </div>
                <button
                  style={{
                    height: 35,
                    marginTop: 12,
                    border: 0,
                    borderRadius: 4,
                    backgroundColor: "orange",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "semibold",
                      color: "white",
                    }}
                  >
                    Cadastrar Cartão
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 32,
              padding: 12,
              border: "2px solid rgba(255,255,255,0.18)",
              borderRadius: 6,
            }}
          >
            <p style={{ fontSize: 22, color: "white" }}>Endereço</p>
            <div className={styles.form_wrapper}>
              <div style={{ display: "flex" }}>
                <input
                  placeholder="CEP"
                  style={{ marginTop: 12, marginRight: 12 }}
                  type="text"
                />
                <input
                  placeholder="Estado"
                  style={{ marginTop: 12 }}
                  type="text"
                />
              </div>
              <div style={{ display: "flex" }}>
                <input
                  placeholder="Cidade"
                  style={{ marginTop: 12, marginRight: 12 }}
                  type="text"
                />
                <input
                  placeholder="Rua"
                  style={{ marginTop: 12 }}
                  type="text"
                />
              </div>
              <div style={{ display: "flex" }}>
                <input
                  placeholder="Número"
                  style={{ marginTop: 12, marginRight: 12 }}
                  type="text"
                />
                <input
                  placeholder="Bairro"
                  style={{ marginTop: 12 }}
                  type="text"
                />
              </div>
              <button
                style={{
                  height: 35,
                  marginTop: 12,
                  border: 0,
                  borderRadius: 4,
                  backgroundColor: "orange",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Calcular Frete
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* Ultima coluna */}
        <div
          className={styles.grid_item}
          style={{ flex: 1, flexDirection: "column" }}
        >
          <p>Produtos</p>
          {/* {} */}

          <div
            style={{
              padding: 16,
              border: "2px solid rgba(255,255,255,0.18)",
              borderRadius: 6,
            }}
          >
            <p style={{ color: "white" }}>Resumo</p>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.18)",
                paddingBottom: 6,
              }}
            >
              <p style={{ color: "white" }}>valor</p>
              <p style={{ color: "white" }}>R$30,00</p>
            </div>
            <div
              style={{
                marginTop: 8,
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.18)",
                paddingBottom: 6,
              }}
            >
              <p style={{ color: "white" }}>Frete</p>
              <p style={{ color: "white" }}>R$30,00</p>
            </div>
            <div
              style={{ padding: 8, backgroundColor: "#c3c3c3", marginTop: 16 }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ color: "white" }}>Total a prazo:</p>
                <p style={{ color: "white" }}>R$30,00</p>
              </div>
              <p style={{ color: "white" }}>Em x vezes sem juros</p>
              <button
                style={{
                  height: 35,
                  marginTop: 12,
                  border: 0,
                  borderRadius: 4,
                  backgroundColor: "orange",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Finalizar compra
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
