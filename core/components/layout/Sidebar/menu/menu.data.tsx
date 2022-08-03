import HomeIcon from "@/assets/images/icons/home.svg";
import SettingsIcon from "@/assets/images/icons/settings.svg";
import SubscriptionsIcon from "@/assets/images/icons/subscriptions.svg";
import TrendingIcon from "@/assets/images/icons/trending.svg";
import { IMenuItem } from "@/components/layout/Sidebar/menu/menu.interface";

export const firstMenu: IMenuItem[] = [
  {
    icon: <HomeIcon />,
    text: "Главная",
    href: "/",
  },
  {
    icon: <TrendingIcon />,
    text: "Популярное",
    href: "/2",
  },
  {
    icon: <SubscriptionsIcon />,
    text: "Подписки",
    href: "/3",
  },
];

export const secondMenu: IMenuItem[] = [
  {
    text: "Вконтакте",
    href: "/4",
  },
  {
    text: "Github",
    href: "/5",
  },
  {
    text: "Телеграм",
    href: "/6",
  },
];

export const preferencesMenu: IMenuItem[] = [
  {
    icon: <SettingsIcon />,
    text: "Настройки",
    href: "/7",
  },
];
