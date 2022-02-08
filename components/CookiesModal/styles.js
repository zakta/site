// 3rd parties
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2a2a2a;
  bottom: 0;
  box-sizing: border-box;
  color: #c3c1c1;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  font-size: 15px;
  justify-content: center;
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
  padding: 1.25rem;

  a {
    color: white;
    font-weight: 500;
    position: relative;
    text-decoration: none;

    &::before {
      content: "";
      bottom: 0px;
      background-color: white;
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
    font-size: 14px;
    font-weight: 300;
    margin: 0;
  }

  button {
    align-self: end;
    background-color: #33afad;
    border: 1px solid #33afad;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 30px;
    margin-top: 1.5rem;
    max-width: 100%;
    padding: 6px 45px;
    transition: all .3s ease;
    width: 100%;
    user-select: none;

    :active {
      background-color: #278987;
      border-color: #2a2a2a;
    }

    @media (min-width: 480px) {
      max-width: 257px;
    }

    @media (min-width: 870px){
      :hover {
        background-color: #3ec9c7;
        border-color: #3ec9c7;
      }
    }

  }

  @media (min-width: 980px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;

    button {
      align-self: center;
      margin-left: 1.5rem;
      margin-top: 0;
    }
  }
`;
