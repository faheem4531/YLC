import { useEffect } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/router";

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div>
      <SessionProvider>
        <Head>
          <title>Your London Chauffeur</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <ToastContainer />
          <Header currentPath={pathname} />
          <Component {...pageProps} />
          <Footer />
      </SessionProvider>
    </div>
  );
}
