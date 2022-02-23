// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const CreateWeb = function PageServiceWeb() {
  const { t } = useTranslation('criacao-de-sites-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-websites-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Criação de Sites" source="criacao-de-sites-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('websites-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('websites-breadcrumb-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('websites-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('websites-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('websites-page-text-1')}
          </p>
          <p>
            {t('websites-page-text-2')}
          </p>
          <p>
            {t('websites-page-text-3')}
          </p>
          <p>
            {t('websites-page-text-4')}
          </p>
          <p>
            {t('websites-page-text-5')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default CreateWeb;
