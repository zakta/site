// 3rd parties
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

// Application
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';

import {
  About, Container, Info, ImageContainer,
} from './styles';
import GoogleAnalytics from '../GoogleAnalytics';

const ServiceInfo = function ComponentServiceInfo({
  children, valueSelect, source, none,
}) {
  const { t } = useTranslation('common');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);
    }
    if (window.innerWidth > 850) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    return setOffset(0);
  }, [offset]);

  return (
    <>
      <Container>
        <Header stat />

        <About>
          {children}
          <ImageContainer className="container-parallax" none={none}>
            <img
              offset={offset}
              data-aos="fade-up"
              src={`/${source}.jpg`}
              alt={`${valueSelect} em Santos`}
              className="parallax"
              style={{
                transform: `translateY(${offset * -0.3}px)`,
              }}
            />
          </ImageContainer>
          <Info>{t('text-service-info-form')}</Info>

          <Form valueSelect={valueSelect} />
        </About>

        <Footer />
      </Container>

      <GoogleAnalytics />
    </>
  );
};

ServiceInfo.propTypes = {
  children: PropTypes.node.isRequired,
  valueSelect: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  none: PropTypes.bool.isRequired,
};

export default ServiceInfo;
