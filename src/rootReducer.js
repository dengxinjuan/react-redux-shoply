import data from "./data";

const INITIAL_STATE = { products: data.products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  return state;
}

export default rootReducer;
