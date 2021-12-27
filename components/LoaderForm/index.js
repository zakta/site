import PropTypes from 'prop-types';
import { Container } from './styles';

const LoaderForm = function LoaderFormModal({ loader }) {
  return (
    <Container loader={loader}>
      <div className="progress-moved">
        <div className="progress-bar" />
      </div>
    </Container>

  );
};
LoaderForm.propTypes = {
  loader: PropTypes.bool.isRequired,
};
export default LoaderForm;
