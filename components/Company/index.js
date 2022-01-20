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
              Entendemos as necessidades do seu negócio
            </h4>
          </Notes>

          <Notes data-aos="fade-up">
            <h4>Elaboração do plano e propostas</h4>
            <p>
              Analisamos os requisitos, montamos uma estratégia adequada
              e apresentamos as propostas
            </p>
          </Notes>

          <Notes data-aos="fade-up">
            <h4 className="text-grey">Desenvolvimento e testes de qualidade</h4>
            <p className="text-grey">
              Durante a fase de produção, realizamos constantes reuniões com a
              equipe e cliente para acompanhamento do andamento e aprovações
              das principais entregas.
            </p>
          </Notes>

          <Notes data-aos="fade-up">
            <h4>Publicação e suporte</h4>
            <p>
              Após a validação final do projeto, realizamos a publicação, com a
              medição de acessos, acompanhamento de resultados e suporte
              imediato.
            </p>
          </Notes>
        </Box>
      </Center>
    </Container>
  );
};
export default Company;
