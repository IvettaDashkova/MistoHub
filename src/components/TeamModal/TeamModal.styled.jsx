import { styled } from 'styled-components';
import sprite from '/src/assets/icons.svg';
import Modal from 'react-modal';
export const TeamModalStyled = styled(Modal)`
  background-image: url('${sprite}#icon-bg-modal');
  background-repeat: no-repeat;
  font-family: FixelDisplay;
  background-size: 100% 100%;
  background-position: 60% 50%;
  min-width: 320px;
  max-width: 375px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 23px 16px 20px 16px;
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

  .icon-close {
    stroke: rgba(11, 11, 11, 0.5);
  }
`;
