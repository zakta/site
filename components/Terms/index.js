// 3rd parties
import { useTranslation } from 'next-i18next';
// Styles
import {
  BtnClose,
  Center, Container, IcClose,
} from './styles';

const Terms = function TermsModal() {
  const { t } = useTranslation('termos-de-servico');
  return (
    <Container id="terms" className="close">
      <Center>
        <div>
          <h1>{t('terms-title')}</h1>
          <BtnClose href="/">
            <IcClose />
          </BtnClose>
        </div>

        <div className="modalTerms" id="modalTerms">
          <p>
            <span>{t('terms-subtitle')}</span>
            {t('terms-text-1')}
          </p>
          <p>
            <span>{t('eligibility')}</span>
            {t('eligibility-text')}
          </p>
          <p>
            <span>{t('content')}</span>
            {t('content-text')}
          </p>
          <p>
            <span>{t('auth-rights')}</span>
            {t('auth-rights-text')}
          </p>
          <p>
            <span>
              {t('responsibility')}
            </span>
            {t('responsibility-text')}
          </p>
          <p>
            <span>{t('diverse')}</span>
            {t('diverse-text')}
          </p>
        </div>
      </Center>
    </Container>
  );
};

export default Terms;
