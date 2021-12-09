import { Container, CookieNotice } from './styles';
import Link from 'next/link';

export default function Modal(){
  function sendCookies(){
    const modal = document.getElementById('modal');
    const acceptModal= modal.classList.add('toggle');

    return acceptModal;
  }

 return(
   <Container id="modal">
     <CookieNotice>
      <div>
        <p>Este site usa cookies para personalizar conteúdo e analisar o tráfego do site.
        Conheça a nossa <Link href={"#"}>Política de Cookies.</Link></p>
      </div>
       <button onClick={()=> {sendCookies()}}>Aceitar os Termos</button>
     </CookieNotice>
   </Container>
 )
}
