import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.scss";
import ProductComponent from "../ProductComponent/ProductComponent";
import { setProducts, fetchProducts } from "../../app/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Products</h2>
        <div className="movie-container">
          {Object.keys(products).length === 0 ? (
            <div className="loading">Loading....</div>
          ) : (
            <ProductComponent />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
