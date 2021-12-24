// 3rd parties
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  width: 92%;
  z-index: 14;
  position: fixed;
  bottom: 30%;

  @media (min-width: 768px){
    width: 60%;
  }
  &.showPopUp{
    display: none;
  }

`;
export const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  background: #33afad;
  padding: 2rem;
  opacity: 0.98;

  h3{
    font-size: 20px;
    letter-spacing: .5px;
    font-weight: 800;
    text-align: center;
    color: #ffff;
    margin: 0;
    padding: .5rem;
  }
  p{
    font-size: 16px;
    color: #ffff;
    text-align: center;
  }
`;
export const BtnPopUp = styled.button`
  align-self: flex-end;
  background-color: #ffff;
  border: none;
  border: 1px solid #33afad;
  color: #33afad;
  font-size: 18px;
  font-weight: 700;
  padding: 1px;
  width: 24.8px;
  cursor: pointer;

  :hover{
    background: #33afad;
    border: 1px solid white;
    color: white;
  }
`;
export const MailIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 100px;
  align-self: center;
`;
