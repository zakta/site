// 3rd parties
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

// Components
import Hamburguer from '../Hamburguer';
import ContactLink from '../ContactLink/styles';
import I18nBtn from '../I18nBtn';

// Functions
import scrollTop from '../../functions/scrollTop';

// Styles
import {
  List, ListItem, MenuToggle, ItemInfo, BtnMenu,
} from './styles';

const Menu = function MenuPage({
  isSticky, open, setOpen, activeMenuItem, setActiveMenuItem, stat,
}) {
  const { t } = useTranslation('common');

  const setOverflow = (event) => {
    document.body.classList[event]('hideOverflow');
  };

  useEffect(() => {
    const checkOpen = () => {
      if (open) {
        setOverflow('add');
      } else {
        setOverflow('remove');
      }
    };
    checkOpen();
  }, [open]);

  const handleActive = (sectionPage) => setActiveMenuItem(sectionPage);

  return (
    <>
      <List
        isSticky={isSticky}
        open={open}
        className={isSticky ? 'sticky' : ''}
      >
        <ListItem data-aos={stat ? '' : 'fade-down'}>
          <Link passHref href="/#" as={`${process.env.BACKEND_URL}/#`}>
            <BtnMenu
              open={open}
              stat={stat}
              type="button"
              className={activeMenuItem === '#' || (!stat && activeMenuItem === '') ? 'menu-item-active' : ''}
              onClick={() => {
                handleActive('#');
                setOpen(false);
                scrollTop();
              }}
            >
              {t('menu-home')}
            </BtnMenu>
          </Link>
        </ListItem>

        <ListItem data-aos={stat ? '' : 'fade-down'}>
          {stat ? (
            <Link passHref href="/servicos" as={`${process.env.BACKEND_URL}/servicos`}>
              <BtnMenu
                open={open}
                stat={stat}
                type="button"
                className={activeMenuItem === '#servicos' || stat ? 'menu-item-active' : ''}
                onClick={() => {
                  handleActive('/servicos');
                  setOpen(false);
                }}
              >
                {t('menu-services')}
              </BtnMenu>
            </Link>
          ) : (
            <Link passHref href="/#servicos" as={`${process.env.BACKEND_URL}/#servicos`}>
              <BtnMenu
                open={open}
                stat={stat}
                type="button"
                className={activeMenuItem === '#servicos' || stat ? 'menu-item-active' : ''}
                onClick={() => {
                  handleActive('#servicos');
                  setOpen(false);
                }}
              >
                {t('menu-services')}
              </BtnMenu>
            </Link>
          )}

        </ListItem>

        <ListItem data-aos={stat ? '' : 'fade-down'}>
          <Link passHref href="/#empresa" as={`${process.env.BACKEND_URL}/#empresa`}>
            <BtnMenu
              open={open}
              stat={stat}
              type="button"
              className={activeMenuItem === '#empresa' ? 'menu-item-active' : ''}
              onClick={() => {
                handleActive('#empresa');
                setOpen(false);
              }}
            >
              {t('company')}
            </BtnMenu>
          </Link>
        </ListItem>

        <ListItem data-aos={stat ? '' : 'fade-down'}>
          <Link passHref href="/#contato" as={`${process.env.BACKEND_URL}/#contato`}>
            <BtnMenu
              open={open}
              stat={stat}
              type="button"
              className={activeMenuItem === '#contato' ? 'menu-item-active' : ''}
              onClick={() => {
                handleActive('#contato');
                setOpen(false);
              }}
            >
              {t('contact')}
            </BtnMenu>
          </Link>
        </ListItem>
        <ListItem>
          <I18nBtn isSticky={isSticky} open={open} />
        </ListItem>

        <ItemInfo>
          <Link
            href="/termos-de-servico"
            passHref
            as={`${process.env.BACKEND_URL}/termos-de-servico`}
          >
            <ContactLink>
              {t('cookies-policy')}
            </ContactLink>
          </Link>

          <Link
            href="/politica-de-privacidade"
            passHref
            as={`${process.env.BACKEND_URL}/politica-de-privacidade`}
          >
            <ContactLink>
              {t('privacy-policy')}
            </ContactLink>
          </Link>

          <ContactLink href="mailto:contato@zakta.com.br" target="_blank">
            contato@zakta.com.br
          </ContactLink>

          <ContactLink href="tel:+5513996522199">+55 13 99652-2199</ContactLink>
        </ItemInfo>
      </List>

      <MenuToggle onClick={() => setOpen(!open)}>
        <Hamburguer open={open} isSticky={isSticky || stat} />
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
  stat: PropTypes.bool.isRequired,

};

export default Menu;
