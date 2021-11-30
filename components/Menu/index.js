import { useState } from "react";
import Hamburguer from "../Hamburguer";
import { Container, List, ListItem, MenuToggle } from "./styles";

export default function Menu() {
  const [open, setOpen] = useState(false);



  return (
    <Container>
      <List open={open}>
        <ListItem><a>Home</a></ListItem>
        <ListItem><a>Serviços</a></ListItem>
        <ListItem><a>Sobre</a></ListItem>
        <ListItem><a>Contato</a></ListItem>
      </List>
      <MenuToggle onClick={() => setOpen(!open)}>
        <Hamburguer open={open} />
      </MenuToggle>
    </Container>
  );
}
