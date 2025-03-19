import "./App.css";
import { useProducts } from "./ProductContext";
import ProductListing from "./ProductListing";

function App() {
  const { products } = useProducts();
  return (
    <>
      <ProductListing products={products} />
    </>
  );
}

export default App;
