// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const WebMaintenance = function PageServiceWebMaintenance() {
  const { t } = useTranslation('manutencao-de-sites-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-maintenance-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Manutenção de Sites" source="manutencao-de-sites-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('maintenance-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('maintenance-breadcrumb-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('maintenance-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('maintenance-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('maintenance-page-text-1')}
          </p>
          <p>
            {t('maintenance-page-text-2')}
          </p>
          <p>
            {t('maintenance-page-text-3')}
          </p>
          <p>
            {t('maintenance-page-text-4')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default WebMaintenance;
const getStaticProps = makeStaticProps(['manutencao-de-sites-em-santos', 'common']);
export { getStaticPaths, getStaticProps };
