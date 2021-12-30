// 3rd parties
import styled from 'styled-components';
import { animated } from 'react-spring';
import { BsArrowRight } from 'react-icons/bs';

export const Icon = styled(animated.div)`
  z-index: 10;
  color: #1a3968;
  font-size: 3.4rem;
  line-height: .7;
  position: relative;
`;

export const ArrowRight = styled.div`
  color: black;
  text-align: left;
  display: flex;
  padding-top: .5rem;
  align-items: center;
  white-space: nowrap;

  a {
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
  font-size: 30px;
  font-weight: 900;
  padding-right: 23px;
`;

export const Card = styled.div`
  background: white;
  border-top: 4px solid #33afad;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 1.4rem;
  position: relative;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: space-between;
  transition: .3s all ease-in-out;
  width: 100%;

  h3 {
    color: #060606;
    z-index: 1;
    font-weight: 700;
    position: relative;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: .75rem;
    margin-top: 1.25rem;
  }

  p {
    color: #6c6c6c;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 640px) {
    width: 48.6%;
    padding: 1.5rem;

    ${Icon} {
      font-size: 3.7rem;
    }

    h3 {
      font-size: 24.5px;
      line-height: 35px;
      margin-bottom: 1.06rem;
      margin-top: 1.579rem;
    }

    p {
      font-size: 17.5px;
      line-height: 31px;
    }

    ${ArrowRight} {
      padding-top: 1rem;
    }

    ${ArrowRightIcon} {
      font-size: 35px;
    }
  }

  @media (min-width: 1200px){
    padding: 2rem;
    width: 32%;

    ${Icon} {
      font-size: 4rem;
    }

    h3 {
      font-size: 27px;
      line-height: 40px;
      margin-bottom: 1.06rem;
      margin-top: 1.579rem;
    }

    p {
      font-size: 19px;
      line-height: 34px;
    }

    ${ArrowRight} {
      padding-top: 1rem;
    }

    ${ArrowRightIcon} {
      font-size: 40px;
    }
  }
`;
