import Link from 'next/link';

import { LogoWhite } from "../LogoWhite";
import { Contact, Box, Container, Info, NavBar, NavList, PositionLogo, Copyright} from "./styles";

export function Footer() {
  return (
    <Container>
      <Box>
        <PositionLogo>
          <LogoWhite height={25} />
        </PositionLogo>

        <Contact>
          <Info href="mailto:contato@zakta.com.br" target="_blank">contato@zakta.com.br</Info>

          <Info href="tel:+5511933020321">+55 11 93302-0321</Info>

        </Contact>

        <NavBar>
          <NavList><Link href="/">Home</Link></NavList>
          <NavList><Link href="/servicos">Serviços</Link></NavList>
          <NavList><Link href="/empresa">Empresa</Link></NavList>
          <NavList><Link href="/contato">Contato</Link></NavList>
        </NavBar>

        <Copyright>© 2021 ZAKTA Tecnologia todos direitos reservados.</Copyright>
      </Box>
    </Container>
  );
}
