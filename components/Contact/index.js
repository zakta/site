// 3rd parties
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

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
  return (
    <Container id="contato">
      <Center>
        <ContactInfo>
          <h1>Contatos</h1>
          <TitleContact> Contato</TitleContact>
          <h3>Alguma dúvida? Entre em contato e responderemos em breve.</h3>
        </ContactInfo>

        <article>
          <Card>
            <Icon>
              <AiOutlinePhone />
            </Icon>

            <h4>Telefone</h4>
            <p>+55 11 93302 0321</p>
          </Card>

          <Card>
            <Icon>
              <AiOutlineMail />
            </Icon>

            <h4>E-mail</h4>
            <p>contato@zakta.com.br</p>
          </Card>
        </article>

        <FormTitle>Você pode nos escrever</FormTitle>

        <FormDescription>
          Por favor preencha este formulário. Seus dados serão privados e
          utilizados apenas para entendermos melhor suas necessidades. Em até um
          dia útil, responderemos a sua consulta.
        </FormDescription>

        <ContactForm />
      </Center>
      <Notification />
    </Container>
  );
};
export default Contact;
