import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { useProducts } from "./useProducts";

export default function Body() {
  const products = useProducts();
  const bodyProducts = products.filter(
    (product) => product.category_name === "Body",
  );
  const totalCount = bodyProducts.length;

  return (
    <div className="body-page">
      <h2>Body</h2>
      <Link to="/" className="back">
        ← Back
      </Link>
      <h3>{totalCount} Products</h3>
      <div className="product-grid">
        {bodyProducts.map((product) => (
          <Link
            className="imgbox"
            to={`/product/${product.product_id}`}
            key={product.product_id}
            state={{ from: "body-page" }}
          >
            <img src={product.image} alt={product.product_name} />
            {product.bestseller === "y" && (
              <span className="label">Best Seller</span>
            )}
            <p className="desc">{product.product_name}</p>
            <p className="rate">£{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
