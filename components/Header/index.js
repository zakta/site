import { LogoWhite } from "../LogoWhite";
import Menu from "../Menu";
import Link from "next/link";
import { Center, Container, LogoContainer } from "./styles";

export default function Header() {
  return (
    <Container className="sticky">
      <Center>
        <Link href="#">
          <LogoContainer>
            <LogoWhite height={35} />
          </LogoContainer>
        </Link>
        <Menu />
      </Center>
    </Container>
  );
}
