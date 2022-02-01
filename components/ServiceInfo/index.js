// 3rd parties
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Application
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';

import { About, Container, Info } from './styles';
import GoogleAnalytics from '../GoogleAnalytics';

const ServiceInfo = function ComponentServiceInfo({ children, valueSelect }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return window.addEventListener('scroll', handleScroll);
  }, []);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { offset });
    }
    return child;
  });

  return (
    <>
      <Container>
        <Header stat />

        <About>
          {childrenWithProps}

          <Info>Ficou Interessado? Entre em contato e solicite um orçamento.</Info>

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
};

export default ServiceInfo;
