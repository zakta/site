// 3rd parties
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

// Components
import ContactForm from "../Form";
import Notification from "../Notification";

// Styles
import {
  Card,
  Center,
  Container,
  FormDescription,
  FormTitle,
  Icon
} from "./style";

export default function Contact() {
  return (
    <Container id="contato">
      <Center>
        <article>
          <Card>
            <Icon>
              <AiOutlinePhone />
            </Icon>

            <h3>Telefone</h3>
            <p>+55 11 93302 0321</p>
          </Card>

          <Card>
            <Icon>
              <AiOutlineMail />
            </Icon>

            <h3>E-mail</h3>
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
