import { Container, Picture, Text } from "./styles";

export default function Company(){
  return(
    <Container>
      <h2>Empresa</h2>
      <h3>A Zakta existe para facilitar a vida das pessoas e reinventar as empresas através de novos produtos e da tecnologia.</h3>
      <Text> A missão da Zakta é criar produtos e tecnologias que ajudam as pessoas e reinventam o mundo. </Text>
      <Text>Nossas iniciativas simplificam o dia a dia e contribuem para o crescimento exponencial das organizações de forma sustentável e com um olhar atento para inovação.</Text>
      <Text>Estamos constantemente iterando, resolvendo problemas e trabalhando juntos para gerar impacto positivo no mundo. Somos centrados no ser humano e em tecnologias que além de inovar, fortalecem a inclusão social, diversidade e sustentabilidade do planeta e dos novos negócios.</Text>
      <Text>Enxergamos que na era dos dados, perceber o olhar de cada um, nos ajuda a tomar decisões melhores, construir produtos mais relevantes, antecipar tendências e acelerar as empresas.</Text>
      <Text>Estamos juntos para reinventar!</Text>
      <Picture src="/united-image.jpg" alt="Grupo de trabalhadores com mãos unidas"/>
    </Container>
  );
}
