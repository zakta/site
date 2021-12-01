import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f7f7f7;
  width: 100%;

  @media (min-width: 640px){
    justify-content: center;
  }

  @media (min-width: 820px){
    justify-content: center;
  }

`
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  margin: 1rem 0;
  text-align: center;
  width: 100%;
  color: #1a3968;
`;

export const Card = styled.div`
  background: white;
  text-align: center;
  padding-top: 2rem;
  margin: 1rem;
  width: 100%;
  transition: .3s all ease-in-out;
  position: relative;

  :after{
    content: "";
    background: linear-gradient(270deg, rgba(26,57,104,1) 0%, rgba(51,175,173,1) 100%);
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
    svg, p {
      color: white;
    }
  }

  :hover::after{
    transform: scale(1);
    opacity:1;
  }

  p{
    z-index: 1;
    font-size: 18px;
    font-weight: 700;
    position: relative;
  }

  @media (min-width: 640px){
    width: 44%;
  }

  @media (min-width: 820px){
    width: 29%;
  }

  @media (min-width: 940px){
    width: 21%;
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
