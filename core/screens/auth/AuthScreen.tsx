import { FC } from "react";
import s from "./AuthScreen.module.scss";
import { observer } from "mobx-react-lite";
import Field from "@/components/ui/form/field/Field";
import Button from "@/components/ui/button/Button";
import Link from "next/link";

const AuthScreen: FC = observer(() => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Войдите или зарегистрируйтесь</h1>
      <form className={s.form}>
        <Field placeholder="Email ..." />
        <Field placeholder="Password ..." />
        <div className={s.buttons}>
          <Button>Войти</Button>
          <Button>Зарегистрироваться</Button>
        </div>
        <Link href="/">
          <a className={s.back}>Назад к сайту</a>
        </Link>
      </form>
    </div>
  );
});

export default AuthScreen;
