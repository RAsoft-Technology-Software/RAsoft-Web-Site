import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Web Uygulamalamaları Geliştirme, Web Tasarım, Sosyal Medya, SEO"
          />
          <meta
            name="description"
            content="RAsoft Teknoloji, Yazılım ve Danışmanlık"
          />
          <meta name="author" content="RAsoft Teknoloji, Yazılım ve Danışmanlık" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            rel="stylesheet"
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
