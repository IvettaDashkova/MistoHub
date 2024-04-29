import styled from 'styled-components';

import Container from '/src/shared/Container/Container';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;

  .main-logo {
    fill: #ffffff;
    transition: fill 0.7s;
  }

  .burger-menu-icon {
    stroke: #ffffff;
    transition: fill 0.7s;
  }

  .burger-menu-icon.short-header {
    stroke: #0b0b0b;
  }

  .main-logo.short-header {
    fill: #0b0b0b;
  }
`;

export const HeaderContainer = styled(Container)`
  max-width: 343px;
  padding: 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: max-width 0.7s ease-in-out;

  &.short-header {
    max-width: 291px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
    padding: 30px 0 0;

    &.short-header {
      max-width: 600px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 1200px;
    padding: 30px 0 0;

    &.short-header {
      max-width: 874px;
    }
  }

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

  svg.cloud-icon {
    fill: #f77d07;
    transform: rotate(-4deg);
  }

  .btn-clouds:hover .cloud-icon {
    fill: #e97200;
    transition: fill 0.25s ease-in-out;
  }

  .btn-clouds:active .cloud-icon {
    fill: #e3e3e3;
    transition: fill 0.25s ease-in-out;
  }
`;
