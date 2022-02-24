// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const WebSystems = function PageServiceWebSystem() {
  const { t } = useTranslation('sistemas-web-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-systems-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Sistemas Web" source="sistemas-web-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('systems-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('systems-breadcrumb-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('systems-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('systems-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('systems-page-text-1')}
          </p>
          <p>
            {t('systems-page-text-2')}
          </p>
          <p>
            {t('systems-page-text-3')}
          </p>
          <p>
            {t('systems-page-text-4')}
          </p>
          <p>
            {t('systems-page-text-5')}
          </p>
          <p>
            {t('systems-page-text-6')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default WebSystems;
const getStaticProps = makeStaticProps(['sistemas-web-em-santos', 'common']);
export { getStaticPaths, getStaticProps };
