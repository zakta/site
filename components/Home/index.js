// Components
import Header from '../Header';
import ArrowIcon from '../ArrowRedirect/styles';

// Style
import {
  Container,
  Cover,
  CoverMask,
  PageTitle,
  ButtonLink,
  ArrowAnimation,
  ArrowLink,
} from './styles';

const Home = function HomePage() {
  return (
    <Container>
      <Cover />

      <CoverMask />

      <Header />

      <PageTitle data-aos="fade-right">
        <h1>Tecnologia Aplicada em Soluções Digitais</h1>

        <p>
          <span>
            Somos experts no desenvolvimento de sites e aplicativos para
            internet. Entendemos as necessidades do negócio e trabalhamos para
            construir soluções digitais com agilidade, flexibilidade e precisão.
          </span>
        </p>

        <ButtonLink href="#contato">Contate-nos</ButtonLink>

        <ArrowAnimation>
          <ArrowLink href="#servicos">
            <ArrowIcon />
          </ArrowLink>
        </ArrowAnimation>
      </PageTitle>
    </Container>
  );
};

export default Home;
