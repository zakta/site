// 3rd parties
import Image from 'next/image';

// Assets
import contentImage from '../../public/web-system.jpg';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';

const WebSystems = function PageServiceWebSystem() {
  return (
    <ServiceInfo>
      <Block>
        <h1>Sistemas Web</h1>
        <p>
          Sistemas web são sistemas desenvolvidos de forma customizada e
          personalizada para diferentes finalidades, sendo acessados pela
          internet.
        </p>
        <p>
          Seja qual for o ramo do seu negócio, sempre há a possibilidade de ter
          um sistema web para agilizar os processos internos, aumentar os
          resultados e facilitar as tarefas do dia a dia.
        </p>
        <p>
          A Zakta tem experiência e habilidade para criar diferentes tipos de
          sistemas em nuvem, tais como: módulo de cadastros, gerenciamento
          de clientes, pagamentos, documentos, entre outros.
        </p>
        <p>
          Há uma variedade infinita de opções de criações de sistema web. Temos
          certeza de que será possível criar uma solução específica para você e
          para a sua empresa.
        </p>
        <p>
          Todos os nossos sistemas são totalmente seguros, personalizados,
          modernos, responsivos e adaptados à diferentes dispositivos móveis.
        </p>
        <p>
          Fale com um dos nossos consultores e iremos te apresentar a melhor
          solução digital para a sua necessidade.
        </p>
      </Block>

      <Image
        data-aos="fade-up"
        src={contentImage}
        alt="Página Web."
      />
    </ServiceInfo>
  );
};
export default WebSystems;
