import { useState } from "react";
import { Logo } from "../Logo";
import Menu from "../Menu";
import Link from "next/link";
import { Center, Container, LogoContainer } from "./styles";

export default function Header() {
  function handleScroll(){
    const [scroll, setScroll]  = useState(false);
    const header = document.getElementById('header');

    if(window.scrollY > 50){
      return header.classList.add('sticky')
    }
  }
  return (
    <Container id="header" onScroll={()=> handleScroll()}>
      <Center>
        <Link href="#">
          <LogoContainer onClick={()=> {
            window.scrollTo({top:0, behavior: 'smooth'})
          }}>
            <Logo theme="white" height={35} />
          </LogoContainer>
        </Link>

        <Menu />
      </Center>
    </Container>
  );
}
