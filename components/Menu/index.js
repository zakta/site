// 3rd parties
import Link from "next/link";
import { useEffect, useState } from "react";

// Components
import Hamburguer from "../Hamburguer";
import { ContactLink } from '../ContactLink/styles';

// Styles
import { List, ListItem, MenuToggle, ItemInfo } from "./styles";

export default function Menu ({ isSticky, open, setOpen }) {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const setOverflow = event => {
    document.body.classList[event]('hideOverflow');
  };

  const handleActive = sectionPage => setActiveMenuItem(sectionPage);

  useEffect(() => {
    setActiveMenuItem(location.hash)
  }, []);

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
        <ListItem>
          <Link href="#">
            <a
              className={activeMenuItem === '#' || activeMenuItem === '' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#')}>
              Home
            </a>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#servicos">
            <a
              className={activeMenuItem === '#servicos' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#servicos')}>
              Serviços
            </a>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#empresa">
            <a
              className={activeMenuItem === '#empresa' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#empresa')}>
              Empresa
            </a>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#contato">
            <a
              className={activeMenuItem === '#contato' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#contato')}>
              Contato
            </a>
          </Link>
        </ListItem>

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
