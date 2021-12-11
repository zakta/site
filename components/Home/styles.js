import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const HomeMain = styled.div`
  min-width: 300px;
  max-height: 100%;
`;

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: url('../workspace.jpg') center -100px no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
`;

export const CoverMask = styled.div`
  background-color: #060606;
  position: absolute;
  opacity: .5;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const PageTitle = styled.div`
  color: white;
  position: relative;
  margin: 3.5rem;
  padding-top: 8rem;
  width: 85%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child{
    align-items: flex-start;
  }


  h1 {
    font-size: 35px;
    font-weight: 900;
    line-height: 60px;
    margin: 0;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    margin: 0;
    max-width: 350px;
    padding-top: 1rem;
    text-shadow: 0 0 4px rgba(0,0,0,0.5);
  }

  @media (min-width: 500px){

    h1{
      font-size: 40px;
    }
    p{
      font-size: 18px;
      max-width: 400px;
    }
  }

  @media (min-width: 768px){

    h1{
      font-size: 45px;
    }
    p{
      font-size: 20px;
      max-width: 400px;
    }
  }

  @media (min-width: 940px){
    margin: 3.5rem;

    h1{
      font-size: 60px;
      font-weight: 700;
    }
    p{
      font-size: 20px;
      max-width: 600px;
    }
  }

  @media (min-width: 1700px){
    color: white;
    position: relative;
    margin: 12% auto 8%;
    width: 1580px;

    h1 {
      font-size: 76px;
      line-height: 93px;
      margin: 0;
    }

    p {
      font-size: 19px;
      line-height: 34px;
      margin: 0;
      max-width: 750px;
      padding-top: 3.158rem;
    }
  }
`;

export const ButtonLink = styled.a`
  color: white;
  display: inline-block;
  border: 1px solid white;
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  margin-top: 3.158rem;
  min-width: 11.053rem;
  padding: 1.132rem;
  text-align: center;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,opacity .15s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #1a3968;
  }
`;

export const ArrowAnimation= styled.div`
  display: flex;
  display: none;
  box-sizing: border-box;
  width: 30px;
  margin: .5rem;
  z-index: 12;
`;

export const ArrowLink= styled.a`
  align-self: flex-start;
`;

const bounce = keyframes`
  0%{
    top:0;
  }
  50%{
    top: -30px;
  }
  70%{
    top: -15px;
  }
  100%{
    top: 0;
  }
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 50px;
  align-self: flex-start;
  position: relative;
  animation: ${bounce} 1s linear infinite;
`;
