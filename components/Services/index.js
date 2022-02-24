// 3rd parties
import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';

// Styles
import {
  Center, Container, Cards, TitleServices, AllServices, AllServicesButton,
} from './styles';
import {
  ArrowRight, ArrowRightIcon, Card, Icon,
} from '../Card/styles';

const Services = function ServicesPage({ full }) {
  const { t } = useTranslation('common');

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
        <TitleServices data-aos={full ? '' : 'fade-up'} full={full}>{t('title-services')}</TitleServices>

        <Cards full={full}>
          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon1: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon1: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/criacao-de-sites-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/criacao-de-sites-em-santos`}
            >
              <div className="card-link" href="/website">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/qhgmphtg.json"
                    trigger={icons.icon1}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-1')}</h3>

                <p>{t('text-services-1')}</p>

                <ArrowRight>
                  <ArrowRightIcon />

                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon2: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon2: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/lojas-virtuais-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/lojas-virtuais-em-santos`}
            >
              <div className="card-link" href="/virtual">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/slkvcfos.json"
                    trigger={icons.icon2}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-2')}</h3>

                <p>{t('text-services-2')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon3: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon3: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/sistemas-web-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/sistemas-web-em-santos`}
            >
              <div className="card-link" href="/system">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/gqzfzudq.json"
                    trigger={icons.icon3}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-3')}</h3>

                <p>{t('text-services-3')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon4: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon4: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/otimizacao-de-sites-seo-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/otimizacao-de-sites-seo-em-santos`}
            >
              <div className="card-link" href="/seo">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/msoeawqm.json"
                    trigger={icons.icon4}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-4')}</h3>

                <p>{t('text-services-4')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon5: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon5: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/criacao-de-aplicativos-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/criacao-de-aplicativos-em-santos`}
            >
              <div className="card-link" href="/app">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/jqeuwnmb.json"
                    trigger={icons.icon5}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-5')}</h3>

                <p>{t('text-services-5')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            prev
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon6: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon6: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/manutencao-de-sites-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/manutencao-de-sites-em-santos`}
            >
              <div className="card-link" href="/maint">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/sbiheqdr.json"
                    trigger={icons.icon6}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-6')}</h3>

                <p>{t('text-services-6')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon7: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon7: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/landing-pages-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/landing-pages-em-santos`}
            >
              <div className="card-link" href="/landing">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/anihkfxp.json"
                    trigger={icons.icon7}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-7')}</h3>

                <p>{t('text-services-7')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon8: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon8: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/consultoria-e-analise-de-sistemas-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/consultoria-e-analise-de-sistemas-em-santos`}
            >
              <div className="card-link" href="/consult">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/nobciafz.json"
                    trigger={icons.icon8}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-8')}</h3>

                <p>{t('text-services-8')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchStartCapture={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon9: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon9: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
          >
            <Link
              href="/servicos/marketing-digital-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/marketing-digital-em-santos`}
            >
              <div className="card-link" href="/servicos/mkt">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/iltqorsz.json"
                    trigger={icons.icon9}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-9')}</h3>

                <p>{t('text-services-9')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>

          <Card
            style={{ display: full ? 'flex' : 'none' }}
            onTouchEndCapture={() => setIcons((state) => ({ ...state, icon10: 'hover' }))}
            onMouseEnter={() => setIcons((state) => ({ ...state, icon10: 'loop' }))}
            onMouseLeave={() => setIcons((state) => ({ ...state, icon10: 'hover' }))}
            data-aos={full ? '' : 'fade-up'}
            className="last"
          >
            <Link
              href="/servicos/criacao-de-blogs-em-santos"
              passHref
              as={`${process.env.BACKEND_URL}/servicos/criacao-de-blogs-em-santos`}
            >
              <div className="card-link" href="/blog">
                <Icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/puvaffet.json"
                    trigger={icons.icon10}
                    colors="primary:#121331,secondary:#33afad"
                    style={{ width: 80, height: 80 }}
                  />
                </Icon>

                <h3>{t('subtitle-services-10')}</h3>

                <p>{t('text-services-10')}</p>

                <ArrowRight>
                  <ArrowRightIcon />
                  <span>{t('arrow-services')}</span>
                </ArrowRight>
              </div>
            </Link>
          </Card>
        </Cards>

        <AllServices
          data-aos="fade-in"
          style={{ display: full ? 'none' : 'flex' }}
        >
          <Link passHref href="/servicos">
            <AllServicesButton>
              {t('button-services')}
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
