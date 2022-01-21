import styled from 'styled-components';

export const Container = styled.section`
  background: #fefefe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const About = styled.div`
  padding: 1.25rem;

  @media (min-width: 980px){
    padding: 2rem;
  }
  h1{
    color: #1a3968;
    font-weight: 800;
    font-size: 45px;
    margin: 1.5rem 0;
  }
  p{
    margin: 1.5rem 0;
    font-size: 16px;
    font-weight: 500;
  }


`;
export const Info = styled.div`
  border-top: 1px solid #b3b3b3;
  h3{
    color: #1a3968;
    font-size: 19px;

  }
`;

export const Block = styled.div`
  margin-top: 5rem;
`;
