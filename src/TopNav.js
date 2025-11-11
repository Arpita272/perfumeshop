import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TopNav(){
     const [menuOpen, setMenuOpen] = useState(false);
     const toggleMenu = () => {
     setMenuOpen(!menuOpen);
    };

    return(
        <>
        <div className="shippingtext">
        <p>FREE SHIPPING OVER £50 WORLDWIDE</p>
      </div>
      <div className={`tabs ${menuOpen ? "responsive" : ""}`} id="myTabs">
        <a href="#maintab" className="maintab">NOUS DEUX FRAGRANCES</a>
        <Link to="/shop-all" className="subtab">SHOP ALL</Link>
        <Link to="/body-page" className="subtab">Body</Link>
        <Link to="/scents-page" className="subtab">Home Scents</Link>
        <i className="fa-solid fa-cart-shopping fa-lg"></i>
        <i className="fa-solid fa-circle-user fa-lg"></i>
        <a href="#!" className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      </>
    );
}
