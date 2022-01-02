// 3rd parties
import styled from 'styled-components';

export const List = styled.ul`
  background: #081220;
  box-sizing: border-box;
  flex-flow: column nowrap;
  display: flex;
  height: 100%;
  justify-content: space-around;
  margin: 0;
  min-height: 577px;
  padding-left: 0;
  padding-top: 91px;
  position: fixed;
  right: 0;
  text-align: center;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  width: 100%;
  z-index: ${({ open }) => (open ? '11' : '0')};

  &:nth-child(1){
    justify-content: flex-end;
  }

  @media (min-width: 980px) {
    background: none;
    flex-flow: initial;
    flex-wrap: nowrap;
    height: initial;
    margin: 0;
    min-height: initial;
    padding: 0;
    position: initial;
    right: initial;
    text-align: initial;
    transform: initial;
    transition: none;
    top: initial;
    width: initial;
    z-index: initial;

    &:nth-child(1){
      justify-content: flex-start;
    }
  }
`;

export const ListItem = styled.li`
  list-style-type: none;

  @media (min-width: 980px){
    padding: 0;
    display: flex;
  }

  button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 22px;
    padding: 1rem 1.5rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .2s ease;
    width: 100%;

    :active {
      background: #33afad;
    }

    @media (min-width: 980px){
      padding: 1.5rem 0;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      font-size: 20px;
      font-weight: 800;

      &::before {
        content: "";
        background-color: #33afad;
        height: 5px;
        left: 0px;
        position: absolute;
        transition: width .2s ease-in-out 0s;
        top: 12px;
        width: 0;
      }

      :hover {
        &::before {
          width: 100%;
        }
      }

      :active {
        background: initial;
      }

      &.menu-item-active {
        opacity: 1;

        &::before {
          content: "";
          background-color: #33afad;
          height: 5px;
          left: 0px;
          position: absolute;
          transition: width .2s ease-in-out 0s;
          top: 12px;
          width: 100%;
        }
      }
    }
  }
`;

export const MenuToggle = styled.div`
  @media (min-width: 980px) {
    display: none;
  }
`;

export const ItemInfo = styled.li`
  list-style-type: none;
  padding: 1.5rem;
  display: block;

  @media (min-width: 980px) {
    display: none;
  }
`;
