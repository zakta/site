// 3rd parties
import styled from 'styled-components';

export const Container = styled.div`
  background: #f7f7f7;
  border-top: 1px solid #efefef;
  bottom: 0;
  box-sizing: border-box;
  color: #4d4d4d;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  font-size: 15px;
  justify-content: center;
  padding: 1rem 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 13;

  &.toggle {
    display: none;
  }
`;

export const CookieNotice = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1400px;

  a {
    color: #1a3968;
    font-weight: 600;
    position: relative;
    text-decoration: none;

    &::before {
      content: "";
      bottom: 0px;
      background-color: #1a3968;
      height: 1px;
      left: 0px;
      position: absolute;
      transition: width .2s ease-in-out 0s;
      width: 0px;
    }

    :hover {
      &::before {
        width: 100%;
      }
    }
  }

  p {
    line-height: 20px;
    margin: 0;
  }

  button {
    align-self: center;
    background: #1a3968;
    border: 1px solid #1a3968;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 600;
    line-height: 30px;
    margin-top: 1.5rem;
    max-width: 100%;
    padding: 10px 45px;
    transition: all .3s ease;
    width: 100%;

    @media (min-width: 480px) {
      max-width: 257px;
    }

    :hover {
      opacity: .75;
    }

  }

  @media (min-width: 870px) {
    padding: 0 2rem;
    flex-direction: row;
    justify-content: space-between;

    button {
      margin-left: 1.5rem;
      margin-top: 0;
    }
  }
`;
