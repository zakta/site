import { Container, Cover, CoverMask, PageTitle, ButtonLink } from "./styles";

export default function Home(){
  return(
    <Container>
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
    </Container>
  );
};
