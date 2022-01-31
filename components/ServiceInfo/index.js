// 3rd parties
import PropTypes from 'prop-types';

// Application
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';

import { About, Container, Info } from './styles';
import GoogleAnalytics from '../GoogleAnalytics';

const ServiceInfo = function ComponentServiceInfo({ children, valueSelect }) {
  return (
    <>
      <Container>
        <Header stat />

        <About>
          {children}

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
