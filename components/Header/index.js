import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import Menu from "../Menu";
import Link from "next/link";
import { Center, Container, LogoContainer } from "./styles";

export default function Header () {
  const [isSticky, setSticky]  = useState(false);
  const [open, setOpen] = useState(false);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = ()=> {
    const header = document.querySelector('#header');

    header.classList.toggle('sticky', window.scrollY > 0);

    setSticky(window.scrollY > 0);
  }


  useEffect(() => {
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

        <Menu isSticky={isSticky} open={open} setOpen={setOpen} />
      </Center>
    </Container>
  );
}
