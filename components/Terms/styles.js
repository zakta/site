// 3rd parties
import { IoClose } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const slide = keyframes`
  from{
    transform: translate3d(0,100%,0);
  }

  to{
    transform: translate3d(0,0,0);
  }
`;

export const Container = styled.section`
  animation: ${slide} .5s ease-in-out both;
  background-color: #f7f7f7;
  box-sizing: border-box;
  height: 100%;
  min-height: 320px;
  min-width: 320px;
  padding: 1.25rem;
  position: fixed;
  top: 0;
  transition: all .15s ease;
  z-index: 14;
  width: 100%;

  @media (min-width: 480px) {
    padding: 1.50rem;
  }
  @media (min-width: 640px) {
    padding: 1.75rem;
  }
  @media (min-width: 870px) {
    padding: 2rem;
  }

  .modalTerms {
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 186px;
    overflow-y: auto;
    padding: 0 1.25rem;

    @media (min-width: 480px) {
      padding: 0 1.5rem;
    }

    @media (min-width: 640px) {
      padding: 0 1.75rem;
    }

    @media (min-width: 870px) {
      padding: 0 2rem;
    }
  }

  h1 {
    align-self: flex-start;
    border-top: 5px solid #33afad;
    color: #1a3968;
    display: flex;
    font-size: 20px;
    font-weight: 800;
    line-height: 22px;
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
    padding-top: 5px;
    text-transform: uppercase;
    white-space: nowrap;

    @media (min-width: 640px) {
      margin-bottom: 1.25rem;
    }
    @media (min-width: 870px) {
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 15px;

    @media (min-width: 480px) {
      font-size: 16px;
    }

    @media (min-width: 640px) {
      font-size: 17px;
    }

    @media (min-width: 870px) {
      font-size: 18px;
    }
  }

  span {
    color: #1a3968;
    font-weight: 600;
    font-weight: 800;
  }
`;

export const Center = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1336px;
  position: relative;
  height: 100%;
  min-height: 320px;
  min-width: 320px;

  div{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
  }
`;

export const BtnClose = styled(Link)`
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all .15s ease;
`;

export const IcClose = styled(IoClose)`
  border: 1px solid #1a3968;
  color: #1a3968;
  cursor: pointer;
  font-size: 32px;
  transition: all .15s ease;

  @media (min-width: 480px) {
    font-size: 34px;
  }

  @media (min-width: 640px) {
    font-size: 36px;
  }

  @media (min-width: 870px) {
    font-size: 38px;
  }

  :active {
    color: white;
    background-color: #1a3968;
  }

  @media (min-width: 768px) {
    :hover {
      color: white;
      background-color: #1a3968;
    }
  }
`;
