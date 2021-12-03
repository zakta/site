import styled from "styled-components";

export const Container = styled.div`
  background: white;
  min-width: 320px;

  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 13;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`;

export const LogoContainer = styled.div`
  height: 35px;
  padding: 1rem;
`;
