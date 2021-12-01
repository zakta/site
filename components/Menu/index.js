import { useState } from "react";
import Link from 'next/link';

import Hamburguer from "../Hamburguer";
import { Container, List, ListItem, MenuToggle } from "./styles";

export default function Menu() {
  const [open, setOpen] = useState(false);



  return (
    <Container>
      <List open={open} onClick={()=> setOpen(false)}>
        <ListItem><Link href="/">Home</Link></ListItem>
        <ListItem><Link href="/servicos">Serviços</Link></ListItem>
        <ListItem><Link href="/empresa">Empresa</Link></ListItem>
        <ListItem><Link href="/contato">Contato</Link></ListItem>
      </List>
      <MenuToggle onClick={() => setOpen(!open)}>
        <Hamburguer open={open} />
      </MenuToggle>
    </Container>
  );
}
