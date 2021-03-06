import Document, { Html, Head, Main, NextScript } from 'next/document';
const APP_NAME = 'Infinite Query';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="description" content="Generated by create next app" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/icons/pwa-192x192.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-touch-icon-180x180.png"
            sizes="180x180"
          />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
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
