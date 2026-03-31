import React from "react";
import "./HomeScents.css";
import { Link } from "react-router-dom";
import { useProducts } from "./useProducts";

export default function Scents() {
  const products = useProducts();
  const scentsProducts = products.filter(
    (product) => product.category_name === "Home scents",
  );
  const totalCount = scentsProducts.length;

  return (
    <div className="scents-page">
      <h2>Home Scents</h2>
      <Link to="/" className="back">
        ← Back
      </Link>
      <h3>{totalCount} Products</h3>
      <div className="product-grid">
        {scentsProducts.map((product) => (
          <Link
            className="imgbox"
            key={product.product_id}
            to={`/product/${product.product_id}`}
            state={{ from: "scents-page" }}
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
