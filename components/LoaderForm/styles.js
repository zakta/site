import styled, { keyframes } from "styled-components";

const progressAnimation = keyframes`
  0%{width: 5%;}
  100%{width: 100%;}
`

export const Container = styled.div`
  display: ${({loader}) => (loader ? 'unset' : 'none')};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .progress-bar{
    height: 7px;
    transition-property: width, background-color;
  }
  .progress-moved .progress-bar{
      width: 100%;
      background-color: #33afad;
      animation: ${progressAnimation} 2s infinite;
    }
`
