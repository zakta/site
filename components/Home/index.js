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
          Somos especialistas em desenvolvimento de sites, lojas virtuais,
          aplicativos, blogs, sistemas, entre outros softwares.

          <br />

          Temos a experiência necessária para entender o seu negócio, propor
          ideias e construir um projeto totalmente sob medida para a sua
          empresa.
        </p>

        <ButtonLink href="#contato">Fale com um consultor</ButtonLink>

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
