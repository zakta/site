import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = styled.div`
  align-items: center;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 5px 83px 0 rgb(6 6 6 / 12%);
  display: flex;
  height: 100%;
  position: relative;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem;
  text-align: center;
  transition: .3s all ease-in-out;
  //max-width: 370px;
  width: 80%;

  :after{
    content: "";
    background: ${({animate}) => ( animate ? "linear-gradient(278deg, rgba(12,25,29,1) 0%, rgba(26,57,104,1) 37%, rgba(13,28,35,1) 97%);" : "white") };
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
    h3{
      color:${({animate})=>(animate? "white" : "black")}
    }
    p{
      color: ${({animate}) => (animate ? "white" : "black")}
    }
  }

  :hover::after{
    transform: scale(1);
    opacity: ${({animate}) => (animate ? 1 : 0)};
  }

  h3{
    z-index: 1;
    font-size: 20px;
    font-weight: 700;
    position: relative;

    @media (min-width: 768px){
      font-size: 18px;
    }
    @media (min-width: 800px){
      font-size: 20px;
    }
  }
  p{
    z-index: 1;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    text-align: justify;

    @media (min-width: 768px){
      font-size: 16px;
    }
    @media (min-width: 800px){
      font-size: 18px;
    }
  }

  @media (min-width: 768px){
    justify-content: center;
    width: 26%;
    height: 450px;
  }
  @media (min-width: 980px){
    justify-content: center;
    width: 28%;
  }
  }
  @media (min-width: 1457px){
    justify-content: center;
    width: 30%;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  z-index: 10;
  //height: 50px;
  color: #1a3968;
  font-size: 4rem;
  position: relative;

  :hover{
    color:white;
  }
`
