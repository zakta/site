import styled from "styled-components";

export const Card = styled.div`
  background: white;
  box-sizing: border-box;
  box-shadow: 0 5px 83px 0 rgb(6 6 6 / 12%);
  display: flex;
  position: relative;
  padding: 2.632rem;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem;
  transition: .3s all ease-in-out;
  width: 80%;

  :after{
    content: "";
    background: ${({ animate }) =>
      animate
        ? "#1a3968"
        : "white"};
    transform: scale(0);
    transition: .3s all ease-in-out;
    z-index:0;
    opacity:0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* :hover {
    svg {
      color: ${({ animate }) => (animate ? "white" : "rgba(51,175,173,1)")};
    }
    h3{
      color:${({ animate }) => (animate ? "white" : "black")}
    }
    p{
      color: ${({ animate }) => (animate ? "white" : "black")}
    }
  } */

  /* :hover::after{
    transform: scale(1);
    opacity: ${({ animate }) => (animate ? 1 : 0)};
  } */

  h3{
    color: #060606;
    z-index: 1;
    font-size: 27px;
    line-height: 40px;
    font-weight: 700;
    position: relative;
    margin-bottom: 1.06rem;
    margin-top: 1.579rem;

    @media (min-width: 768px){
      font-size: 18px;
    }
    @media (min-width: 800px){
      font-size: 20px;
    }
  }
  p{
    color: #6c6c6c;
    font-size: 19px;
    font-weight: 400;
    line-height: 34px;
    margin: 0;
    position: relative;
    z-index: 1;

    @media (min-width: 768px){
      font-size: 16px;
    }

    @media (min-width: 800px){
      font-size: 18px;
    }
  }

  @media (min-width: 768px){
    justify-content: center;
    width: 26%;
  }
  @media (min-width: 980px){
    justify-content: center;
    width: 28%;
  }
  @media (min-width: 1457px){
    width: 30%;
  }
`;
export const Icon = styled.div`
  z-index: 10;
  color: #1a3968;
  font-size: 4rem;
  position: relative;

  /* :hover {
    color: white;
  } */
`;
