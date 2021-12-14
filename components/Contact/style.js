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
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;

  article {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 0;

    @media (min-width: 1100px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const CardContact = styled(Card)`
  border: 1px solid #efefef;
  width: 100%;
  box-shadow: none;
  align-items: center;

  @media (min-width: 1100px) {
    display: flex;
    padding: 0;
    min-width: 250px;
    margin: 0;
    width: 49%;
  }
  h3 {
    margin: 0;
    padding: 0.5rem;
  }

  p {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

export const IconContact = styled(Icon)`
  font-size: 3rem;

  @media(min-width: 1100px){
    padding-top: 2rem;
  }
`;

export const ContactInfo = styled.div`
  box-sizing: border-box;
  margin: 0;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px){
    width: 60%;
    margin: 0;
  }

`
export const ContactUs= styled.div`

  margin: 2rem 0;

    h4{
        margin: 0;
        margin-bottom: 2rem;
        font-size: 25px;
      }
    p{
      margin: 0;
      font-weight: 600;
      font-size: 20px;
    }
`
