import React, { useState, useEffect } from "react";
import {
  Icon,
  Segment,
  Label,
  Pagination,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import InfoData from "../../assets/data/Infodata";
import "./home.scss";
import { Checkbox } from "semantic-ui-react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Footer from "../../components/footer/footer";
import Alert from "@mui/material/Alert";
function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [checkColor, setCheckColor] = useState(false);
  const [background, setBackground] = useState(1);
  const [label, setLabel] = useState("Tất cả");
  const [value, setValue] = useState("1");
  const [loadingPage, setLoadingPage] = useState(true);
  const checkHome = useState("home");
  const currenUser = localStorage.getItem("customerName");
  const [checkLogin, setCheckLogin] = useState(false)
  setTimeout(function () {
    setLoadingPage(false);
  }, 1000);

  useEffect(() => {
    fetchData();
  }, [checkLogin]);

  const fetchData = () => {
    setData(
      InfoData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)).slice(0, 12)
    );
  };

  const open = () => {
    let menu = document.getElementById("category");
    if (menu.style.display === "flex") {
      menu.style.transition = `ease 0.1s`;
      let id = setInterval(frame, 0.1);
      let pos = 0;
      let op = 1.5;
      function frame() {
        if (pos === 30) {
          menu.style.display = "none";
          clearInterval(id);
        } else {
          pos++;
          op -= 0.05;
          menu.style.opacity = op;
          menu.style.transform = `translateX(${pos}px)`;
        }
      }
    } else {
      menu.style.transition = `ease 0.05s`;
      let id = setInterval(frame, 0.1);
      let pos = 30;
      let op = 0;
      function frame() {
        if (pos === 0) {
          clearInterval(id);
        } else {
          pos--;
          op += 0.05;
          menu.style.opacity = op;
          menu.style.transform = `translateX(${pos}px)`;
        }
      }
      menu.style.display = "flex";
    }
  };

  const close = () => {
    let menu = document.getElementById("category");
    menu.style.transition = `ease 0.1s`;
    let id = setInterval(frame, 0.1);
    let pos = 0;
    let op = 1.5;
    function frame() {
      if (pos === 30) {
        menu.style.display = "none";
        clearInterval(id);
      } else {
        pos++;
        op -= 0.05;
        menu.style.opacity = op;
        menu.style.transform = `translateX(${pos}px)`;
      }
    }
  };

  const onChangeOption = (option) => {
    // setOption(option);
    if (option === 1) {
      setPage(1);
      setData(
        InfoData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)).slice(
          0,
          12
        )
      );
      setLabel("Tất cả");
    }
    if (option === 2) {
      setPage(1);
      setData(
        InfoData.sort((a, b) => parseFloat(b.sold) - parseFloat(a.sold)).slice(
          0,
          12
        )
      );
      setLabel("Bán chạy");
    }
    if (option === 3) {
      setPage(1);
      setData(
        InfoData.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        ).slice(0, 12)
      );
      setLabel("Giá thấp");
    }
    if (option === 4) {
      setPage(1);
      setData(
        InfoData.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        ).slice(0, 12)
      );
      setLabel("Giá cao");
    }
  };

  const changeData = async (e, { activePage }) => {
    setPage(activePage);
    if (activePage === 1) {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
      setData(InfoData.slice(0, 12));
    }
    if (activePage === 2) {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
      setData(InfoData.slice(12, 24));
    }
    if (activePage === 3) {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
      setData(InfoData.slice(24, 36));
    }
    if (activePage === 4) {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
      setData(InfoData.slice(36, 48));
    }
  };

  const changeBackground = () => {
    setCheckColor(!checkColor);
    if (checkColor === true) {
      setBackground(1);
    } else {
      setBackground(2);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const doSomethingWithDataFromChild = async (data) => {
    setData(
      InfoData.filter((item) =>
        item?.name?.toLocaleLowerCase()?.includes(data?.toLocaleLowerCase())
      )
    );
  };

  const doSomethingWithTranscriptFromChild = async (data) => {
    if (data === "tất cả") {
      onChangeOption(1);
      setValue("1");
    } else if (data === "bán chạy") {
      onChangeOption(2);
      setValue("2");
    } else if (data === "giá thấp") {
      onChangeOption(3);
      setValue("3");
    } else if (data === "giá cao") {
      onChangeOption(4);
      setValue("4");
    } else if (data === "chế độ ban đêm" || data === "ban đêm") {
      // alert("Bạn đã đổi sang chế độ ban đêm");
      <Alert severity="info">Bạn đã đổi sang chế độ ban đêm</Alert>;
      setBackground(2);
    } else if (
      data === "chế độ ban ngày" ||
      data === "ban ngày" ||
      data === "morning"
    ) {
      // alert("Bạn đã đổi sang chế độ ban ngày");
      <Alert severity="info">Bạn đã đổi sang chế độ ban đêm</Alert>;
      setBackground(1);
    } else {
      setData(
        InfoData.filter((item) =>
          item?.name?.toLocaleLowerCase()?.includes(data?.toLocaleLowerCase())
        )
      );
    }
  };

  const signOut = () =>{
    setCheckLogin(!checkLogin)
  }

  return (
    <div>
      <Dimmer active={loadingPage} inverted className="dimmer">
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <div className={background === 1 ? "home-container1" : "home-container2"}>
        <div className="home-top">
          <Navbar
            passDataToParent={doSomethingWithDataFromChild}
            transcript={doSomethingWithTranscriptFromChild}
            checkpage={checkHome}
            signOut={signOut}
          />
          <div className="content-Top">
            <div className="content">
              <div className="btn-category" onClick={open}>
                <p>HÃNG</p>
                <Icon name="angle down" className="icon-angle-down" />
              </div>
              <Segment className="category" id="category">
                <ul>
                  <h3>Phổ biến</h3>
                  <li>Apple</li>
                  <li>Samsung</li>
                  <li>Sony</li>
                  <li>Nokia</li>
                  <li>LG</li>
                  <li>Xiaomi</li>
                  <li>Oppo</li>
                  <li>Vivo</li>
                </ul>

                <Icon name="x" onClick={close} style={{ cursor: "pointer" }} />
              </Segment>
            </div>
            {currenUser && <span>Xin chào, {currenUser}</span>}
          </div>
        </div>
        <div className="main">
          <div className="main-content">
            <div className="menu-right">
              <div className="label-background">
                <div className="checkBox">
                  <Checkbox
                    toggle
                    defaultChecked={checkColor}
                    onClick={changeBackground}
                  />
                  <p>Chế độ ban đêm</p>
                </div>
                <hr className="hr" />
              </div>
              <div className="ratings">
                <h4>Đánh giá</h4>
                <div className="rating">
                  <Rating name="read-only" value={5} readOnly />
                  <Typography component="legend">Từ 5 sao</Typography>
                </div>
                <div className="rating">
                  <Rating name="read-only" value={4} readOnly />
                  <Typography component="legend">Từ 4 sao</Typography>
                </div>
                <div className="rating">
                  <Rating name="read-only" value={3} readOnly />
                  <Typography component="legend">Từ 3 sao</Typography>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="menu-content">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="primary"
                  indicatorColor="primary"
                  aria-label="primary tabs example"
                >
                  <Tab
                    value="1"
                    label="Tất cả"
                    onClick={() => onChangeOption(1)}
                    className={background === 1 ? "Tab1" : "Tab2"}
                  />
                  <Tab
                    value="2"
                    label="Bán chạy"
                    onClick={() => onChangeOption(2)}
                    className={background === 1 ? "Tab1" : "Tab2"}
                  />
                  <Tab
                    value="3"
                    label="Giá thấp"
                    onClick={() => onChangeOption(3)}
                    className={background === 1 ? "Tab1" : "Tab2"}
                  />
                  <Tab
                    value="4"
                    label="Giá cao"
                    onClick={() => onChangeOption(4)}
                    className={background === 1 ? "Tab1" : "Tab2"}
                  />
                </Tabs>
              </div>
              <Segment className={background === 1 ? "products1" : "products2"}>
                <Label as="a" color="teal" ribbon>
                  <h4>{label}</h4>
                </Label>
                {/* <h1>{count}</h1> */}
                <div className="product">
                  {data.length === 0 && <h2>Không tìm thấy sản phẩm nào!!!</h2>}
                  {data.map((item) => (
                    <Card product={item} key={item.id} bk={background} />
                  ))}
                </div>
                <div className="pagination">
                  <Pagination
                    boundaryRange={0}
                    activePage={page}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={5}
                    onPageChange={changeData}
                  />
                </div>
              </Segment>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
