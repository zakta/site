// 3rd parties
import Link from 'next/link';

// Components
import { Logo } from "../Logo";

// Styles
import {
  Box,
  Contact,
  Container,
  Copyright,
  Info,
  PositionLogo
} from "./styles";

export const Footer = () => (
  <Container>
    <Box>
      <Link href="#" passHref>
        <PositionLogo
          onClick={()=> {
            window.scrollTo({top:0, behavior: 'smooth'})
          }}>
          <Logo theme="white" height={25} />
        </PositionLogo>
      </Link>

      <Contact>
        <Info href="mailto:contato@zakta.com.br" target="_blank">
          contato@zakta.com.br
        </Info>

        <Info href="tel:+5511933020321">+55 11 93302-0321</Info>
      </Contact>
    </Box>
    <Copyright>© 2021 ZAKTA Tecnologia todos direitos reservados.</Copyright>
  </Container>
);
