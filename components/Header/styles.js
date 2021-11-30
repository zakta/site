import styled from "styled-components";

export const Container = styled.div`
  background: white;
  min-width: 320px;
  `;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export const LogoContainer = styled.div`
  height: 35px;
  padding: 1rem;
`;
