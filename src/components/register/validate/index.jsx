import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Tên người dùng nhập tối thiểu 5 kí tự")
    .max(30, "Tên người dùng nhập không quá 30 kí tự")
    .required("Bắt buộc"),
  phone: Yup.string()
    .min(10, "Yêu cầu nhập đúng số điện thoại")
    .max(11, "Yêu cầu nhập đúng số điện thoại")
    .matches(phoneRegExp, 'Yêu cầu nhập đúng số điện thoại')
    .required("Bắt buộc"),
  password: Yup.string()
    .required("Bắt buộc")
    .min(6, "Tối thiểu 6 ký tự")
    .max(30, "Quá dài"),
  cfPassword: Yup.string()
    .required("Bắt buộc")
    .min(6, "Tối thiểu 6 ký tự")
    .max(30, "Quá dài"),

  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
});
