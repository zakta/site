import styled from "styled-components";

export const Container = styled.footer`
  background: #203c66;
  min-width: 320px;
  position: relative;
`;

export const Box = styled.div`
  margin: auto;
  max-width: 1700px;
  width: 100%;

  @media (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const PositionLogo = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  cursor: pointer;

  @media (min-width: 640px) {
    display: flex;
    padding: 1rem;
    margin: 0;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 1rem;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 1rem;
  }
`;

export const Info = styled.a`
  color: white;
  font-size: 15px;
  text-decoration: underline;
  flex-wrap: wrap;
  padding: .5rem;

  @media (min-width: 640px) {
    display: flex;
    height: 20px;
    padding-left: 1rem;
    padding-top: 1rem;
  }

  @media (min-width: 992px) {
    display: flex;
    height: 20px;
    padding-left: 1rem;
    padding-top: 1rem;
  }
`;

export const Copyright = styled.p`
  background: #182e4e;
  color: white;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  padding: .82rem 0;

  @media (min-width: 640px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 992px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;
