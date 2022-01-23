// 3rd parties
import Link from 'next/link';
import { useState } from 'react';
// styles
import Services from '../../components/Services';
import {
  ArrowRight, ArrowRightIcon, Card, Icon,
} from '../../components/Card/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OfferedServices = function PageOfferedServices() {
  const [icons, setIcons] = useState({
    icon7: 'hover',
    icon8: 'hover',
    icon9: 'hover',
    icon10: 'hover',
  });
  return (
    <div>
      <Header stat />
      <Services pageOffers>
        <Card
          onTouchStartCapture={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
          onTouchEndCapture={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
          onMouseEnter={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
          onMouseLeave={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
          data-aos="fade-up"
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
              href="/o-que-oferecemos/landing-pages-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/o-que-oferecemos/landing-pages-em-santos`}
            >
              <a href="/landing">
                <ArrowRightIcon />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card
          onTouchStartCapture={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
          onTouchEndCapture={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
          onMouseEnter={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
          onMouseLeave={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
          data-aos="fade-up"
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
              href="/o-que-oferecemos/consultoria-e-analise-de-sistemas-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/o-que-oferecemos/consultoria-e-analise-de-sistemas-em-santos`}
            >
              <a href="/consult">
                <ArrowRightIcon />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>

        <Card
          onTouchStartCapture={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
          onTouchEndCapture={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
          onMouseEnter={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
          onMouseLeave={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
          data-aos="fade-up"
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
              href="/o-que-oferecemos/marketing-digital-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/o-que-oferecemos/marketing-digital-em-santos`}
            >
              <a href="/o-que-oferecemos/mkt">
                <ArrowRightIcon />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>
        <Card
          onTouchEndCapture={() => setIcons((state) => ({ ...state, icon10: 'hover' }))}
          onMouseEnter={() => setIcons((state) => ({ ...state, icon10: 'loop' }))}
          onMouseLeave={() => setIcons((state) => ({ ...state, icon10: 'hover' }))}
          data-aos="fade-up"
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
              href="/o-que-oferecemos/criacao-de-blogs-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/o-que-oferecemos/criacao-de-blogs-em-santos`}
            >
              <a href="/blog">
                <ArrowRightIcon />
                <span>Ver Mais</span>
              </a>
            </Link>
          </ArrowRight>
        </Card>
      </Services>
      <Footer />
    </div>
  );
};
export default OfferedServices;
