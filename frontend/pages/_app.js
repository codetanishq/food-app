// pages/_app.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sugandh Food Products</title>
        <meta name="description" content="Explore Sugandh's range of delicious food products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
