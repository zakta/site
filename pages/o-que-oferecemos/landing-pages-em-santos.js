// 3rd parties
import Image from 'next/image';

// Assets
import contentImage from '../../public/landing-page.jpg';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';

const LandingPages = function PageServiceLandingPages() {
  return (
    <ServiceInfo>
      <Breadcrumb>
        <Breadcrumb.Link href="/">
          Início
        </Breadcrumb.Link>
        <Breadcrumb.Link href="/o-que-oferecemos">
          O que oferecemos
        </Breadcrumb.Link>
        <Breadcrumb.Item>
          Landing Pages
        </Breadcrumb.Item>
      </Breadcrumb>
      <Block data-aos="fade-down">
        <h1>Landing Pages</h1>
        <p>
          Landing Pages são sites de uma página única com forte apelo comercial
          e voltados para campanhas para apresentação de eventos, serviços ou
          produtos.
        </p>
        <p>
          Uma Landing Page é capaz de apresentar resumidamente as
          informações da sua campanha e oferecer mecanismos para coletas de
          leads, ou seja, pessoas interessadas que podem se tornar clientes.
        </p>
        <p>
          A Zakta desenvolve landing pages modernas, personalizadas e
          totalmente focadas em resultados!
        </p>
        <p>
          Temos expertise para lhe propor ideias e criar a melhor landing page
          para a sua campanha.
        </p>
        <p>
          Solicite um orçamento e conheça as nossas estratégias para criação de
          Landing Pages.
        </p>
      </Block>

      <Image
        data-aos="fade-up"
        src={contentImage}
        alt="Imagem Ilustrando uma Landing Page."
      />
    </ServiceInfo>
  );
};
export default LandingPages;
