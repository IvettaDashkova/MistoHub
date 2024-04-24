import styled from 'styled-components';

import BurgerMenuIcon from '../../assets/icons/header/burger-icon.svg';
import Container from '../../shared/Container/Container';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const HeaderContainer = styled(Container)`
  padding: ${(props) => `30px ${props.$padding} 0 ${props.$padding}`};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .menu-wrapper {
    width: 100%;
    max-width: 376px;
    height: 85px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    svg {
      align-self: center;
    }
  }

  .btn-clouds {
    position: relative;
    width: 100%;
    max-width: 180px;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.29; //18px
      letter-spacing: -1px;
      color: #fff;
    }
  }

  svg.clouds {
    width: 180px;
    height: 85px;
    fill: #f77d07;
    transform: rotate(-4deg);
  }
`;

export const BurgerMenu = styled(BurgerMenuIcon)`
  width: 54px;
  height: 47px;
  stroke: ${(props) => props.color};
`;
