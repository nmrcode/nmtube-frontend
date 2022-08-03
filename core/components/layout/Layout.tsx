import { FC, PropsWithChildren } from "react";

import Header from "@/components/layout/Header/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

import s from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Header />
      </header>

      <aside className={s.sidebar}>
        <Sidebar />
      </aside>

      <main className={s.main}>{children}</main>
    </div>
  );
};

export default Layout;
