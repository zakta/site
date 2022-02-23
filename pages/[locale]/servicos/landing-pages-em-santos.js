// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const LandingPages = function PageServiceLandingPages() {
  const { t } = useTranslation('landing-pages-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-landing-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Landing Pages" source="landing-pages-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('landing-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('landing-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('landing-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('landing-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('landing-page-text-1')}
          </p>
          <p>
            {t('landing-page-text-2')}
          </p>
          <p>
            {t('landing-page-text-3')}
          </p>
          <p>
            {t('landing-page-text-4')}
          </p>
          <p>
            {t('landing-page-text-5')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default LandingPages;
