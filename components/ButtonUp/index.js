import Link from "next/link";
import { ButtonArrow, Container, IconArrow, ScrollTop } from "./styles";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ButtonUp() {

  return (
    <Container>
      <ScrollTop>
      <Link href="#">
        <ButtonArrow className="buttonUp" onClick={()=>{
           window.scrollTo({top: 0 , behavior: 'smooth'})}}>
          <IconArrow icon={faArrowUp} className="arrowUp" / >
        </ButtonArrow>
      </Link>
    </ScrollTop>
    </Container>
  );
}
