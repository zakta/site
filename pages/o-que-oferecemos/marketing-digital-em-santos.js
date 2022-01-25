// 3rd parties
import Image from 'next/image';
// styles
import ads from '../../public/google-ads.jpg';
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';

const DigitalMkt = function PageServiceDigitalMkt() {
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
          Marketing Digital
        </Breadcrumb.Item>
      </Breadcrumb>
      <Block>
        <h1>Marketing Digital</h1>
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
      <Image
        data-aos="fade-up"
        src={ads}
        alt="Imagem Ilustrando o uso do Google analytics."
      />
    </ServiceInfo>
  );
};
export default DigitalMkt;
