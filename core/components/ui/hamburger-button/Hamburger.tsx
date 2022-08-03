import { FC, HTMLAttributes, useState } from "react";
import clsx from "clsx";

import HamburgerIcon from "@/assets/images/icons/hamburger.svg";
import ArrowIcon from "@/assets/images/icons/right-arrow.svg";

import s from "./Hamburger.module.scss";

const Hamburger: FC<HTMLAttributes<HTMLButtonElement>> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <button
      className={clsx(className, s.hamburger, isOpen ? s.opened : s.closed)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default Hamburger;
