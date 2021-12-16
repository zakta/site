import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  position: relative;
  z-index: 13;

  &.sticky {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 13;
    position: fixed;
    background: white;
    transition: all ease .2s;
  }

  &.notSticky {
    top: 0;
    width: 100%;
    z-index: 13;
  }
  `;

export const Center = styled.div`
  align-items: center;
  background: ${({isSticky}) => (isSticky ? 'white' : 'none' )};
  box-sizing: border-box;
  display: flex;
  height: ${({isSticky}) => (isSticky ? '80px' : 'none')};
  justify-content: space-between;
  margin: auto;
  max-width: 1400px;
  padding: 1.25rem;
  //padding: ${({isSticky}) => isSticky ? '0' : '1.25rem'};
  transition: all .15s ease;

  @media (min-width: 480px) {
    padding: 1.5rem;
  }

  @media (min-width: 640px) {
    padding: 1.75rem;
  }

  @media (min-width: 870px) {
    padding: 2rem;
  }

 
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  height: 35px;
  padding: 0;
  transition: all .3s ease;
  z-index: 12;

  @media (min-width: 870px) {
    &:hover{
      transform: perspective(1px) scale(1.1) translateZ(0);
    }
  }
`;
