// 3rd parties
import Image from 'next/image';
// styles
import website from '../../public/website.jpg';
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';

const CreateWeb = function PageServiceWeb() {
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
          Criação de Sites
        </Breadcrumb.Item>
      </Breadcrumb>

      <Block>
        <h1>Criação de Sites</h1>
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
        src={website}
        alt="Página Web"
      />
    </ServiceInfo>
  );
};
export default CreateWeb;
