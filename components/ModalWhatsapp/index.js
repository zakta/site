// Styles
import {
  ButtonWhats, Container, IWhatsapp, ModalWhats,
} from './styles';

const ModalWhatsapp = function ModalWhatsappPage() {
  return (
    <Container>
      <ModalWhats>
        <ButtonWhats href=" https://wa.me/5511933020321?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
          <IWhatsapp />
        </ButtonWhats>

        <ButtonWhats href=" https://wa.me/5511933020321?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
          <p>
            Fale conosco por Whatsapp
            <br />
            <strong>(11) 93302-0321</strong>
          </p>
        </ButtonWhats>

      </ModalWhats>
    </Container>
  );
};

export default ModalWhatsapp;
