import styled, { keyframes } from 'styled-components';

const zoomInOut = keyframes`
from{
  opacity: 0;
  transform: scale3d(0.3,0.3,0.3);
}
50%{
  opacity: 1;
}
`;
const loader = keyframes`
from{
  transform: translate3d(0,0,0);
}
to{
  visibility: hidden;
  transform: translate3d(100%,0,0)
}
}
`;

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 16;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${loader} 1s ease-in-out both 1s;

`;

export const Load = styled.span`
  position: relative;
  width: 200px;
  height: 200px;
  animation: ${zoomInOut} 1s both;

`;
