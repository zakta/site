// 3rd parties
import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 3rem;
  position: relative;

  @media(min-width: 980px){
    padding: 0;
    justify-content: inherit;
    margin: auto 1.25rem;
    width: 90px;
  }
`;

export const Selector = styled.div`
  z-index: 19;
  color: ${({ isSticky }) => (isSticky ? '#1a3968' : 'white')};

  :after{
    content: '▾'
  }
`;

export const Dropdown = styled.div`
  background: white;
  position: absolute;
  top: 45px;
  padding: 0.5rem;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};

  @media(min-width: 980px){
    flex-direction: column;
    top: 31px;
    left: 35px;
    margin: 0;
  }
  a{
    text-decoration: none;
    color: black;
    padding: .5rem;

    @media(min-width: 980px){
      padding: .2rem 0;
  }
  }
`;
export const Language = styled(Link)`
  cursor: pointer;
`;
