import { useNavigate } from "react-router";

function ProductCard(props) {




const navigate = useNavigate()
const handleNavigate = () => {

 navigate(`/single-product/${props.brand}/${props.id}`);

};


  return (
    
    <div className="product-card"     onClick={handleNavigate} >

      <img src={props.image} alt={props.title} />

      <h4>Name - {props.title}</h4>

      <p> Price - ₹{props.price}</p>
      <p> Brand - {props.brand}</p>

    </div>
  );
}

export default ProductCard;