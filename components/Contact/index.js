import { Container, Form, InputForm } from "./style";

export default function Contact() {
  return (
    <Container>
      <h2>Contato</h2>
      <Form>
        <InputForm type="text" value="Nome" required />
        <InputForm type="tel" value="Telefone" required />
        <InputForm type="email" value="E-mail" required />
        <InputForm type="submit" />
      </Form>
    </Container>
  );
}
