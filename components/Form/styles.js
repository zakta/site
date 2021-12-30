// 3rd parties
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px){
    margin: 0;
    justify-content: center;
  }
`;

function isSuccess(touched) {
  return touched ? '#33afad' : '#ccc';
}

export const InputForm = styled.input`
  border-color: ${({ touched, error }) => (touched && error ? '#e92929' : isSuccess(touched))};
  border-radius: none;
  border-width: 0;
  border-bottom-width: 3px;
  box-sizing: border-box;
  display: block;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 1.5rem;
  margin: 1.2rem 0 1.7rem;
  width: 100%;
  outline: none;

  :focus{
    background: white;
    border-color: ${({ touched, error }) => (touched && error ? '#e92929' : '#1a3968')};
  }
`;

export const Textarea = styled.textarea`
  border-color: ${({ touched, error }) => (touched && error ? '#e92929' : isSuccess(touched))};
  border-width: 0;
  border-bottom-width: 3px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  min-height: 280px;
  padding: 1.5rem;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  margin: 1.2rem 0 1.7rem;
  outline: none;

  :focus{
    background: white;
    border-color: ${({ touched, error }) => (touched && error ? '#e92929' : '#1a3968')};
  }
`;

export const Position = styled.div`
  position: relative;
`;

export const Erro = styled.div`
  color: #e92929;
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
`;

export const BtnSubmit = styled.button`
    align-self: end;
    animation-duration: 20s;
    background: ${({ loader }) => (loader ? '#cccccc24' : '#1a3968')};
    border: 1px solid #1a3968;
    color: ${({ loader }) => (loader ? '#5d7497' : 'white')};
    cursor: ${({ loader }) => (loader ? 'not-allowed' : 'pointer')};

    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    padding: 1rem;
    position: relative;
    margin: 1rem 0;
    transition: all .15s ease;

    &:active{
      background:  ${({ loader }) => (loader ? 'inherit' : '#1a3968')};
      color: ${({ loader }) => (loader ? 'inherit' : 'white')};
    }

    @media (min-width: 480px) {
      width: 200px;
    }

    @media (min-width: 870px) {
      :hover {
        background:  ${({ loader }) => (loader ? 'inherit' : 'white')};
        color: ${({ loader }) => (loader ? 'inherit' : '#1a3968')};
      }
    }
`;
