// 3rd parties
import Link from 'next/link';
import cookie from 'js-cookie';
import PropTypes from 'prop-types';

// styles
import { Container, CookieNotice } from './styles';

const CookiesModal = function
CookiesModalPage({ isAcceptedCookie, setAcceptedCookie }) {
  const createCookies = () => {
    if (cookie.get('allow-cookies') === undefined) {
      cookie.set('allow-cookies', 'true', { expires: 1 / 192 });
      setAcceptedCookie(true);
    }
  };

  return (
    <Container id="modal" hide={isAcceptedCookie}>
      <CookieNotice>
        <p>
          Usamos cookies e métodos semelhantes para reconhecer os visitantes e
          lembrar suas preferências, medir a eficácia da campanha publicitária,
          direcionar anúncios e analisar o tráfego do site. Saiba mais acessando
          nossa

          {' '}

          <span
            aria-hidden
          >
            <Link
              href="/termos-de-servico"
              as={`${process.env.BACKEND_URL}/termos-de-servico`}
            >
              Política de Cookies
            </Link>
          </span>

          {' e '}

          <span
            aria-hidden
          >
            <Link
              href="/politica-de-privacidade"
              as={`${process.env.BACKEND_URL}/politica-de-privacidade`}
            >
              Política de Privacidade
            </Link>
          </span>
          .
        </p>

        <button type="button" onClick={createCookies}>Aceitar</button>
      </CookieNotice>
    </Container>
  );
};

CookiesModal.propTypes = {
  isAcceptedCookie: PropTypes.bool.isRequired,
  setAcceptedCookie: PropTypes.func.isRequired,
};

export default CookiesModal;
