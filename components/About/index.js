import { GoCheck } from 'react-icons/go';
import TitleSection from '../SectionTitle/styles';
import {
  AboutInfo,
  AboutDivision,
  Container,
  Owners,
  AboutCompany,
  List,
  Check,
} from './styles';

const About = function AboutPage() {
  return (
    <Container>
      <TitleSection>Empresa</TitleSection>

      <AboutDivision>
        <AboutInfo>
          <h3>
            A Zakta existe para facilitar a vida das pessoas e reinventar as
            empresas, através de novos produtos e da tecnologia.
          </h3>

          <Owners>
            <h4>Fernanda F. Silva</h4>
            <p>CEO</p>
          </Owners>

          <Owners>
            <h4>Nelson Francisco</h4>
            <p>CTO</p>
          </Owners>
        </AboutInfo>

        <AboutCompany>
          <p>
            Uma empresa de tecnologia da informação que está envolvida no
            planejamento, desenvolvimento e implementação de aplicações web e
            mobile.
          </p>
          <p>
            Trabalhamos diretamente com os proprietários na elaboração de um
            plano de negócios, identificando as necessidades de marketing e
            desenvolvendo as habilidades necessárias para a propriedade do
            negócio.
          </p>
          <p>
            Nosso objetivo é entregar o máximo de excelência, a fins de atingir
            e ou superar o resultado esperado.
          </p>
        </AboutCompany>
      </AboutDivision>

      <List>
        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Equipe humana e altamente qualificada</p>
        </li>

        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Melhores práticas do mercado</p>
        </li>

        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Aplicação das mais recentes técnicas de qualidade</p>
        </li>

        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Novas feats, suporte e sustentação contínuos</p>
        </li>
      </List>
    </Container>
  );
};
export default About;
