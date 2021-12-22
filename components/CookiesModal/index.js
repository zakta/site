import Link from "next/link";
import { Container, CookieNotice } from "./styles";
import cookie from "js-cookie";
import { useState, useEffect } from "react";

export default function CookiesModal() {
  const [isAcceptedCookie, setAcceptedCookie] = useState(false);

  useEffect(() => {
    if (cookie.get("allow-cookies")) {
      setAcceptedCookie(true);
    }

    if (location.hash === "#termos") {
      alterModal("#terms", "#modalTerms");   
    }

    if(location.hash === "#privacidade"){
      alterModal("#privacy", "#modalPrivacy")
    }
  }, []);

  const createCookies = () => {
    if (cookie.get("allow-cookies") === undefined) {
      cookie.set("allow-cookies", "true", { expires: 1 / 192 });
      setAcceptedCookie(true);
    }
  };

  const alterModal = (id1, id2) => {
    const idModal = document.querySelector(id1);
    idModal.classList.remove("close");
    document.body.style.overflow = "hidden";    
    const modalPrivacy = document.querySelector(id2);
    modalPrivacy.scrollTo({ top: 0 });
  };
  return (
    <Container id="modal" hide={isAcceptedCookie}>
      <CookieNotice>
        <p>
          Usamos cookies e métodos semelhantes para reconhecer os visitantes e
          lembrar suas preferências, medir a eficácia da campanha publicitária,
          direcionar anúncios e analisar o tráfego do site. Saiba mais acessando
          nossa
          <span onClick={() => {alterModal("#terms", "#modalTerms");}}>
            <Link href="/#termos"> Política de Cookies </Link>
          </span>
           e
          <span onClick={() => { alterModal("#privacy", "#modalPrivacy");}}>
            <Link href="/#privacidade"> Política de Privacidade </Link>
          </span>
          .
        </p>
        <button onClick={createCookies}>Aceitar</button>
      </CookieNotice>
    </Container>
  );
}
