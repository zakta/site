// 3rd parties
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

export const Icon = styled.div`
  font-size: 3rem;
  line-height: .7;
  height: 80px;
`;

export const ArrowRight = styled.div`
  align-items: center;
  color: black;
  display: flex;
  padding-top: .5rem;
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
          transform: translate(60%, 0);
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
            transform: translate(60%, 0);
            z-index: 1;
          }
        }
      }

  }

  span {
    font-size: 15px;
    font-weight: 800;
    width: 80px;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    transform: translate(0%,0);
    opacity: 0;
    z-index: -1;
    transition: transform .3s ease-in-out, opacity .3s ease-in-out,
    z-index .3s ease-in-out;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 22px;
  }
`;

export const ArrowRightIcon = styled(BsArrowRight)`
  font-size: 30px;
  font-weight: 900;
  padding-right: 25px;
`;

export const Card = styled.div`
  background: white;
  border: 1px solid #efefef;
  border-top: 4px solid #33afad;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: space-between;
  transition: .3s all ease-in-out;
  width: 100%;
  position: relative;

  &.card-last-center {
    @media (min-width: 640px) {
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 1200px) {
      margin-left: initial;
      margin-right: initial;
    }
  }

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
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 640px) {
    width: 48.6%;
    padding: 1.5rem;

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
