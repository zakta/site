import Head from "next/head";
import ButtonUp from "../components/ButtonUp";
import Company from "../components/Company";
import Contact from "../components/Contact";
import { Footer } from "../components/Footer";
import Home from "../components/Home";
import Loader from "../components/Loader";
import CookiesModal from "../components/CookiesModal";
import Services from "../components/Services";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | Zakta - Tecnologia</title>
      </Head>

      <Loader />

      <Home />

      <Services />

      <Company />

      <Contact />

      <ButtonUp />

      <Footer />

      <CookiesModal />
    </>
  );
}
