import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f7f7f7;
  width: 100%;
  min-width: 350px;
  padding-top: 1rem;

  @media (min-width: 640px){
    justify-content: center;
  }

  @media (min-width: 820px){
    justify-content: center;
  }

`
export const Title = styled.h1`
  color: #1a3968;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  padding-bottom: 1rem;
`;

