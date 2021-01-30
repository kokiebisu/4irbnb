import React from "react";
import Head from "next/head";
import "@styles/global.scss";
import { ContextProvider } from "@context/provider";
import { ThemeProvider } from "theme-ui";
import { theme } from "@airbnb/theme";

const MyApp = ({ Component, pageProps }) => {
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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ContextProvider>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const data = {};
  // Can send requests for app
  // const client = APIClient(ctx);
  // const { data } = await client.get('...');
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default MyApp;
