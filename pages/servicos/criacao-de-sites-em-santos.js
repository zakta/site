// 3rd parties
import Image from 'next/image';

// Assets
import contentImage from '../../public/website.jpg';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const CreateWeb = function PageServiceWeb() {
  return (
    <ServiceInfo>
      <Breadcrumb>
        <Breadcrumb.Link href="/">
          Início
        </Breadcrumb.Link>
        <Breadcrumb.Link href="/servicos">
          Serviços
        </Breadcrumb.Link>
        <Breadcrumb.Item>
          Criação de Sites
        </Breadcrumb.Item>
      </Breadcrumb>

      <TitleServices full>
        Criação de Sites
      </TitleServices>

      <Block data-aos="fade-up">
        <p>
          Ter presença na internet é de grande importância para quem tem um
          negócio. Além de demonstrar maior profissionalismo, possuir um site
          facilita que os clientes encontrem a sua empresa, conheçam os seus
          serviços e entrem em contato de forma prática e rápida.
        </p>
        <p>
          Com um site, a sua empresa pode conquistar um espaço no Google e
          destacar as informações de seus produtos e serviços, dessa forma
          aumentando o seu número de orçamentos e resultados.
        </p>
        <p>
          A Zakta desenvolve sites totalmente sob medida às necessidades do seu
          negócio. Temos experiência em criação de sites modernos,
          profissionais, com design exclusivos, responsivos e totalmente
          adaptados à celulares e demais dispositivos móveis.
        </p>
        <p>
          Criamos sites em ambiente seguro (HTTPS), com técnicas de SEO,
          integrados ao Whatsapp Web e ao Google Analytics, além de várias
          outras ferramentas e API’s.
        </p>
        <p>
          Entre em contato conosco. Desenvolvemos a solução ideal para o seu
          negócio.
        </p>
      </Block>

      <Image
        data-aos="fade-up"
        src={contentImage}
        alt="Página Web"
      />
    </ServiceInfo>
  );
};
export default CreateWeb;
