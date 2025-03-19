import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get(url);
      setProducts(data.products);
    }

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
