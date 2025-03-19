import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductListing;
