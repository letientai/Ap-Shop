import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { Table } from "react-bootstrap";
import { Dimmer, Loader } from "semantic-ui-react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.scss";
import dataCart from "../../assets/data/dataCart";

function Cart() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [toTalPayment, setToTalPayMent] = useState();
  const [currentCart, setCurrentCart] = useState(dataCart);
  setTimeout(function () {
    setLoadingPage(false);
  }, 1000);
  const totalPrice = currentCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * 4,
    0
  );
  useEffect(() => setToTalPayMent(totalPrice), [currentCart]);
  const deleteItem = (id) => {
    setCurrentCart((prev) => {
      prev.splice(id, 1);
      return [...prev];
    });
  };
  return (
    <div className="cart-container">
      <Dimmer active={loadingPage} inverted className="dimmer">
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <div className="cart-top">
        <Navbar />
      </div>
      <div className="content-cart">
        <h1>Giỏ hàng của bạn</h1>
        <div className="table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentCart.map((item, index) => {
                return (
                  <tr key={index}>
                    <img src={item?.image} alt="" className="image" />
                    <td className="text-table">{item?.name}</td>
                    <td className="text-table">{item?.price}đ</td>
                    <td className="text-table">4</td>
                    <td className="text-table">{item?.price * 4}đ</td>
                    <td className="text-table btn-delete">
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => deleteItem(index)}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="payment">
          <span> Tổng tiền: {toTalPayment} đ</span>
          <button className="btn btn-payMent">Thanh toán</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
