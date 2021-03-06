// 3rd parties
import Head from 'next/head';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const WebMaintenance = function PageServiceWebMaintenance() {
  return (
    <>
      <Head>
        <title>
          Manutenção de Sites | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Manutenção de Sites" source="manutencao-de-sites-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Manutenção de Sites
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          Manutenção de Sites
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            A tecnologia está sempre em constante mudança e por esse motivo,
            após criar um site recomenda-se um acompanhamento técnico para
            mantê-lo em perfeito funcionamento.
          </p>
          <p>
            A Zakta possui um plano de manutenção e suporte técnico com
            atendimento eficaz e ações programadas para a sustentação de seu
            projeto.
          </p>
          <p>
            Oferecemos o plano de manutenção tanto para sites que criamos,
            quanto para sites externos. Temos experiência com diferentes tipos de
            linguagens de programação e frameworks.
          </p>
          <p>
            Entre em contato para avaliarmos o seu projeto e apresentarmos os
            nossos diferentes planos de manutenção e atendimento técnico mensal
            para o seu projeto.
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default WebMaintenance;
