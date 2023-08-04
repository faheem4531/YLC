import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="_bUmXSPiEGue36G7BPbjKonKNuWSifQ6zrRJoWq4b5U"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" href="/logo.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BYC2L5MH8B"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BYC2L5MH8B');
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
