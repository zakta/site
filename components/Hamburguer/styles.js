import styled from "styled-components";

export const Container= styled.div`
  width: 2rem ;
  height: 2.7rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  float: right;
`;

export const Burguer= styled.div`
  width: 2.5rem;
  height: 0.40rem;
  background-color: white;
  transform-origin: 0px;
  transition: all 0.5s linear;
  z-index: 11;

  &:nth-child(1){
    transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2){
    transform: ${({open})=> open ? 'translateX(80%)' : 'translateX(0)'};
    opacity: ${({open}) => open ? 0 : 1};
    transition: ${({open}) => open ? '.3s linear' : 'none'};
  }

  &:nth-child(3){
    transform: ${({open})=> open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;
