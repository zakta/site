// 3rd parties
import cookie from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';

// Components
import Company from '../components/Company';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Loader from '../components/Loader';
import CookiesModal from '../components/CookiesModal';
import Services from '../components/Services';
import GoogleAnalytics from '../components/GoogleAnalytics';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = function IndexPage() {
  const [isAcceptedCookie, setAcceptedCookie] = useState(false);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cookie.get('allow-cookies')) {
      setAcceptedCookie(true);
    }
    if (!sessionStorage.getItem('loader')) {
      setAnimate(true);
    }

    sessionStorage.setItem('loader', JSON.stringify(true));
  }, []);

  const [cookiesModalHeight, setCookiesModalHeight] = useState(0);

  return (
    <>
      <Head>
        <title>Criação de sites em Santos | Zakta Tecnologia</title>
      </Head>

      <Loader animate={animate} />

      <Home />

      <Services />

      <Company />

      <Contact />

      <Footer cookiesModalHeight={cookiesModalHeight} />

      <WhatsAppButton />

      <CookiesModal
        isAcceptedCookie={isAcceptedCookie}
        setAcceptedCookie={setAcceptedCookie}
        setCookiesModalHeight={setCookiesModalHeight}
      />

      <GoogleAnalytics />
    </>
  );
};

export default Index;
