import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart, reset } from "./actions";
/*display items in carts*/

const Cart = () => {
  const cart = useSelector((st) => st.cart); //we get cart info
  const products = useSelector((st) => st.products); // we get product info
  const dispath = useDispatch();
  const cartItems = Object.keys(cart).map((id) => (
    <div key={id}>
      {products[id].name}: {cart[id]}
      <button onClick={() => dispath(addToCart(id))}>Add!</button>
      <button onClick={() => dispath(removeFromCart(id))}>Remove</button>
    </div>
  ));
  return (
    <div>
      {cartItems}
      <button className="btn-lg bg-danger" onClick={() => dispath(reset())}>
        RESET
      </button>
    </div>
  );
};

export default Cart;
