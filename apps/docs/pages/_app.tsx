import React from 'react';
import Head from 'next/head';
import { ThonProvider } from 'thon';
import { modules } from '../.thon';

function ThonUIApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Thon UI</title>
      </Head>
      <ThonProvider modules={modules}>
        <Component {...pageProps} />
      </ThonProvider>
    </>
  );
}

export default ThonUIApp;
