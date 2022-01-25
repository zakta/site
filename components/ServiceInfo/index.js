// 3rd parties
import PropTypes from 'prop-types';

// Application
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';

import { About, Container, Info } from './styles';

const ServiceInfo = function ComponentServiceInfo({ children }) {
  return (
    <Container>
      <Header stat />

      <About data-aos="fade-down">
        {children}

        <Info>Ficou Interessado? Entre em contato e solicite um orçamento.</Info>

        <Form setFormStatus={() => {}} />

      </About>

      <Footer />
    </Container>
  );
};

ServiceInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ServiceInfo;
