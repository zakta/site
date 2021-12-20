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
  return(
    <Container>
      <Cover />

      <CoverMask />

      <Header />

      <PageTitle>
        <h1>Tecnologia Aplicada em Soluções Digitais</h1>

        <p><span>Somos experts no desenvolvimento de sites e aplicativos para internet. Entendemos as necessidades do negócio e trabalhamos para construir soluções digitais com agilidade, flexibilidade e precisão.</span></p>

        <ButtonLink href="#empresa">Saiba mais</ButtonLink>

        <ArrowAnimation>
          <ArrowLink href="#servicos"><ArrowIcon /></ArrowLink>
        </ArrowAnimation>
      </PageTitle>
  </Container>
  );
};
