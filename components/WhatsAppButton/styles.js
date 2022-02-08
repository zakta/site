// 3rd parties
import styled from 'styled-components';
import { BsWhatsapp } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 12;
`;

export const ModalWhats = styled.div`
  align-items: center;
  background: #52BF55;
  border-color: #52BF55;
  box-sizing: border-box;
  display: flex;
  height: 80px;
  padding: .75rem 1rem;
  position: fixed;
  right: -202px;
  margin: auto;
  bottom: 10%;
  transition: all .5s ease-in-out;
  @media (min-width: 870px){
    :hover {
      background: #2e7d31;
      border-color: #2e7d31;
      right: 0;
    }
  }
`;

export const ButtonWhats = styled.a`
  color: white;
  text-decoration: none;
  p {
    font-size: 12px;
    line-height: 18px;
    font-weight: 300;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    strong {
      font-size: 24px;
      font-weight: 800;
      line-height: 30px;
    }
  }
`;
export const IWhatsapp = styled(BsWhatsapp)`
  color: white;
  font-size: 40px;
  padding-right: .75rem;
  position: relative;
  top: 3px;
`;
