import Link from "next/link";
import { ButtonArrow, Container, IconArrow, ScrollTop } from "./styles";
import { FaArrowUp } from "react-icons/fa";


export default function ButtonUp() {
  return (
    <Container>
      <ScrollTop>
      <Link href="#">
        <ButtonArrow className="buttonUp" onClick={()=>{
           window.scrollTo({top: 0 , behavior: 'smooth'})}}>
          <IconArrow className="arrowUp"><FaArrowUp /></IconArrow>
        </ButtonArrow>
      </Link>
    </ScrollTop>
    </Container>
  );
}
