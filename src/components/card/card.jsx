import React from "react";
import { Icon } from "semantic-ui-react";
import "./card.scss";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";
const Card = (props) => {
  const item = props.product;
  const history = useHistory();

  const moveToDetail = () => {
    history.push(`/Ap-Shop/product/${item.id}`);
  };

  return (
    <a href="">
    <div
      className={props.bk === 1 ? "card-container1" : "card-container2"}
      onClick={moveToDetail}
    >
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <p>{item.name}</p>
      <div className="row1">
        <div className="price">
          <span>{item.price} VNĐ</span>
        </div>
        <Icon name="truck" className="truck" />
      </div>
      <div className="row2">
        <p>Đã bán: {item.sold}</p>
        <div className="icon-start">
          <Rating
            name="half-rating-read"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
            className="start"
          />
        </div>
      </div>
    </div>
    </a>
  );
};
export default Card;
