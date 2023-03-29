import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <div className="name-price">
          <h3 className="product-name">{name}</h3>
          <h4>Price: ${price}</h4>
        </div>
        <div className="info">
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Stars</p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
