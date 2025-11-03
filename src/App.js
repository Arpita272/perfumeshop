import React, { useState } from "react";
import "./App.css";
import mainimage from './productimages/mainimage.avif';
import citrusgarden from './productimages/citrusgarden.avif';
import honeykiss from './productimages/honeykiss.avif';
import jasminebreeze from './productimages/jasminebreeze.avif';
import lavenderfields from './productimages/lavenderfields.avif';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="shippingtext">
        <p>FREE SHIPPING OVER £50 WORLDWIDE</p>
      </div>

      <div className={`tabs ${menuOpen ? "responsive" : ""}`} id="myTabs">
        <a href="#maintab" className="maintab">NOUS DEUX FRAGRANCES</a>
        <a href="#subtab" className="subtab">SHOP ALL</a>
        <a href="#subtab" className="subtab">BODY</a>
        <a href="#subtab" className="subtab">HOME SCENTS</a>

        <i className="fa-solid fa-cart-shopping fa-lg"></i>
        <i className="fa-solid fa-circle-user fa-lg"></i>

        <a href="#!" className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div className="body1">
        <div className="text">
          <p className="title">NOMAD 13 EAU DE PARFUM</p>
          <p className="des">Discover the original fragrance</p>
          <button>Shop now</button>
        </div>

        <div className="mainimage">
          <img src={mainimage} alt="main" />
        </div>
      </div>

      <div className="bestsellers">
        <h4>BEST SELLERS</h4>
        <div className="viewmore">
          <p>View More</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div className="catalogue">
        <div className="catalogueimages">

          <div className="imgbox">
            <img src={lavenderfields} alt="lavender" />
            <span className="label">Best Seller</span>
            <p className="desc">LAVENDER FIELD, 100 ml/Home Fragrance</p>
            <p className="rate">£85.00</p>
          </div>

          <div className="imgbox">
            <img src={honeykiss} alt="honeykiss" />
            <span className="label">Best Seller</span>
            <p className="desc">HONEY KISS, 100 ml/Body Lotion</p>
            <p className="rate">£150.00</p>
          </div>

          <div className="imgbox">
            <img src={citrusgarden} alt="citrus" />
            <span className="label">Best Seller</span>
            <p className="desc">CITRUS GARDEN, Candle 250g/8.6 oz</p>
            <p className="rate">£55.00</p>
          </div>

          <div className="imgbox">
            <img src={jasminebreeze} alt="jasmine" />
            <span className="label">Best Seller</span>
            <p className="desc">JASMINE BREEZE, 100 ml/Eau De Parfum</p>
            <p className="rate">£180.00</p>
          </div>

        </div>
       </div>
    </>
  );
}