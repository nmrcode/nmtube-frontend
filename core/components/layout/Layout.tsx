import { FC, PropsWithChildren } from "react";

import s from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
