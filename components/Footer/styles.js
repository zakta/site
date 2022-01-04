// 3rd parties
import styled from 'styled-components';
import ContactLink from '../ContactLink/styles';

export const Container = styled.footer`
  background-color: #182e4e;
  min-width: 320px;
  padding-bottom: ${({ cookiesModalHeight }) => cookiesModalHeight}px;
  position: relative;
  transition: all .15s ease;
`;

export const Box = styled.div`
  align-items: center;
  box-sizing: border-box;
  margin: auto;
  max-width: 1400px;
  justify-content: center;
  padding: 1rem 1.25rem 0;
  width: 100%;
  transition: all .15s ease;

  @media (min-width: 980px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;

    ${ContactLink} {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

`;

export const PositionLogo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 25px;
  width: 100%;
  transition: all .15s ease;

  @media (min-width: 640px) {
    display: flex;
    margin: 0;
  }

  @media (min-width: 980px) {
    width: 154.828px;
  }
`;

export const Contact = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin: .5rem 0;
  flex-wrap: wrap;
  transition: all .15s ease;

  @media (min-width: 980px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
    margin: 0;
  }
`;

export const Copyright = styled.p`
  background-color: #11223a;
  box-sizing: border-box;
  color: white;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  padding: 1rem 1.25rem;
  transition: all .15s ease;

  @media (min-width: 640px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 980px) {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;
