import styled from 'styled-components'

export const Container = styled.div`
  padding-right: 1.5rem;
`
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin:0;
  padding: 0;

  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    flex-flow: column nowrap;
    background: #1a3968;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    z-index: ${({open}) => (open ? '11' : '0' )};

    &:nth-child(1){
     justify-content: flex-end;
    }
  }
`;
export const ListItem = styled.li`
  list-style-type: none;
  padding-right: 10px;
  background-color: inherit;
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  padding: 2.5rem;
  color: white;

  @media (min-width: 768px){
    padding: 0;
    display: flex;
    font-size: 16px;
    font-weight: 800;
  }
  @media (min-width: 800px){
    padding: 0;
    display: flex;
    font-size: 18px;
    font-weight: 800;
  }
  @media (min-width: 940px){
    padding: 0;
    display: flex;
    font-size: 20px;
    font-weight: 800;
  }
`;

export const LinkMenu= styled.p`
    color: ${({ isSticky }) => (isSticky ? "#1a3968" : "white")};
    position: relative;
    text-decoration: none;
    transition: all .2s ease;

    :active{
      color: #33afad;
    }

    @media (min-width: 768px){
      opacity: ${({isSticky}) => (isSticky ? '1' : '.75')};
      padding: 1rem 0;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    @media (min-width: 880px){
      padding: 1.5rem 0;
      margin-left: 1.5rem;
      margin-right: 1.5rem;

      &::before {
        content: "";
        background-color: #33afad;
        height: 7px;
        left: 0px;
        position: absolute;
        transition: width .2s ease-in-out 0s;
        top: 10px;
        width: 0;
      }

      :hover {
        &::before {
          width: 100%;
        }
      }

      :hover{
        opacity: 1;
      }
    }
`

export const MenuToggle = styled.div`
  padding-right: .6rem;
  margin-right: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
