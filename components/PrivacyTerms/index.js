// 3rd parties
import { useTranslation } from 'next-i18next';
// Styles
import {
  BtnClose, Center, Container, IcClose,
} from '../Terms/styles';
import SpanTitle from './styles';

const PrivacyTerms = function PrivacyTermsModal() {
  const { t } = useTranslation('politica-de-privacidade');
  return (
    <Container id="privacy" className="close">
      <Center>
        <div>
          <h1>{t('privacy-title')}</h1>
          <BtnClose href="/">
            <IcClose />
          </BtnClose>
        </div>
        <div className="modalTerms" id="modalPrivacy">
          <p>
            <SpanTitle>{t('privacy-subtitle')}</SpanTitle>
            {t('privacy-text-1')}
          </p>
          <p>
            {t('privacy-text-2')}
          </p>
          <p>
            {t('privacy-text-3')}
          </p>
          <p>
            {t('privacy-text-4')}
          </p>
          <p>
            <SpanTitle>{t('privacy-information')}</SpanTitle>
            {t('privacy-information-text-1')}
          </p>
          <p>
            {t('privacy-information-text-2')}
          </p>
          <p>
            {t('privacy-information-text-3')}
          </p>
          <p>
            <SpanTitle>{t('your-information')}</SpanTitle>
            {t('your-information-text-1')}
          </p>
          <p>
            {t('your-information-text-2')}
          </p>
          <p>
            {t('your-information-text-3')}
          </p>
          <p>
            {t('your-information-text-4')}
          </p>
          <p>
            {t('your-information-text-5')}
          </p>
          <p>
            {t('your-information-text-6')}
          </p>
          <p>
            {t('your-information-text-7')}
          </p>
        </div>
      </Center>
    </Container>
  );
};

export default PrivacyTerms;
