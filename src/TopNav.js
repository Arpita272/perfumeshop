import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Cart from "./Cart";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="shippingtext">
        <p>FREE SHIPPING OVER £50 WORLDWIDE</p>
      </div>
      <div className={`tabs ${menuOpen ? "responsive" : ""}`} id="myTabs">
        <Link to="/" className="maintab">
          NOUS DEUX FRAGRANCES
        </Link>
        <Link to="/shop-all" className="subtab">
          SHOP ALL
        </Link>
        <Link to="/body-page" className="subtab">
          Body
        </Link>
        <Link to="/scents-page" className="subtab">
          Home Scents
        </Link>
        <div className="iconmenu">
          <ShoppingCartIcon
            style={{ cursor: "pointer" }}
            onClick={() => setIsCartOpen(true)}
          />
          <AccountCircleIcon />
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Outlet />
    </>
  );
}
