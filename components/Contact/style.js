// 3rd parties
import styled from 'styled-components';

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
  padding: 0 0 8rem;
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
  padding-bottom: 0;

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

export const Icon = styled.div`
  font-size: 3rem;
  line-height: .7;
  position: relative;

  &.contact-icon-email {
    right: 3px;
  }

  &.contact-icon-telephone {
    right: 5px;
  }
`;

export const Card = styled.div`
  border: 3px solid;
  cursor: pointer;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 1.5rem;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  transition: .3s all ease-in-out;
  position: relative;
  padding: 1.25rem;

  &.card-last-center {
    @media (min-width: 640px) {
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 1200px) {
      margin-left: initial;
      margin-right: initial;
    }
  }

  h3 {
    color: #060606;
    z-index: 1;
    font-weight: 700;
    position: relative;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: .75rem;
    margin-top: 1.25rem;
  }

  p {
    color: #6c6c6c;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 740px) {
    padding: 1.5rem;
    width: 48.6%;

    h3 {
      font-size: 24.5px;
      line-height: 35px;
      margin-bottom: 1.06rem;
      margin-top: 1.579rem;
    }

    p {
      font-size: 17.5px;
      line-height: 31px;
    }
  }

  @media (min-width: 1200px){
    padding: 2rem;
    width: 32%;

    h3 {
      font-size: 27px;
      line-height: 40px;
      margin-bottom: 1.06rem;
      margin-top: 1.579rem;
    }

    p {
      font-size: 19px;
      line-height: 34px;
    }
  }

  a {
    text-decoration: none;
  }

  h4 {
    margin: 0;
    padding-top: .75rem;
    user-select: none;
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
    background-color: #1a3968;
    border-color: #1a3968;

    &:active {
      background-color: #122746;
      border-color: #f7f7f7;
    }

    @media (min-width: 870px){
      &:hover {
        background-color: #26508f;
        border-color: #26508f;
      }

      &:active {
        background-color: #122746;
        border-color: #f7f7f7;
      }
    }
  }

  &.contact-card-telephone {
    background-color: #33afad;
    border-color: #33afad;

    &:active{
      background-color: #278987;
      border-color: #f7f7f7;
    }

    @media (min-width: 870px){
      &:hover {
        background-color: #3ec9c7;
        border-color: #3ec9c7;
      }

      &:active {
        background-color: #278987;
        border-color: #f7f7f7;
      }
    }
  }

  &.contact-card-whatsapp {
    background-color: #52BF55;
    border-color: #52BF55;

    &:active {
      background-color: #2e7d31;
      border-color: #f7f7f7;
    }

    @media (min-width: 870px){
      &:hover {
        background-color: #5dd560;
        border-color: #5dd560;
      }

      &:active {
        background-color: #2e7d31;
        border-color: #f7f7f7;
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
  font-weight: 300;
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
