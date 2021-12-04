import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import "antd/dist/antd.min.css";

import ButtonScrollOnTop from "../components/ButtonScrollOnTop";
import Toast from "../components/ui/Toast";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="root-app">
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />

      <ButtonScrollOnTop />
      <Toast />
    </div>
  );
};
export default App;
