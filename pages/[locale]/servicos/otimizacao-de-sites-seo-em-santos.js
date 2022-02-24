// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const WebOptimization = function PageServiceWebOptimization() {
  const { t } = useTranslation('otimizacao-de-sites-seo-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-seo-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Otimização de Sites" source="otimizacao-de-sites-seo-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('seo-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('seo-breadcrumb-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('seo-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('seo-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('seo-page-text-1')}
          </p>
          <p>
            {t('seo-page-text-2')}
          </p>
          <p>
            {t('seo-page-text-3')}
          </p>
          <p>
            {t('seo-page-text-4')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default WebOptimization;
const getStaticProps = makeStaticProps(['otimizacao-de-sites-seo-em-santos', 'common']);
export { getStaticPaths, getStaticProps };
