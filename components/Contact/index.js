// 3rd parties
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
// Components
import ContactForm from '../Form';
// import Notification from '../Notification';
import BottomModal from '../BottomModal';

// Styles
import {
  Card,
  Center,
  ContactInfo,
  Container,
  FormDescription,
  FormTitle,
  Icon,
} from './style';
import TitleSection from '../SectionTitle/styles';

const Contact = function ContactPage() {
  const [activeModal, setActiveModal] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const { t } = useTranslation('common');
  return (
    <Container id="contato">
      <Center>
        <ContactInfo>
          <TitleSection data-aos="fade-up">{t('title-contact')}</TitleSection>

          <h3 data-aos="fade-up">{t('contact-subtitle')}</h3>
        </ContactInfo>

        <article data-aos="fade-up">
          <Card className="contact-card-email">
            <a href="mailto:contato@zakta.com.br">
              <Icon className="contact-icon-email">
                <AiOutlineMail />
              </Icon>

              <h4>E-mail</h4>
              <p>contato@zakta.com.br</p>
            </a>
          </Card>

          <Card className="contact-card-telephone">
            <a href="tel:+5513996522199">
              <Icon className="contact-icon-telephone">
                <AiOutlinePhone />
              </Icon>

              <h4>{t('contact-phone')}</h4>
              <p>+55 13 99652-2199</p>
            </a>
          </Card>

          <Card className="contact-card-whatsapp">
            <a href=" https://wa.me/5513996522199?text=Olá%20gostaria%20de%20um%20orçamento%20dos%20seus%20serviços." target="_blank">
              <Icon>
                <BsWhatsapp />
              </Icon>

              <h4>WhatsApp</h4>
              <p>+55 13 99652-2199</p>
            </a>
          </Card>
        </article>

        <FormTitle data-aos="fade-up">{t('form-title')}</FormTitle>

        <FormDescription data-aos="fade-up">
          {t('form-description')}
        </FormDescription>

        <ContactForm
          setFormStatus={setFormStatus}
          setActiveModal={setActiveModal}
        />
      </Center>

      { formStatus && activeModal && (
        <BottomModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          setFormStatus={setFormStatus}
          formStatus={formStatus}
        />
      )}
    </Container>
  );
};
export default Contact;
