import React from 'react';
import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import { default as Router } from 'next/router';

import '../src/sass/global.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
}

export default App;
