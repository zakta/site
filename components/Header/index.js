// 3rd parties
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSpring } from "react-spring";

// Components
import { Logo } from "../Logo";
import Menu from "../Menu";

// Styles
import { Center, Container, LogoContainer } from "./styles";

export default function Header () {
  const [isSticky, setSticky]  = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = ()=> {
    const header = document.querySelector('#header');

    header.classList.toggle('sticky', window.scrollY > 0);

    setSticky(window.scrollY > 0);

    //changeURL();
  }

  const changeURL= () => {
    const servicos= document.querySelector('#servicos').offsetTop;
    const empresa= document.querySelector('#empresa').offsetTop;
    const contato= document.querySelector('#contato').offsetTop;

    const scroll = window.scrollY;

    if(scroll >= 0 && scroll < servicos){
      return location.hash = "#";
    }
    if(scroll > servicos && scroll < empresa){
      return location.hash = "#servicos";
    }
    if(scroll > empresa && scroll < contato){
      return location.hash = "#empresa";
    }
    if(scroll >= contato ){
      return location.hash = "#contato";
    }
  }

  useEffect(() => {
    setActiveMenuItem(location.hash);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container id="header">
      <Center isSticky={isSticky}>
        <Link href="/#" passHref as={process.env.BACKEND_URL + '/#'}>
          <LogoContainer onClick={scrollTop}>
            <Logo
              theme={isSticky ? open ? "white" : "primary" : "white" }
              height={35} />
          </LogoContainer>
        </Link>

        <Menu
          isSticky={isSticky}
          open={open}
          setOpen={setOpen}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
      </Center>
    </Container>
  );
}
