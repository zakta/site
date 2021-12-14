import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  min-width: 320px;
  position: relative;
  z-index: 13;
  transition: 1s linear ease-in-out;

  &.sticky {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 13;
    position: fixed;
  }

  &.notSticky {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 13;
  }
  `;

export const Center = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: ${({isSticky}) => isSticky ? '0' : '2.5rem'};
  background: ${({isSticky}) => (isSticky ? 'white' : 'none' )};
  height: ${({isSticky}) => (isSticky ? '80px' : 'none')};
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  height: 35px;
  padding: 1rem 1.5rem;
  transition: all .3s ease;

  :hover{
    transform: perspective(1px) scale(1.1) translateZ(0);
  }
`;
