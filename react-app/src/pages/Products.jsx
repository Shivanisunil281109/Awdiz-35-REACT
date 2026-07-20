import ProductCard from "../components/ProductCard";
import "../styles/Products.css";


function Products(){
   
 const productData = [
    {
      title: "Tshirt",
      price: 200,
      image: "https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Shirt",
      price: 450,
      image: "https://m.media-amazon.com/images/I/71SxJ4j0W-L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Jeans",
      price: 799,
      image: "https://m.media-amazon.com/images/I/71YJQv5QwNL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Hoodie",
      price: 999,
      image: "https://m.media-amazon.com/images/I/71RjR9lQ9TL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Jacket",
      price: 1499,
      image: "https://m.media-amazon.com/images/I/81M8Q9v6vPL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Sneakers",
      price: 1799,
      image: "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Watch",
      price: 2499,
      image: "https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Cap",
      price: 299,
      image: "https://m.media-amazon.com/images/I/71q8Q5Q2WCL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Backpack",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/81Ke4QhYfDL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      title: "Sunglasses",
      price: 599,
      image: "https://m.media-amazon.com/images/I/61K8wH8mQTL._AC_UL480_FMwebp_QL65_.jpg"
    }
  ];




    return(
<div className="products-page"> 

<h1> Products</h1>


{productData.map((product)=>(<h1>{product.title} </h1>))}


<div className="productcardstyle" >  
<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"    />


{/* 



<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />





<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />




 
<ProductCard
 image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />






<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />








 <ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />



<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />


<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />



<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />

<ProductCard 
image="https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg" 
title="Tshirt" 
price="200"      />  */}


</div>

</div>









)


}
export default Products;