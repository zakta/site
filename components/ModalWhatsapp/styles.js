import styled, { keyframes } from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

export const Container=styled.div`
  display: flex;
  position: relative;
  z-index: 12;
`
const slide= keyframes`
  0%{
    right: -236px;
  }
  25%{
    right: -194px;
  }
  50%{
    right: -141px;
  }
  75%{
    right: -87px;
  }
  100%{
    right: -52px;
  }
`

export const ModalWhats= styled.div`
  background:  #27b32c;
  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  height: auto;
  position: fixed;
  right: -319px;
  top: auto!important;
  bottom: 5%;

  @media (min-width: 768px){
    :hover{
      animation:${slide} 1s linear .5s forwards ;
    }
  }
`

export const ButtonWhats= styled.a`
  color: white;
  text-decoration: none;
   p{
     text-transform: uppercase;
     width: 300px;
   }
`
export const IWhatsapp= styled(BsWhatsapp)`
  color: white;
  font-size: 40px;
  padding-right: 1rem;
  



`
