// 3rd parties
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

// Components
import ContactForm from "../Form";
import Notification from "../Notification";

// Styles
import {
  Card,
  Center,
  ContactInfo,
  Container,
  FormDescription,
  FormTitle,
  Icon,
  TitleContact
} from "./style";

export default function Contact() {
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley.
        </FormDescription>

        <ContactForm />
      </Center>
      <Notification />
    </Container>
  );
}
