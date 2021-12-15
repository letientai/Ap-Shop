import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("Bắt buộc")
    .min(6, "Tối thiểu 6 ký tự")
    .max(30, "Quá dài"),
    username: Yup.string().required("Bắt buộc"),
});
