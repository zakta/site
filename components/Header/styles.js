import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-bottom: solid 1px #efefef;
  box-sizing: border-box;
  height: 80px;
  min-width: 320px;


  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 13;
  }
  `;

export const Center = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1700px;
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
