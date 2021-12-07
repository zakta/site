import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { CardContact, Container, IconContact, ContactInfo } from "./style";
import ContactForm from "../Form/index.js";

export default function Contact() {
  return (
    <Container id="contato">
      <h2>Contato</h2>
        <article>
          <CardContact animate={false}>
            <IconContact icon={faPhone} />
            <h3>Telefone</h3>
            <p>+55 11 93302 0321</p>
            <p>+55 11 93302 0321</p>
          </CardContact>
          <CardContact animate={false}>
            <IconContact icon={faMailBulk} />
            <h3>E-mail</h3>
            <p>contato@zakta.com.br</p>
            <p>contato@zakta.com.br</p>
          </CardContact>
        </article>
      <ContactInfo>
        <h4>Você pode nos escrever</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley.</p>
      </ContactInfo>
      <ContactForm />
    </Container>
  );
}
