import ProductCard from "../components/ProductCard";
import "../styles/Products.css";


function Products(){
   
 const productData = [
    {
      id:"1",
      title: "Tshirt",
      brand:"Nike",
      price: 200,
      image: "https://m.media-amazon.com/images/I/41O6-frKRLL._AC_UL480_FMwebp_QL65_.jpg"
    },


    {
      id:"2",
      title: "Shirt",
       brand:"Nike",
      price: 450,
      image: "https://m.media-amazon.com/images/I/51A--HMRXRL._AC_UL480_FMwebp_QL65_.jpg"
    },


    {
      id:"3",
      title: "Jeans",
       brand:"Nike",
      price: 799,
      image: "https://m.media-amazon.com/images/I/71DjSVa+7rL._AC_UL480_FMwebp_QL65_.jpg"
    },


    {
      id:"4",
      title: "Hoodie",
      brand:"Nike",
      price: 999,
      image: "https://m.media-amazon.com/images/I/81bDC5U8IIL._AC_UL480_FMwebp_QL65_.jpg"
    },


    {
      id:"5",
      title: "Jacket",
      brand:"Nike",
      price: 1499,
      image: "https://m.media-amazon.com/images/I/61apVzGxlnL._AC_UL480_FMwebp_QL65_.jpg"
    },


    {
      id:"6",
      title: "Sneakers",
      brand:"Adidas",
      price: 1799,
      image: "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL480_FMwebp_QL65_.jpg"
    },

    {
      id:"7",
      title: "Watch",
      brand:"Adidas",
      price: 2499,
      image: "https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL480_FMwebp_QL65_.jpg"
    },

    {
      id:"8",
      title: "Cap",
      brand:"Adidas",
      price: 299,
      image: "https://m.media-amazon.com/images/I/51QVfsGxLFL._AC_UL480_FMwebp_QL65_.jpg"
    },

    {
      id:"9",
      title: "Backpack",
      brand:"Adidas",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/61SWPUP9iDL._AC_UL480_FMwebp_QL65_.jpg"
    },

    {
      id:"10",
      title: "Parfum",
      brand:"Adidas",
      price: 299,
      image: " https://m.media-amazon.com/images/I/4166284dp5L._AC_SR250,250_QL65_.jpg"
      
    }
  ];





// async function getProducts(){
// try {
//   const response=await axios.get("/products/all");
// if(response.data.success){

// }


// } catch (error) {
//   console.log(error);
// }

// }
// getProducts();





    return(
<div className="products-page"> 

<h1> Products</h1>




<div className="productcardstyle" >  


{productData.map((product)=>(

<ProductCard 

key={product.id}
id={product.id}
brand={product.brand}
image={product.image}
title={product.title}
price={product.price}   
/>
))}



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