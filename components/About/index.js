import { AboutInfo, AboutDivision, Container, Owners, AboutCompany, List, Check } from "./styles";
import { GoCheck } from "react-icons/go";

export default function About() {
  return (
    <Container>
      <AboutDivision>
        <AboutInfo>
          <h2>Sobre Nós</h2>
          <h3>Mantenha seu negócio seguro e garanta alta disponibilidade</h3>
          <Owners>
            <h4>Fernanda F. Silva</h4>
            <p>CEO da Empresa</p>
          </Owners>
          <Owners>
            <h4>Nelson Francisco</h4>
            <p>CTO da Empresa</p>
          </Owners>
        </AboutInfo>
        <AboutCompany>
          <p>
            Uma empresa de consultoria de negócios está envolvida no
            planejamento, implementação e educação de negócios. Trabalhamos
            diretamente com os proprietários no desenvolvimento de um plano de
            negócios, identificando as necessidades de marketing e desenvolvendo
            as habilidades necessárias para a propriedade do negócio.
          </p>
          <p>
            Consultor de marketing é um consultor que trabalha com empresas para
            criar e implementar estratégias de marketing.
          </p>
        </AboutCompany>
      </AboutDivision>
      <List>
        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Melhoria Constante</p>
        </li>
        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Compromisso com Clientes</p>
        </li>
        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Melhor Qualidade Possível</p>
        </li>
        <li>
          <Check>
            <GoCheck />
          </Check>
          <p>Garantia 30 dias ou Devolvemos seu Dinheiro</p>
        </li>
      </List>
    </Container>
  );
}
