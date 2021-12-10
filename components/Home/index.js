import { faArrowDown, faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import { Container, HomeMain, Cover, CoverMask, PageTitle, ButtonLink, ArrowAnimation, ArrowLink, ArrowIcon } from "./styles";

export default function Home(){
  return(
  <Container>
    <HomeMain>
      <Cover />

      <CoverMask />

      <PageTitle>
        <h1>
          Tecnologia em<br />
          Soluções Digitais
        </h1>

        <p>Somos uma consultoria em soluções digitais que ajuda as empresas a aumentarem sua receita e levar a marca para um crescimento mais rápido.</p>

        <ButtonLink href="#servicos">Saiba mais</ButtonLink>
      </PageTitle>
    </HomeMain>
    <ArrowAnimation>
      <ArrowLink href="#servicos"><ArrowIcon icon={faLongArrowAltDown} /></ArrowLink>
    </ArrowAnimation>
  </Container>
  );
};
