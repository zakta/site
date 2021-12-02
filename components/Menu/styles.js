import styled from 'styled-components'

export const Container = styled.div`

`
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  float: right;
  margin-bottom: 0;
  margin-left: 0;
  padding-left: 0;

  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    flex-flow: column nowrap;
    background: linear-gradient(270deg, rgba(26,57,104,1) 0%, rgba(51,175,173,1) 100%);
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    z-index: ${({open}) => (open ? '11' : '0' )};

    &:nth-child(1){
     padding-top: 2rem;
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
  padding: 2rem 0;

  @media (min-width: 768px){
    list-style-type: none;
    padding-right: 10px;
    background-color: inherit;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 800;
    padding: 0 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;

    :hover{
      color: #1a3968;
    }

    @media (min-width: 768px){
      color: #1a3968;

      :hover{
      color: #33afad;

    }
  }
`;
export const MenuToggle = styled.div`
  padding: 0.8rem 1.2rem;
  margin-right: 0.4rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
