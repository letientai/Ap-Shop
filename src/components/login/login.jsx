import React from "react";
import "./login.scss";
import { Formik, FastField, Form } from "formik";
import Button from "react-bootstrap/Button";
import { SignupSchema } from "./validate";
import logo1 from "../../assets/img-login/facebook.svg";
import logo2 from "../../assets/img-login/google.svg";
import logo3 from "../../assets/img-login/zalo.svg";
import logo4 from "../../assets/img-login/apple.svg";
export const Login = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const closeLogin = () => {
    props.signaling();
  };
  const onAdd = async () => {
    await props.signaling();
  };

  const Register=() =>{
    props.showRegister()
  }

  return (
    <div className="login-container">
      <div className="form-login">
        <div className="header">
          <h1>LOGIN</h1>
          <div className="btn-close" onClick={closeLogin}></div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={onAdd}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div>
                <label htmlFor="Email">Email</label>
                <FastField
                  name="email"
                  className="formField"
                  placeholder="Email..."
                />
                {errors.email && touched.email ? (
                  <div className="formError">{errors.email}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="Address">Password</label>
                <FastField
                  name="password"
                  className="formField"
                  placeholder="Password..."
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div className="formError">{errors.password}</div>
                ) : null}
              </div>

              <Button className="btn_submit" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <div className="sign-in-social-text">
          <span>Đăng nhập với tài khoản khác</span>
          <div className="logo">
            <img src={logo1} alt="" className="logo" />
            <img src={logo2} alt="" className="logo" />
            <img src={logo3} alt="" className="logo" />
            <img src={logo4} alt="" className="logo" />
          </div>
          <b>Quên mật khẩu</b>
          <div className="register">
            <span>Không có tài khoản? </span> <p onClick={Register}>Đăng ký</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
