// Styles
import { Container, Burguer } from './styles';

export default function Hamburguer({ open, isSticky }) {
  return (
    <Container>
      <Burguer open={open} isSticky={isSticky} />
      <Burguer open={open} isSticky={isSticky} />
      <Burguer open={open} isSticky={isSticky} />
    </Container>
  );
}
