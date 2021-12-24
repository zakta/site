// Components
import { Logo } from '../Logo';

// Styles
import { Screen, Load } from './styles';

export default function Loader() {
  return (
    <Screen>
      <Load>
        <Logo />
      </Load>
    </Screen>
  );
}
