// 3rd parties
import { faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// Styles
import {
  PopUp, BtnPopUp, Container, MailIcon,
} from './styles';

const Notification = function NotificationPage({formStatus, showPopUp, setShowPopUp}) {
  return (
    <Container showPopUp={showPopUp} id="popUp" className="showPopUp">
      <PopUp formStatus={formStatus} >
        <BtnPopUp onClick={() =>  setShowPopUp(false)} showPopUp={showPopUp}
        >
          x
        </BtnPopUp>

        { (() => {
          if (formStatus === 'success') {
          return(
            <div>
              <MailIcon icon={faEnvelope} />
              <h3>Obrigado pelo seu contato! </h3>
              <p>Suas informações foram enviadas com sucesso.
              Em breve entraremos em contato!</p>
            </div>
          )}else if (formStatus === 'error') {
            return(
              <div>
                <MailIcon icon={faExclamationTriangle} />
                <h3>Ops...</h3>
                <p>Não foi possível enviar sua mensagem. Tente novamente mais
                tarde, obrigado! </p>
              </div>
            );
          }
          })()
        }

      </PopUp>
    </Container>
  );
};

export default Notification;
