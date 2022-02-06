// 3rd parties
import cookie from 'js-cookie';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

// Components
import Company from '../../components/Company';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Loader from '../../components/Loader';
import CookiesModal from '../../components/CookiesModal';
import Services from '../../components/Services';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

const Index = function IndexPage() {
  const { t } = useTranslation('common');

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
        <title>{t('title')}</title>
      </Head>

      <Loader animate={animate} />

      <Home />

      <Services />

      <Company />

      <Contact />

      <Footer cookiesModalHeight={cookiesModalHeight} />

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

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
