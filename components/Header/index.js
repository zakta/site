import { Logo } from "../Logo";
import Menu from "../Menu";
import Link from "next/link";
import { Container, LogoContainer } from "./styles";

export default function Header() {
  return (
    <Container className="sticky">
      <Link href="#">
        <LogoContainer onClick={()=> {
          window.scrollTo({top:0, behavior: 'smooth'})
        }}>
          <Logo height={35} />
        </LogoContainer>
      </Link>
      <Menu />
    </Container>
  );
}
