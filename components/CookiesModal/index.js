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
        nossa <span onClick={() => {
          document.querySelector("#termos").classList.remove('close');
          document.body.style.overflow="hidden"}}><Link href="/#termos" 
        >
        Política de Cookies</Link></span> e <span onClick={()=>{
          document.querySelector("#privacy").classList.remove('close');
          document.body.style.overflow= "hidden";
        }}><Link href="/#privacy">
        Política de Privacidade</Link></span>.
      </p>

       <button onClick={sendCookies}>Aceitar</button>
     </CookieNotice>
   </Container>
 );
};
