import Link from 'next/link';
import { Container, CookieNotice } from './styles';
import cookie from 'js-cookie';
import { useState, useEffect } from 'react';

export default function CookiesModal(){
  const [isAcceptedCookie, setAcceptedCookie] = useState(false);

  useEffect(() => {
    if(cookie.get('allow-cookies')){
      setAcceptedCookie(true);
    }
  }, []);

  const createCookies = () => {
    if(cookie.get('allow-cookies') === undefined){
     cookie.set("allow-cookies", "true", { expires: 1/192 })
     setAcceptedCookie(true);
    }
    }
  
  const scrollModal = (id) => {
    const modalPrivacy= document.querySelector(id);
    modalPrivacy.scrollTo({top: 0});
  }

  const closeModal = (id) => {
    const idModal = document.querySelector(id);
    const removeClass= idModal.classList.remove("close");
    return removeClass;
  }
 return (
   <Container id="modal" hide={isAcceptedCookie}>
     <CookieNotice>
      <p>
        Usamos cookies e métodos semelhantes para reconhecer os visitantes e
        lembrar suas preferências, medir a eficácia da campanha publicitária,
        direcionar anúncios e analisar o tráfego do site. Saiba mais acessando
        nossa <span onClick={() => {
          closeModal("#terms");
          scrollModal("#modalTerms")
          document.body.style.overflow="hidden"}}><Link href="/#termos" 
        >
        Política de Cookies</Link></span> e <span onClick={()=>{
          closeModal("#privacy");
          scrollModal("#modalPrivacy");
          document.body.style.overflow= "hidden";
        }}><Link href="/#privacy">
        Política de Privacidade</Link></span>.
      </p>

       <button onClick={createCookies}>Aceitar</button>
     </CookieNotice>
   </Container>
 );
};
