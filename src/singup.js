
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
    <div className={StyleSheet.container}>
    <h1 className={styles.title}>Sing Up</h1>
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
            <label htmlFor="name">Tên người dùng</label>
            <Field type="text" name="name" className={styles.name} />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className={styles.email} />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="phone">Số điện thoại</label>
            <Field type="text" name="phone" className={styles.phone} />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="password">Mật khẩu</label>
            <Field type="password" name="password" className={styles.password} />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <p className={styles.khung}> </p>
          <div>
            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
            <Field type="password" name="confirmPassword" className={styles.confirmPassword} />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>
          <p> </p>
          <button type="submit" disabled={isSubmitting}>
            Đăng ký
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default SignupForm
