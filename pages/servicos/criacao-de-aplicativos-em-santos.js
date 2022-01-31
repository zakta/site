// 3rd parties
import Head from 'next/head';
import Image from 'next/image';

// Assets
import contentImage from '../../public/mobile-app.jpg';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const CreateApp = function PageServiceCreateApp() {
  return (
    <>
      <Head>
        <title>
          Criação de Aplicativos em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Criação de Aplicativos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Criação de Aplicativos
          </Breadcrumb.Item>
        </Breadcrumb>
        <TitleServices full>
          Criação de Aplicativos
        </TitleServices>
        <Block data-aos="fade-up">
          <p>
            Os aplicativos estão cada vez mais presentes no nosso dia a dia e se
            tornaram essenciais para diferentes finalidades.
          </p>
          <p>
            É possível criar aplicativos para oferecer facilidades aos seus clientes,
            automatizar ações rotineiras, vender produtos, anunciar serviços, entre
            várias outras coisas.
          </p>
          <p>
            A Zakta tem expertise em criação de aplicativos para Android e Iphones
            totalmente customizados de acordo com o seu negócio.
          </p>
          <p>
            Nós desenvolvemos aplicativos modernos, seguros, estáveis, com
            excelente usabilidade e com foco em resultados.
          </p>
          <p>
            Você tem uma empresa ou uma ideia para uma start-up? Entre em
            contato conosco e a Zakta criará um aplicativo totalmente sob medida
            para você.
          </p>
        </Block>

        <Image
          data-aos="fade-up"
          src={contentImage}
          alt="Aplicativos Mobile"
        />
      </ServiceInfo>
    </>
  );
};
export default CreateApp;
