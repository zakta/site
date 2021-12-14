import { useState } from "react";
import Link from "next/link";
import Hamburguer from "../Hamburguer";
import { Container, List, ListItem, MenuToggle, LinkMenu } from "./styles";

export default function Menu({ isSticky }) {
  const [open, setOpen] = useState(false);

  function setOverflow(event) {
    document.body.classList[event]("hideOverflow");
  }

  return (
    <Container>
      <List
        isSticky={isSticky}
        open={open}
        onClick={() => {
          setOpen(!open);
          if (open) {
            setOverflow("remove");
          }
        }}
      >
        <ListItem>
          <Link href="#">
            <LinkMenu isSticky={isSticky}>Home</LinkMenu>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#servicos">
            <LinkMenu isSticky={isSticky}>Serviços</LinkMenu>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#empresa">
            <LinkMenu isSticky={isSticky}>Empresa</LinkMenu>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#contato">
            <LinkMenu isSticky={isSticky}>Contato</LinkMenu>
          </Link>
        </ListItem>
      </List>
      <MenuToggle
        onClick={() => {
          setOpen(!open);
          setOverflow(!open ? "add" : "remove");
        }}
      >
        <Hamburguer open={open} isSticky={isSticky} />
      </MenuToggle>
    </Container>
  );
}
