// Components
import About from '../About';

// Styles
import {
  Container,
  Picture,
  Box,
  Notes,
  Center,
} from './styles';

const Company = function CompanyPage() {
  return (
    <Container id="empresa">
      <Center>
        <About />

        <Picture
          data-aos="fade-up"
          src="espaco-de-trabalho-da-zakta.jpg"
          alt="Espaço de trabalho da Zakta"
        />

        <Box>
          <Notes data-aos="fade-up">
            <p>Como funciona?</p>
            <h4 className="title-notes">
              Analisamos as necessidades do seu negócio
            </h4>
          </Notes>

          <Notes data-aos="fade-up">
            <h4>Elaboração do plano e propostas</h4>
            <p>Pensamos nas melhores soluções e apresentamos um ou mais planos e propostas.</p>
          </Notes>

          <Notes data-aos="fade-up">
            <h4 className="text-grey">Desenvolvimento e testes de qualidade</h4>
            <p className="text-grey">Oferecemos um acompanhamento de perto da execução do plano de negócio.</p>
          </Notes>

          <Notes data-aos="fade-up">
            <h4>Pré/pós lançamento e suporte</h4>
            <p>Fazemos a campanha de lançamento, medição do pós e suporte à atualizações</p>
          </Notes>
        </Box>
      </Center>
    </Container>
  );
};
export default Company;
