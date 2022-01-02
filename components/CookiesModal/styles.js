// 3rd parties
import styled from 'styled-components';

export const Container = styled.div`
  background: #2a2a2a;
  border-top: 1px solid #4a4a4a;
  bottom: 0;
  box-sizing: border-box;
  color: #c3c1c1;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  font-size: 15px;
  justify-content: center;
  padding: .75rem 1.5rem;
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
    color: white;
    font-weight: 600;
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
    line-height: 20px;
    margin: 0;
  }

  button {
    align-self: end;
    background: #33afad;
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

    :active {
      background: #278987;
      border-color: #278987;
    }

    @media (min-width: 480px) {
      max-width: 257px;
    }

    @media (min-width: 870px){
      :hover {
        background: #278987;
        border-color: #278987;
      }
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
