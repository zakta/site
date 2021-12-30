// 3rd parties
import styled from 'styled-components';
// styles
import ArrowIcon from '../ArrowRedirect/styles';

export const Container = styled.section`
  background: white;
  box-sizing: border-box;
  padding-bottom: 3rem;
  position: relative;
`;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  max-width: 1400px;
`;

export const ButtonArrow = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  transition: all 0.15s ease;
  width: 60px;
`;

export const IconArrow = styled.div`
  color: white;
  font-size: 25px;
  line-height: 0.1;
  transition: all 0.15s ease;
`;

export const ArrowDown = styled(ArrowIcon)`
  transform: rotate(225deg);
  color: #1a3968;
`;
