import styled from 'styled-components';

export const Container= styled.div`
  padding: 0;
  width: 100%;
 /*
    @media (min-width: 768px){
      width: 97%;
  }
    @media (min-width: 900px){
      width: 95%;
  }
    @media (min-width: 980px){
      width: 99%;
  }
    @media (min-width: 1060px){
      width: 97%;
  }
    @media (min-width: 1250px){
      width: 95%;
  }
    @media (min-width: 1463px){
      width: 100%;
  }
    @media (min-width: 1600px){
      width: 99%;
  }
    @media (min-width: 1700px){
      width: 97%;
  }
    @media (min-width: 1900px){
      width: 96%;
  }*/
`
export const AboutDivision= styled.div`
    display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbd0d0;

  @media (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const AboutInfo= styled.article`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px){
    width: 50%;
  }

  h2{
    text-align: left;
    margin:0;
    padding: 0;
    font-size: 20px;
    color: #1a3968;
  }
  h3{
    font-size: 32px;
    width: 100%;
    margin-bottom: 1rem;
  }

  div{
    display: flex;
    flex-direction: column;

    h4{
      font-weight: 800;
      margin: 0;
    }
    p{
      font-weight: 300;
      margin: 0;
    }
  }
`
export const Owners= styled.div`
    width: 50%;
    padding: .5rem 0;
    height: 100px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px){
      align-items: flex-start;
    }
`
export const AboutCompany= styled.article`
  box-sizing: border-box;
  font-size: 15px;
  text-align: left;

  p{
    font-weight: 300;
    line-height: 26px;
  }

  @media (min-width: 768px){
      width: 50%;
      text-align: left;
      padding: 1rem;
    }
`
export const List= styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  list-style-type: none;

  li{
    box-sizing: border-box;
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 50%;

    @media (min-width: 768px){
      width: 25%;
    }
  }
  p{
    display: inline;
    font-size: 16px;
    padding: 1rem;
    min-width: 100px;
    font-weight: 700;


  }
`
export const Check= styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #1a3968;
  padding: 1rem 0;
  position: relative;
  top: 15px;
`
