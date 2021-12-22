//3rd
import { useSpring, animated } from 'react-spring'
// Components
import Header from '../Header';

// Style
import {
  Container,
  Cover,
  CoverMask,
  PageTitle,
  ButtonLink,
  ArrowAnimation,
  ArrowLink,
  ArrowIcon
} from "./styles";

export default function Home () {
  const props = useSpring({
    to: {opacity: 1, x: `${0}px`}, 
    from: { opacity: 0, x:`${-100}px`},
    delay: 2000, 
  })

  return(
    <Container>
      <Cover />

      <CoverMask />

      <Header />
      <PageTitle>
        <animated.div style={props}>
          <h1>Tecnologia Aplicada em Soluções Digitais</h1>

          <p><span>Somos experts no desenvolvimento de sites e aplicativos para internet. Entendemos as necessidades do negócio e trabalhamos para construir soluções digitais com agilidade, flexibilidade e precisão.</span></p>
        </animated.div>
        <ButtonLink href="#empresa">Saiba mais</ButtonLink>

        <ArrowAnimation>
          <ArrowLink href="#servicos"><ArrowIcon /></ArrowLink>
        </ArrowAnimation>
      </PageTitle>
  </Container>
  );
};
