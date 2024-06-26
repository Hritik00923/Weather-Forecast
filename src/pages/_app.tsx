import type { AppProps } from "next/app";

import Navbar from "@/components/ui/Navbar/Navbar"

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
