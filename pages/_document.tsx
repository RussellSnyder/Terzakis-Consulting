import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700,300,400italic"
            rel="stylesheet"
          />
        </Head>
        <body className="font-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument