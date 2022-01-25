// 3rd parties
import Image from 'next/image';

// Assets
import contentImage from '../../public/maintenance.jpg';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';

const WebMaintenance = function PageServiceWebMaintenance() {
  return (
    <ServiceInfo>
      <Block>
        <h1>Manutenção de Sites</h1>
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

      <Image
        data-aos="fade-up"
        src={contentImage}
        alt="Código indicando manutenção de sites."
      />
    </ServiceInfo>
  );
};
export default WebMaintenance;
