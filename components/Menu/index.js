import { useState } from "react";
import Link from 'next/link';
import Hamburguer from "../Hamburguer";
import { Container, List, ListItem, MenuToggle } from "./styles";

export default function Menu() {
  const [open, setOpen] = useState(false);

  function hideOverflow(){
    document.body.style.overflowY= "hidden";
  }

  return (
    <Container>
      <List open={open} onClick={()=> setOpen(false)}>
        <ListItem><Link href="/">Home</Link></ListItem>
        <ListItem><Link href="/servicos">Serviços</Link></ListItem>
        <ListItem><Link href="/empresa">Empresa</Link></ListItem>
        <ListItem><Link href="/contato">Contato</Link></ListItem>
      </List>
      <MenuToggle onClick={() => {
        setOpen(!open)
        if(!open){
          hideOverflow();
        }else{
          document.body.style.removeProperty("overflow");
        }
      }}>
        <Hamburguer open={open} />
      </MenuToggle>
    </Container>
  );
}
