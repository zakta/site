import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;
  background: white;

  h2 {
    font-size: 40px;
    color: #1a3968;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 1rem;
  }
  h3 {
    font-size: 30px;
    font-weight: 800;
    text-align: left;
    margin: 0;
  }
`;

export const Flex = styled.div`
  @media (min-width: 1280px){
    display: flex;
    flex-direction: column;
    width: 50%;
   // margin-right: 1rem;
  }
`
export const Division = styled.div`
  @media (min-width: 1280px){
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }
`
export const Text = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: 600;

`;
export const Picture = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1280px){
    width: 50%;

}
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 720px) {
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const Notes= styled.div`
  padding-left: 1rem;

  :nth-child(2){
    background: #1a3968;
  }
  :nth-child(3){
    background: #f6f6f6;
  }
  :nth-child(4){
    background: black;
  }

  @media (max-width: 720px) {
    &:first-child {
      height: 150px;
    }
  }

  @media (min-width: 720px) {
    padding: 0;
    margin: 0;
    width: 50%;
  }
  @media (min-width: 1000px) {
    padding: 0;
    margin: 0;
    width: 25%;
  }
  h4 {
    color: white;
    font-size: 25px;
    padding: 1rem 1rem 0 1rem;
    margin: 0;
    text-transform: capitalize;

    @media (min-width: 1000px){
      text-align: center;
    }
  }
  .title-notes {
    color: black;
    font-size: 23px;
    margin: 0;
    font-weight: 800;
    text-transform: capitalize;

    @media (min-width: 472px) {
      font-size: 25px;
    }
    @media (min-width: 650px) {
      font-size: 26px;
    }

    @media (min-width: 768px) {
      padding-top: 1rem;
      font-size: 27px;
    }
  }

  .text-grey {
    color: black;
  }

  p {
    color: white;
    font-size: 20px;
    font-weight: 400;
    padding: 1rem;
    margin: 0;

    &:nth-child(1) {
      font-size: 18px;
      font-weight: 700;
      padding-bottom: 0;
      text-transform: uppercase;
      color: #1a3968;
    }

    @media (min-width: 1000px){
      text-align: center;
    }
  }

`

 /* export const Numbers = styled.div`
  display: none;
  font-size: 167px;
  margin: 0;
  opacity: 0.05;
  color: #fcfcfc;
  z-index: 1;
  transform: translate(51%, -125%);
  font-weight: 900;

  @media (min-width: 768px) {
    transform: translate(24px, -238px);
  }
`;
*/
