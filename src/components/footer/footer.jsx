import React from "react";
import "./footer.scss";
import { Icon, Button, Input } from "semantic-ui-react";
// import logo from '../../asset/image/logo1.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="send-mail">
          <div className="title">
            <p>KEEP IN TOUCH</p>
            <h1>Experience with Us</h1>
          </div>
          <div className="search-mail">
            <Input iconPosition="left" placeholder="Email" className="search">
              <Icon name="at" />
              <input />
            </Input>
            <Button color="blue" className="btn-send">
              Send
            </Button>
          </div>
        </div>
        <div className="infomation">
          <div className="wvp_row1">
            <div className="column1">
              <img
                //  src={logo}
                // src='http.//www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo-color.png'
                alt=""
              />
              <p>
              Sách là sản phẩm tinh thần, đồng thời là sản phẩm vật chất do lao động của con người sáng tạo nên, là nhân tố quan trọng để thúc đẩy xã hội phát triển. Càng đọc sách chúng ta càng nhận ra được kiến thức của mình còn hạn hẹp và phải bổ sung nhiều hơn nữa. Có ai đó đã nói rằng: Tôi tìm được những điều thú vị và bổ ích từ sách mà trong cuộc sống tôi không hề có được. Thời gian không ngừng trôi, kiến thức có thể bị con người lãng quên theo năm tháng. Nhưng nó vẫn đọng lại trên từng câu chữ trong quyển sách.
              </p>
              <div className="icon">
                <Icon name="twitter" className="icon1" />
                <Icon name="youtube" className="icon1" />
                <Icon name="facebook" className="icon1" />
                <Icon name="instagram" className="icon1" />
              </div>
            </div>
            <div className="column2">
              <div className="option">
                <p>CHI NHÁNH</p>
                <ul>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    TP.Đà Nẵng
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    TP.Quy Nhơn
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    TP.Tuy Hòa
                  </li>
                  <li>
                    <Icon name="angle right" className="angleRight" />
                    TP.HCM
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    TP.Khánh Hòa
                  </li>
                </ul>
              </div>
              <div className="option">
                <p>PARTNERS</p>
                <ul>
                  <li>
                    <Icon name="angle right" className="angleRight" />
                    Booking
                  </li>
                  <li>
                    <Icon name="angle right" className="angleRight" />
                    RentalCar
                  </li>
                  <li>
                    <Icon name="angle right" className="angleRight" />
                    HostelWorld
                  </li>
                  <li>
                    <Icon name="angle right" className="angleRight" />
                    Trivago
                  </li>
                  <li>
                    <Icon name="angle right" className="angleRight" />
                    TripAdvisor
                  </li>
                </ul>
              </div>
              <div className="option">
                <p>LAST MINUTE</p>
                <ul>
                  <li>
                    <Icon name="angle right" className="angleRight" />
                    London
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    California
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    Indonesia
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    Europe
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className="angleRight" />
                    Oceania
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wvp_row2">
            <p>THE BEST WORDPRESS TRAVEL THEME</p>
            <p>COPYRIGHT NICDARK THEMES 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
