import React, { createContext, useEffect, useState } from "react";
import axios from "./axios.jsx";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );
  useEffect(() => {
    console.log("context got called", products);
    async function getProducts() {
      const res = await axios("/products");
      setProducts(res.data);
    }
    if (!products) {
      getProducts();
    }
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
