import About from "../About";
import { Container, Picture, Text, Box, Notes, Center, Numbers } from "./styles";

export default function Company() {
  return (
    <Container id="empresa">
      <Center>
        {/* <h2>Empresa</h2>
        <h3>
          A Zakta existe para facilitar a vida das pessoas e reinventar as
          empresas através de novos produtos e da tecnologia.
        </h3>
        <Text>
          A missão da Zakta é criar produtos e tecnologias que ajudam as pessoas
          e reinventam o mundo.
        </Text>
        <Text>
          Nossas iniciativas simplificam o dia a dia e contribuem para o
          crescimento exponencial das organizações de forma sustentável e com um
          olhar atento para inovação.
        </Text>
        <Text>
          Estamos constantemente iterando, resolvendo problemas e trabalhando
          juntos para gerar impacto positivo no mundo. Somos centrados no ser
          humano e em tecnologias que além de inovar, fortalecem a inclusão
          social, diversidade e sustentabilidade do planeta e dos novos
          negócios.
        </Text>
        <Text>
          Enxergamos que na era dos dados, perceber o olhar de cada um, nos
          ajuda a tomar decisões melhores, construir produtos mais relevantes,
          antecipar tendências e acelerar as empresas.
        </Text>
        <Text>Estamos juntos para reinventar!</Text>  */}
        <About />
        <Picture
          src="/united-image.jpg"
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
