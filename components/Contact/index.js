import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { CardContact, Container, Form, IconContact, InputForm, FormContact } from "./style";

export default function Contact() {
  return (
    <Container>
      <h2>Contato</h2>
      <div>
        <article>
          <CardContact animate={false}>
            <IconContact icon={faPhone} />
            <h3 animate={false}>Telefone</h3>
            <p animate={false}>+55 11 93302 0321</p>
            <p animate={false}>+55 11 93302 0321</p>
          </CardContact>
          <CardContact animate={false}>
            <IconContact icon={faMailBulk} />
            <h3 animate={false}>E-mail</h3>
            <p animate={false}>contato@zakta.com.br</p>
            <p animate={false}>contato@zakta.com.br</p>
          </CardContact>
        </article>
      </div>
      <FormContact>
        <h4>Você pode nos escrever</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley.</p>
      </FormContact>
      <Form>
        <InputForm type="text" placeholder="Nome" required />
        <InputForm type="tel" placeholder="Telefone" required />
        <InputForm type="email" placeholder="E-mail" required />
        <InputForm type="text" placeholder="Assunto" required />
        <textarea type="submit" placeholder="Mensagem" />
        <button type="submit">Enviar Mensagem</button>
      </Form>
    </Container>
  );
}
