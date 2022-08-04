import { FC } from "react";

import Layout from "../../components/layout/Layout";

import s from "./HomeScreen.module.scss";
import { observer } from "mobx-react-lite";

const HomeScreen: FC = observer(() => {
  return <Layout>HomeScreen</Layout>;
});

export default HomeScreen;
