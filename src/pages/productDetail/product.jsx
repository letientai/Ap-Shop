import "./product.scss";
import Navbar from "../../components/navbar/navbar";
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import InfoData from "../../assets/data/Infodata";
import Rating from "@mui/material/Rating";
import {
  Button,
  Input,
  Dimmer,
  Loader,
  Icon,
  Comment,
  Form,
  FormInput,
  TextArea,
} from "semantic-ui-react";
import Buttonn from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Table } from "react-bootstrap";
import CardItem from "../../components/cardItem/cardItem";
import { Carousel } from "@trendyol-js/react-carousel";
import DataComment from "../../assets/data/DataComment";
import Footer from "../../components/footer/footer";
function Product() {
  const location = useLocation();
  const ID = location.pathname?.split("product/")[1];
  const [data, setData] = useState([]);
  const [checkCarousel, setCheckCarousel] = useState(false);
  const [dataItem, setDataItem] = useState([]);
  const checkProduct = useState("product");
  const [loadingPage, setLoadingPage] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false)
  const history = useHistory();
  useEffect(() => {
    fetchData();
  }, [location]);
  const fetchData = () => {
    for (var i = 0; i < 40; i++) {
      if (parseInt(InfoData[i].id) === parseInt(ID)) {
        setData(InfoData[i]);
        setDataItem(
          InfoData.filter((item) =>
            item?.theloai
              ?.toLocaleLowerCase()
              ?.includes(InfoData[i].theloai?.toLocaleLowerCase())
          )
        );
      }
    }
    window.scrollTo({
      top: 100,
    });
    setCheckCarousel(false);
    setLoadingPage(true);
  };

  const doSomethingWithDataFromChild = async (data) => {
    // setData(
    //   InfoData.filter((item) =>
    //     item?.name?.toLocaleLowerCase()?.includes(data?.toLocaleLowerCase())
    //   )
    // );
    console.log("data", data);
  };
  const onChangeInput = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuy = () => setIsSuccess(true);
  
  useEffect(() => 
    {
      const timerId =setTimeout(() => setIsSuccess(false),2000);
      return () => {
        clearTimeout(timerId);
      }
    }
  ,[isSuccess])

  const onchangeQuantity = (name) => {
    if (name === "plus") {
      setQuantity(parseInt(quantity) + 1);
    } else if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(parseInt(quantity) - 1);
    }
  };

  setTimeout(function () {
    setCheckCarousel(true);
    setLoadingPage(false);
  }, 1000);

  const moveToBuy = () => {
    history.push(`/Ap-Shop/buy/${data.id}and${quantity}`);
  };
 
  const signOut = () =>{
    setCheckLogin(!checkLogin)
  }

  return (
    <div>
      <Dimmer active={loadingPage} inverted className="dimmer">
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <div className="product-container">
        <div className="product-top">
          <Navbar
            checkpage={checkProduct}
            passDataToParent={doSomethingWithDataFromChild}
            signOut={signOut}
          />
        
          <div className="content-Top">
          </div>
        </div>
        <div className="main">
          <div className="main-content">
            <div className="image">
              <img src={data.image} alt="" />
              <div className="link">
                <p>Chia sẽ:</p>
                <Icon name="facebook" className="icon fb" />
                <Icon name="instagram" className="icon ig" />
                <Icon name="twitter" className="icon tw" />
                <Icon name="youtube" className="icon yt" />
              </div>
            </div>
            <div className="info">
              <div className="header">
                <p>{data.name}</p>
                <div className="row1">
                  {checkCarousel === true && (
                    <Rating
                      name="half-rating-read"
                      defaultValue={data.rating}
                      precision={0.5}
                      className="start"
                      readOnly
                    />
                  )}
                  <i>Đã bán: {data.sold}</i>
                </div>
                <div className="row2">
                  <div className="col1">
                    <div className="inf">
                      <div className="price">
                        <p>
                          {data.price} <span>đ</span>
                        </p>
                        <div className="deal">
                          <p>-20%</p>
                        </div>
                      </div>
                      <img
                        src="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
                        alt=""
                      />
                      <div className="ship">
                        <img
                          src="https://salt.tikicdn.com/ts/upload/21/b3/00/bab4964906fcb6c56d57d9d69a6b2995.png"
                          alt=""
                        />
                        <i>Miến phí vận chuyển</i>
                      </div>
                    </div>
                    <div className="note">
                      <p>
                        Bạn hãy nhập địa chỉ nhận hàng để được dự báo thời gian
                        và chi phí giao hàng chính xác nhất.
                      </p>
                    </div>
                    <div className="buy">
                      <div className="quantity">
                        <Button
                          icon="minus"
                          className="minus"
                          onClick={() => onchangeQuantity("minus")}
                        />
                        <Input
                          className="input-quantity"
                          type="number"
                          value={quantity}
                          onChange={onChangeInput}
                        />
                        <Button
                          icon="plus"
                          className="plus"
                          onClick={() => onchangeQuantity("plus")}
                        />
                      </div>
                      <Buttonn
                        variant="contained"
                        className="btn btn-buy"
                        color="error"
                        onClick={moveToBuy}
                      >
                        Mua ngay
                      </Buttonn>
                      <Buttonn
                        variant="contained"
                        className="btn btn-addToCart"
                        color="error"
                        onClick={handleBuy}
                      >
                        Thêm vào giỏ hàng
                      </Buttonn>
                    </div>
                  </div>
                  <div className="col2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="similar-product">
            <div className="header">
              <p>Sản phẩm tương tự</p>
            </div>
            <div className="product">
              {checkCarousel === true && (
                <Carousel show={6} slide={5} swiping={true} transition={0.5}>
                  {dataItem.map((item) => (
                    <CardItem product={item} key={item.id} />
                  ))}
                </Carousel>
              )}
            </div>
          </div>
          <div className="intro">
            <p>Thông số kĩ thuật</p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Thông số kĩ thuật</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Memory</td>
                  <td>{data?.memory}</td>
                </tr>
                <tr>
                  <td>Chip</td>
                  <td>{data?.chip}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{data?.ram}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="form-comment">
            <div className="header">
              <p>Comment</p>
              <hr />
            </div>
            {DataComment.map((item) => (
              <Comment.Group key={item.id} className="comment">
                <Comment>
                  <Comment.Avatar as="a" src={item.image} />
                  <Comment.Content>
                    <Comment.Author>{item.name}</Comment.Author>
                    <Comment.Text>{item.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                      <Comment.Action>Save</Comment.Action>
                      <Comment.Action>Hide</Comment.Action>
                      <Comment.Action>
                        <Icon name="expand" />
                        Full-screen
                      </Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            ))}
            <div className="form-send">
              <Form className="comment1">
                <Form.Field>
                  <label>Phone:</label>
                  <FormInput type="number" />
                </Form.Field>
                <Form.Field>
                  <label>Email:</label>
                  <input />
                </Form.Field>
                <Form.Field>
                  <label>Message:</label>
                  <TextArea className="mess" />
                </Form.Field>
                <Buttonn className="btn" variant="contained">
                  Send
                </Buttonn>
              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {isSuccess 
      && 
      <Alert className="by-success" variant="filled" severity="success">
        Thêm thành công!
      </Alert>}
    </div>
  );
}
export default Product;
