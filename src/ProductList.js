import Products from "./Products";
import { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="ProductList">
      {products?.map((product) => (
        <Products title={product.title} 
        key={product.id} 
         price={product.price} 
         description={product.description}/>))}
    </div>
  );
}
