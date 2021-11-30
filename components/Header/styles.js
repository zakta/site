import styled from 'styled-components'

export const Container = styled.div`
  min-width: 320px;
  background: white;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px){
    max-width: 1280px;
    margin: 0 auto;
  }
`

export const LogoContainer= styled.div`
  height: 35px;
  padding: 1rem;
`
