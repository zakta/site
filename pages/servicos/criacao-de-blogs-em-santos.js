// 3rd parties
import Head from 'next/head';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const CreateBlog = function PageServiceCreateBlog() {
  return (
    <>
      <Head>
        <title>
          Criação de Blogs em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Criação de Blogs" source="criacao-de-blogs-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Criação de Blogs
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          Criação de Blogs
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            Blogs são páginas de site específicas para a divulgação de conteúdos
            para os visitantes, tais como novidades, artigos, resenhas, notícias,
            entre outros. Ou seja, um blog é uma página atualizada com conteúdo
            de forma frequente.
          </p>
          <p>
            Possuir um blog dentro do site ajuda a atrair mais acessos de usuários
            interessados nos conteúdos, além de colaborar com uma melhor
            indexação no Google, de acordo com os termos inseridos nas postagens.
          </p>
          <p>
            A Zakta desenvolve blogs modernos, profissionais, customizados e
            personalizados para diferentes tipos de sites, temas e segmentos.
          </p>
          <p>
            Solicite um orçamento e conheça as nossas ideias para desenvolver o
            blog ideal para o seu projeto.
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default CreateBlog;
