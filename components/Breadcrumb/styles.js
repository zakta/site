import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 7rem;
`;

export const LinkTo = styled.a`
  cursor: pointer;
  color: black;
  color: #1a3968;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  padding-right: .5rem;

  :after {
    content: '>';
    color: #33afad;
    padding: .5rem;
  }

`;

export const Actual = styled.div`
  color: #1a3968;
  font-weight: 400;
`;
