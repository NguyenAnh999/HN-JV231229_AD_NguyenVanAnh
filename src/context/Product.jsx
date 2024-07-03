import React, { createContext, useState } from "react";
import ListProduct from "../product/ListProduct";
import Header from "../layouts/header/Header";
import ProductsJison from "../data.json";
import { theme } from "antd";
import Cart from "../product/Cart";

export const ProductContext = createContext();

export default function Product() {
  const [products, setProducts] = useState(ProductsJison.products);
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );
  const [totalPrice, setTotalPrice] = useState(() => {
    return carts.reduce(
      (pre, crr) => pre + crr.product.price * crr.quantity,
      0
    );
  });

  const handleAdd = (id) => {
    if (carts.findIndex((cart) => cart.product.id === id) >= 0) {
      if (carts[carts.findIndex((cart) => cart.product.id === id)].quantity>= carts[carts.findIndex((cart) => cart.product.id === id)].product.quantity ) {
        alert("vượt quá số lượng")
        return
      }
      carts[carts.findIndex((cart) => cart.product.id === id)].quantity =
        carts[carts.findIndex((cart) => cart.product.id === id)].quantity + 1;
      const newCarts = [...carts];
      setCarts(newCarts);
      localStorage.setItem("carts", JSON.stringify(newCarts));
    } else {
      const cart = {
        id: Math.ceil(Math.random() * 1999),
        product: products[products.findIndex((pro) => pro.id === id)],
        quantity: 1,
      };
      const newCarts = [...carts, cart];
      setCarts(newCarts);
      localStorage.setItem("carts", JSON.stringify(newCarts));
    }

    setTotalPrice(
      carts.reduce((pre, crr) => pre + crr.product.price * crr.quantity, 0)
    );
  };

  const handleMinus = (index) => {
    if (carts[index].quantity === 1) {
      handleMinusAll(index);
    } else if (carts[index].quantity > carts[index].product.quantity) {
      alert("vượt quá số lượng trong kho");
    } else {
      carts[index].quantity = carts[index].quantity - 1;
      const newCarts = [...carts];
      setCarts(newCarts);
      setTotalPrice(
        newCarts.reduce((pre, crr) => pre + crr.product.price * crr.quantity, 0)
      );
      localStorage.setItem("carts", JSON.stringify(newCarts));
    }
  };
  const handleMinusAll = (index) => {
    carts.splice(index, 1);
    const newCarts = [...carts];
    setCarts(newCarts);
    setTotalPrice(
      newCarts.reduce((pre, crr) => pre + crr.product.price * crr.quantity, 0)
    );
    localStorage.setItem("carts", JSON.stringify(newCarts));
  };
  const dataGlobal = {
    products: products,
    carts: carts,
    setCarts: setCarts,
    totalPrice: totalPrice,
    setTotalPrice,
    handleAdd,
    handleMinus,
    handleMinusAll,
  };
  return (
    <>
      <ProductContext.Provider value={dataGlobal}>
        <Header />
        <ListProduct />
      </ProductContext.Provider>
    </>
  );
}
