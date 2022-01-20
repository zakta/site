import { GoCheck } from 'react-icons/go';
import TitleSection from '../SectionTitle/styles';
import {
  AboutInfo,
  AboutDivision,
  Container,
  AboutCompany,
  List,
  Check,
} from './styles';

const About = function AboutPage() {
  return (
    <Container>
      <TitleSection data-aos="fade-up">Empresa</TitleSection>

      <AboutDivision>
        <AboutInfo data-aos="fade-up">
          <h3>
            A Zakta existe para criar soluções que facilitem ações e gerem resultados para
            pessoas e empresas com tecnologia especializada.
          </h3>
        </AboutInfo>

        <AboutCompany data-aos="fade-up">
          <p>
            Uma empresa de tecnologia da informação especializada em análise, desenvolvimento,
            consultoria e implementação de aplicações web e mobile.
          </p>
          <p>
            Atuamos desde a fase inicial de concepção do plano de negócios até a publicação do
            projeto. Temos uma equipe especializada que é capaz de criar diversas aplicações e em
            diferentes linguagens de programação e tecnologias.
          </p>
          <p>
            Nosso objetivo é transformar a nossa experiência e bagagem profissional em meios de
            atingir o resultado esperado por nossos clientes através de nossas soluções digitais.
          </p>
        </AboutCompany>
      </AboutDivision>

      <List>
        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>Equipe experiente e altamente qualificada</p>
        </li>

        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>Expertise em diferentes ferramentas e softwares</p>
        </li>

        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>Projetos com resultados comprovados</p>
        </li>

        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>Atendimento técnico ágil e eficaz</p>
        </li>
      </List>
    </Container>
  );
};
export default About;
