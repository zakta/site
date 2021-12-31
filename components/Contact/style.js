// 3rd parties
import styled from 'styled-components';

import { Card as CardComp, Icon as CardIcon } from '../Card/styles';

export const Container = styled.section`
  align-items: center;
  background-color: #f7f7f7;
  background-position: center bottom;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 320px;
  overflow: hidden;
  padding: 1.5rem ;
  padding-top: 4rem;
  position: relative;
  width: 100%;

  article {
    align-items: center;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    @media (min-width: 1060px) {
      justify-content: space-between;
    }
  }
`;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1000px;

  @media (min-width: 870px) {
    padding: 0 2rem;
  }

`;

export const ContactInfo = styled.div`
  min-height: 210px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 3rem;
  z-index:1;

  h3{
    font-size: 32px;
    font-weight: 700;
    line-height: 41.3885px;
    margin: 0;
    margin-bottom: 2rem;
    max-width: 39.842rem;
    padding: 0;
    width: 100%;
  }

`;

export const Icon = styled(CardIcon)`
  font-size: 4rem;
`;

export const Card = styled(CardComp)`
  border: none;
  cursor: pointer;
  width: 100%;

  a {
    text-decoration: none;
  }

  h4 {
    margin: 0;
  }

  p {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
  }

  ${Icon}, h4, p {
    color: white;
  }

  @media (min-width: 768px) {
    width: 49%;
    margin-right: 5px;
  }

  @media (min-width: 1060px) {
    width: 31.5%;
    margin-right: 0;
  }

  &.contact-card-email {
    background: #1a3968;

    &:active{
      background: #122746;
    }

    @media (min-width: 870px){
      &:hover {
        background: #122746;
      }
    }
  }

  &.contact-card-telephone {
    background: #33afad;

    &:active{
      background: #278987;
    }

    @media (min-width: 870px){
      &:hover {
        background: #278987;
      }
    }
  }

  &.contact-card-whatsapp {
    background: #52BF55;

    &:active{
      background: #2e7d31;
    }

    @media (min-width: 870px){
      &:hover {
        background: #2e7d31;
      }
    }
  }
`;

export const FormTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  line-height: 48px;
  padding-top: 6rem;
`;

export const FormDescription = styled.div`
  color: #6c6c6c;
  font-size: 19px;
  line-height: 34px;
  padding-bottom: 3.158rem;
  padding-top: 3.158rem;
`;
