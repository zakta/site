import styled from 'styled-components';

export const Container= styled.div`
  cursor: pointer;
  height: 35px;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  overflow: hidden;
  z-index: 20;
`;

export const Burguer= styled.div`
  width: 2.5rem;
  height: 0.40rem;
  background-color: ${({isSticky, open}) => isSticky && !open ? '#1a3968' : 'white' };
  position: relative;
  left: ${({ open }) => open ? '6px' : 0 };
  transform-origin: 0px;
  transition: all .4s linear;
  z-index: 11;

  &:nth-child(1){
    background: ${({open}) => open ? '#fff' : '#36afad'};
    transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    transition: all .4s linear;
  }

  &:nth-child(2){;
    transform: ${({open})=> open ? 'translateX(80%)' : 'translateX(0)'};
    opacity: ${({open}) => open ? 0 : 1};
    transition: all .4s linear;
  }

  &:nth-child(3){
    transform: ${({open})=> open ? 'rotate(-45deg)' : 'rotate(0)'};
    transition: all .4s linear;
  }

`;
