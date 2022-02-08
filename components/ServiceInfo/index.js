// 3rd parties
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Application
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';
import WhatsAppButton from '../WhatsAppButton';

import {
  About, ButtonToDown, Container, Info, ImageContainer,
} from './styles';
import GoogleAnalytics from '../GoogleAnalytics';

const ServiceInfo = function ComponentServiceInfo({
  children, valueSelect, source, none,
}) {
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

          {valueSelect && (
            <div data-aos="fade-in" style={{ textAlign: 'center' }}>
              <ButtonToDown
                type="button"
                onClick={() => {
                  window.scrollTo({
                    behavior: 'smooth',
                    top: document.body.scrollHeight,
                  });
                }}
              >
                Solicite um orçamento
              </ButtonToDown>
            </div>
          )}

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

          <Info>Ficou Interessado? Entre em contato e solicite um orçamento.</Info>

          <Form valueSelect={valueSelect} />
        </About>

        <Footer />
      </Container>

      <WhatsAppButton />

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
