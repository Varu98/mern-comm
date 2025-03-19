import React from "react";
import { useParams } from "react-router";
import { useProducts } from "./ProductContext";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { products } = useProducts();
  let params = useParams();
  const productId = params.productId;
  const selectedProduct = products.find(
    (product) => product.id === Number(productId)
  );
  console.log(selectedProduct, productId);
  return (
    <div>
      <ProductCard key={selectedProduct.id} product={selectedProduct} />
    </div>
  );
};

export default ProductDetail;
