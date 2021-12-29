// 3rd parties
import styled from 'styled-components';

export const Container = styled.section`
  background-color: white;
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
  padding-top: 110px;
  max-width: 1400px;
  position: relative;

  @media (min-width: 768px){
    padding: 110px 0 0;
    margin: 0;
  }
`;
