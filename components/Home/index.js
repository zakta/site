// 3rd
import { useSpring } from 'react-spring';

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
  const props = useSpring({
    to: { opacity: 1, x: `${0}px` },
    from: { opacity: 0, x: `${-100}px` },
    delay: 400,
  });

  return (
    <Container>
      <Cover />

      <CoverMask />

      <Header />

      <PageTitle style={props}>
        <h1>Tecnologia Aplicada em Soluções Digitais</h1>

        <p>
          <span>
            Somos experts no desenvolvimento de sites e aplicativos para
            internet. Entendemos as necessidades do negócio e trabalhamos para
            construir soluções digitais com agilidade, flexibilidade e precisão.
          </span>
        </p>

        <ButtonLink href="#empresa">Saiba mais</ButtonLink>

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
