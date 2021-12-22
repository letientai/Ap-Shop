import React, { useState } from "react";
import "./login.scss";
import { Formik, FastField, Form } from "formik";
import Button from "react-bootstrap/Button";
import { SignupSchema } from "./validate";
import { Dimmer, Loader } from "semantic-ui-react";
import logo1 from "../../assets/img-login/facebook.svg";
import logo2 from "../../assets/img-login/google.svg";
import logo3 from "../../assets/img-login/zalo.svg";
import logo4 from "../../assets/img-login/apple.svg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const axios = require("axios");
export const Login = (props) => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const initialValues = {
    username: "",
    password: "",
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const closeLogin = () => {
    props.signaling();
  };

  const onAdd = async (values, { resetForm }) => {
    await onLogin(values);
    await resetForm();
  };

  const Register = () => {
    props.showRegister();
  };

  const onLogin = (values) => {
    setLoadingPage(true)
    axios
      .post("https://lap-center.herokuapp.com/api/login", {
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        setLoadingPage(false)
        setCheckLogin(true)
        setMessage("Đăng nhập thành công")
        localStorage.setItem("customerName", response.data.userName);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        props.signaling();
      })
      .catch(function (error) {
        setCheckLogin(false)
        setMessage("Sai mật khẩu hoặc tên đăng nhập")
        setLoadingPage(false)
        setOpen(true);
      });
  };

  return (
    <div className="login-container">
      <Dimmer active={loadingPage} inverted className="dimmer">
        <Loader inverted>Loading</Loader>
      </Dimmer>
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
                <label htmlFor="Email">Email or Phone</label>
                <FastField
                  name="username"
                  className="formField"
                  placeholder="Ex: 0916..."
                />
                {errors.username && touched.username ? (
                  <div className="formError">{errors.username}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="Address">Password</label>
                <FastField
                  name="password"
                  className="formField"
                  placeholder="Ex: 1234..."
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
            <span>Không có tài khoản? </span>{" "} <p onClick={Register}>Đăng ký</p>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={checkLogin ? "success": "error"} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
