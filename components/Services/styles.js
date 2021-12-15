import styled from "styled-components";

export const Container = styled.section`
  background: #f8f8f8;
  max-width: 100%;
  min-width: 370px;
  margin: 0;
  margin-top: 100vh;
  padding: 1.5rem 0;
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
  justify-content: space-around;
  margin-top: -20%;
  max-width: 1700px;

  @media (min-width: 768px){
    justify-content: center;
    padding: 0;
    margin: 0;
    margin-top: -100px;
  }
`;
