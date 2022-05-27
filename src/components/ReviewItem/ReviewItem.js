import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = props => {
  const { handleRemoveButtton, product } = props;
  console.log(props.product);
  const { name, img, price, shpping, quantity } = product;

  return (
    <div className="review_item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="reivew-item-details-container">
        <div className="review-details" title={name}>
          <h5>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h5>
          <p>
            Pirce:
            <small className="orange"> {price}</small>
          </p>
          <p>
            <small>shipping: {shpping}</small>
          </p>
          <p>
            <small>quantity: {quantity}</small>
          </p>
        </div>
      </div>
      <div className="review-delete">
        <button onClick={() => handleRemoveButtton(product)} className="delete-button">
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
