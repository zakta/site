// 3rd parties
import Link from 'next/link';
import cookie from 'js-cookie';
import PropTypes from 'prop-types';
import { useRef, useEffect, useCallback } from 'react';

// styles
import { Container, CookieNotice } from './styles';

const CookiesModal = function
CookiesModalPage({ isAcceptedCookie, setAcceptedCookie, setCookiesModalHeight }) {
  const createCookies = () => {
    if (cookie.get('allow-cookies') === undefined) {
      cookie.set('allow-cookies', 'true', { expires: 1 });
      setCookiesModalHeight(0);

      setAcceptedCookie(true);
    }
  };

  const cookiesModalRef = useRef();

  const getModalHeight = useCallback(() => {
    const newHeight = cookiesModalRef?.current?.clientHeight;

    setCookiesModalHeight(newHeight);
  }, [setCookiesModalHeight]);

  useEffect(() => {
    setTimeout(getModalHeight, 400);
  }, [getModalHeight]);

  useEffect(() => {
    window.addEventListener('resize', getModalHeight);
  }, [getModalHeight]);

  return (
    <Container
      data-aos="fade-up"
      data-aos-offset="0"
      hide={isAcceptedCookie}
      id="modal"
      ref={cookiesModalRef}
    >
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

        <button type="button" onClick={createCookies}>Continuar</button>
      </CookieNotice>
    </Container>
  );
};

CookiesModal.propTypes = {
  isAcceptedCookie: PropTypes.bool.isRequired,
  setAcceptedCookie: PropTypes.func.isRequired,
  setCookiesModalHeight: PropTypes.func.isRequired,
};

export default CookiesModal;
