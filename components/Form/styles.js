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

export const InputForm = styled.input`
  background: #f8f8f8;
  border-color: ${({ error }) => (error ? '#b94f4f' : '#f8f8f8')};
  border-style: solid;
  border-radius: none;
  box-sizing: border-box;
  border-width: 2px;
  display: block;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 1.5rem;
  margin: 1.2rem 0 1.7rem;
  width: 100%;

  :focus{
    background: white;
    outline: none;
    border: 2px solid #33afad;
  }
`;

export const Textarea = styled.textarea`
  background: #f8f8f8;
  border-color: ${({ error }) => (error ? '#b94f4f' : '#f8f8f8')};
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 280px;
  padding: 1.5rem;
  width: 100%;
  margin: 1.2rem 0 1.7rem;

  :focus{
    background: white;
    outline: none;
    border: 2px solid #33afad;
  }
`;

export const Position = styled.div`
  position: relative;
`;

export const Erro = styled.div`
  color: #b94f4f;
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
`;

export const BtnSubmit = styled.button`
    align-self: end;
    animation-duration: 20s;
    background: ${({ loader }) => (loader ? '#cccccc24' : 'transparent')};
    border: 1px solid #1a3968;
    color: ${({ loader }) => (loader ? '#5d7497' : '#1a3968')};
    cursor: ${({ loader }) => (loader ? 'not-allowed' : 'pointer')};

    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    padding: 1rem;
    position: relative;
    margin: 1rem 0;
    transition: all .15s ease;
    max-width: 25%;

    &:active{
      background:  ${({ loader }) => (loader ? 'inherit' : '#1a3968')};
      color: ${({ loader }) => (loader ? 'inherit' : 'white')};
    }

    @media (min-width: 480px) {
      width: 200px;
    }

    @media (min-width: 870px) {
      :hover {
        background:  ${({ loader }) => (loader ? 'inherit' : '#1a3968')};
        color: ${({ loader }) => (loader ? 'inherit' : 'white')};
      }
    }
`;
