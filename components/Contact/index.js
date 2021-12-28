// 3rd parties
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';

// Components
import ContactForm from '../Form';
import Notification from '../Notification';

// Styles
import {
  Card,
  Center,
  ContactInfo,
  Container,
  FormDescription,
  FormTitle,
  Icon,
  TitleContact,
} from './style';

const Contact = function ContactPage() {
  const [formStatus, setFormStatus] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <Container id="contato">
      <Center>
        <ContactInfo>
          <TitleContact> Contato</TitleContact>
          <h3>Alguma dúvida? Entre em contato e responderemos em breve.</h3>
        </ContactInfo>

        <article>
          <Card className="contact-card-email">
            <a href="mailto:contato@zakta.com.br">
              <Icon>
                <AiOutlineMail />
              </Icon>

              <h4>E-mail</h4>
              <p>contato@zakta.com.br</p>
            </a>
          </Card>

          <Card className="contact-card-telephone">
            <a href="tel:+5511933020321">
              <Icon style={{ color: 'white' }}>
                <AiOutlinePhone />
              </Icon>

              <h4 style={{ color: 'white' }}>Telefone</h4>
              <p style={{ color: 'white' }}>+55 11 93302 0321</p>
            </a>
          </Card>

          <Card className="contact-card-whatsapp">
            <a href=" https://wa.me/5511933020321?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
              <Icon>
                <BsWhatsapp />
              </Icon>

              <h4>WhatsApp</h4>
              <p>+55 11 93302 0321</p>
            </a>
          </Card>
        </article>

        <FormTitle>Você pode nos escrever</FormTitle>

        <FormDescription>
          Por favor preencha este formulário. Seus dados serão privados e
          utilizados apenas para entendermos melhor suas necessidades. Em até um
          dia útil, responderemos a sua consulta.
        </FormDescription>

        <ContactForm setFormStatus={setFormStatus} setShowPopUp={setShowPopUp} />
      </Center>

      <Notification
        formStatus={formStatus}
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
      />
    </Container>
  );
};
export default Contact;
