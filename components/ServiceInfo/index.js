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
        <Info>
          <h3>Ficou Interessado? Entre em contato e solicite um orçamento.</h3>
          <Form />
        </Info>
      </About>
      <Footer />
    </Container>
  );
};

ServiceInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ServiceInfo;
