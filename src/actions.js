import { ADD_TO_CART, REMOVE_CART, RESET } from "./actionTypes";

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_CART,
    id,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
