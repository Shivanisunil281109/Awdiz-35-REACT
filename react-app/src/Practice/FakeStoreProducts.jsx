
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/FakeStoreProducts.css";


const FakeStoreProducts = () => {

    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    function fetchData() {
        setLoading(true);

        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((jsData) => {
                console.log(jsData);
                setProducts(jsData);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
         <div className="fake-store-page">

            {loading ? (
                <h1>Loading...</h1>
            ) : product.length > 0 ? (

                  <div className="fake-store-products">
                    {product.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            brand={product.category}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>

            ) : (

                <h1>No Products Stock.</h1>

            )}

        </div>
    );
};

export default FakeStoreProducts;