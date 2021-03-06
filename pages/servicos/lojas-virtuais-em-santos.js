// 3rd parties
import Head from 'next/head';
// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const VirtualStore = function PageServiceStore() {
  return (
    <>
      <Head>
        <title>
          Lojas Virtuais em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Lojas Virtuais" source="lojas-virtuais-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Lojas Virtuais
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          Lojas Virtuais
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            Para quem comercializa produtos, ter uma loja virtual é essencial para
            aumentar as suas vendas!
          </p>
          <p>
            As lojas virtuais funcionam como uma vitrine online dos seus produtos
            e permitem que os seus clientes realizem compras de forma rápida,
            prática e segura.
          </p>
          <p>
            A Zakta desenvolve diferentes tipos de lojas virtuais e tem a expertise
            necessária para propor e criar a loja que mais seja apropriada ao seu
            negócio.
          </p>
          <p>
            Criamos lojas virtuais com a identidade visual da sua empresa, design
            moderno, excelente usabilidade e totalmente adaptadas à celulares e
            demais dispositivos móveis.
          </p>
          <p>
            Nossas lojas virtuais são integradas a gateways de pagamentos como
            Mercado Pago, Paypal, PagSeguro, além de terem integração de frete
            com os principais serviços tais como Correios, Melhor Envio, Jadlog,
            entre outros. Também trabalhamos com outras diferentes
            ferramentas e plataformas de lojas virtual.
          </p>
          <p>
            Somos capazes de criar a loja virtual ideal para o seu comércio. Entre
            em contato e nos diga o que precisa.
          </p>
        </Block>
      </ServiceInfo>
    </>
  );
};

export default VirtualStore;
