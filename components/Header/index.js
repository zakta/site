// 3rd parties
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Logo from '../Logo';
import Menu from '../Menu';

// Functions
import scrollTop from '../../functions/scrollTop';

// Styles
import { Center, Container, LogoContainer } from './styles';

const Header = function HeaderPage({ stat }) {
  const [isSticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleScroll = () => {
    const isScrolling = window.scrollY > 0;
    const header = document.querySelector('#header');

    header?.classList.toggle('sticky', isScrolling);

    setSticky(isScrolling);
  };

  const changeTheme = () => {
    if (stat || isSticky) {
      const { clientWidth } = document.documentElement;

      if (open && clientWidth < 980) {
        return 'white';
      }

      return 'primary';
    }
    return 'white';
  };

  useEffect(() => {
    setActiveMenuItem(document.location.hash);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const { clientWidth } = document.documentElement;

      if (clientWidth >= 980 && open) {
        setOpen(false);
      }
    });
  }, [open]);

  return (
    <Container id="header">
      <Center isSticky={stat || isSticky}>
        <Link href="/#" passHref as={`${process.env.BACKEND_URL}/#`}>
          <LogoContainer onClick={scrollTop}>
            <Logo
              theme={process.browser && changeTheme()}
              height={35}
              data-aos="fade-down"
            />
          </LogoContainer>
        </Link>

        <Menu
          isSticky={isSticky}
          stat={stat}
          open={open}
          setOpen={setOpen}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
      </Center>
    </Container>
  );
};
Header.propTypes = {
  stat: PropTypes.bool.isRequired,
};

export default Header;
