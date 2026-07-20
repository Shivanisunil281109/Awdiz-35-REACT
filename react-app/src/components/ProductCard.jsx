function ProductCard(props) {
  return (
    
    <div className="product-card">

      <img src={props.image} alt={props.title} />

      <h4>{props.title}</h4>

      <p>₹{props.price}</p>

    </div>
  );
}

export default ProductCard;