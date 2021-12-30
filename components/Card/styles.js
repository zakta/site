// 3rd parties
import styled from 'styled-components';
import { animated } from 'react-spring';
import { BsArrowRight } from 'react-icons/bs';

export const Card = styled.div`
  background: white;
  border-top: 4px solid #33afad;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 1.4rem;
  position: relative;
  padding: 2.632rem;
  flex-direction: column;
  justify-content: center;
  transition: .3s all ease-in-out;
  width: 100%;

  h3{
    color: #060606;
    z-index: 1;
    font-size: 27px;
    line-height: 40px;
    font-weight: 700;
    position: relative;
    margin-bottom: 1.06rem;
    margin-top: 1.579rem;

    @media (min-width: 768px){
      font-size: 18px;
    }
    @media (min-width: 800px){
      font-size: 20px;
    }
  }
  p{
    color: #6c6c6c;
    font-size: 19px;
    font-weight: 400;
    line-height: 34px;
    margin: 0;
    position: relative;
    z-index: 1;

    @media (min-width: 768px){
      font-size: 16px;
    }

    @media (min-width: 800px){
      font-size: 18px;
    }
  }

  @media (min-width: 870px){
    justify-content: center;
    width: 48.6%;
  }

  @media (min-width: 1400px){
    width: 32%;
  }
`;

export const Icon = styled(animated.div)`
  z-index: 10;
  color: #1a3968;
  font-size: 4rem;
  position: relative;
`;

export const ArrowRight = styled.div`
  color: black;
  text-align: left;
  display: flex;
  padding-top: 1rem;
  align-items: center;
  white-space: nowrap;

  a{
    color: black;
    display: flex;
    position: relative;
    text-decoration: none;


    :active{
        color: #1a3968;
        span {
          color: #1a3968;
          cursor: pointer;
          opacity: 1;
          transform: translate(120%, 0);
          z-index: 1;
        }
    }
    @media (min-width: 768px){
      :hover{
        color: #1a3968;
          span {
            color: #1a3968;
            cursor: pointer;
            opacity: 1;
            transform: translate(120%, 0);
            z-index: 1;
          }
        }
      }

  }

  span{
    font-size: 15px;
    font-weight: 800;
    width: 80%;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    transform: translate(50%,0);
    opacity: 0;
    z-index: -1;
    transition: transform .3s ease-in-out, opacity .3s ease-in-out,
    z-index .3s ease-in-out;
    top: 25%;

  }
`;
export const ArrowRightIcon = styled(BsArrowRight)`
  font-size: 40px;
  font-weight: 900;
  padding-right: 23px;
`;
