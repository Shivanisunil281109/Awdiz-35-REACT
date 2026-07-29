import { useParams } from "react-router";
import "../styles/SingleProduct.css";

function SingleProduct() {

  const { id , brand } = useParams();

  return (
    <div className="single-product-page">
         {/* <h1>Product </h1> */}

      <h2>Product ID : {id}</h2>
      <h2> Product Brand :  {brand}</h2>
      
    </div>
  );
}

export default SingleProduct;