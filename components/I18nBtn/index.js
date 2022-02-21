// 3rd parties
import PropTypes from 'prop-types';
import { useState } from 'react';
// styles
import {
  Container, Selector, Dropdown, Language,
} from './styles';

const I18nBtn = function I18nComponent({ isSticky, open }) {
  const [visible, setVisible] = useState(false);
  const switchColor = () => {
    if (isSticky && !open) {
      return 'primary:#1a3968,secondary:#33afad';
    }
    return 'primary:#ffffff,secondary:#ffffff';
  };

  return (
    <Container open={open} onClick={() => setVisible(!visible)}>
      <Selector isSticky={isSticky}>
        <lord-icon
          src="https://cdn.lordicon.com/gqzfzudq.json"
          trigger
          isSticky={isSticky}
          colors={switchColor()}
          style={{ width: 30, height: 30 }}
        />
      </Selector>
      <Dropdown visible={visible}>
        <Language passHref href="/#">Português</Language>
        <Language passHref href="/es#">Español</Language>
        <Language passHref href="/en#">English</Language>
      </Dropdown>
    </Container>
  );
};
export default I18nBtn;
I18nBtn.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
};
