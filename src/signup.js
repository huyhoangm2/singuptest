import styles from "./signup.module.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Tên của bạn phải có ít nhất 2 ký tự")
    .max(50, "Tên của bạn không được dài hơn 50 ký tự")
    .required("Vui lòng nhập tên người dùng"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Vui lòng nhập số điện thoại hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .max(50, "Mật khẩu không được dài hơn 50 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu nhập lại không trùng khớp")
    .required("Bạn cần nhập lại mật khẩu"),
});

const SignupForm = () => {
  return (
    <div className={styles.container}>
    
      <div className={styles.form}>
    <h1 className={styles.title}>SIGN UP</h1>
   
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
       
        <Form>
          <p> </p>
          <div>
            <label htmlFor="name"></label>
            <Field type="text" placeholder='Name' name="name" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="email"></label>
            <Field type="email" placeholder='Email' name="email" className={styles.input} />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="phone"></label>
            <Field type="text" placeholder='Phone' name="phone" className={styles.input} />
            <ErrorMessage name="phone" component="div" className={styles.error} />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="password"></label>
            <Field type="password" placeholder='Password' name="password" className={styles.input} />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="confirmPassword"></label>
            <Field type="password" placeholder='ConfirmPassword' name="confirmPassword" className={styles.input} />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={styles.error}
            />
          </div>
          <p> </p>
          <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
          SIGN UP
          </button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
  );
};

export default SignupForm
