import { FC } from "react";

import Menu from "@/components/layout/Sidebar/menu/Menu";
import {
  firstMenu,
  preferencesMenu,
  secondMenu,
} from "@/components/layout/Sidebar/menu/menu.data";
import Hamburger from "@/components/ui/hamburger-button/Hamburger";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import Logo from "@/components/ui/logo/Logo";

import s from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.head}>
          <Hamburger className={s.hamburger} />
          <Logo />
        </div>
        <nav className={s.navigation}>
          <Menu menu={firstMenu} />
          <Menu menu={secondMenu} />
        </nav>
        <div className={s.preferences}>
          <Menu menu={preferencesMenu} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
