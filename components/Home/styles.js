// 3rd parties
import styled from 'styled-components';

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  left: 0;
  height: 100vh;
  min-width: 320px;
  min-height: 493px;
  padding-top: 75px;
  position: absolute;
  top: 0;
  width: 100%;

  @media (min-width: 480px) {
    padding-top: 83px;
  }

  @media (min-width: 640px) {
    padding-top: 91px;
  }

  @media (min-width: 980px) {
    padding-top: 142px;
  }
`;

export const Cover = styled.div`
  background: url("210888.webp") center no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 493px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const CoverMask = styled.div`
  background-color: #060606;
  height: 100vh;
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
  justify-content: space-around;
  margin: auto;
  max-width: 1400px;
  min-height: 493px;
  padding: 1.25rem;
  position: relative;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 980px) {
    padding: 2rem;
  }

  h1 {
    font-size: 30px;
    font-weight: 800;
    line-height: 40px;
    margin: 0;
    max-width: 940px;
    opacity: 0.9;
    transition: all 0.15s ease;

    @media (min-width: 480px) {
      font-size: 38px;
      line-height: 53px;
    }

    @media (min-width: 640px) {
      font-size: 50px;
      line-height: 65px;
    }

    @media (min-width: 980px) {
      font-size: 65px;
      line-height: 80px;
    }

    @media (min-width: 1400px) {
      font-size: 76px;
      line-height: 93px;
    }
  }

  p {
    color: #f7f7f7;
    font-size: 15px;
    font-weight: 300;
    line-height: 25px;
    margin: 0;
    max-width: 756px;
    padding-bottom: 1rem;
    position: relative;

    @media (min-width: 480px) {
      font-size: 16px;
      line-height: 32px;
    }

    @media (min-width: 640px) {
      font-size: 18px;
      line-height: 33px;
    }

    @media (min-width: 980px) {
      font-size: 19px;
      line-height: 34px;
    }

    @media (min-width: 1400px) {
      font-size: 19px;
      line-height: 34px;
    }
  }
`;

export const ButtonLink = styled.a`
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, .75);
  font-size: 15px;
  font-weight: 700;
  line-height: 21px;
  min-width: 11.053rem;
  padding: .75rem .5rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
  opacity 0.15s ease-in-out;
  user-select: none;

  &:active {
    background: #dfdfdf;
    color: #1a3968;
    border-color: #1a3968;
  }

  @media (min-width: 480px) {
    font-size: 17px;
    padding: 1.132rem;

    &:hover {
      background: white;
      color: #1a3968;
    }

    &:active {
      background: #bbb;
    }
  }
`;

export const ArrowAnimation = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0;
  width: 30px;
  z-index: 12;
`;

export const ArrowLink = styled.a`
  align-self: flex-start;
`;
