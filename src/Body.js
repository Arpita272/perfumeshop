import React from "react";
import products from './data/products.json'
import "./Body.css";

export default function Body(){
    const bodyCategory=products.categories.find(
        (cat)=>cat.name==="Body"
    );
    const bodyProducts=bodyCategory?bodyCategory.products:[];
    const totalCount=bodyProducts.length;

    return(
    <div className="body-page">
      <h2>Body</h2>
      <h3>{totalCount} Products</h3>
      <div className="product-grid">
        {bodyProducts.map(product => (
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