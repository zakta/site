import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: white;
  border-bottom: solid 1px #efefef;
  display: flex;
  height: 80px;
  justify-content: space-between;
  min-width: 320px;

  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 13;
  }
`;

export const LogoContainer = styled.div`
  height: 35px;
  padding: 1rem 1.5rem;
`;
