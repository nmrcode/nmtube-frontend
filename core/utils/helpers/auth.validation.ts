import * as yup from "yup";

export const authValidation = yup
  .object({
    email: yup
      .string()
      .email("Введите корректный Email")
      .required("Это обязательное поле"),
    password: yup
      .string()
      .min(6, "Пароль не может быть меньше 6 знаков")
      .required("Это обязательное поле"),
  })
  .required();
