import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps): ReactElement => (
  <div className='wrapper'>
    <Component {...pageProps} />
  </div>
);

// Export.
export default appWithTranslation(App);
