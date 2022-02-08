// 3rd parties
import 'react-spring-bottom-sheet/dist/style.css';

import PropTypes from 'prop-types';
import {
  Container, ModalBottom, SheetContent, BtnModal,
} from './styles';

const BottomModal = function BottomSheetModal({
  activeModal, setActiveModal, formStatus, setFormStatus,
}) {
  return (
    <Container>
      <ModalBottom
        open={activeModal}
        onDismiss={() => setActiveModal(false)}
        snapPoints={({ minHeight }) => minHeight}
        formStatus={formStatus}
      >
        <SheetContent formStatus={formStatus}>
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

          <BtnModal
            type="button"
            onClick={() => {
              setActiveModal(false);
              setFormStatus('');
            }}
          >
            {formStatus === 'success' ? 'Entendido' : 'Tentar mais tarde'}
          </BtnModal>
        </SheetContent>
      </ModalBottom>
    </Container>
  );
};
BottomModal.propTypes = {
  activeModal: PropTypes.bool.isRequired,
  setActiveModal: PropTypes.func.isRequired,
  formStatus: PropTypes.string.isRequired,
  setFormStatus: PropTypes.func.isRequired,
};
export default BottomModal;
