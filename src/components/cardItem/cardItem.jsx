import React from "react";
import "./cardItem.scss";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";

const CardItem = (props) => {
  const item = props.product;
  const history = useHistory();

  const moveToDetail = () => {
    history.push(`/Ap-Shop/product/${item.id}`);
    console.log();
  };

  return (
    <div className="cardItem-container" onClick={moveToDetail}>
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <h5>{item.name}</h5>
      
      <Rating
        name="half-rating-read"
        defaultValue={item.rating}
        precision={0.5}
        readOnly
        className="start"
      />
      <div className="price">
        <span>{item.price} VNĐ</span>
        <div className="deal">
          <p>-20%</p>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
