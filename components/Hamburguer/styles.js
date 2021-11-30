import styled from "styled-components";

export const Container= styled.div`
  width: 2rem ;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  float: right;
`;

export const Burguer= styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: ${({open})=> open ? 'white' : '#1a3968'};
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1){
    transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2){
    transform: ${({open})=> open ? 'translateX(20%)' : 'translateX(0)'};
    opacity: ${({open}) => open ? 0 : 1};
    transition: ${({open}) => open ? '0.1s linear' : 'none'};
  }

  &:nth-child(3){
    transform: ${({open})=> open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;
