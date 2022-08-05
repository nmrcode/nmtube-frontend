import { EventHandler, FC, FormEvent } from "react";
import s from "./AuthScreen.module.scss";
import { observer } from "mobx-react-lite";
import Field from "@/components/ui/form/field/Field";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { authStore } from "@/store/auth.store";
import { authValidation } from "@/utils/helpers/auth.validation";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  email: string;
  password: string;
};

const AuthScreen: FC = observer(() => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(authValidation),
  });

  const { login, register: authRegister } = authStore;

  function handleLogin(d: Inputs) {
    login(d.email, d.password);
  }

  function handleRegister(d: Inputs) {
    authRegister(d.email, d.password);
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Войдите или зарегистрируйтесь</h1>
      <form className={s.form}>
        <p className={s.error}>{errors.email?.message}</p>
        <Field {...register("email")} placeholder="Email ..." />
        <p className={s.error}>{errors.password?.message}</p>
        <Field {...register("password")} placeholder="Password ..." />
        <div className={s.buttons}>
          <Button onClick={handleSubmit((d) => handleLogin(d))}>Войти</Button>
          <Button onClick={handleSubmit((d) => handleRegister(d))}>
            Зарегистрироваться
          </Button>
        </div>
        <Link href="/">
          <a className={s.back}>Назад к сайту</a>
        </Link>
      </form>
    </div>
  );
});

export default AuthScreen;
