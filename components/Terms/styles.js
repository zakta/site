import styled from "styled-components";
import { IoClose } from 'react-icons/io5';
import { keyframes } from "styled-components";

const slide= keyframes`
 from{
   transform: translate3d(0,100%,0);
 }
 to{
   transform: translate3d(0,0,0);
 }
`


export const Container = styled.section`
  animation: ${slide} .5s ease-in-out both;
  background: #f1f1f1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.25rem;
  position: fixed;
  min-width: 320px;
  top: 0;
  z-index: 14;

  @media (min-width: 480px) {
    padding: 1.50rem;
  }
  @media (min-width: 640px) {
    padding: 1.75rem;
  }
  @media (min-width: 870px) {
    padding: 2rem;
  }

  &.close {
    display: none;
  }

  .button-title{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    
  }

  .modalTerms {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding-right: 1rem;
  }
 
  h1{
    color: #1a3968;
    font-size: 24px;
    font-weight: 800;
    margin: 0;  
    padding: 0;  
    line-height: 24px;
    white-space: nowrap;

    @media (min-width: 480px) {
      font-size: 27px;
      line-height: 27px;
    }
    @media (min-width: 640px) {
      font-size: 30px;
      line-height: 30px;
    }
    @media (min-width: 870px) {
      font-size: 35px;
      line-height: 35px;
    }
  }

  p {

    font-size: 15px;

    @media (min-width: 480px) {
      font-size: 17px;
    }
    @media (min-width: 640px) {
      font-size: 20px;
    }
    @media (min-width: 870px) {
      font-size: 22px;
    }
    
  }

  span {
    color: #1a3968;
    font-weight: 600;
    font-weight: 800;
  }
`;

export const BtnClose = styled.button`
  border: none;
  padding: 0;
  `;

export const IcClose=styled(IoClose)`
    background: #1a3968;
    border: 1px solid #1a3968;
    color: white;
    cursor: pointer;
    font-size: 30px;


    :active {
    color: #1a3968;
    background: #f1f1f1;
  }
  @media (min-width: 768px) {
    :hover {
      color: #1a3968;
      background: #f1f1f1;
    }
  }
`