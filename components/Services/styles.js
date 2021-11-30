import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  background: white;
`
export const Card = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  display: flex;
  height: 300px;
  margin: 1rem;
  min-width: 300px;

  @media (min-width: 640px){
    min-width: 200px;
  }

  @media (min-width: 640px){
    width: 20%;
  }
`
