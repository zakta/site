import styled from "styled-components";
import { Icon } from "../Card/styles";

export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  transition: all .3s ease;
  width: 50px;

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
  padding: 1rem;

`
export const IconArrow = styled(Icon)`
  font-size: 20px;
  color: #ffff;
`
