import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import s from "./Field.module.scss";

interface IFieldProps {
  icon?: JSX.Element;
}

const Field: FC<HTMLAttributes<HTMLInputElement> & IFieldProps> = ({
  className,
  icon,
  ...rest
}) => {
  return (
    <div className={s.wrapper}>
      {icon && <div className={s.icon}>{icon}</div>}
      <input className={clsx(className, s.input)} {...rest} />
    </div>
  );
};

export default Field;
