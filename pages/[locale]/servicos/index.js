// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

// styles
import Services from '../../../components/Services';
import Breadcrumb from '../../../components/Breadcrumb';
import ServiceInfo from '../../../components/ServiceInfo';

const OfferedServices = function PageOfferedServices() {
  const { t } = useTranslation('servicos');
  return (
    <>
      <Head>
        <title>{t('services-page-title')}</title>
      </Head>

      <ServiceInfo none source="servicos-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('services-page-home')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('services-page-services')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <Services full />
      </ServiceInfo>
    </>
  );
};

export default OfferedServices;
const getStaticProps = makeStaticProps(['servicos', 'common']);
export { getStaticPaths, getStaticProps };
