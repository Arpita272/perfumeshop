import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import products from "./data/products.json";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const allProducts = products.categories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, category: cat.name }))
  );
  const product = allProducts.find((p) => p.id.toString() === id);

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [quantity, setQuantity] = useState(1);
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const location = useLocation();
  const fromPage = location.state?.from || "shop-all";

  const backLinkRoutes = {
    "shop-all": "/shop-all",
    "body-page": "/body-page",
    "scents-page": "/scents-page",
  };

  return (
    <div className="product-details">
      <Link to={backLinkRoutes[fromPage]} className="back-link">
        ← Back
      </Link>
      <div className="details-container">
        <img src={product.image} alt={product.name} />
        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <p className="description">
            I'm a product description. I'm a great place to add more details
            about your product such as sizing, material, care instructions and
            cleaning instructions.
          </p>
          <h2>Quantity</h2>
          <div className="quantity">
            <button onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>
          <div className="buying">
            <button className="addcart">Add to Cart</button>
            <button className="buynow">Buy Now</button>
          </div>
          <button
            className="collapsible"
            onClick={() => toggleSection("productInfo")}
          >
            Product Info
          </button>
          {openSections.productInfo && (
            <div className="content">
              <p>
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </p>
            </div>
          )}

          <button
            className="collapsible"
            onClick={() => toggleSection("returnPolicy")}
          >
            Return & Refund Policy
          </button>
          {openSections.returnPolicy && (
            <div className="content">
              <p>
                I’m a Return and Refund policy. I’m a great place to let your
                customers know what to do in case they are dissatisfied with
                their purchase. Having a straightforward refund or exchange
                policy is a great way to build trust and reassure your customers
                that they can buy with confidence.
              </p>
            </div>
          )}

          <button
            className="collapsible"
            onClick={() => toggleSection("shippingInfo")}
          >
            Shipping Info
          </button>
          {openSections.shippingInfo && (
            <div className="content">
              <p>
                I'm a shipping policy. I'm a great place to add more information
                about your shipping methods, packaging and cost. Providing
                straightforward information about your shipping policy is a
                great way to build trust and reassure your customers that they
                can buy from you with confidence.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
