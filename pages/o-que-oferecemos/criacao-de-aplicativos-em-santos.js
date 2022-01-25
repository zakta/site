// 3rd parties
import Image from 'next/image';
// styles
import app from '../../public/mobile-app.jpg';
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';

const CreateApp = function PageServiceCreateApp() {
  return (
    <ServiceInfo>
      <Breadcrumb>
        <Breadcrumb.Link href="/">
          Inicio
        </Breadcrumb.Link>
        <Breadcrumb.Link href="/o-que-oferecemos">
          O Que Oferecemos
        </Breadcrumb.Link>
        <Breadcrumb.Item>
          Criação de Aplicativos
        </Breadcrumb.Item>
      </Breadcrumb>
      <Block>
        <h1>Criação de Aplicativos</h1>
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
        src={app}
        alt="Aplicativos Mobile"
      />
    </ServiceInfo>
  );
};
export default CreateApp;
