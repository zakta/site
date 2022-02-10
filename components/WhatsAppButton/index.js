// Styles
import {
  ButtonWhats, Container, IWhatsapp, ModalWhats,
} from './styles';

const WhatsAppButton = function WhatsAppButton() {
  return (
    <Container>
      <ModalWhats>
        <ButtonWhats href=" https://wa.me/5513996522199?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
          <IWhatsapp />
        </ButtonWhats>

        <ButtonWhats href=" https://wa.me/5513996522199?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
          <p>
            Fale conosco por Whatsapp
            <br />
            <strong>13 99652-2199</strong>
          </p>
        </ButtonWhats>

      </ModalWhats>
    </Container>
  );
};

export default WhatsAppButton;
