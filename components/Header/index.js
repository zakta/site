import { LogoWhite } from "../LogoWhite";
import Menu from "../Menu";
import Link from "next/link";
import { Center, Container, LogoContainer } from "./styles";

export default function Header() {
  function handleScroll(){
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
            <LogoWhite height={35} />
          </LogoContainer>
        </Link>
        <Menu />
      </Center>
    </Container>
  );
}
