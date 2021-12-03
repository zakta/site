import styled from "styled-components";
import { Card, Icon} from "../Card/styles";

export const Container = styled.section`
  background-image: url("18_img.6703f879.png");
  background-repeat: no-repeat;
  background-size: cover;

  article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 640px) {
      flex-direction: row;
    }
  }

  h2 {
    color: #1a3968;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    margin: 2rem 0;
  }
`;

export const CardContact = styled(Card)`
  border: 1px solid #efefef;
  padding: 2rem 1rem;
  margin: 1rem;
  width: 80%;

  @media (min-width: 640px) {
    width: 50%;
    display: inline-block;
  }

  h3 {
    margin: 0;
    padding: 0.5rem;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
  }
`;

export const IconContact = styled(Icon)`
  font-size: 3rem;
`;

export const FormContact = styled.div`
  padding: 1rem;
  width: 80%;
  text-align: left;
  margin: 0 auto;

  h4{
    margin: 1rem 0;
    font-size: 25px;
  }
  p{
    font-weight: 600;
  }
`

export const Form = styled.form`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  &:last-child{
    align-items: flex-end;
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
    margin-top: .5rem;

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
    padding: .5rem 2rem;
    margin: 1rem 0;
    width: 50%;
    text-transform: uppercase;

    @media (min-width:497px){
        padding:1rem 2rem;
      }

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
  font-weight: 500;
  padding: 1.1rem .5rem;
  margin: 0.5rem 0;
  width: 100%;

  :focus{
    background: white;
  }
`;
