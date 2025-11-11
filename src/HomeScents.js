import React from "react";
import products from "./data/products.json";
import "./HomeScents.css";

export default function Scents() {
  const scentsCategory = products.categories.find(
    (cat) => cat.name === "Home scents"
  );
  const scentsProducts = scentsCategory ? scentsCategory.products : [];
  const totalCount = scentsProducts.length;

  return (
    <div className="scents-page">
      <h2>Home Scents</h2>
      <h3>{totalCount} Products</h3>
      <div className="product-grid">
        {scentsProducts.map((product) => (
          <div className="imgbox" key={product.id}>
            <img src={product.image} alt={product.name} />
            {product.bestseller === "y" && (
              <span className="label">Best Seller</span>
            )}
            <p className="desc">{product.name}</p>
            <p className="rate">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
