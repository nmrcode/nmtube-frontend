import { FC, forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";

import s from "./Field.module.scss";

import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | undefined;
  icon?: JSX.Element;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}

const Field = forwardRef<HTMLInputElement, IField>(
  ({ error, icon, placeholder, type = "text", style, ...rest }, ref) => {
    return (
      <div className={clsx(s.common, s.wrapper)} style={style}>
        <label>
          <div className={s.icon}>{icon}</div>
          <input
            type={type}
            ref={ref}
            {...rest}
            className={s.input}
            placeholder={placeholder}
          />
        </label>
        {error && <div className={s.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
