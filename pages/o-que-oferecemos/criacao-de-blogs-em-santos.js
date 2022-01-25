// 3rd parties
import Image from 'next/image';

// Assets
import contentImage from '../../public/blog.jpg';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';

const CreateBlog = function PageServiceCreateBlog() {
  return (
    <ServiceInfo>
      <Breadcrumb>
        <Breadcrumb.Link href="/">
          Início
        </Breadcrumb.Link>
        <Breadcrumb.Link href="/o-que-oferecemos">
          O Que Oferecemos
        </Breadcrumb.Link>
        <Breadcrumb.Item>
          Criação de Blogs
        </Breadcrumb.Item>
      </Breadcrumb>
      <Block data-aos="fade-down">
        <h1>Criação de Blogs</h1>
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

      <Image
        data-aos="fade-up"
        src={contentImage}
        alt="Imagem Ilustrando uma Escritório de uma Blogger."
      />
    </ServiceInfo>
  );
};
export default CreateBlog;
