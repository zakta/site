// 3rd parties
import styled from 'styled-components';

export const Container = styled.section`
  background: #f7f7f7;
  padding: 1.5rem;
  position: relative;
  padding-top: 2rem;

  h3 {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
  }
`;

export const Center = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1400px;

  @media (min-width: 870px) {
    padding: 0 2rem;
  }
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
  overflow: hidden;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const Notes = styled.div`
  box-sizing: border-box;
  padding: 2rem 1.25rem;

  @media (min-width: 640px) {
    padding: 2.5rem 1.5rem;
    width: 50%;
  }

  @media (min-width: 1200px) {
    margin: 0;
    padding: 4rem 2rem;
    width: 25%;
  }

  h4 {
    color: white;
    font-size: 21px;
    margin: 0;
  }

  .title-notes {
    color: black;
    font-size: 21px;
    margin: 0;
    font-weight: 800;
  }

  .text-grey {
    color: black;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding-top: 1rem;

    &:nth-child(1) {
      font-size: 15px;
      font-weight: 800;
      padding: 0 0 1rem;
      text-transform: uppercase;
      color: #1a3968;
    }
  }

  @media (min-width: 640px) {
    h4 {
      font-size: 23px;
    }

    .title-notes {
      font-size: 23px;
    }

    p {
      font-size: 18px;

      &:nth-child(1) {
        font-size: 16.5px;
      }
    }
  }

  @media (min-width: 1200px) {
    h4 {
      font-size: 25px;
    }

    .title-notes {
      font-size: 25px;
    }

    p {
      font-size: 20px;

      &:nth-child(1) {
        font-size: 18px;
      }
    }
  }

  :nth-child(2) {
    background: #1a3968;

    p {
      color: #cfd7e7;
    }
  }
  :nth-child(3) {
    background: #302b2b11;

    p {
      color: #6c6c6c;
    }
  }
  :nth-child(4) {
    background: #060606;

    p {
      color: #b4b4b4;
    }
  }
`;
