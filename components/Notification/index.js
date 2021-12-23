import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  PopUp, BtnPopUp, Container, MailIcon,
} from './styles';

export default function Notification() {
  function closePopUp() {
    const popUp = document.getElementById('popUp');
    const display = popUp.classList.add('showPopUp');

    return display;
  }
  return (
    <Container id="popUp" className="showPopUp">
      <PopUp>
        <BtnPopUp onClick={() => (
          closePopUp())}
        >
          x
        </BtnPopUp>
        <MailIcon icon={faEnvelope} />
        <h3>Obrigado pelo seu contato! </h3>
        <p>Suas informações foram enviadas com sucesso. Em breve entraremos em contato!</p>
      </PopUp>
    </Container>
  );
}
