// 3rd parties
import { useTranslation } from 'next-i18next';

// Components
import Header from '../Header';
import ArrowIcon from '../ArrowRedirect/styles';

// Style
import {
  Container,
  Cover,
  CoverMask,
  PageTitle,
  ButtonLink,
  ArrowAnimation,
  ArrowLink,
} from './styles';

const Home = function HomePage() {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Cover />

      <CoverMask />

      <Header />

      <PageTitle data-aos="fade-up">
        <h1>{t('title-home')}</h1>

        <p>
          {t('home-p1')}
          <br />
          {t('home-p2')}
        </p>

        <ButtonLink href="#contato">{t('home-link')}</ButtonLink>

        <ArrowLink href="#servicos">
          <ArrowAnimation>
            <ArrowIcon />
          </ArrowAnimation>
        </ArrowLink>
      </PageTitle>
    </Container>
  );
};

export default Home;
