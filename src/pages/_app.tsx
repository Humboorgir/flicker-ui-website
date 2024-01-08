import "@/styles/globals.css";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

import NextNProgress from "nextjs-progressbar";

import { ThemeProvider } from "next-themes";
import { Figtree } from "next/font/google";

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

const figtree = Figtree({ subsets: ["latin"], weight: ["400", "600", "700", "800"], display: "swap" });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <main className={figtree.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextNProgress options={{ showSpinner: false, template: '<div class="progressbar"></div>' }} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </main>
  );
}
