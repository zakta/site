import {
  ButtonWhats, Container, IWhatsapp, ModalWhats,
} from './styles';

export default function ModalWhatsapp() {
  return (
    <Container>
      <ModalWhats>
        <ButtonWhats href=" https://wa.me/5511933020321?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
          <IWhatsapp />
        </ButtonWhats>
        <ButtonWhats href=" https://wa.me/5511933020321?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
          <p>Fale conosco por Whatsapp</p>
        </ButtonWhats>

      </ModalWhats>
    </Container>
  );
}
