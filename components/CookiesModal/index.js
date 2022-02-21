// 3rd parties
import Link from 'next/link';
import cookie from 'js-cookie';
import PropTypes from 'prop-types';
import { useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'next-i18next';

// styles
import { Container, CookieNotice } from './styles';

const CookiesModal = function
CookiesModalPage({ isAcceptedCookie, setAcceptedCookie, setCookiesModalHeight }) {
  const { t } = useTranslation('common');
  const createCookies = () => {
    if (cookie.get('allow-cookies') === undefined) {
      cookie.set('allow-cookies', 'true', { expires: 1 });
      setCookiesModalHeight(0);

      setAcceptedCookie(true);
    }
  };

  const cookiesModalRef = useRef();

  const getModalHeight = useCallback(() => {
    const newHeight = cookiesModalRef?.current?.clientHeight;

    setCookiesModalHeight(newHeight);
  }, [setCookiesModalHeight]);

  useEffect(() => {
    setTimeout(getModalHeight, 400);
  }, [getModalHeight]);

  useEffect(() => {
    window.addEventListener('resize', getModalHeight);
  }, [getModalHeight]);

  return (
    <Container
      data-aos="fade-up"
      data-aos-offset="0"
      hide={isAcceptedCookie}
      id="modal"
      ref={cookiesModalRef}
    >
      <CookieNotice>
        <p>
          {t('modal-cookie')}
          <span
            aria-hidden
          >
            <Link
              href="/termos-de-servico"
              as={`${process.env.BACKEND_URL}/termos-de-servico`}
            >
              {t('modal-cookie-cookie')}
            </Link>
          </span>

          {t('modal-cookie-text')}

          <span
            aria-hidden
          >
            <Link
              href="/politica-de-privacidade"
              as={`${process.env.BACKEND_URL}/politica-de-privacidade`}
            >
              {t('modal-cookie-privacy')}
            </Link>
          </span>
          .
        </p>

        <button type="button" onClick={createCookies}>{t('modal-cookie-btn')}</button>
      </CookieNotice>
    </Container>
  );
};

CookiesModal.propTypes = {
  isAcceptedCookie: PropTypes.bool.isRequired,
  setAcceptedCookie: PropTypes.func.isRequired,
  setCookiesModalHeight: PropTypes.func.isRequired,
};

export default CookiesModal;
