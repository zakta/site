import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;
  background-color: white;

  h2{
    color: #1a3968;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    margin: 0;
  }
`
export const Form = styled.form`
  margin: 0 auto;
  width: 60%;
`
export const InputForm= styled.input`
  display: block;
  font-size: 15px;
  font-weight: 500;
  padding: .2rem;
  margin: 1rem 0;
  width: 100%;

  &:last-child{
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 600;
    margin: 1rem 0;
    background: #1a3968;
    padding: .3rem ;
    width: 102%;

    :hover{
      background: linear-gradient(270deg, rgba(26,57,104,1) 0%, rgba(51,175,173,1) 100%);
    }
  }
`
