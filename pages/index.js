import Head from "next/head";
import { useEffect } from "react";
import Company from "../components/Company";
import Contact from "../components/Contact";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Services from "../components/Services";

export default function Index() {
  useEffect(() => {
    const element = document.getElementById(location.pathname);

    window.scroll({
      behavior: "smooth",
      top: element ? element.offsetTop : 0,
    });
  });

  return (
    <div>
      <Head>
        <title>Home | Zakta - Tecnologia</title>
      </Head>
      <Header />
      <Home />
      <Services />
      <Company  />
      <Contact  />
      <Footer />
    </div>
  );
}
