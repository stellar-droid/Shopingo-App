import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProduct,
  fetchProduct,
} from "../../app/actions/productActions";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, price, rating, category, description } = product;

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="movie-section">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{title}</div>
            <div className="movie-rating">
              <span>
                Product Rating <i className="fa fa-star"></i>: {rating.rate}
              </span>
            </div>
            <div className="movie-plot">Price : $ {price}</div>
            <div className="movie-info">
              <div>
                <span>Category :</span>
                <span>{category}</span>
              </div>
              <div>
                <span>
                  Buyers <i class="fa fa-user"></i> :
                </span>
                <span>{rating.count}</span>
              </div>
              <div>
                <span>Description :</span>
                <span>{description}</span>
              </div>
              <div>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={image} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
