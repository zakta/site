import { useState } from "react";
import Link from 'next/link';
import Hamburguer from "../Hamburguer";
import { Container, List, ListItem, MenuToggle } from "./styles";

export default function Menu({isSticky}) {
  const [open, setOpen] = useState(false);

  function setOverflow(event){
    document.body.classList[event]("hideOverflow")
  }

  return (
    <Container>
      <List open={open} onClick={ ()=> {
        setOpen(!open)
        if(open){
          setOverflow("remove")
        }}} >
        <ListItem><Link href="#">Home</Link></ListItem>
        <ListItem><Link href="#servicos">Serviços</Link></ListItem>
        <ListItem><Link href="#empresa">Empresa</Link></ListItem>
        <ListItem><Link href="#contato">Contato</Link></ListItem>
      </List>
      <MenuToggle onClick={() => {
        setOpen(!open)
        setOverflow(!open ? "add" : "remove")
      }}>
        <Hamburguer open={open} isSticky={isSticky} />
      </MenuToggle>
    </Container>
  );
}
