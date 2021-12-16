import styled from "styled-components";

export const Container = styled.section`
  padding: 1.5rem;
  background: #f6f6f6;

  h3 {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
  }
`;

export const Center = styled.div`
  margin: auto;
  max-width: 1700px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const Picture = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Box = styled.div`
  background: #fff;
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

export const Notes = styled.div`
  padding-left: 1rem;
  position: relative;

  :nth-child(2) {
    background: #1a3968;
  }
  :nth-child(3) {
    background: #f8f8f8;
  }
  :nth-child(4) {
    background: #060606;
  }

  @media (max-width: 720px) {
    &:first-child {
      padding-bottom: 1rem;
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
    padding: 2rem 2rem 0 2rem;
    margin: 0;
    text-transform: capitalize;

    @media (min-width: 1000px) {
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
    padding: 2rem;
    margin: 0;

    &:nth-child(1) {
      font-size: 18px;
      font-weight: 700;
      padding-bottom: 0;
      text-transform: uppercase;
      color: #1a3968;
    }

    @media (min-width: 1000px) {
      text-align: center;
    }
  }
`;

 export const Numbers = styled.div`
  font-size: 15.789rem;
  margin: 0;
  opacity: 0.04;
  color: #fbfbfb;
  z-index: 1;
  position: absolute;
  position: absolute;
  top: -2.632rem;
  right: -1.632rem;
  font-weight: 700;

  @media (min-width: 627px) {
    top: -5.632rem;
    right: -1.632rem;
  }
  @media (min-width: 720px) {
    right: -1.632rem;
  }
  @media (min-width: 768px) {
    top: -2.632rem;
    right: -1.105rem;
  }
  @media (min-width: 1000px) {
    top: -4.632rem;
    font-size: 215px
  }
`
