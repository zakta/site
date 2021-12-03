import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem 2rem;
  background: white;

  h2 {
    font-size: 40px;
    color: #1a3968;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
  }
  h3 {
    font-size: 30px;
    font-weight: 800;
    text-align: left;
    margin: 0;
  }
`;
export const Text = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: 600;
`;
export const Picture = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }

  div {
    height: 200px;

    @media (max-width: 768px) {
      &:first-child {
        height: 150px;
      }
    }
    .blue-note {
      background: #1a3968;
      opacity: 0.9;
    }
    .gray-note {
      background: #f6f6f6;
      opacity: 0.9;
    }
    .black-note {
      background: #030303;
      opacity: 0.9;
    }

    @media (min-width: 768px) {
      padding: 0;
      margin: 0;
      height: 300px;
    }
    @media (min-width: 840px) {
      padding: 0;
      margin: 0;
      height: 300px;
    }
  }
`;
export const Notes = styled.div`
  margin: 0;

  h4 {
    color: white;
    font-size: 20px;
    padding: 0.3rem;
    margin: 0;
    text-transform: capitalize;
  }
  .title-notes {
    color: black;
    font-size: 20px;
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
    @media (min-width: 820px) {
      font-size: 30px;
    }
  }

  .text-grey {
    color: black;
  }

  p {
    color: white;
    font-size: 14px;
    padding: 0.4rem;

    &:nth-child(1) {
      font-size: 15px;
      font-weight: 700;
      margin: 0;
      padding-bottom: 0;
      text-transform: uppercase;
      color: #1a3968;
    }
  }
`;
export const Numbers = styled.div`
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
