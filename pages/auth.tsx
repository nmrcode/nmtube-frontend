import type { NextPage } from "next";

import HomeScreen from "@/screens/home/HomeScreen";
import { observer } from "mobx-react-lite";
import AuthScreen from "@/screens/auth/AuthScreen";

const Auth: NextPage = observer(() => {
  return (
    <>
      <AuthScreen />
    </>
  );
});

export default Auth;
