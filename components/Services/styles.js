// 3rd parties
import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f7f7f7;
  max-width: 100%;
  min-width: 320px;
  margin: 0;
  margin-top: 100vh;
  position: relative;
`;

export const Center = styled.div`
  margin: auto;
  max-width: 1400px;

  h2 {
    color: #1a3968;
    font-size: 20px;
    margin:0;
    padding: 1.5rem 1.25rem;
    transition: all .15s ease;

    @media (min-width: 870px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export const Cards = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  padding: 0 1.25rem;
  position: relative;

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
