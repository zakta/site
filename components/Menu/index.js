import { useState } from "react";
import Link from "next/link";
import Hamburguer from "../Hamburguer";
import { List, ListItem, MenuToggle, ItemInfo } from "./styles";

export default function Menu({ isSticky }) {
  const [open, setOpen] = useState(false);

  function setOverflow(event) {
    document.body.classList[event]("hideOverflow");
  }

  return (
    <>
      <List open={open}>
        <ListItem><Link href="#">Home</Link></ListItem>
        <ListItem><Link href="#servicos">Serviços</Link></ListItem>
        <ListItem><Link href="#empresa">Empresa</Link></ListItem>
        <ListItem><Link href="#contato">Contato</Link></ListItem>

        <ItemInfo>
          <a
            href="mailto:contato@zakta.com.br"
            rel="noreferrer"
            target="_blank">
            contato@zakta.com.br
          </a><br />
          <a href="tel:+5511933020321">+55 11 93302-0321</a>
        </ItemInfo>
      </List>

      <MenuToggle onClick={() => {
        setOpen(!open)

        setOverflow(!open ? "add" : "remove")
      }}>
        <Hamburguer open={open} isSticky={isSticky} />
      </MenuToggle>
    </>
  );
}


{/* <Container>
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
  > */}
