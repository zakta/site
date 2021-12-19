// 3rd parties
import Link from "next/link";

// Components
import Hamburguer from "../Hamburguer";
import { ContactLink } from '../ContactLink/styles';

// Styles
import { List, ListItem, MenuToggle, ItemInfo } from "./styles";

export default function Menu ({ isSticky, open, setOpen }) {
  function setOverflow (event) {
    document.body.classList[event]("hideOverflow");
  }

  return (
    <>
      <List
        isSticky={isSticky}
        open={open}
        className={isSticky ? "sticky" : ""}
        onClick={() => {
          setOpen(false);

          if (open) setOverflow("remove");
        }}>
        <ListItem><Link href="#">Home</Link></ListItem>
        <ListItem><Link href="#servicos">Serviços</Link></ListItem>
        <ListItem><Link href="#empresa">Empresa</Link></ListItem>
        <ListItem><Link href="#contato">Contato</Link></ListItem>

        <ItemInfo>
          <ContactLink href="mailto:contato@zakta.com.br" target="_blank">
            contato@zakta.com.br
          </ContactLink>
          <br />
          <ContactLink href="tel:+5511933020321">+55 11 93302-0321</ContactLink>
        </ItemInfo>
      </List>

      <MenuToggle onClick={() => {
        setOpen(!open);

        setOverflow(!open ? "add" : "remove");
      }}>
        <Hamburguer open={open} isSticky={isSticky} />
      </MenuToggle>
    </>
  );
}
