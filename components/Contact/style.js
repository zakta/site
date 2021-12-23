import styled from 'styled-components';
import { Card as CardComp, Icon as CardIcon } from '../Card/styles';

export const Container = styled.section`
  align-items: center;
  background-color: white;
  background-image: url("18_img.6703f879.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 320px;
  overflow: hidden;
  padding: 1.5rem ;
  padding-top: 4rem;
  position: relative;
  width: 100%;

  article {
    align-items: center;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (min-width: 1100px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1000px;

  @media (min-width: 870px) {
    padding: 0 2rem;
  }

`;

export const ContactInfo = styled.div`
    min-height: 210px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3rem;
    z-index:1;

  h1{
    position: absolute;
    z-index: -1;
    font-size: 320px;
    font-weight: 800;
    opacity: .5;
    color: #f3f3f3;
    top: -370px;
    right: -189px;
  }


  h3{
    font-size: 32px;
    font-weight: 700;
    line-height: 41.3885px;
    margin: 0;
    margin-bottom: 2rem;
    max-width: 39.842rem;
    padding: 0;
    width: 100%;
  }

`;
export const TitleContact = styled.h2`
  margin-top: 2rem;
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #1a3968;
`;
export const Card = styled(CardComp)`
  width: 90%;

  h4 {
    margin: 0;
  }

  p {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
  }

  @media (min-width: 768px){
    width: 48%;
  }
`;

export const Icon = styled(CardIcon)`
  font-size: 4rem;
`;

export const FormTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  line-height: 48px;
  padding-top: 6rem;
`;

export const FormDescription = styled.div`
  color: #6c6c6c;
  font-size: 19px;
  line-height: 34px;
  padding-bottom: 3.158rem;
  padding-top: 3.158rem;
`;
