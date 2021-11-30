import styled from "styled-components";

export const Container = styled.footer`
  background: #203c66;
  display: flex;
  min-width: 320px;
  @media(min-width: 640px){
  }
`;

export const Box = styled.div`
  width: 100%;

  @media(min-width: 640px){
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const PositionLogo = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding-top: 1rem;

  @media (min-width: 640px) {
    display: flex;
    padding: 1rem;
    margin: 0;

  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-around;

  @media(min-width:640px){
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 1rem;
  }

  @media(min-width:992px){
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 1rem;
  }
`;

export const Info = styled.a`
  color: white;
  font-size: 15px;
  text-decoration: underline;
  flex-wrap: wrap;

    @media (min-width: 640px) {
      display: flex;
      height: 20px;
      padding-left: 1rem;
      padding-top: 1rem;
    }

    @media (min-width: 992px) {
      display: flex;
      height: 20px;
      padding-left: 1rem;
      padding-top: 1rem;
    }
`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0;
  padding-top: 1rem;
  margin: 0;

  @media (min-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: row;

  }

  @media (min-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: row;

  }
`;

export const NavList = styled.li`
  color: white;
  font-size: 1.2rem;
  font-weight: 800;
  list-style-type: none;
  text-transform: uppercase;
  text-align: center;
  padding: 1.3rem 0;
  background: #1f3961;
  border-bottom: 2px solid #203c66;

  @media (min-width: 640px) {
    display: flex;
    width: 20%;
    border: none;
    background: #1f3961;
    border-right: 2px solid #203c66;
    padding: .5rem 2rem;
    justify-content: center;

  }
`;

export const Copyright = styled.p`
  background: #182e4e;
  color:white;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  padding: 1rem;

  @media(min-width: 640px){
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media(min-width: 992px){
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;
