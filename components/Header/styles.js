import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  min-width: 320px;

  &.sticky {
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
  max-width: 1700px;
  padding: 2.5rem;

  @media (min-width: 768px){
    padding: 1rem;
  }

  @media (min-width: 940px){
    padding: 2.5rem;
  }
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
