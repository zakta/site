// 3rd parties
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

// Styles
import { ButtonArrow, Center, Container, IconArrow, ScrollTop } from "./styles";


export default function ButtonUp() {
  return (
    <Container>
      <Center>
        <ScrollTop>
          <Link href="/#" passHref as={process.env.BACKEND_URL + '/#'}>
            <ButtonArrow className="buttonUp" onClick={()=>{
              window.scrollTo({top: 0 , behavior: 'smooth'})}}>
              <IconArrow className="arrowUp"><FaArrowUp /></IconArrow>
            </ButtonArrow>
          </Link>
        </ScrollTop>
      </Center>
    </Container>
  );
}
