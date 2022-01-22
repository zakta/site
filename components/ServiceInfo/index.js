// 3rd parties
import PropTypes from 'prop-types';

import { About, Container, Info } from './styles';
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';

const ServiceInfo = function ComponentServiceInfo({ children }) {
  return (
    <Container>
      <Header stat />
      <About>
        {children}
        <Info>Ficou Interessado? Entre em contato e solicite um orçamento.</Info>
        <Form />
      </About>
      <Footer />
    </Container>
  );
};

ServiceInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ServiceInfo;
