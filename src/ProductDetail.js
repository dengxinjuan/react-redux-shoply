import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, reset } from "./actions";
/*we display product details by using the id in useParmas()*/

const ProductDetail = () => {
  const products = useSelector((st) => st.products); // we get product info
  const { id } = useParams(); // we get id
  const dispath = useDispatch();

  return (
    <div>
      <h1>{products[id].name}</h1>
      <img src={products[id].image_url} alt="product" width="300px" />
      <p>{products[id].description}</p>
      <h2>Price is ${products[id].price}</h2>
      <button className="bg-success" onClick={() => dispath(addToCart(id))}>
        Add!
      </button>
      <button onClick={() => dispath(removeFromCart(id))}>Remove</button>
      <button className=" bg-danger" onClick={() => dispath(reset())}>
        RESET
      </button>
    </div>
  );
};

export default ProductDetail;
