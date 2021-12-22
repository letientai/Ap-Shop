import React, { useState } from "react";
import { Formik, FastField, Form } from "formik";
import Button from "react-bootstrap/Button";
import { RegisterSchema } from "./validate";
import "./register.scss";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Dimmer, Loader } from "semantic-ui-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
export const Register = (props) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    cfPassword: "",
  };
  const closeRegister = () => {
    props.close();
  };

  const finish = async (values, { resetForm }) => {
    await register(values);
    await resetForm();
  };

  const register = (values) => {
    setLoading(true);
    if (values.cfPassword === values.password) {
      axios
        .post("https://lap-center.herokuapp.com/api/register", {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
        })
        .then(function (response) {
          setLoading(false);
          console.log("response");
          setOpen(true);
          props.finishRegister();
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
          setMessage("Đăng ký thất bại!!");
        });
    } else {
      setLoading(false);
      setOpen(true);
      setMessage("Mật khẩu không trùng khớp!!");
    }
  };

  return (
    <div className="register-container">
      <Dimmer active={loading} inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <div className="form-register">
        <div className="header">
          <h1>Đăng ký</h1>
          <div className="btn-close" onClick={closeRegister}></div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={finish}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div>
                <label htmlFor="name">Name</label>
                <FastField
                  name="name"
                  className="formField"
                  placeholder="Ex: Lê Văn..."
                />
                {errors.name && touched.name ? (
                  <div className="formError">{errors.name}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="Email">Email</label>
                <FastField
                  name="email"
                  type="email"
                  className="formField"
                  placeholder="Ex: 123@gmail.com"
                />
                {errors.email && touched.email ? (
                  <div className="formError">{errors.email}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="Phone">Phone</label>
                <div className="form__Phone">
                  <PhoneInput
                    name="phone"
                    type="phone"
                    className="region"
                    defaultCountry="VN"
                    international
                    value={value}
                    onChange={setValue}
                    countryCallingCodeEditable={true}
                    
                  />
                  <FastField
                    name="phone"
                    type="phone"
                    className="formField"
                    placeholder="Ex: 0916..."
                  />
                </div>
                {errors.phone && touched.phone ? (
                  <div className="formError">{errors.phone}</div>
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
              <div>
                <label htmlFor="Address">Confirm </label>
                <FastField
                  name="cfPassword"
                  className="formField"
                  placeholder="Ex: 1234... "
                  type="password"
                />
                {errors.cfPassword && touched.cfPassword ? (
                  <div className="formError">{errors.cfPassword}</div>
                ) : null}
              </div>

              <Button className="btn_submit" variant="primary" type="submit">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
