// Components
import About from "../About";

// Styles
import { Container, Picture, Box, Notes, Center, Numbers } from "./styles";

export default function Company() {
  return (
    <Container id="empresa">
      <Center>
        <About />
        <Picture
          src="united-image.jpg"
          alt="Grupo de trabalhadores com mãos unidas"
        />
        <Box>
          <Notes>
            <p>Como funciona?</p>
            <h4 className="title-notes">
              Analisamos as necessidades do seu negócio
            </h4>
          </Notes>
          <Notes>
            <h4>Elaboração do plano e propostas</h4>
            <p>Pensamos nas melhores soluções e apresentamos um ou mais planos e propostas.</p>
            <Numbers>01</Numbers>
          </Notes>
          <Notes>
            <h4 className="text-grey">Desenvolvimento e testes de qualidade</h4>
            <p className="text-grey">Oferecemos um acompanhamento de perto da execução do plano de negócio.</p>
            <Numbers>02</Numbers>
          </Notes>
          <Notes>
            <h4>Pré/pós lançamento e suporte</h4>
            <p>Fazemos a campanha de lançamento, medição do pós e suporte à atualizações</p>
            <Numbers>03</Numbers>
          </Notes>

        </Box>
      </Center>
    </Container>
  );
}
