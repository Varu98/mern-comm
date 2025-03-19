import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { thumbnail, title, description, price, id } = product;
  return (
    <Link className="product-link" to={`/products/${id}`}>
      <div className="product-card">
        <img src={thumbnail} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
