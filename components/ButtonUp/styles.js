import styled from "styled-components";
import { Icon } from "../Card/styles";

export const Container = styled.section`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  height: 80px;
  `
export const ScrollTop= styled.div`
  display: flex;
  transition: all .3s ease;
  margin-right: 1.5rem;

  &:hover {
    .buttonUp{
      background: white;
    }
    .arrowUp{
      color: #1a3968;
    }
  }
`
export const ButtonArrow = styled.button`
  background-color: #1a3968;
  border: 1px solid #1a3968;
  padding: 21px;
  height: 61.5px;
  cursor: pointer;


`
export const IconArrow = styled(Icon)`
  font-size: 20px;
  color: #ffff;
`
