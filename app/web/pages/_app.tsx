import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ContextProvider } from '@context/provider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Vacation Rentals, Homes, Experiences & Places - Airbnb</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
        />
      </Head>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
};

export default MyApp;
