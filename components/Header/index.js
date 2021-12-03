import { Logo } from "../Logo";
import Menu from "../Menu";
import { Center, Container, LogoContainer } from "./styles";

export default function Header() {
  return (
    <Container className="sticky">
      <Center>
        <LogoContainer>
          <Logo height={35} />
        </LogoContainer>
        <Menu />
      </Center>
    </Container>
  );
}
