import styled from "styled-components";

export const Container = styled.section`
  padding: 1.5rem;
  background: white;

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

export const Flex = styled.div`
  @media (min-width: 1280px) {
    box-shadow: 4px 2px 20px 4px rgb(6 6 6 / 12%);
    padding: 1rem;
    margin-right: .1rem;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`;
export const Division = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 1280px) {
    padding-right: 1rem;
  }
`;

export const Picture = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1280px) {
    width: 50%;
    box-shadow: 0 5px 83px 0 rgb(6 6 6 / 12%);
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

export const Notes = styled.div`
  padding-left: 1rem;

  :nth-child(2) {
    background: #1a3968;
  }
  :nth-child(3) {
    background: #f6f6f6;
  }
  :nth-child(4) {
    background: black;
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
