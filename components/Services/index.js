// 3rd parties
import { useSpring, animated } from 'react-spring';
import { BiWrench } from 'react-icons/bi';
import {
  AiOutlineCloudSync,
  AiOutlineAppstoreAdd,
} from 'react-icons/ai';
import {
  BsMegaphone, BsDiagram3, BsGlobe, BsCart3,
} from 'react-icons/bs';
import { SiGoogleads } from 'react-icons/si';
import { MdOutlineManageSearch } from 'react-icons/md';

// Styles
import { Mask, Center, Container } from './styles';
import { Card, Icon } from '../Card/styles';

const Services = function ServicesPage() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    config: { duration: 800 },
  });

  return (
    <Container id="servicos">
      <Mask />
      <Center>
        <Card animate>
          <Icon>
            <animated.div style={{
              width: 80,
              height: 80,
              ...styles,
            }}
            >
              <BsGlobe />
            </animated.div>
          </Icon>
          <h3>Criação de Sites</h3>
          <p>
            Sites responsivos, com navegação intuitiva e design profissional.
            Foco em geração de resultados.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <MdOutlineManageSearch />
          </Icon>
          <h3>Otimização de Sites - SEO</h3>
          <p>
            Otimização de sites para destaque no Google. Palavras-chave
            que alavancam seus acessos orgânicos.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <AiOutlineCloudSync />
          </Icon>
          <h3>Sistemas em Nuvem</h3>
          <p>
            Programas e serviços de armazenamento online. Acesso 24
            horas por dia de qualquer lugar.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <BsMegaphone />
          </Icon>
          <h3>Marketing de Conteúdo - SEM</h3>
          <p>
            Produção de conteúdo para Blogs, com foco em atração de visitantes
            através do Google.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <SiGoogleads />
          </Icon>
          <h3>Campanha Google Adwords</h3>
          <p>
            Planejamento estratégico organizando por categorias, seus produtos e
            serviços.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <AiOutlineAppstoreAdd />
          </Icon>
          <h3>Criação de Aplicativos</h3>
          <p>
            Criação de aplicativos para Iphone e Android. Desenvolvimento de
            aplicativos sob medida.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <BsCart3 />
          </Icon>
          <h3>Lojas Virtuais</h3>
          <p>
            Criação de lojas virtuais com alta performance, gestão de pedidos
            e integração com pagamento online.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <BsDiagram3 />
          </Icon>
          <h3>Intranet e Extranet</h3>
          <p>
            Sistemas de redes para distribuição de informações garantindo
            a segurança e privacidade.
          </p>
        </Card>
        <Card animate>
          <Icon>
            <BiWrench />
          </Icon>
          <h3>Manutenção de Sites</h3>
          <p>
            Atendimento técnico especializado ágil e eficaz. Mantenha seu site
            moderno e atualizado.
          </p>
        </Card>
      </Center>
    </Container>
  );
};
export default Services;
