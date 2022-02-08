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

  @media (min-width: 980px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 980px) {
    padding: 0 2rem;
  }

  h1 {
    color: #1a3968;
    font-weight: 800;
    font-size: 30px;
    margin: 0;
  }

  p {
    font-size: 16px;
    line-height: 2;
    font-weight: 300;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Info = styled.h3`
  margin: 0;
  color: #1a3968;
  font-size: 19px;

  @media (min-width: 500px){
    margin-top: 2rem;
  }
`;

export const Block = styled.div`
  background: white;
  padding: 1rem 1.25rem;
  margin: 1.25rem 0 0;

  @media (min-width: 980px) {
    padding: 1.25rem 1.5rem;
  }
`;

export const ButtonToDown = styled.button`
  align-self: end;
  animation-duration: 20s;
  background-color: #1a3968;
  border: 1px solid #1a3968;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  padding: 1rem;
  position: relative;
  margin: 1.25rem 0;
  text-transform: uppercase;
  transition: all .15s ease;
  user-select: none;
  width: 100%;

  :active{
    background-color: #122746;
    border: 1px solid #f7f7f7;
  }

  @media (min-width: 640px) {
    padding: 1.25rem;
    font-size: 16px;
    width: 257px;

    :active{
      background-color: #122746;
      border: 1px solid #f7f7f7;
    }
  }

  @media (min-width: 870px) {
    :hover {
      background-color:  #26508f;
      border-color: #26508f;
    }

    :active{
      background-color: #122746;
      border: 1px solid #f7f7f7;
    }
  }
`;

export const ImageContainer = styled.div`
  display: ${({ none }) => (none ? 'none' : 'block')};

  &.container-parallax{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .parallax{
    position: sticky;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 420px){
    &.container-parallax{
      height: 300px;
    }
  }
`;
