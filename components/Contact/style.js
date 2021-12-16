import styled from "styled-components";
import { Card as CardComp, Icon as CardIcon} from "../Card/styles";

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
  padding: 1.5rem;
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

export const Card = styled(CardComp)`
  width: 90%;

  h3 {
    margin: 0;
    padding: 0.5rem;
  }

  p {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
  }

  @media(min-width: 768px){
    width: 48%;
  }
`;

export const Icon = styled(CardIcon)`
  font-size: 4rem;

  @media(min-width: 1100px){
    padding-top: 2rem;
  }
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
