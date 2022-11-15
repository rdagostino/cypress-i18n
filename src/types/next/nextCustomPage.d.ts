import type { NextComponentType, NextPageContext } from 'next';

export type NextCustomPage<P = unkown, IP = P> = NextComponentType<NextPageContext, IP, P> & {
  auth?: boolean;
};

declare module 'next/app' {
  type AppProps<P = Record<string, unknown>> = {
    Component: NextCustomPage;
    router: Router;
    __N_SSG?: boolean;
    __N_SSP?: boolean;
    pageProps: P & {
      /** Initial session passed in from `getServerSideProps` or `getInitialProps` */
      session?: Session;
    };
  };
}
