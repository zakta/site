// 3rd parties
import styled from 'styled-components';
// styles
import TitleSection from '../SectionTitle/styles';

export const Container = styled.section`
  background-color: #f7f7f7;
  max-width: 100%;
  min-width: 320px;
  margin: 0;
  margin-top: ${({ full }) => (full ? '1rem' : '100vh')};
  position: ${({ full }) => (full ? 'none' : 'relative')};
`;

export const Center = styled.div`
  margin: auto;
  max-width: 1400px;
`;

export const Cards = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  padding: ${({ full }) => (full ? '1.25rem 0' : '0 1.25rem')};
  position: relative;

  @media (min-width: 980px) {
    padding-left: ${({ full }) => (full ? '0' : '2rem')};
    padding-right: ${({ full }) => (full ? '0' : '2rem')};
    .last{
      margin-left: auto;
      margin-right: auto;
    }
  }

`;

export const TitleServices = styled(TitleSection)`
  padding: ${({ full }) => (full ? '0' : '1.5rem 1.25rem')};

  @media (min-width: 980px) {
    padding-left: ${({ full }) => (full ? '0' : '2rem')};
    padding-right: ${({ full }) => (full ? '0' : '2rem')};
  }
`;

export const AllServices = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1.25rem;

  @media (min-width: 980px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const AllServicesButton = styled.button`
  background-color: #1a3968;
  border: 1px solid #1a3968;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: .75rem;
  text-transform: uppercase;
  transition: all .15s ease;
  width: 100%;

  &:active{
    background-color: #122746;
    border: 1px solid #f7f7f7;
  }

  @media (min-width: 740px) {
    width: 48.6%;
  }

  @media (min-width: 980px) {
    &:hover {
      background-color: #26508f;
      border-color: #26508f;
    }

    &:active{
      background-color: #122746;
      border: 1px solid #f7f7f7;
    }
  }

  @media (min-width: 1200px) {
    width: 32%;
  }
`;
