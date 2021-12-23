import styled from 'styled-components';

export const ContactLink = styled.a`
  color: white;
  display: inline-block;
  font-size: 14px;
  opacity: .75;
  margin: .5rem;
  position: relative;
  text-decoration: none;
  transition: opacity .15s ease;
  white-space: nowrap;

  &::before {
    content: "";
    background-color: #33afad;
    bottom: 0;
    height: 1px;
    left: 0px;
    position: absolute;
    transition: width .2s ease;
    width: 0;
  }

  &:active {
    opacity: 1;

    &::before {
      width: 100%;
    }
  }

  @media (min-width: 870px) {
    &:hover {
      opacity: 1;

      &::before {
        width: 100%;
      }
    }
  }
`;
