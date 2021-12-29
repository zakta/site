// 3rd parties
import Link from 'next/link';
import { BiWrench } from 'react-icons/bi';
import {
  AiOutlineCloudSync,
  AiOutlineAppstoreAdd,
} from 'react-icons/ai';
import {
  BsMegaphone, BsDiagram3, BsGlobe, BsCart3, BsArrowRight,
} from 'react-icons/bs';
import { SiGoogleads } from 'react-icons/si';
import { MdOutlineManageSearch } from 'react-icons/md';
// import { useSpring } from 'react-spring';
// import { useEffect, useState } from 'react';

// Styles
import { Center, Container } from './styles';
import { ArrowRight, Card, Icon } from '../Card/styles';

const Services = function ServicesPage() {
  /* const [hover, setHover] = useState(
    {
      globe: false,
      search: false,
      cloud: false,
      mkt: false,
      gad: false,
      app: false,
      cart: false,
      net: false,
      wrench: false,
    },
  );
  const props = useSpring({
    cancel: !hover,
    loop: true,
    from: {
      opacity: 0, color: '#33afad', x: -30,
    },
    to: [
      {
        opacity: 0, color: '#33afad', x: 10,
      },
      {
        opacity: 1, color: '#1a3968', x: 20,
      },
      {
        opacity: 0, color: '#1a3968', x: 30,
      },
      {
        opacity: 1, color: '#33afad', x: 10,
      },
      {
        opacity: 0, color: '#1a3968', x: 0,
      },
    ],
    config: { duration: 800 },
  });

   const animateOnScroll = () => {
    const globe = document.querySelector('#globe').offsetTop;
    const search = document.querySelector('#search').offsetTop;
    const cloud = document.querySelector('#cloud').offsetTop;
    const mkt = document.querySelector('#mkt').offsetTop;
    const gad = document.querySelector('#gad').offsetTop;
    const app = document.querySelector('#app').offsetTop;
    const cart = document.querySelector('#cart').offsetTop;
    const net = document.querySelector('#net').offsetTop;
    const wrench = document.querySelector('#wrench').offsetTop;
    const about = document.querySelector('#empresa').offsetTop;
    const scroll = window.scrollY;

    if (scroll > globe) {
      setHover((prevState) => ({ ...prevState, globe: true }));
    }
    if (scroll > search) {
      setHover((prevState) => ({ ...prevState, search: true }));
    }
    if (scroll > cloud) {
      setHover((prevState) => ({ ...prevState, cloud: true }));
    }
    if (scroll > mkt) {
      setHover((prevState) => ({
        ...prevState, mkt: true, globe: false, search: false, cloud: false,
      }));
    }
    if (scroll > gad) {
      setHover((prevState) => ({ ...prevState, gad: true }));
    }
    if (scroll > app) {
      setHover((prevState) => ({ ...prevState, app: true }));
    }
    if (scroll > cart) {
      setHover((prevState) => ({
        ...prevState, cart: true, mkt: false, gad: false, app: false,
      }));
    }
    if (scroll > net) {
      setHover((prevState) => ({ ...prevState, net: true }));
    }
    if (scroll > wrench) {
      setHover((prevState) => ({ ...prevState, wrench: true }));
    }
    if (scroll > about) {
      setHover((prevState) => ({
        ...prevState, cart: false, net: false, wrench: false,
      }));
    }
  };

   useEffect(() => {
    window.addEventListener('scroll', animateOnScroll);

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []); */
  /* style={{ ...(hover.globe ? props : null) }} */
  return (
    <Container id="servicos">
      <Center>

        <Card animate id="globe">
          <Icon>
            <BsGlobe />
          </Icon>
          <h3>Criação de Sites</h3>
          <p>
            Sites responsivos, com navegação intuitiva e design profissional.
            Foco em geração de resultados.
          </p>
          <ArrowRight>
            <Link
              href="/criacao"
              passHref
              as={`${process.env.BACKEND_URL}/criacao`}
            >
              <a href="/criacao">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="search">
          <Icon>
            <MdOutlineManageSearch />
          </Icon>
          <h3>Otimização de Sites - SEO</h3>
          <p>
            Otimização de sites para destaque no Google. Palavras-chave
            que alavancam seus acessos orgânicos.
          </p>
          <ArrowRight>
            <Link
              href="/seo"
              passHref
              as={`${process.env.BACKEND_URL}/seo`}
            >
              <a href="/seo">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="cloud">
          <Icon>
            <AiOutlineCloudSync />
          </Icon>
          <h3>Sistemas em Nuvem</h3>
          <p>
            Programas e serviços de armazenamento online. Acesso 24
            horas por dia de qualquer lugar.
          </p>
          <ArrowRight>
            <Link
              href="/sistemas"
              passHref
              as={`${process.env.BACKEND_URL}/sistemas`}
            >
              <a href="/sistemas">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="mkt">
          <Icon>
            <BsMegaphone />
          </Icon>
          <h3>Marketing de Conteúdo - SEM</h3>
          <p>
            Produção de conteúdo para Blogs, com foco em atração de visitantes
            através do Google.
          </p>
          <ArrowRight>
            <Link
              href="/marketing"
              passHref
              as={`${process.env.BACKEND_URL}/marketing`}
            >
              <a href="marketing">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="gad">
          <Icon>
            <SiGoogleads />
          </Icon>
          <h3>Campanha Google Adwords</h3>
          <p>
            Planejamento estratégico organizando por categorias, seus produtos e
            serviços.
          </p>
          <ArrowRight>
            <Link
              href="/gad"
              passHref
              as={`${process.env.BACKEND_URL}/gad`}
            >
              <a href="/gad">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="app">
          <Icon>
            <AiOutlineAppstoreAdd />
          </Icon>
          <h3>Criação de Aplicativos</h3>
          <p>
            Criação de aplicativos para Iphone e Android. Desenvolvimento de
            aplicativos sob medida.
          </p>
          <ArrowRight>
            <Link
              href="/app"
              passHref
              as={`${process.env.BACKEND_URL}/app`}
            >
              <a href="/app">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="cart">
          <Icon>
            <BsCart3 />
          </Icon>
          <h3>Lojas Virtuais</h3>
          <p>
            Criação de lojas virtuais com alta performance, gestão de pedidos
            e integração com pagamento online.
          </p>
          <ArrowRight>
            <Link
              href="/lojas"
              passHref
              as={`${process.env.BACKEND_URL}/lojas`}
            >
              <a href="/lojas">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="net">
          <Icon>
            <BsDiagram3 />
          </Icon>
          <h3>Intranet e Extranet</h3>
          <p>
            Sistemas de redes para distribuição de informações garantindo
            a segurança e privacidade.
          </p>
          <ArrowRight>
            <Link
              href="/redes"
              passHref
              as={`${process.env.BACKEND_URL}/redes`}
            >
              <a href="/redes">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card animate id="wrench">
          <Icon>
            <BiWrench />
          </Icon>
          <h3>Manutenção de Sites</h3>
          <p>
            Atendimento técnico especializado ágil e eficaz. Mantenha seu site
            moderno e atualizado.
          </p>
          <ArrowRight>
            <Link
              href="/manutencao"
              passHref
              as={`${process.env.BACKEND_URL}/manutencao`}
            >
              <a href="/manutencao">
                <BsArrowRight />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>
      </Center>
    </Container>
  );
};
export default Services;
