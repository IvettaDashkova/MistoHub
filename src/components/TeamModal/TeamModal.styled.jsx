import { styled } from 'styled-components';
import sprite from '/src/assets/icons.svg';
import Modal from 'react-modal';

export const TeamModalStyled = styled(Modal)`
  background-image: url('${sprite}#icon-bg-modal');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 60% 50%;
  width: 100%;
  height: 100%;
  padding: 32px 16px 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .dev-modal-up {
    display: flex;
    color: rgba(11, 11, 11, 0.5);
    justify-content: space-between;
    align-items: center;
    margin-bottom: 65px;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
  .сloseBtn {
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .сloseText {
    display: none;
  }
  .icon-close {
    stroke: rgba(11, 11, 11, 0.5);
  }
  h2 {
    font-family: Oddval;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
    text-align: left;
    margin-bottom: 60px;
    max-width: 270px;
  }
  .orange-el {
    color: #f77d07;
  }

  @media (min-width: 768px) {
    padding: 32px 32px;
    .dev-modal-up {
      margin-bottom: 144px;
      font-size: 16px;
      letter-spacing: -0.02em;
    }
    .сloseText {
      display: block;
    }
    .icon-close {
      width: 14px;
      height: 14px;
    }
    h2 {
      font-size: 45px;
      margin-bottom: 80px;
      max-width: unset;
    }
  }
  @media (min-width: 1440px) {
    .dev-modal-up {
      margin-bottom: 80px;
    }
    h2 {
      font-size: 60px;
    }
  }
`;
