import { useState } from "react";
import Hamburguer from "../Hamburguer";
import { Logo } from "../Logo";
import { Container, List, ListItem, MenuToggle, StyledNav } from "./styles";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Logo height={40} />
      <StyledNav>
        <List open={open}>
          <ListItem>Home</ListItem>
          <ListItem>Serviços</ListItem>
          <ListItem>Sobre</ListItem>
          <ListItem>Contato</ListItem>
        </List>
      </StyledNav>
      <MenuToggle open={open} onClick={() => setOpen(!open)}>
        <Hamburguer />
      </MenuToggle>
    </Container>
  );
}
