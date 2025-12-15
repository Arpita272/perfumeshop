import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace("£", "")) * item.quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    <>
      {isOpen && <div className="cart-modal-overlay" onClick={onClose}></div>}
      <div className={`cart-modal ${isOpen ? "open" : ""}`}>
        <div className="title">
          <p>MY CART</p>
          <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
        </div>
        <div className="productsadded">
          {cartItems.length === 0 && <p>Your cart is empty</p>}

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} width="80" />
              <div className="cart-info">
                <p>{item.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>{item.price}</p>
              </div>
              <DeleteOutlineIcon
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        <div className="total">
          <div className="totaltest">
            <p>Estimated Total</p>
            <p>£{total.toFixed(2)}</p>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}
