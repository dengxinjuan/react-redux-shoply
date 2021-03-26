import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Homepage from "./Homepage";

const Routed = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/list">
        <ProductList />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routed;
