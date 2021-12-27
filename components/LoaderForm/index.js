import { Container } from "./styles";

const LoaderForm = function LoaderFormModal({ loader }){
  return(
    <Container loader={loader}>
      <div className="progress-moved">
      <div className="progress-bar"></div>
      </div>
    </Container>

  );
}
export default LoaderForm;
