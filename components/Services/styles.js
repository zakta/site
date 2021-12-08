import styled from "styled-components";

export const Container = styled.section`
  background: #f8f8f8;
  max-width: 100%;
  min-width: 350px;
`;

export const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  max-width: 1700px;

  @media (min-width: 640px){
    justify-content: space-evenly;
    padding: 0 0 2rem 0;
  }
`;
