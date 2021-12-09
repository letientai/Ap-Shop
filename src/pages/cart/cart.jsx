import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { Table } from "react-bootstrap";
import { Dimmer, Loader } from "semantic-ui-react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import "./cart.scss";
function Cart() {
  const [loadingPage, setLoadingPage] = useState(true);

  setTimeout(function () {
    setLoadingPage(false);
  }, 1000);

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
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>@twitter</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>Larr</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default Cart;
