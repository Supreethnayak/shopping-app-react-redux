import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const selectedProducts = useSelector((state) => state.cart);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());

    // shifting the logic to store, so that it can be used by whole apps
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    handleAddedProduct(product.id);
  };

  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Loading....
      </h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  const handleAddedProduct = (productId) => {
    return selectedProducts?.find((ele) => ele?.id === productId);
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button
            onClick={() => handleAdd(product)}
            className={!handleAddedProduct(product.id) ? "btn" : "btn selected"}
            style={{
              pointerEvents: !handleAddedProduct(product.id) ? "auto" : "none",
            }}
          >
            {!handleAddedProduct(product.id) ? "Add to cart" : "Addded"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
