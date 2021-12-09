import React from "react";
import { Formik, FastField, Form } from "formik";
import Button from "react-bootstrap/Button";
import { RegisterSchema } from "./validate";
import "./register.scss";
export const Register = (props) => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };
  const closeRegister = () => {
    props.close();
  };

  const finish =() =>{
    props.finishRegister()
  }

  return (
    <div className="register-container">
      <div className="form-register">
        <div className="header">
          <h1>Register</h1>
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
                  placeholder="Name..."
                />
                {errors.name && touched.name ? (
                  <div className="formError">{errors.name}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="Phone">Phone</label>
                <FastField
                  name="phone"
                  className="formField"
                  placeholder="Phone..."
                />
                {errors.phone && touched.phone ? (
                  <div className="formError">{errors.phone}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="Email">Email</label>
                <FastField
                  name="email"
                  type="email"
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
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
