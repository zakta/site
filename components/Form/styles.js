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
    padding: 1rem;
    margin: 1rem 0;
    width: 200px;
    text-transform: uppercase;
    cursor: pointer;
    align-self: flex-end;


    :hover {
      background: #33afad;
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
  border-color: ${({error}) => (error ? 'red' : '#f8f8f8')};
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
export const Position=styled.div`
  position: relative;
`
export const Erro= styled.div`
  color: red;
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
`;
