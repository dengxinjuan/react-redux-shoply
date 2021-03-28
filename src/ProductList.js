import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, reset } from "./actions";

const ProductList = () => {
  const products = useSelector((st) => st.products); // we get product info
  /*we map the product info get the id: {name:''.description:''}*/
  const dispath = useDispatch();
  const productList = Object.keys(products).map((id) => (
    <div className="col-3 mt-3" key={id}>
      <div className="card" height="500px">
        <div className="cardbody">
          <h2 className="card-title text-center">{products[id].name}</h2>
          <div className="card-img-top">
            <img src={products[id].image_url} alt="product" width="300px" />
          </div>
          <div className="card-title text-center">
            <Link exact to={`/products/${id}`}>
              Learn more!
            </Link>
          </div>

          <button
            className="btn-success"
            onClick={() => dispath(addToCart(id))}
          >
            Add!
          </button>
          <button onClick={() => dispath(removeFromCart(id))}>Remove</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="row">{productList}</div>
      <div>
        <button className="btn-lg bg-danger" onClick={() => dispath(reset())}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default ProductList;
