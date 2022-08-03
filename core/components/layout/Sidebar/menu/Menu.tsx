import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { IMenuItem } from "@/components/layout/Sidebar/menu/menu.interface";

import s from "./Menu.module.scss";

const Menu: FC<{ menu: IMenuItem[] }> = ({ menu }) => {
  return (
    <ul className={s.list}>
      {menu.map((item) => (
        <MenuItem key={item.href} item={item} />
      ))}
    </ul>
  );
};

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const router = useRouter();
  return (
    <li>
      <Link href={item.href}>
        <a
          className={clsx(
            s.item,
            router.pathname === item.href ? s.item__active : ""
          )}
        >
          {item.icon && <div className={s.icon}>{item.icon}</div>}
          <span>{item.text}</span>
        </a>
      </Link>
    </li>
  );
};

export default Menu;
