// 3rd parties
import { useTranslation } from 'next-i18next';

// Components
import About from '../About';

// Styles
import {
  Container,
  Picture,
  Box,
  Notes,
  Center,
} from './styles';

const Company = function CompanyPage() {
  const { t } = useTranslation('common');

  return (
    <Container id="empresa">
      <Center>
        <About />

        <Picture
          data-aos="fade-up"
          src="espaco-de-trabalho-da-zakta.jpg"
          alt="Espaço de trabalho da Zakta"
        />

        <Box>
          <Notes data-aos="fade-up">
            <p>{t('company-text-1')}</p>
            <h4 className="title-notes">{t('company-title-1')}</h4>
          </Notes>

          <Notes data-aos="fade-up">
            <h4>{t('company-title-2')}</h4>
            <p>{t('company-text-2')}</p>
          </Notes>

          <Notes data-aos="fade-up">
            <h4 className="text-grey">{t('company-title-3')}</h4>
            <p className="text-grey">{t('company-text-3')}</p>
          </Notes>

          <Notes data-aos="fade-up">
            <h4>{t('company-title-4')}</h4>
            <p>{t('company-text-4')}</p>
          </Notes>
        </Box>
      </Center>
    </Container>
  );
};
export default Company;
