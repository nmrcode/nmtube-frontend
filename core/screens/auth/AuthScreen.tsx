import { EventHandler, FC, FormEvent } from "react";
import s from "./AuthScreen.module.scss";
import { observer } from "mobx-react-lite";
import Field from "@/components/ui/form/field/Field";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

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
  } = useForm<Inputs>();

  const onLogin = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
  };

  const onRegister = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Войдите или зарегистрируйтесь</h1>
      <form className={s.form}>
        <Field {...register("email")} placeholder="Email ..." />
        <Field {...register("password")} placeholder="Password ..." />
        <div className={s.buttons}>
          <Button onClick={onLogin}>Войти</Button>
          <Button onClick={onRegister}>Зарегистрироваться</Button>
        </div>
        <Link href="/">
          <a className={s.back}>Назад к сайту</a>
        </Link>
      </form>
    </div>
  );
});

export default AuthScreen;
