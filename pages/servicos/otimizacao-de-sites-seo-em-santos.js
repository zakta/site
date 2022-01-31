// 3rd parties
import Head from 'next/head';
import Image from 'next/image';

// Assets
import contentImage from '../../public/seo.jpg';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const WebOptimization = function PageServiceWebOptimization() {
  return (
    <>
      <Head>
        <title>
          Otimização de Sites - SEO em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Otimização de Sites">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Otimização de Sites - SEO
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          Otimização de Sites - SEO
        </TitleServices>

        <Block data-aos="fade-up">
          <p>
            São inúmeras as vantagens de se possuir um site, no entanto, é
            necessário que o projeto seja criado com as melhores técnicas de SEO
            on page para que o site seja encontrado facilmente pelos clientes.
          </p>
          <p>
            SEO on page é o conjunto de estratégias de otimização para motores de
            busca realizado dentro das páginas web, com o objetivo de melhorar o
            tráfego orgânico. Ou seja, com as melhoras técnicas de SEO, o seu site
            pode ser encontrado em uma melhor posição no Google, aumentando
            assim o número de acessos ao site, o pode colaborar com um maior
            número de orçamentos e vendas.
          </p>
          <p>
            Todos os sites criados pela Zakta já contam com as técnicas de SEO on
            page, desde a sua publicação. No entanto, caso você já tenha um site e
            ele não esteja indexando bem no Google, a Zakta também oferece a
            solução de otimização de SEO, dentro do que for possível de se realizar
            no próprio site atual.
          </p>
          <p>
            Fale com um dos nossos especialistas para desenvolvermos as melhores
            técnicas de SEO para o seu projeto.
          </p>
        </Block>

        <Image
          data-aos="fade-up"
          src={contentImage}
          alt="Página Web"
        />
      </ServiceInfo>
    </>
  );
};
export default WebOptimization;
