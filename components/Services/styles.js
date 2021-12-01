import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  background: #f7f7f7;
`
export const Card = styled.div`
  background: white;
  display: flex;
  height: 150px;
  margin: 1rem;
  min-width: 200px;
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

  :hover::after{
    transform: scale(1);
    opacity:1;
  }

  @media (min-width: 640px){
    min-width: 200px;
  }

  @media (min-width: 640px){
    width: 20%;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  z-index: 10;
  height: 50px;
  margin: auto;
  background:  linear-gradient(270deg, rgba(26,57,104,1) 0%, rgba(51,175,173,1) 100%);
  background-clip: text;



`
