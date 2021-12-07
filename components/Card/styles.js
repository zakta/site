import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Card = styled.div`
  background: white;
  text-align: center;
  margin: .5rem;
  width: 100%;
  transition: .3s all ease-in-out;
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (min-width: 640px){
    flex-direction: column;
    align-items: center;
    height: 300px;
  }
  @media (min-width: 940px){
    flex-direction: column;
    align-items: center;
    height: 400px;
  }


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
    font-size: 20px;
    font-weight: 700;
    position: relative;
  }

  @media (min-width: 640px){
    width: 47%;
    justify-content: center;
  }

  @media (min-width: 820px){
    width: 31%;
  }

  @media (min-width: 1200px){
    width: 23%;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  z-index: 10;
  //height: 50px;
  color:  rgba(51,175,173,1);
  font-size: 4rem;
  position: relative;

  :hover{
    color:white;
  }
`
