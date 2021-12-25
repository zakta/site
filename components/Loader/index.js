// Components
import Logo from '../Logo';

// Styles
import { Screen, Load } from './styles';

const Loader = function LoaderPage() {
  return (
    <Screen>
      <Load>
        <Logo />
      </Load>
    </Screen>
  );
};

export default Loader;
