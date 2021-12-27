// 3rd parties
import styled from 'styled-components';

export const Center = styled.div`
  align-items: center;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1400px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  transition: all .15s ease;

  @media (min-width: 870px){
    padding-left: 2rem;
    padding-right: 2rem;
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

export const Container = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  position: fixed;
  top: 0;
  transition: all .2s ease;
  width: 100%;
  z-index: 13;

  @media (min-width: 480px) {
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  @media (min-width: 640px) {
    padding-bottom: 1.75rem;
    padding-top: 1.75rem;
  }

  @media (min-width: 870px) {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  &.sticky {
    background: white;
    border-bottom: 1px solid #efefef;
    height: 75px;

    @media (min-width: 480px) {
      padding-bottom: 1.25rem;
      padding-top: 1.25rem;
    }

    @media (min-width: 870px){
      padding-bottom: 0;
      padding-top: 0;

      button {
        color: #1a3968;
        opacity: 1;
        padding: 1.407rem 0;
        transition: all .2s ease;
      }
    }
  }
`;
