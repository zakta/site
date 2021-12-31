import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  width: 100%;
`;

export const AboutDivision = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #efefef;
  padding-bottom: 1.5rem;

  @media (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const AboutInfo = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px){
    width: 50%;
  }

  h3{
    font-size: 32px;
    width: 100%;
  }

  div{
    display: flex;
    flex-direction: column;

    h4{
      font-weight: 800;
      margin: 0;
    }
    p{
      font-weight: 300;
      margin: 0;
    }
  }
`;

export const Owners = styled.div`
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;

  @media (min-width: 768px){
    padding: 0;
  }
`;

export const AboutCompany = styled.article`
  box-sizing: border-box;
  font-size: 15px;
  text-align: left;

  p {
    padding: 1rem 0;
    margin: 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    font-weight: 300;
    line-height: 26px;
  }

  @media (min-width: 768px){
    width: 50%;
    text-align: left;
    padding: 1rem;
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style-type: none;

  li{
    box-sizing: border-box;
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 50%;

    @media (min-width: 768px){
      width: 25%;
    }
  }

  p{
    display: inline;
    font-size: 16px;
    min-width: 100px;
    font-weight: 700;
    padding: 1rem;
  }
`;

export const Check = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #1a3968;
  padding: 1rem 0;
  position: relative;
  top: 15px;
`;
