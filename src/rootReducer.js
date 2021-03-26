import data from "./data";

const INITIAL_STATE = {
  products: data.products,
  cart: {
    "47314fa1-ae56-4eae-80be-af6691145951": 0,
    "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 0,
    "b04b779c-1cfb-48a7-8424-25a8c7e608ae": 0,
    "4260bf52-218a-480e-87ea-4ff42470ce98": 0,
    "6a56c22f-2a85-4751-98a9-14e280fcecd8": 0,
    "2266b2d6-3d71-4356-8065-392f1fceab07": 0,
  },
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartCopy = { ...state.cart };
      cartCopy[action.id] += 1;
      return { ...state, cart: cartCopy };
    case "REMOVE_CART":
      const cartCopy2 = { ...state.cart };
      if (cartCopy2[action.id] <= 0) {
        cartCopy2[action.id] = 0;
        alert("the minimun quanity is 0");
      } else {
        cartCopy2[action.id] -= 1;
      }
      return { ...state, cart: cartCopy2 };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default rootReducer;
