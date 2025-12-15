import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopAll from "./ShopAll";
import Body from "./Body";
import Scents from "./HomeScents";
import TopNav from "./TopNav";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<TopNav />}>
            <Route path="/" element={<App />} />
            <Route path="/shop-all" element={<ShopAll />} />
            <Route path="/body-page" element={<Body />} />
            <Route path="/scents-page" element={<Scents />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
