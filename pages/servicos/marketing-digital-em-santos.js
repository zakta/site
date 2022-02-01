// 3rd parties
import Head from 'next/head';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const DigitalMkt = function PageServiceDigitalMkt() {
  return (
    <>
      <Head>
        <title>
          Marketing Digital em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Marketing Digital" source="marketing-digital-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Marketing Digital
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          Marketing Digital
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            Além de marcar presença na web, seja com um site, loja virtual ou sistema, é
            necessário também realizar uma adequada divulgação do seu projeto e assim
            ter mais chances de alcançar seus resultados.
          </p>
          <p>
            A Zakta possui uma equipe especializada em Marketing Digital para ajudar a
            divulgar o seu negócio na web de diferentes formas:
          </p>
          <ul>
            <li>
              <b> Google Meu Negócio </b>
              : Criamos e atualizamos a ficha de
              apresentação da sua empresa no Google, fornecendo principais
              informações, fotos, horários e contatos.
            </li>
            <li>
              <b> Marketing de Conteúdo </b>
              : Fornecemos estratégias para Marketing
              de Conteúdos com textos e postagens para conseguir acessos,
              atrair clientes e realizar vendas.
            </li>
            <li>
              <b> Google ADS </b>
              : Somos especialistas em criação e gestão de
              campanhas no Google Adwords para a realização de anúncios no
              Google buscando mais acessos para o seu site.
            </li>
          </ul>
        </Block>
      </ServiceInfo>
    </>
  );
};
export default DigitalMkt;
