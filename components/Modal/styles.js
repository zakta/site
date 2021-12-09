import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  z-index: 13;
  position: fixed;
  bottom: 0;
  width: 100%;

  &.toggle{
    display: none;
  }
`
export const CookieNotice = styled.div`
  background:#1a3968;
  opacity: .97;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  box-sizing: border-box;

  div{
   padding: 1rem 2rem;

   a{
      color: white;
      text-decoration: none;
      font-weight: 700;

      :hover{
        text-decoration: underline;
      }
    }
  }
  p{
    margin: 0;
    text-align: center;
    font-size: 16px;
    color: white;


  }
  button{
    width: 200px;
    padding: .4rem;
    font-size: 17px;
    background: #33afad;
    color: white;
    font-weight: 600;
    border: 1px solid #33afad;

    :hover{
      background: white;
      color: #33afad;
    }

  }
  @media (min-width:768px){
    width: 96%;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    padding-right: 2rem;

    div{
      padding: 1rem;
    }
    p{
       font-size: 17px;
       text-align: center;
     }
    button{
      font-size: 19px;
      width: 350px;
    }
  }
  @media (min-width:790px){
    div{
      padding: 1rem;
    }
    p{
       font-size: 17px;
     }
    button{
      font-size: 20px;
      width: 300px;
      padding: .5rem;
    }
  }
  @media (min-width:1200px){
    div{
      padding: 1rem;
    }
    p{
       font-size: 19px;
     }
    button{
      font-size: 20px;
      width: 300px;
      padding: 1rem;
    }
  }

`
