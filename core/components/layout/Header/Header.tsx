import { FC } from "react";

import { dropdownLinks } from "@/components/layout/Header/dropdown-links.data";
import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/form/field/Field";
import ProfileDropdown from "@/components/ui/profile-dropdown/ProfileDropdown";

import SearchIcon from "../../../assets/images/icons/search.svg";

import s from "./Header.module.scss";
import { observer } from "mobx-react-lite";
const Header: FC = observer(() => {
  return (
    <div className={s.wrapper}>
      <div className={s.search}>
        <Field icon={<SearchIcon />} placeholder="Поиск фильмов ..." />
      </div>
      <div className={s.right}>
        <Button shape="rounded" size="xs">
          Добавить
        </Button>
        <ProfileDropdown links={dropdownLinks} />
      </div>
    </div>
  );
});

export default Header;
