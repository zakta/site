// 3rd parties
import Link from 'next/link';
import { useState } from 'react';

// Styles
import {
  Center, Container, Cards, TitleServices,
} from './styles';
import {
  ArrowRight, ArrowRightIcon, Card, Icon,
} from '../Card/styles';

const Services = function ServicesPage() {
  const [icons, setIcons] = useState({
    icon1: 'hover',
    icon2: 'hover',
    icon3: 'hover',
    icon4: 'hover',
    icon5: 'hover',
    icon6: 'hover',
    icon7: 'hover',
    icon8: 'hover',
    icon9: 'hover',
  });

  return (
    <Container id="servicos">
      <Center>
        <TitleServices>O que oferecemos</TitleServices>

        <Cards>
          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            aria-haspopup="true"
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/qhgmphtg.json"
                trigger={icons.icon1}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger={icons.icon2}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/wcjauznf.json"
                trigger={icons.icon3}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/jvucoldz.json"
                trigger={icons.icon4}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/iltqorsz.json"
                trigger={icons.icon5}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/jqeuwnmb.json"
                trigger={icons.icon6}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/slkvcfos.json"
                trigger={icons.icon7}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/gqzfzudq.json"
                trigger={icons.icon8}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            animate
            className="card-last-center"
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/sbiheqdr.json"
                trigger={icons.icon9}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
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
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>
        </Cards>
      </Center>
    </Container>
  );
};
export default Services;
