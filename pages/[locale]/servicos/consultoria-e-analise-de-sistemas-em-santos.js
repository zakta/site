// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const Consultancy = function PageServiceConsultancy() {
  const { t } = useTranslation('consultoria-e-analise-de-sistemas-em-santos');
  return (
    <>
      <Head>
        <title>
          Consultoria e Análise de Sistemas em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Consultoria e Análise de Sistemas" source="consultoria-e-analise-de-sistemas-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('breadcrumb-link-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('breadcrumb-link-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('consultancy-services--item')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('consultancy-services--item')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('consultancy-services--text-1')}
          </p>
          <p>
            {t('consultancy-services--text-2')}
          </p>
          <p>
            {t('consultancy-services--text-3')}
          </p>
          <p>
            {t('consultancy-services--text-4')}
          </p>
          <p>
            {t('consultancy-services--text-5')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default Consultancy;
const getStaticProps = makeStaticProps(['consultoria-e-analise-de-sistemas-em-santos']);
export { getStaticPaths, getStaticProps };
