// 3rd parties
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

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

export default function Home(){
  return(
    <Container>
      <Cover />

      <CoverMask />

      <Header />

      <PageTitle>
        <h1>Tecnologia Aplicada<br />em Soluções Digitais</h1>

        <p>Somos experts no desenvolvimento de sites e aplicativos para internet. Entendemos as necessidades do negócio e trabalhamos para construir soluções digitais com agilidade, flexibilidade e precisão.</p>

        <ButtonLink href="#servicos">Serviços</ButtonLink>

        {/* <ArrowAnimation>
          <ArrowLink href="#servicos"><ArrowIcon icon={faLongArrowAltDown} /></ArrowLink>
        </ArrowAnimation> */}
      </PageTitle>
    </Container>
  );
};
