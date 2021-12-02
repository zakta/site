import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f7f7f7;
  width: 100%;

  @media (min-width: 640px){
    justify-content: center;
  }

  @media (min-width: 820px){
    justify-content: center;
  }

`
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0;
  text-transform: uppercase;
  margin-top: 1rem;
  text-align: center;
  width: 100%;
  color: #1a3968;
`;


