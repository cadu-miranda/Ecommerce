import Product from "./pages/Product";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

import { CartProvider } from "./hooks/useCart";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/slug" element={<Product />} />
        <Route path="/cart" element={<Checkout />} />
      </Routes>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
