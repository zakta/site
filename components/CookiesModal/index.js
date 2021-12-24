// 3rd parties
import Link from 'next/link';
import cookie from 'js-cookie';

import { Container, CookieNotice } from './styles';

export default function CookiesModal({ isAcceptedCookie, setAcceptedCookie, alterModal }) {
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
          <span onClick={() => { alterModal('#terms', '#modalTerms'); }}>
            <Link href="/#termos" as={`${process.env.BACKEND_URL}/#termos`}> Política de Cookies </Link>
          </span>
          e
          <span onClick={() => { alterModal('#privacy', '#modalPrivacy'); }}>
            <Link href="/#privacidade" as={`${process.env.BACKEND_URL}/#privacidade`}> Política de Privacidade </Link>
          </span>
          .
        </p>
        <button onClick={createCookies}>Aceitar</button>
      </CookieNotice>
    </Container>
  );
}
