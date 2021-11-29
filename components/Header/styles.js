import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  margin: 2rem 2rem;
`
export const StyledNav= styled.div`
  width: 100%;
  height: 150px;
  
`
export const List= styled.ul `
  display: flex;
  flex-wrap: wrap;
  float: right;
  margin: 20px 0;
  padding: 0 25px;

  @media (max-width: 600px){
    display: ${({open})=> open ? 'flex' : 'none'};
    flex-flow: column nowrap;
    background-color: red;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    padding-top: 3.5rem;
    margin-top: 0;
  }
`
export const ListItem= styled.li `
  list-style-type: none;
  padding-right: 10px;
  background-color: inherit;
  text-transform: uppercase;
  font-weight: bold;
`
export const MenuToggle= styled.div`
  @media (min-width: 600px){
    display: none;
  }
`
