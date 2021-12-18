import styled, { keyframes } from "styled-components";
import { BsArrowDownRight } from "react-icons/bs";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  left: 0;
  height: 100%;
  min-width: 320px;
  min-height: 493px;
  padding-top: 142px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Cover = styled.div`
  background: url("../workspace1.jpg") center no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 493px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const CoverMask = styled.div`
  background-color: #060606;
  height: 100%;
  min-height: 493px;
  position: fixed;
  opacity: 0.6;
  top: 0;
  width: 100%;
`;

export const PageTitle = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  max-width: 1400px;
  min-height: 493px;
  padding: 1.25rem;
  position: relative;
  width: 100%;

  &:last-child {
    align-items: flex-start;
  }

  @media (min-width: 870px) {
    padding: 2rem;
  }

  h1 {
    font-size: 30px;
    font-weight: 800;
    line-height: 45px;
    margin: 0;
    max-width: 940px;
    opacity: 0.9;
    transition: all 0.15s ease;

    @media (min-width: 360px) {
      font-size: 32px;
      line-height: 47px;
    }

    @media (min-width: 380px) {
      font-size: 34px;
      line-height: 49px;
    }

    @media (min-width: 380px) {
      font-size: 36px;
      line-height: 51px;
    }

    @media (min-width: 1400px) {
      font-size: 76px;
      line-height: 93px;
    }
  }

  p {
    color: #f7f7f7;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    max-width: 756px;
    position: relative;

    @media (min-width: 1400px) {
      font-size: 19px;
      line-height: 34px;
    }
  }
`;

export const ButtonLink = styled.a`
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  border: 1px solid white;
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  min-width: 11.053rem;
  padding: 1.132rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    opacity 0.15s ease-in-out;

  &:active {
    background: white;
    color: #1a3968;
  }

  @media (min-width: 870px) {
    &:hover {
      background: white;
      color: #1a3968;
    }
  }
`;

export const ArrowAnimation = styled.div`
  display: flex;
  box-sizing: border-box;
  display: flex;
  margin: 0;
  width: 30px;
  z-index: 12;
`;

export const ArrowLink = styled.a`
  align-self: flex-start;
`;

const bounce = keyframes`
  0%{
    top: -10px;
  }
  50%{
    top: -50px;
  }
  70%{
    top: -30px;
  }
  100%{
    top: -10px;
  }
`;

export const ArrowIcon = styled(BsArrowDownRight)`
  align-self: flex-start;
  animation: ${bounce} 1s linear infinite;
  color: white;
  font-size: 40px;
  left: -22px;
  position: relative;
  transform: rotate(45deg);

  @media (min-width: 450px) {
    font-size: 45px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;
