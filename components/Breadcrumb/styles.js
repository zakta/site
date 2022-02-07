import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 5.5rem;
  margin-bottom: 1rem;

  @media (min-width: 980px){
    margin-top: 6.5rem;
  }
`;

export const LinkTo = styled.a`
  cursor: pointer;
  color: black;
  color: #1a3968;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  position: relative;


  ::before {
      content: "";
      background-color: #1a3968;
      bottom: 0;
      height: 1px;
      left: 0px;
      position: absolute;
      transition: width .2s ease;
      width: 0;
    }

    :active {
      opacity: 1;

      ::before {
        width: 100%;
      }
    }

    @media (min-width: 870px) {
      :hover {
        opacity: 1;

       ::before {
          width: 100%;
        }
      }
    }
  span{

  }
`;

export const Actual = styled.div`
  color: #1a3968;
  font-size: 14px;
  font-weight: 400;
  padding-top: 2px;
`;

export const Cover = styled.div`
  margin: 0;
  padding: 0;

  :after {
    content: '>';
    color: #33afad;
    padding: .5rem;
  }
`;
