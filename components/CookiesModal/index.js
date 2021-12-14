import Link from 'next/link';
import { Container, CookieNotice } from './styles';

export default function CookiesModal(){
  const sendCookies = () => {
    const modal = document.getElementById('modal');
    const acceptModal= modal.classList.add('toggle');

    return acceptModal;
  };

 return (
   <Container id="modal">
     <CookieNotice>
      <p>
        Usamos cookies e métodos semelhantes para reconhecer os visitantes e
        lembrar suas preferências, medir a eficácia da campanha publicitária,
        direcionar anúncios e analisar o tráfego do site. Saiba mais acessando
        nossa <Link href="/politica-de-cookies">Política de Cookies</Link> e <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>

       <button onClick={sendCookies}>Aceitar</button>
     </CookieNotice>
   </Container>
 );
};
