import styled from 'styled-components';

export const Container = styled.section`
  background: white;
  box-sizing: border-box;
  height: 80px;
  position: relative;
  `;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  max-width: 1400px;
  padding: 0 2rem;
`;

export const ScrollTop= styled.div`
  display: flex;
  transition: all .3s ease;
  transition: all .15s ease;

  &:hover {
    .buttonUp{
      background: white;
    }
    .arrowUp{
      color: #1a3968;
    }
  }
`;

export const ButtonArrow = styled.button`
  background-color: #1a3968;
  border: 1px solid #1a3968;
  cursor: pointer;
  height: 61.5px;
  padding: 21px;
  transition: all .15s ease;
`;

export const IconArrow = styled.div`
  font-size: 20px;
  color: #ffff;
  transition: all .15s ease;
`;
