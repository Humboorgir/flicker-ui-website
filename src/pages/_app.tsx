import "@/styles/globals.css";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

import NextNProgress from "nextjs-progressbar";

import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <main className={roboto.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextNProgress color="hsl(var(--foreground))" options={{ showSpinner: true }} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </main>
  );
}
