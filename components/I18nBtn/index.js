import { Container, Selector } from './styles';

const I18nBtn = function I18nComponent() {
  return (
    <Container>
      <Selector>
        <lord-icon
          src="https://cdn.lordicon.com/gqzfzudq.json"
          trigger
          colors="primary:#121331,secondary:#33afad"
          style={{ width: 50, height: 50 }}
        />
      </Selector>
    </Container>
  );
};
export default I18nBtn;
