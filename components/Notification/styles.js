// 3rd parties
import styled, { keyframes } from 'styled-components';

const fadeInd = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-color: rgba(18, 39, 70, .9);
  z-index: 14;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${fadeInd} .15s ease-in-out;
  transition: all .15s ease;
  min-width: 320px;
`;

const slideUp = keyframes`
  0%{
    bottom: -200px;
  }
  100%{
    bottom: 0;
  }
`;

export const PopUp = styled.div`
  background-color: white;
  box-sizing: border-box;
  padding: 1.25rem;
  position: absolute;
  width: 100%;
  left: 0;
  animation: ${slideUp} .15s ease-in-out both;
  transition: all .15s ease;

  div{
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 17px;
    font-weight: 800;
    color: ${({ formStatus }) => (formStatus === 'success' ? '#33afad' : '#e92929')};
    margin: 0;
  }

  p{
    font-size: 14px;
    color: black;
    margin: 1rem 0 0;
  }

  @media (min-width: 640px) {
    padding: 2rem;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: auto;
`;

export const BtnPopUp = styled.button`
  align-self: end;
  background-color: #1a3968;
  border: none;
  border: 1px solid #1a3968;
  box-sizing: border-box;
  color: white;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  animation-duration: 20s;
  font-size: 14px;
  font-family: 'Poppins',sans-serif;
  padding: 1rem;
  transition: all .15s ease;
  margin-top: 1.5rem;

  &:active {
    background-color: #122746;
    border-color: #122746;
  }

  @media (min-width: 640px) {
    padding: 1.25rem;
    font-size: 16px;
    margin-top: 2rem;

    &:hover {
      background-color: #122746;
      border-color: #122746;
    }
  }
`;
