import type { AppProps } from "next/app";

import "../core/assets/styles/global.scss";

// eslint-disable-next-line mobx/missing-observer
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
