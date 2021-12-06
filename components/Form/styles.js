import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  &:last-child{
    align-items: flex-end;
  }

  @media (min-width: 768px){
    width: 50%;
  }

  textarea {
    border: none;
    background: #f8f8f8;
    border-radius: none;
    font-family: Cairo, sans-serif;
    font-size: 15px;
    font-weight: 500;
    height: 200px;
    padding: 1.1rem .5rem;
    width: 100%;
    margin-top: 1rem;

    :focus{
    background: white;
  }
  }

  button {
    background: #1a3968;
    border: none;
    color: white;
    font-size: 13px;
    font-weight: 600;
    padding: 1rem .5rem;
    margin: 1rem 0;
    width: 50%;
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
  border: none;
  display: block;
  background: #f8f8f8;
  border-radius: none;
  font-size: 15px;
  font-family: Cairo, sans-serif;
  font-weight: 500;
  padding: 1.1rem .5rem;
  margin: 1rem 0;
  width: 100%;

  :focus{
    background: white;
  }
`;

export const Erro= styled.div`
  color: red;
  font-size: 15px;
`;
