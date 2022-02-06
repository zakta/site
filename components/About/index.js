// 3rd parties
import { GoCheck } from 'react-icons/go';
import { useTranslation } from 'next-i18next';
// styles
import TitleSection from '../SectionTitle/styles';
import {
  AboutInfo,
  AboutDivision,
  Container,
  AboutCompany,
  List,
  Check,
} from './styles';

const About = function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <Container>
      <TitleSection data-aos="fade-up">{t('title-about')}</TitleSection>

      <AboutDivision>
        <AboutInfo data-aos="fade-up">
          <h3>
            {t('about-info')}
          </h3>
        </AboutInfo>

        <AboutCompany data-aos="fade-up">
          <p>{t('about-company-p1')}</p>

          <p>{t('about-company-p2')}</p>

          <p>{t('about-company-p3')}</p>
        </AboutCompany>
      </AboutDivision>

      <List>
        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>{t('about-list-p1')}</p>
        </li>

        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>{t('about-list-p2')}</p>
        </li>

        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>{t('about-list-p3')}</p>
        </li>

        <li data-aos="fade-up">
          <Check>
            <GoCheck />
          </Check>
          <p>{t('about-list-p4')}</p>
        </li>
      </List>
    </Container>
  );
};
export default About;
