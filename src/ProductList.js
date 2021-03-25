import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((st) => st.products); // we get product info
  /*we map the product info get the id: {name:''.description:''}*/
  const productList = Object.keys(products).map((id) => (
    <div>
      <h1>{products[id].name}</h1>
      <img src={products[id].image_url} alt="product" width="300px" />
      <button>Add to Cart!</button>
      <button>Remove from Cart!</button>
    </div>
  ));

  return <div>{productList}</div>;
};

export default ProductList;