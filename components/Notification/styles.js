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
    display: ${({showPopUp}) => (showPopUp ? 'flex' : 'none')};
  }

`;
export const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({formStatus})=>(formStatus === 'success' ? '#33afad' : '#f6f6f6')};
  padding: 2rem;
  opacity: 0.98;

  div{
    display: flex;
    flex-direction: column;
  }

  h3{
    font-size: 20px;
    letter-spacing: .5px;
    font-weight: 800;
    text-align: center;
    color:  ${({formStatus})=>(formStatus === 'success' ? '#ffff' : '#b94f4f')};
    margin: 0;
    padding: .5rem;
  }
  p{
    font-size: 16px;
    color:  ${({formStatus})=>(formStatus === 'success' ? '#ffff' : '#b94f4f')};
    text-align: center;
  }
`;
export const BtnPopUp = styled.button`
  align-self: flex-end;
  background-color: #ffff;
  border: none;
  border: 1px solid ${({formStatus})=>(formStatus === 'success' ? '#33afad' : '#b94f4f')};
  color: ${({formStatus})=>(formStatus === 'success' ? '#33afad' : '#b94f4f')};
  font-size: 18px;
  font-weight: 700;
  padding: 1px;
  width: 24.8px;
  cursor: pointer;

  :hover{
    background: ${({formStatus})=>(formStatus === 'success' ? '#33afad' : '#b94f4f')};
    border: 1px solid white;
    color: white;
  }
`;
export const MailIcon = styled(FontAwesomeIcon)`
  color:  ${({formStatus})=>(formStatus === 'success' ? '#fff' : '#b94f4f')};
  font-size: ${({formStatus})=>(formStatus === 'success' ? '100px' : '65px')};
  align-self: center;

`;
