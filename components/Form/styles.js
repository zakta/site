import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  &:last-child{
    align-items: flex-end;
  }

  @media (min-width: 768px){
    width: 60%;
    margin: 0;
    justify-content: center;
  }

  button {
    background: #1a3968;
    border: none;
    color: white;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    padding: .75rem;
    margin: 1rem 0;
    width: 200px;
    text-transform: uppercase;


    :hover {
      background: linear-gradient(
        270deg,
        rgba(26, 57, 104, 1) 0%,
        rgba(51, 175, 173, 1) 100%
      )
    }
  }
`;

export const InputForm = styled.input`
  background: #f8f8f8;
  border-color: ${({error}) => (error ? 'red' : '#f8f8f8')};
  border-style: solid;
  border-radius: none;
  box-sizing: border-box;
  border-width: 2px;
  display: block;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;

  :focus{
    background: white;
    outline: none;
    border: 2px solid #33afad;
  }
`;

export const Textarea = styled.textarea`
  background: #f8f8f8;
  border-color: ${({error}) => (error ? 'red' : '#f8f8f8')};
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 200px;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;

  :focus{
    background: white;
    outline: none;
    border: 2px solid #33afad;
  }
`;

export const Erro= styled.div`
  color: red;
  font-size: 15px;
  width: 100%;
  text-align: left;
  padding-bottom: 1rem;
  font-weight: 700;
`;
