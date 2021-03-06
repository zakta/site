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

function validationInput({ touched, error }) {
  return touched && error ? '#e92929' : isSuccess(touched);
}

export const InputForm = styled.input`
  border: none;
  border-bottom: 3px solid ${validationInput};
  border-radius: none;
  box-shadow: 0 1px 1px 0 rgb(6 6 6 / 12%);
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: .75rem;
  margin: 1.2rem 0 1.7rem;
  width: 100%;
  outline: none;

  :focus{
    background-color: white;
    border-bottom-color: ${({ touched, error }) => (touched && error ? '#e92929' : '#1a3968')};
  }

  ::placeholder {
    font-weight: 300;
  }

  @media (min-width: 640px) {
    padding: 1.5rem;
    font-size: 15px;
  }
`;

export const DropDown = styled.select`
  border: none;
  border-bottom: 3px solid ${validationInput};
  border-top: 1px solid white;
  border-radius: none;
  box-shadow: 0 1px 1px 0 rgb(6 6 6 / 12%);
  box-sizing: border-box;
  display: block;
  background: #ffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  padding: .75rem;
  margin: 1.2rem 0 1.7rem;
  width: 100%;
  outline: none;
  appearance: none;

  :focus{
    border-bottom: 3px solid ${({ touched, error }) => (touched && error ? '#e92929' : '#1a3968')};
  }

  @media (min-width: 640px) {
    padding: 1.5rem;
    font-size: 15px;
  }

  &.arrow{
    background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
    background-position:
      calc(100% - 20px) calc(1.2em),
      calc(100% - 15px) calc(1.2em);
    background-size:
      5px 5px,
      5px 5px;
    background-repeat: no-repeat;

    @media (min-width: 640px){
      background-position:
      calc(100% - 20px) calc(2em),
      calc(100% - 15px) calc(2em);
    }

  }

  &.arrow:focus {
    background-image:
      linear-gradient(45deg, #1a3968 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, #1a3968 50%);
    background-position:
      calc(100% - 15px) 1.2em,
      calc(100% - 20px) 1.2em;
    background-size:
      5px 5px,
      5px 5px;
    background-repeat: no-repeat;
    outline: 0;

    @media (min-width: 640px){
      background-position:
      calc(100% - 15px) calc(2em),
      calc(100% - 20px) calc(2em);
    }
  }
  .defaultOption{
    font-weight: 300;
    font-size: 12px;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  border-bottom: 3px solid ${validationInput};
  box-shadow: 0 1px 1px 0 rgb(6 6 6 / 12%);
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  min-height: 280px;
  padding: .75rem;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  margin: 1.2rem 0 1.7rem;
  outline: none;

  :focus{
    background-color: white;
    border-bottom-color: ${({ touched, error }) => (touched && error ? '#e92929' : '#1a3968')};
  }

  ::placeholder {
    font-weight: 300;
  }

  @media (min-width: 640px) {
    padding: 1.5rem;
    font-size: 15px;
  }
`;

export const Position = styled.div`
  position: relative;
`;

export const Erro = styled.div`
  color: #e92929;
  font-size: 13px;
  font-weight: 600;
  position: absolute;
  bottom: 0;

  @media (min-width: 480px) {
    font-size: 14px;
  }
`;

export const BtnSubmit = styled.button`
  align-self: end;
  animation-duration: 20s;
  background-color: #1a3968;
  border: 1px solid #1a3968;
  color: white;
  cursor: ${({ loader }) => (loader ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  padding: 1rem;
  position: relative;
  margin: 1rem 0 0;
  text-transform: uppercase;
  transition: all .15s ease;
  user-select: none;
  width: 100%;

  :active{
    background-color: #122746;
    border: 1px solid #f7f7f7;
  }

  @media (min-width: 640px) {
    padding: 1.25rem;
    font-size: 16px;
    width: 257px;

    :active{
      background-color: #122746;
      border: 1px solid #f7f7f7;
    }
  }

  @media (min-width: 870px) {
    :hover {
      background-color:  #26508f;
      border-color: #26508f;
    }

    :active{
      background-color: #122746;
      border: 1px solid #f7f7f7;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

export const Column = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    width: 49%;
  }
`;
