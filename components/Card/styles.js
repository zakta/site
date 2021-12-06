import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Card = styled.div`
  background: white;
  text-align: center;
  padding-top: 2rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  transition: .3s all ease-in-out;
  position: relative;


  :after{
    content: "";
    background: ${({animate}) => ( animate ? "linear-gradient(270deg, rgba(26,57,104,1) 0%, rgba(51,175,173,1) 100%)" : "white") };
    transform: scale(0);
    transition: .3s all ease-in-out;
    z-index:0;
    opacity:0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :hover {
    svg {
      color: ${({animate}) => (animate ? "white" : "rgba(51,175,173,1)")};
    }
    p{
      color: ${({animate}) => (animate ? "white" : "black")}
    }
  }

  :hover::after{
    transform: scale(1);
    opacity: ${({animate}) => (animate ? 1 : 0)};
  }

  p{
    z-index: 1;
    font-size: 18px;
    font-weight: 700;
    position: relative;
  }

  @media (min-width: 640px){
    width: 47%;
  }

  @media (min-width: 820px){
    width: 31%;
  }

  @media (min-width: 940px){
    width: 23%;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  z-index: 10;
  height: 50px;
  margin: auto;
  color:  rgba(51,175,173,1);
  font-size: 3rem;
  position: relative;

  :hover{
    color:white;
  }
`
