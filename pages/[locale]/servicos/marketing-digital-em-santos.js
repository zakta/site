// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const DigitalMkt = function PageServiceDigitalMkt() {
  const { t } = useTranslation('marketing-digital-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-marketing-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Marketing Digital" source="marketing-digital-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('marketing-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('marketing-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('marketing-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('marketing-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('marketing-page-text-1')}
          </p>
          <p>
            {t('marketing-page-text-2')}
          </p>
          <ul>
            <li>
              <b>
                {t('marketing-page-text-3')}
              </b>
              {t('marketing-page-text-4')}
            </li>
            <li>
              <b>
                {t('marketing-page-text-5')}
              </b>
              {t('marketing-page-text-6')}
            </li>
            <li>
              <b>
                {t('marketing-page-text-7')}
              </b>
              {t('marketing-page-text-8')}
            </li>
          </ul>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default DigitalMkt;
const getStaticProps = makeStaticProps(['marketing-digital-em-santos', 'common']);
export { getStaticPaths, getStaticProps };
