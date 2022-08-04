import type { NextPage } from "next";

import HomeScreen from "@/screens/home/HomeScreen";
import { observer } from "mobx-react-lite";

const Home: NextPage = observer(() => {
  return (
    <>
      <HomeScreen />
    </>
  );
});

export default Home;
