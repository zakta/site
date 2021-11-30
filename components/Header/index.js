import { Logo } from "../Logo";
import Menu from "../Menu";
import { Container, LogoContainer } from "./styles";

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo height={35} />
      </LogoContainer>
      <Menu />
    </Container>
  );
}
