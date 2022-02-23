// 3rd parties
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

// Styles
import ServiceInfo from '../../../components/ServiceInfo';
import { Block } from '../../../components/ServiceInfo/styles';
import Breadcrumb from '../../../components/Breadcrumb';
import { TitleServices } from '../../../components/Services/styles';

const CreateBlog = function PageServiceCreateBlog() {
  const { t } = useTranslation('criacao-de-blogs-em-santos');
  return (
    <>
      <Head>
        <title>
          {t('services-blog-page')}
        </title>
      </Head>

      <ServiceInfo valueSelect="Criação de Blogs" source="criacao-de-blogs-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            {t('services-breadcrumb-1')}
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            {t('services-breadcrumb-2')}
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {t('blog-page-title')}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {t('blog-page-title')}
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            {t('blog-page-text-1')}
          </p>
          <p>
            {t('blog-page-text-2')}
          </p>
          <p>
            {t('blog-page-text-3')}
          </p>
          <p>
            {t('blog-page-text-4')}
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default CreateBlog;
