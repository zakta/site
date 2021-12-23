import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  box-sizing: border-box;
  box-shadow: 0 5px 40px 0 rgb(6 6 6 / 8%);
  display: flex;
  margin-bottom: 1.4rem;
  position: relative;
  padding: 2.632rem;
  flex-direction: column;
  justify-content: center;
  transition: .3s all ease-in-out;
  width: 90%;

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
    width: 45%;
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
