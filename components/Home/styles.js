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
  max-height: 600px;

  button:before {
    opacity: .75;
    color: #fff0f0;
  }
  .slick-active button:before {
    color: #fff0f0;
  }
`;
export const SliderImage = styled.img`
  width: 100%;
`;
