// 3rd parties
import Link from 'next/link';
// Styles
import {
  ArrowDown,
  ButtonArrow, Center, Container,
} from './styles';

const ButtonUp = function ButtonUpBtn() {
  return (
    <Container>
      <Center>
        <Link href="/#" passHref as={`${process.env.BACKEND_URL}/#`}>
          <ButtonArrow
            className="buttonUp"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ArrowDown />
          </ButtonArrow>
        </Link>
      </Center>
    </Container>
  );
};
export default ButtonUp;
