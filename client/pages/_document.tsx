import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Vacation Rentals, Homes, Experiences & Places - Airbnb</title>
          <link rel="stylesheet" href="/styles/fonts.css" />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
