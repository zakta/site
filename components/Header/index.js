import { Logo } from "../Logo";
import Menu from "../Menu";
import Link from "next/link";
import { Container, LogoContainer } from "./styles";

export default function Header() {
  return (
    <Container className="sticky">
      <Link href="#">
        <LogoContainer>
          <Logo height={35} />
        </LogoContainer>
      </Link>
      <Menu />
    </Container>
  );
}
