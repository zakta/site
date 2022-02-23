// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const VirtualStore = function PageServiceStore() {
  const { t } = useTranslation('lojas-virtuais-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-virtual-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Lojas Virtuais" source="lojas-virtuais-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('virtual-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('virtual-breadcrumb-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('virtual-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('virtual-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('virtual-page-text-1')}
          </p>
          <p>
            {t('virtual-page-text-2')}
          </p>
          <p>
            {t('virtual-page-text-3')}
          </p>
          <p>
            {t('virtual-page-text-4')}
          </p>
          <p>
            {t('virtual-page-text-5')}
          </p>
          <p>
            {t('virtual-page-text-6')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};

export default VirtualStore;
