// 3rd parties
import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  Center, Container, Cards, TitleServices, AllServices, AllServicesButton,
} from './styles';
import {
  ArrowRight, ArrowRightIcon, Card, Icon,
} from '../Card/styles';

const Services = function ServicesPage({ full }) {
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
    icon10: 'hover',
  });
  return (
    <Container id="servicos" full={full}>
      <Center>
        <TitleServices data-aos={full ? '' : 'fade-down'} full={full}>Serviços</TitleServices>

        <Cards full={full}>
          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
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
              Sites modernos, responsivos, com design personalizado e
              totalmente profissional.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/criacao-de-sites-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/criacao-de-sites-em-santos`}
              >
                <a href="/website">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/slkvcfos.json"
                trigger={icons.icon2}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Lojas Virtuais</h3>
            <p>
              Criação de lojas virtuais adequadas ao seu negócio.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/lojas-virtuais-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/lojas-virtuais-em-santos`}
              >
                <a href="/virtual">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/gqzfzudq.json"
                trigger={icons.icon3}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Sistemas Web</h3>
            <p>
              Sistemas acessados pela web totalmente personalizados.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/sistemas-web-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/sistemas-web-em-santos`}
              >
                <a href="/system">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger={icons.icon4}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>

            <h3>Otimização de Sites - SEO</h3>
            <p>
              Seu site em destaque no Google através de SEO.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/otimizacao-de-sites-seo-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/otimizacao-de-sites-seo-em-santos`}
              >
                <a href="/seo">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/jqeuwnmb.json"
                trigger={icons.icon5}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Criação de Aplicativos</h3>
            <p>
              Desenvolvimento de aplicativos para Android e Iphone.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/criacao-de-aplicativos-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/criacao-de-aplicativos-em-santos`}
              >
                <a href="/app">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/sbiheqdr.json"
                trigger={icons.icon6}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Manutenção de Sites</h3>
            <p>
              Sustentação de sites e atendimento técnico.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/manutencao-de-sites-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/manutencao-de-sites-em-santos`}
              >
                <a href="/maint">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>
          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/anihkfxp.json"
                trigger={icons.icon7}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Landing Pages</h3>
            <p>
              Página única com forte apelo comercial e eficiente para a coleta de
              leads.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/landing-pages-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/landing-pages-em-santos`}
              >
                <a href="/landing">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/nobciafz.json"
                trigger={icons.icon8}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Consultoria e Análise de Sistemas</h3>
            <p>
              Profissionais especializados para desenvolvimento e análise de
              sistemas.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/consultoria-e-analise-de-sistemas-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/consultoria-e-analise-de-sistemas-em-santos`}
              >
                <a href="/consult">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/iltqorsz.json"
                trigger={icons.icon9}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Marketing Digital</h3>
            <p>
              Análise de palavras-chaves e campanhas Google Adwords.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/marketing-digital-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/marketing-digital-em-santos`}
              >
                <a href="/servicos/mkt">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>
          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon10: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon10: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon10: 'hover' }))}
            data-aos={full ? '' : 'fade-down'}
            className="last"
          >
            <Icon>
              <lord-icon
                src="https://cdn.lordicon.com/puvaffet.json"
                trigger={icons.icon10}
                colors="primary:#121331,secondary:#33afad"
                style={{ width: 80, height: 80 }}
              />
            </Icon>
            <h3>Criação de Blogs</h3>
            <p>
              Blogs modernos, profissionais e totalmente sob medida.
            </p>
            <ArrowRight>
              <Link
                href="/servicos/criacao-de-blogs-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/servicos/criacao-de-blogs-em-santos`}
              >
                <a href="/blog">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>
        </Cards>

        <AllServices
          data-aos="fade-in"
          data-aos-offset="1000"
          style={{ display: full ? 'none' : 'flex' }}
        >
          <Link passHref href="/servicos">
            <AllServicesButton>
              Conheça todos os serviços
            </AllServicesButton>
          </Link>
        </AllServices>
      </Center>
    </Container>
  );
};

Services.defaultProps = {
  full: false,
};

Services.propTypes = {
  full: PropTypes.bool,
};

export default Services;
