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

const Services = function ServicesPage({ children, pageOffers }) {
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
    <Container id="o-que-oferecemos" pageOffers={pageOffers}>
      <Center>
        <TitleServices data-aos="fade-up">O que oferecemos</TitleServices>

        <Cards>
          <Card
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            data-aos="fade-up"
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
                href="/o-que-oferecemos/criacao-de-sites-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/o-que-oferecemos/criacao-de-sites-em-santos`}
              >
                <a href="/website">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
            data-aos="fade-up"
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
                href="/o-que-oferecemos/lojas-virtuais-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/o-que-oferecemos/lojas-virtuais-em-santos`}
              >
                <a href="/virtual">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
            data-aos="fade-up"
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
                href="/o-que-oferecemos/sistemas-web-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/o-que-oferecemos/sistemas-web-em-santos`}
              >
                <a href="/system">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
            data-aos="fade-up"
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
                href="/o-que-oferecemos/otimizacao-de-sites-seo-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/o-que-oferecemos/otimizacao-de-sites-seo-em-santos`}
              >
                <a href="/seo">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
            data-aos="fade-up"
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
                href="/o-que-oferecemos/criacao-de-aplicativos-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/o-que-oferecemos/criacao-de-aplicativos-em-santos`}
              >
                <a href="/app">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>

          <Card
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
            data-aos="fade-up"
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
                href="/o-que-oferecemos/manutencao-de-sites-em-santos"
                passHref
                as={`${process.env.BACKEND_URL}/o-que-oferecemos/manutencao-de-sites-em-santos`}
              >
                <a href="/maint">
                  <ArrowRightIcon />
                  <span>Ver Mais</span>
                </a>
              </Link>
            </ArrowRight>
          </Card>
          {children}
        </Cards>

        <AllServices>
          <Link passHref href="/o-que-oferecemos">
            <AllServicesButton>
              Ver todos os serviços
            </AllServicesButton>
          </Link>
        </AllServices>
      </Center>
    </Container>
  );
};
Services.propTypes = {
  children: PropTypes.node.isRequired,
  pageOffers: PropTypes.bool.isRequired,
};
export default Services;
