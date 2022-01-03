// 3rd
import PropTypes from 'prop-types';

// Styles
import { Container, Burguer } from './styles';

const Hamburguer = function HamburguerPage({ open, isSticky }) {
  return (
    <Container>
      <Burguer open={open} isSticky={isSticky} />
      <Burguer open={open} isSticky={isSticky} />
      <Burguer open={open} isSticky={isSticky} />
    </Container>
  );
};

Hamburguer.propTypes = {
  open: PropTypes.bool.isRequired,
  isSticky: PropTypes.bool.isRequired,
};

export default Hamburguer;
