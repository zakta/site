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
import Loader from '../components/Loader';
import CookiesModal from '../components/CookiesModal';
import Services from '../components/Services';
import ModalWhatsapp from '../components/ModalWhatsapp';
import Terms from '../components/Terms';
import PrivacyTerms from '../components/PrivacyTerms';
import GoogleAnalytics from '../components/GoogleAnalytics';

const Index = function IndexPage() {
  const [isAcceptedCookie, setAcceptedCookie] = useState(false);

  const alterModal = (id1, id2) => {
    const idModal = document.querySelector(id1);
    idModal.classList.remove('close');
    document.body.style.overflow = 'hidden';
    const modalPrivacy = document.querySelector(id2);
    modalPrivacy.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (cookie.get('allow-cookies')) {
      setAcceptedCookie(true);
    }
    if (window.location.hash === '#termos') {
      alterModal('#terms', '#modalTerms');
    }
    if (window.location.hash === '#privacidade') {
      alterModal('#privacy', '#modalPrivacy');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Tecnologia Aplicada em Soluções Digitais | Zakta</title>
      </Head>

      <Loader />

      <Home />

      <Services />

      <Company />

      <Contact />

      <ButtonUp />

      <ModalWhatsapp />

      <Footer alterModal={alterModal} />

      <Terms />

      <PrivacyTerms />

      <CookiesModal
        isAcceptedCookie={isAcceptedCookie}
        setAcceptedCookie={setAcceptedCookie}
        alterModal={alterModal}
      />

      <GoogleAnalytics />
    </>
  );
};

export default Index;
