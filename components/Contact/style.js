import styled from "styled-components";
import { Card, Icon} from "../Card/styles";

export const Container = styled.section`
  background-image: url("18_img.6703f879.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }
  }

  h2 {
    color: #1a3968;
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    line-height: 50px;
    padding: 1.5rem 0;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
  }
`;

export const CardContact = styled(Card)`
  border: 1px solid #efefef;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
  box-shadow: none;

  @media (min-width: 768px) {
    display: flex;
    padding: 0;
    margin: .5rem;
    width: 28%;
  }
  h3 {
    margin: 0;
    padding: 0.5rem;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

export const IconContact = styled(Icon)`
  font-size: 3rem;
`;

export const ContactInfo = styled.div`
  box-sizing: border-box;
  margin: 0;
  text-align: left;
  padding: 1.5rem;
  width: 100%;

  @media (min-width: 768px){
    width: 60%;
    margin: 0;
  }

  h4{
    margin: 1rem 0;
    font-size: 25px;
  }
  p{
    font-weight: 600;
    font-size: 20px;
  }
`
