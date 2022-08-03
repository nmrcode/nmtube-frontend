import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import s from "./Button.module.scss";
import { observer } from "mobx-react-lite";

interface IButtonProps {
  size?: "xs" | "md" | "xl";
  shape?: "square" | "rounded";
  variant?: "outline" | "fill";
}

const Button: FC<HTMLAttributes<HTMLButtonElement> & IButtonProps> = observer(
  ({
    children,
    className,
    size = "md",
    shape = "square",
    variant = "fill",
    ...rest
  }) => {
    return (
      <button
        className={clsx(
          className,
          s.button,
          size === "xs" && s.xs,
          size === "md" && s.md,
          size === "xl" && s.xl,
          shape === "square" && s.square,
          shape === "rounded" && s.rounded,
          variant === "fill" && s.fill,
          variant === "outline" && s.outline
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
