import "../styles/globals.css";
import "../styles/swiper.css";
import "../styles/animations.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
