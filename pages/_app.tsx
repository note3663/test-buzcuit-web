import "../styles/globals.css";
import "antd/dist/antd";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Test-Bizcuit</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
