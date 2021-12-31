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
  padding: 2rem 0 3rem;
  position: relative;
  width: 100%;

  h2 {
    padding-bottom: 1rem;
  }

  article {
    align-items: center;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1400px;
  padding: 1.25rem;

  @media (min-width: 980px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const ContactInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index:1;

  h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    margin: 0;
    margin-bottom: 1.5rem;
    max-width: 39.842rem;
    padding: 0;
    width: 100%;

    @media (min-width: 640px) {
      font-size: 32px;
      line-height: 44px;
      margin-bottom: 2rem;
    }
  }
`;

export const Icon = styled(CardIcon)`
  position: relative;

  &.contact-icon-email {
    right: 3px;
  }

  &.contact-icon-telephone {
    right: 5px;
  }
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
    padding-top: .75rem;
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
    width: 32.5%;
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
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  padding-top: 1.5rem;

  @media (min-width: 640px) {
    font-size: 32px;
    line-height: 44px;
    padding-top: 2rem;
  }
`;

export const FormDescription = styled.div`
  color: #6c6c6c;
  font-size: 15px;
  line-height: 28px;
  padding-bottom: 1rem;
  padding-top: 1rem;

  @media (min-width: 640px) {
    font-size: 19px;
    line-height: 34px;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
`;
