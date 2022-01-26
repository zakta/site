import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f7f7f7;
  `;

export const About = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1400px;
  padding: 1.25rem;
  margin-bottom: 3rem;

  @media (min-width: 980px){
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 980px){
    padding: 0 2rem;
  }
  h1{
    color: #1a3968;
    font-weight: 800;
    font-size: 30px;
    margin: 0;
  }
  p{
    margin: .3rem 0;
    font-size: 16px;
    line-height: 2;
    font-weight: 400;
  }


`;
export const Info = styled.h3`
    margin-top: 2rem;
    color: #1a3968;
    font-size: 19px;
`;

export const Block = styled.div`
  background: white;
  padding: 1rem 1.25rem;
  margin: 1.25rem 0 0;

  @media (min-width: 980px) {
    padding: 1.25rem 1.5rem;
  }
`;
