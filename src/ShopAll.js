import React from "react";
import "./ShopAll.scss";
import { Link } from "react-router-dom";
import { useProducts } from "./useProducts";

export default function ShopAll() {
  const products = useProducts();
  const totalCount = products.length;

  return (
    <div className="shopall-page">
      <h2>All Products</h2>
      <Link to="/" className="back">
        ← Back
      </Link>
      <h3>{totalCount} Products</h3>
      <div className="product-grid">
        {products.map((product) => (
          <Link
            to={`/product/${product.product_id}`}
            key={product.product_id}
            className="imgbox"
            state={{ from: "shop-all" }}
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
