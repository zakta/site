// 3rd parties
import Link from 'next/link';
import PropTypes from 'prop-types';
// import { useSpring } from 'react-spring';

// Components
import Hamburguer from '../Hamburguer';
import ContactLink from '../ContactLink/styles';

// Styles
import {
  List, ListItem, MenuToggle, ItemInfo,
} from './styles';

const Menu = function MenuPage({
  isSticky, open, setOpen, activeMenuItem, setActiveMenuItem,
}) {
  const setOverflow = (event) => {
    document.body.classList[event]('hideOverflow');
  };

  const handleActive = (sectionPage) => setActiveMenuItem(sectionPage);

  /*  const menuAnim = useSpring({
    to: { opacity: 1, y: `${0}px` },
    from: { opacity: 0, y: `${-100}px` },
    delay: 2000,
  }); */

  return (
    <>
      <List
        isSticky={isSticky}
        open={open}
        className={isSticky ? 'sticky' : ''}
        onClick={() => {
          setOpen(false);

          if (open) setOverflow('remove');
        }}
      >
        <ListItem>
          <Link passHref href="/#" as={`${process.env.BACKEND_URL}/#`}>
            <button
              type="button"
              className={activeMenuItem === '#' || activeMenuItem === '' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#')}
            >
              Home
            </button>
          </Link>
        </ListItem>

        <ListItem>
          <Link passHref href="/#servicos" as={`${process.env.BACKEND_URL}/#servicos`}>
            <button
              type="button"
              className={activeMenuItem === '#servicos' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#servicos')}
            >
              Serviços
            </button>
          </Link>
        </ListItem>

        <ListItem>
          <Link passHref href="/#empresa" as={`${process.env.BACKEND_URL}/#empresa`}>
            <button
              type="button"
              className={activeMenuItem === '#empresa' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#empresa')}
            >
              Empresa
            </button>
          </Link>
        </ListItem>

        <ListItem>
          <Link passHref href="/#contato" as={`${process.env.BACKEND_URL}/#contato`}>
            <button
              type="button"
              className={activeMenuItem === '#contato' ? 'menu-item-active' : ''}
              onClick={() => handleActive('#contato')}
            >
              Contato
            </button>
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

        setOverflow(!open ? 'add' : 'remove');
      }}
      >
        <Hamburguer open={open} isSticky={isSticky} />
      </MenuToggle>
    </>
  );
};

Menu.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  activeMenuItem: PropTypes.string.isRequired,
  setActiveMenuItem: PropTypes.func.isRequired,
};

export default Menu;
