import React from "react";
import products from './data/products.json'
import "./ShopAll.css";

export default function ShopAll(){
    const allProducts=products.categories.flatMap(cat => cat.products);
    const totalCount=allProducts.length;

    return(
    <div className="shopall-page">
      <h2>All Products</h2>
      <h3>{totalCount} Products</h3>
      <div className="product-grid">
        {allProducts.map(product => (
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