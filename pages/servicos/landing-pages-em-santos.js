// 3rd parties
import Head from 'next/head';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const LandingPages = function PageServiceLandingPages() {
  return (
    <>
      <Head>
        <title>
          Landing Pages em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Landing Pages" source="landing-pages-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Landing Pages
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          Landing Pages
        </TitleServices>

        <Block data-aos="fade-up">
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
      </ServiceInfo>
    </>
  );
};
export default LandingPages;
