// 3rd parties
import cookie from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';

// Components
import ButtonUp from '../components/ButtonUp';
import Company from '../components/Company';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
// import Loader from '../components/Loader';
import CookiesModal from '../components/CookiesModal';
import Services from '../components/Services';
import GoogleAnalytics from '../components/GoogleAnalytics';

const Index = function IndexPage() {
  const [isAcceptedCookie, setAcceptedCookie] = useState(false);

  useEffect(() => {
    if (cookie.get('allow-cookies')) {
      setAcceptedCookie(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Tecnologia Aplicada em Soluções Digitais | Zakta</title>
      </Head>

      { /* <Loader /> */ }

      <Home />

      <Services />

      <Company />

      <Contact />

      <ButtonUp />

      <Footer />

      <CookiesModal
        isAcceptedCookie={isAcceptedCookie}
        setAcceptedCookie={setAcceptedCookie}
      />

      <GoogleAnalytics />
    </>
  );
};

export default Index;
