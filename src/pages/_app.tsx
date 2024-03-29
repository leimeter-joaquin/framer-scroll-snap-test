import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

if (typeof window !== undefined) React.useLayoutEffect = React.useEffect;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
