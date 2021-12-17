import styled from "styled-components";

export const Container = styled.section`
  background: #f8f8f8;
  max-width: 100%;
  min-width: 370px;
  margin: 0;
  margin-top: 100vh;
  position: relative;
  padding-top: 5rem;

  @media (min-width: 768px){
    display: flex;
    justify-content: center;
    padding-top: 8rem;
  }
`;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1400px;
  padding-top: 3rem;  

  @media (min-width: 768px){
    padding: 0;
    margin: 0;
  }
`;
