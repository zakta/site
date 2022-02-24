// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const CreateApp = function PageServiceCreateApp() {
  const { t } = useTranslation('criacao-de-aplicativos-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('title-services-page-app')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Criação de Aplicativos" source="criacao-de-aplicativos-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('breadcrumb-page-app-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('breadcrumb-page-app-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('services-page-app-about')}
          </Breadcrumb.Item>
        </Breadcrumb>
        <TitleServices full>
          {t('services-page-app-about')}
        </TitleServices>
        <Block data-aos="fade-up">
          <p>
            {t('services-page-app-text-1')}
          </p>
          <p>
            {t('services-page-app-text-2')}
          </p>
          <p>
            {t('services-page-app-text-3')}
          </p>
          <p>
            {t('services-page-app-text-4')}
          </p>
          <p>
            {t('services-page-app-text-5')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default CreateApp;
const getStaticProps = makeStaticProps(['criacao-de-aplicativos-em-santos', 'common']);
export { getStaticPaths, getStaticProps };
