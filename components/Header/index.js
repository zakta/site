import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import Menu from "../Menu";
import Link from "next/link";
import { Center, Container, LogoContainer } from "./styles";

export default function Header() {
  const [isSticky, setSticky]  = useState(false);

  const handleScroll= ()=> {
    const offset= window.scrollY;
    if(offset > 600){
      setSticky(true);
    }else{
      setSticky(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <Container id="header" className={isSticky ? "sticky" : "notSticky"}>
      <Center isSticky={isSticky}>
        <Link href="#">
          <LogoContainer onClick={()=> {
            window.scrollTo({top:0, behavior: 'smooth'})
          }}>
            <Logo theme={isSticky ? "primary" : "white"} height={35} />
          </LogoContainer>
        </Link>

        <Menu isSticky={isSticky}/>
      </Center>
    </Container>
  );
}
