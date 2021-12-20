import styled from "styled-components";

export const Container = styled.section`
  background: #f8f8f8;
  max-width: 100%;
  min-width: 320px;
  margin: 0;
  margin-top: 100vh;
  position: relative;

  @media (min-width: 768px){
    display: flex;
    justify-content: center;
  }
`;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1400px;
  position: relative;
  top: -20px;

  @media (min-width: 768px){
    padding: 0;
    margin: 0;
  }
`;
