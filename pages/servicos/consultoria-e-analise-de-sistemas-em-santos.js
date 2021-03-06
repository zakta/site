// 3rd parties
import Head from 'next/head';

// Styles
import ServiceInfo from '../../components/ServiceInfo';
import { Block } from '../../components/ServiceInfo/styles';
import Breadcrumb from '../../components/Breadcrumb';
import { TitleServices } from '../../components/Services/styles';

const Consultancy = function PageServiceConsultancy() {
  return (
    <>
      <Head>
        <title>
          Consultoria e Análise de Sistemas em Santos | Zakta Tecnologia
        </title>
      </Head>

      <ServiceInfo valueSelect="Consultoria e Análise de Sistemas" source="consultoria-e-analise-de-sistemas-em-santos">
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Link href="/servicos">
            Serviços
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Consultoria e Análise de Sistemas
          </Breadcrumb.Item>
        </Breadcrumb>

        <TitleServices full>
          Consultoria e Análise de Sistemas
        </TitleServices>

        <Block data-aos="fade-up">
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
      </ServiceInfo>
    </>
  );
};
export default Consultancy;
