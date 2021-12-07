import Link from "next/link";
import { ButtonArrow, Container, IconArrow } from "./styles";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ButtonUp() {
  return (
    <Container>
      <Link href="#">
        <ButtonArrow className="buttonUp">
          <IconArrow icon={faArrowUp} className="arrowUp" / >
        </ButtonArrow>
      </Link>
    </Container>
  );
}
