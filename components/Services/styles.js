import styled from "styled-components";

export const Container = styled.section`
  background: #f8f8f8;
  max-width: 100%;
  min-width: 370px;
  margin: 0;
  padding: 1.5rem 0;

  @media (min-width: 768px){
    display: flex;
    justify-content: center;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1700px;
  box-sizing: border-box;

  @media (min-width: 768px){
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;
