import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace("£", "")) * item.quantity;
  }, 0);

  return (
    <div className="mycart">
      <div className="title">
        <p>MY CART</p>
        <CloseIcon onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
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
        <p>Estimated Total: £{total.toFixed(2)}</p>
        <Button variant="contained">Checkout</Button>
      </div>
    </div>
  );
}
