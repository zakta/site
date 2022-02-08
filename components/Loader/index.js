// 3rd parties
import propTypes from 'prop-types';
// Components
import Logo from '../Logo';

// Styles
import { Screen, Load } from './styles';

const Loader = function LoaderPage({ animate }) {
  return (
    <Screen animate={animate}>
      <Load>
        <Logo />
      </Load>
    </Screen>
  );
};
Loader.propTypes = {
  animate: propTypes.bool.isRequired,
};
export default Loader;
