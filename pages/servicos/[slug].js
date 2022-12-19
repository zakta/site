// 3rd parties
import Head from 'next/head';
// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';
import data from '../../data.json';

export async function getStaticPaths() {
  const paths = data.services.map((current) => ({
    params: { slug: `${current.slug}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const service = data.services.find((current) => current.slug === slug);

  return {
    props: {
      slug: service.slug,
      title: service.title,
      content: service.content,
    },
  };
}

const PageService = function PageService(props) {
  const { slug, title, content } = props;

  return (
    <>
      <Head>
        <title>
          {`${title} | Zakta Tecnologia`}
        </title>
      </Head>

      <ServiceInfo valueSelect={title} source={slug}>
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            {title}
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          {title}
        </TitleServices>

        <Block data-aos="fade-up">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Block>
      </ServiceInfo>
    </>
  );
};
export default PageService;
