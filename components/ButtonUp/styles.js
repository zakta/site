import styled from 'styled-components';

import { Icon } from '../Card/styles';

export const Container = styled.section`
  background: white;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  height: 80px;
  position: relative;
`;

export const ScrollTop= styled.div`
  display: flex;
  transition: all .3s ease;
  margin-right: 1.5rem;
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

export const IconArrow = styled(Icon)`
  font-size: 20px;
  color: #ffff;
  transition: all .15s ease;
`;
