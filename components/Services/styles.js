import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f7f7f7;
  width: 100%;
  min-width: 350px;

  @media (min-width: 640px){
    justify-content: space-evenly;
    padding: 0 0 0.5rem 0;
  }
`
export const Title = styled.h1`
  color: #1a3968;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  line-height: 50px;
  padding: 1.5rem 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

