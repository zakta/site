// 3rd parties
import styled from 'styled-components';
// styles
import TitleSection from '../SectionTitle/styles';

export const Container = styled.section`
  background-color: #f7f7f7;
  max-width: 100%;
  min-width: 320px;
  margin: 0;
  margin-top: ${({ pageOffers }) => (pageOffers ? '2rem' : '100vh')};
  position: ${({ pageOffers }) => (pageOffers ? 'none' : 'relative')};
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
  padding: 0 1.25rem;
  position: relative;

  @media (min-width: 980px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .last{
    align-self: center;
  }
`;

export const TitleServices = styled(TitleSection)`
  padding: 1.5rem 1.25rem;

  @media (min-width: 980px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
