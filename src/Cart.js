import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";

export default function Cart() {
  return (
    <div className="mycart">
      <div className="title">
        <p>MY CART</p>
        <CloseIcon />
      </div>
      <div className="productsadded">
        <DeleteOutlineIcon />
      </div>
      <div className="total">
        <p>Estimated Total</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}
