import { useState } from "react";
import Hamburguer from "../Hamburguer";
import { Container, List, ListItem, MenuToggle, StyledNav } from "./styles";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <List open={open}>
        <ListItem>Home</ListItem>
        <ListItem>Serviços</ListItem>
        <ListItem>Sobre</ListItem>
        <ListItem>Contato</ListItem>
      </List>
      <MenuToggle onClick={() => setOpen(!open)}>
        <Hamburguer open={open} />
      </MenuToggle>
    </Container>
  );
}
