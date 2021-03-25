import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
/*we display product details by using the id in useParmas()*/

const ProductDetail = () => {
  const products = useSelector((st) => st.products); // we get product info
  const { id } = useParams(); // we get id

  return (
    <div>
      <h1>{products[id].name}</h1>
      <img src={products[id].image_url} alt="product" width="300px" />
      <p>{products[id].description}</p>
      <h2>Price is ${products[id].price}</h2>
    </div>
  );
};

export default ProductDetail;
