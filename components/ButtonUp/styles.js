import styled from "styled-components";

export const Container = styled.section`
  background: white;
  box-sizing: border-box;
  padding-bottom: 2rem;
  position: relative;
  margin-top: -1px;
`;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  max-width: 1400px;
  padding: 0 2.1rem;
`;

export const ScrollTop = styled.div`
  display: flex;
  transition: all .15s ease;

  &:active {
    .buttonUp {
      background: white;
    }
    .arrowUp {
      color: #1a3968;
    }
  }

  @media (min-width: 870px) {
    &:hover {
      .buttonUp {
        background: white;
      }
      .arrowUp {
        color: #1a3968;
      }
    }
  }
`;

export const ButtonArrow = styled.button`
  align-items: center;
  background-color: #1a3968;
  border: 1px solid #1a3968;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  transition: all 0.15s ease;
  width: 60px;
`;

export const IconArrow = styled.div`
  color: #ffff;
  font-size: 25px;
  line-height: 0.1;
  transition: all 0.15s ease;
`;
