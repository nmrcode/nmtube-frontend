import { FC, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { IMenuItem } from "@/components/layout/Sidebar/menu/menu.interface";
import Avatar from "@/components/ui/avatar/Avatar";
import { useClickOutside, useOnClickOutside } from "@/hooks/useClickOutside";

import s from "./ProfileDropdown.module.scss";

const ProfileDropdown: FC<{ links: IMenuItem[] }> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const onDropdownToggle = () => setIsOpen(!isOpen);

  return (
    <div className={s.wrapper} onClick={onDropdownToggle}>
      <Avatar style={{ cursor: "pointer" }} />
      <div className={clsx(s.menu, isOpen && s.active)} ref={dropdownRef}>
        <ul className={s.list}>
          {links.map((link) => (
            <li className={s.item} key={link.href}>
              <Link href={link.href}>
                <a className={s.link}>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
