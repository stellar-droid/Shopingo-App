import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponent.scss";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList =
    products &&
    products.map((product, index) => {
      const { id, category, image, price, title } = product;
      return (
        <div className="card-item" key={index}>
          <Link to={`/product/${id}`}>
            <div className="card-inner">
              <div className="card-top">
                <img src={image} alt={title} />
              </div>

              <div className="card-bottom">
                <div className="card-info">
                  <div className="title">{title}</div>
                  <div className="price"> Price: $ {price}</div>
                  <div className="category">Category: {category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  return <>{renderList}</>;
};

export default ProductComponent;

// =====================================

{
  /* <div className="card-item">
<Link to={`/product/${id}`}>
  <div className="card-inner">
    <div className="card-top">
      <img src={image} alt={title} />
    </div>

    <div className="card-bottom">
      <div className="card-info">
        <div className="title">{title}</div>
        <div className="price">$ {price}</div>
        <div className="category">{category}</div>
      </div>
    </div>
  </div>
</Link>
</div> */
}
