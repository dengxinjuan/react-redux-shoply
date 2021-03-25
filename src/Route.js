import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const Routed = () => {
  return (
    <Switch>
      <Route exact path="/list">
        <ProductList />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail />
      </Route>
    </Switch>
  );
};

export default Routed;
