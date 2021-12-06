import styled from "styled-components";
import { Card, Icon} from "../Card/styles";

export const Container = styled.section`
  background-image: url("18_img.6703f879.png");
  background-repeat: no-repeat;
  background-size: cover;

  article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 640px) {
      flex-direction: row;
    }
  }

  h2 {
    color: #1a3968;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    padding: 1rem 0;
    margin: 0;
  }
`;

export const CardContact = styled(Card)`
  border: 1px solid #efefef;
  padding: 2rem 1rem;
  margin: 1rem;
  width: 80%;

  @media (min-width: 640px) {
    width: 50%;
    display: inline-block;
  }

  h3 {
    margin: 0;
    padding: 0.5rem;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
  }
`;

export const IconContact = styled(Icon)`
  font-size: 3rem;
`;

export const ContactInfo = styled.div`
  padding: 1rem;
  width: 80%;
  text-align: left;
  margin: 0 auto;

  h4{
    margin: 1rem 0;
    font-size: 25px;
  }
  p{
    font-weight: 600;
  }
`
