import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem("@commerce:Cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return {};
  });

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addProduct = async (productId) => {
    try {
      // TODO
      const cartProductsIds = Object.keys(cart);
      const isProductAlreadyInCart = cartProductsIds.includes(
        String(productId)
      );

      let newCart = {};

      if (isProductAlreadyInCart) {
        newCart = { ...cart, [productId]: cart[productId] + 1 };
        setCart(newCart);
        localStorage.setItem("@commerce:Cart", JSON.stringify(newCart));
        toast.success("Produto adicionado com sucesso!");
      } else {
        newCart = { ...cart, [productId]: 1 };
        setCart(newCart);
        localStorage.setItem("@commerce:Cart", JSON.stringify(newCart));
        toast.success("Produto adicionado com sucesso!");
      }
    } catch (error) {
      // TODO
      console.log(error);
      toast.error("Falha ao adicionar produto!");
    }
  };

  const removeProduct = (productId) => {
    try {
      // TODO
      let newCart = { ...cart };
      delete newCart[String(productId)];

      setCart(newCart);
      localStorage.setItem("@commerce:Cart", JSON.stringify(newCart));
    } catch (error) {
      // TODO
      console.log(error);
    }
  };

  const updateProductAmount = async ({ productId, amount }) => {
    try {
      // TODO
      if (amount <= 0) return;
      let newCart = { ...cart };
      newCart[productId] = amount;
    } catch (error) {
      // TODO
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
