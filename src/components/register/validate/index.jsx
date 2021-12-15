import * as Yup from "yup";
// const phoneRegExp =
//   /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Tên người dùng nhập tối thiểu 5 kí tự")
    .max(30, "Tên người dùng nhập không quá 30 kí tự")
    .required("Bắt buộc"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    // .matches( phoneRegExp, "Sai định dạng")
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
