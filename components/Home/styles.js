import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0 0 0;
  min-width: 300px;

  div {
    display: flex;
    justify-content: center;
    position: relative;

    .slick-dots{
      bottom: 5px;
    }
  }
`;

export const SliderBox = styled.div`
  width: 100%;
`;
export const SliderImage = styled.img`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
