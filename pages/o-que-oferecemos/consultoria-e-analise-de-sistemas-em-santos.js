// 3rd parties
import Image from 'next/image';

// styles
import consultancy from '../../public/consultancy.jpg';
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';

const Consultancy = function PageServiceConsultancy() {
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
          Consultoria e Análise de Sistemas
        </Breadcrumb.Item>
      </Breadcrumb>
      <Block data-aos="fade-down">
        <h1>Consultoria e Análise de Sistemas</h1>
        <p>
          Buscar profissionais de TI qualificados, experientes e especializados é
          essencial para o sucesso do seu projeto, pois não basta uma boa ideia,
          precisa-se também de uma excelente execução.
        </p>
        <p>
          A Zakta possui uma equipe técnica altamente capacitada com os
          requisitos técnicos e comportamentais que você procura.
        </p>
        <p>
          Temos profissionais de TI adequados para trabalharem de acordo com a
          sua necessidade, para desenvolver e concluir os seus variados projetos
          com qualidade, segurança e agilidade.
        </p>
        <p>
          Nossos profissionais são especialistas em consultoria, análise e
          desenvolvimento de softwares em diferentes linguagens e frameworks.
        </p>
        <p>
          Nos consulte para conhecer um pouco mais sobre os diferenciais da
          nossa equipe técnica.
        </p>
      </Block>

      <Image
        data-aos="fade-up"
        src={consultancy}
        alt="Imagem Ilustrando Desenvolvedores."
      />
    </ServiceInfo>
  );
};
export default Consultancy;
