// 3rd parties
import Link from 'next/link';
import PropTypes from 'prop-types';

// Components
import Logo from '../Logo';
import ContactLink from '../ContactLink/styles';

// Styles
import {
  Box,
  Contact,
  Container,
  Copyright,
  PositionLogo,
} from './styles';
import getFullYear from '../../functions/getFullYear';

const Footer = function FooterPage({ cookiesModalHeight }) {
  return (
    <Container cookiesModalHeight={cookiesModalHeight}>
      <Box>
        <Link passHref href="/#" as={`${process.env.BACKEND_URL}/#`}>
          <PositionLogo
            role="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo theme="white" height={25} />
          </PositionLogo>
        </Link>

        <Contact>
          <Link
            href="/termos-de-servico"
            passHref
            as={`${process.env.BACKEND_URL}/termos-de-servico`}
          >
            <ContactLink>
              Política de Cookies
            </ContactLink>
          </Link>
          <Link
            href="/politica-de-privacidade"
            passHref
            as={`${process.env.BACKEND_URL}/politica-de-privacidade`}
          >
            <ContactLink>
              Política de Privacidade
            </ContactLink>
          </Link>
          <ContactLink href="mailto:contato@zakta.com.br" target="_blank">
            contato@zakta.com.br
          </ContactLink>

          <ContactLink href="tel:+5511933020321">+55 11 93302-0321</ContactLink>
        </Contact>
      </Box>

      <Copyright>
        ©
        {' '}
        {getFullYear()}
        {' '}
        ZAKTA Tecnologia todos direitos reservados.
      </Copyright>
    </Container>
  );
};

Footer.propTypes = {
  cookiesModalHeight: PropTypes.number.isRequired,
};

export default Footer;
