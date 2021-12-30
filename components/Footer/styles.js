// 3rd parties
import styled from 'styled-components';

export const Container = styled.footer`
  background: #182e4e;
  min-width: 320px;
  position: relative;
`;

export const Box = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1400px;
  justify-content: center;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: 874px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const PositionLogo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 25px;
  margin-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;

  @media (min-width: 640px) {
    display: flex;
    margin: 0;
  }

  @media (min-width: 874px) {
    width: 154.828px;
  }
`;

export const Contact = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin: .5rem 0;
  flex-wrap: wrap;

  @media (min-width: 874px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
`;

export const Copyright = styled.p`
  background: #11223a;
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
