// 3rd parties
import PropTypes from 'prop-types';

// Styles
import {
  PopUp, BtnPopUp, Container, Center,
} from './styles';

const Notification = function NotificationPage({ formStatus, setFormStatus }) {
  return (
    <Container>
      <PopUp formStatus={formStatus}>
        <Center>
          {formStatus === 'success' && (
            <>
              <h3>Obrigado pelo seu contato!</h3>
              <p>
                Suas informações foram enviadas com sucesso.
                Em breve entraremos em contato!
              </p>
            </>
          )}

          {formStatus === 'error' && (
            <>
              <h3>Erro ao enviar a mensagem!</h3>
              <p>
                Não foi possível enviar sua mensagem. Tente novamente mais
                tarde, obrigado.
              </p>
            </>
          )}

          <BtnPopUp onClick={() => setFormStatus('')}>
            {formStatus === 'success' ? 'Entendido' : 'Tentar mais tarde'}
          </BtnPopUp>
        </Center>
      </PopUp>
    </Container>
  );
};

Notification.propTypes = {
  formStatus: PropTypes.string.isRequired,
  setFormStatus: PropTypes.func.isRequired,
};

export default Notification;
