import styled from 'styled-components'

export const Container = styled.div`

`
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  float: right;

  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    flex-flow: column nowrap;
    background: linear-gradient(270deg, rgba(26,57,104,1) 0%, rgba(51,175,173,1) 100%);
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: end;
    padding: 0 2rem ;
    margin-top: 0;

    &:nth-child(1){
     padding-top: 7rem;
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
  color: white;
  padding: 1rem 0 1rem 0;


  @media (min-width: 768px){
    list-style-type: none;
    padding-right: 10px;
    background-color: inherit;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 800;
    padding: 0 1rem 0 1rem;
    color: #1a3968;
  }
`;
export const MenuToggle = styled.div`
  padding: 1.2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
