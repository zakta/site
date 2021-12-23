// 3rd parties
import Link from 'next/link';

// Components
import { Logo } from "../Logo";
import { ContactLink } from '../ContactLink/styles';

// Styles
import {
  Box,
  Contact,
  Container,
  Copyright,
  Info,
  PositionLogo
} from "./styles";

export const Footer = ({alterModal}) => (
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
        <Link href="/#termos" 
          passHref as={process.env.BACKEND_URL + '/#termos'}>
          <ContactLink 
          onClick={()=> alterModal("#terms","#modalTerms")}>
            Política de Cookies</ContactLink>
        </Link>
        <Link href="/#privacidade" 
          passHref as={process.env.BACKEND_URL + '/#privacidade'} >
          <ContactLink 
          onClick={()=> alterModal("#privacy", "#modalPrivacy")}>
            Política de Privacidade</ContactLink>
        </Link>    
        <ContactLink href="mailto:contato@zakta.com.br" target="_blank">
          contato@zakta.com.br
        </ContactLink>

        <ContactLink href="tel:+5511933020321">+55 11 93302-0321</ContactLink>
      </Contact>
    </Box>
    <Copyright>© 2021 ZAKTA Tecnologia todos direitos reservados.</Copyright>
  </Container>
);
