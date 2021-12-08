import styled from "styled-components";

export const Container = styled.section`
  min-width: 300px;
`;

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: url('../workspace.jpg') center -100px no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
`;

export const CoverMask = styled.div`
  background-color: #060606;
  position: absolute;
  opacity: .5;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const PageTitle = styled.div`
  color: white;
  position: relative;
  margin: 12% auto 8%;
  width: 1580px;

  h1 {
    font-size: 76px;
    font-weight: 700;
    line-height: 93px;
    margin: 0;
    text-shadow: 0 0 4px rgba(0,0,0,0.5);
  }

  p {
    font-size: 19px;
    line-height: 34px;
    margin: 0;
    max-width: 750px;
    padding-top: 3.158rem;
    text-shadow: 0 0 4px rgba(0,0,0,0.5);
  }
`;

export const ButtonLink = styled.a`
  color: white;
  display: inline-block;
  border: 1px solid white;
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  margin-top: 3.158rem;
  min-width: 11.053rem;
  padding: 1.132rem;
  text-align: center;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,opacity .15s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #1a3968;
  }
`;
