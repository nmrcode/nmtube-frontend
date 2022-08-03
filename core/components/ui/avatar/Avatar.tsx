import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import s from "./Avatar.module.scss";
import { observer } from "mobx-react-lite";

const Avatar: FC<HTMLAttributes<HTMLDivElement> & { size?: number }> = observer(
  ({ size = 40, className, ...rest }) => {
    return (
      <img
        src="https://placehold.jp/150x150.png"
        width={size}
        height={size}
        className={clsx(className, s.avatar)}
        {...rest}
      />
    );
  }
);

export default Avatar;
